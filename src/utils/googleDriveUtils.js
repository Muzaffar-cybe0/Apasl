// Google Drive utility funksiyalari

// Google Drive fayl ma'lumotlarini olish
export const getGoogleDriveFileInfo = async (fileId, apiKey) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?key=${apiKey}&fields=id,name,size,mimeType,createdTime,modifiedTime,webViewLink,webContentLink`
    );

    if (!response.ok) {
      throw new Error("Google Drive API dan ma'lumot olishda xatolik");
    }

    return await response.json();
  } catch (error) {
    console.error("Google Drive file info olishda xatolik:", error);
    return null;
  }
};

// Google Drive faylni ko'rish URL ini yaratish
export const createGoogleDriveViewUrl = (fileId, viewType = "preview") => {
  switch (viewType) {
    case "preview":
      return `https://drive.google.com/file/d/${fileId}/preview`;
    case "view":
      return `https://drive.google.com/file/d/${fileId}/view`;
    case "download":
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    case "embed":
      return `https://drive.google.com/file/d/${fileId}/preview?usp=embed_googleplus`;
    default:
      return `https://drive.google.com/file/d/${fileId}/view`;
  }
};

// Google Drive thumbnail yaratish
export const createGoogleDriveThumbnail = (fileId, size = "w400-h300") => {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`;
};

// Fayl hajmini formatlab ko'rsatish
export const formatFileSize = (bytes) => {
  if (!bytes) return "N/A";

  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
};

// MIME type bo'yicha fayl turi aniqlash
export const getFileTypeFromMimeType = (mimeType) => {
  const typeMap = {
    "application/vnd.ms-powerpoint": "ppt",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      "pptx",
    "application/pdf": "pdf",
    "application/msword": "doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      "docx",
    "application/vnd.ms-excel": "xls",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
  };

  return typeMap[mimeType] || "unknown";
};

// Google Drive da yangi fayl yuklash
export const uploadToGoogleDrive = async (
  file,
  accessToken,
  folderId = null
) => {
  try {
    const metadata = {
      name: file.name,
      parents: folderId ? [folderId] : undefined,
    };

    const form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", file);

    const response = await fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: form,
      }
    );

    if (!response.ok) {
      throw new Error("Faylni Google Drive ga yuklashda xatolik");
    }

    return await response.json();
  } catch (error) {
    console.error("Google Drive ga yuklashda xatolik:", error);
    throw error;
  }
};

// Google Drive faylni ochiq qilish (public access)
export const makeFilePublic = async (fileId, accessToken) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: "reader",
          type: "anyone",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Faylni public qilishda xatolik");
    }

    return await response.json();
  } catch (error) {
    console.error("Faylni public qilishda xatolik:", error);
    throw error;
  }
};

// Google Drive folder yaratish
export const createGoogleDriveFolder = async (
  folderName,
  accessToken,
  parentFolderId = null
) => {
  try {
    const metadata = {
      name: folderName,
      mimeType: "application/vnd.google-apps.folder",
      parents: parentFolderId ? [parentFolderId] : undefined,
    };

    const response = await fetch("https://www.googleapis.com/drive/v3/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metadata),
    });

    if (!response.ok) {
      throw new Error("Google Drive da folder yaratishda xatolik");
    }

    return await response.json();
  } catch (error) {
    console.error("Folder yaratishda xatolik:", error);
    throw error;
  }
};
