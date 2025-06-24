import { useState, useEffect } from "react";
import DocumentViewer from "../components/DocumentViewer";
import {
  googleDrivePresentations,
  getGoogleDriveThumbnail,
} from "../data/googleDriveData";
import { createGoogleDriveViewUrl } from "../utils/googleDriveUtils";
import "../sass/presentationPage.scss";

export default function PresentationPage() {
  const [documents, setDocuments] = useState([]);
  const [showDocumentViewer, setShowDocumentViewer] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Drive dan presentation hujjatlarini yuklash
  useEffect(() => {
    const loadGoogleDrivePresentations = async () => {
      try {
        setLoading(true);

        // Google Drive dan ma'lumotlarni olish
        // Hozircha static ma'lumotlardan foydalanamiz
        // Keyinchalik real Google Drive API integratsiyasi qo'shiladi

        const presentationDocs = googleDrivePresentations.map((item) => ({
          ...item,
          // Google Drive URL larni yaratish
          fileUrl:
            item.googleDriveId !== "YOUR_GOOGLE_DRIVE_FILE_ID_1"
              ? createGoogleDriveViewUrl(item.googleDriveId, "embed")
              : `/src/data/presentation/${item.fileName}`, // Fallback to local file
          thumbnailUrl:
            item.googleDriveId !== "YOUR_GOOGLE_DRIVE_FILE_ID_1"
              ? getGoogleDriveThumbnail(item.googleDriveId)
              : null,
          directLink:
            item.googleDriveId !== "YOUR_GOOGLE_DRIVE_FILE_ID_1"
              ? createGoogleDriveViewUrl(item.googleDriveId, "view")
              : null,
          downloadLink:
            item.googleDriveId !== "YOUR_GOOGLE_DRIVE_FILE_ID_1"
              ? createGoogleDriveViewUrl(item.googleDriveId, "download")
              : null,
        }));

        // Vaqt bo'yicha tartiblab chiqish
        presentationDocs.sort((a, b) => {
          if (a.time && b.time) {
            return a.time.localeCompare(b.time);
          }
          return a.title.localeCompare(b.title);
        });

        setDocuments(presentationDocs);
      } catch (error) {
        console.error(
          "Google Drive presentation fayllarni yuklashda xatolik:",
          error
        );

        // Xatolik bo'lsa, local fayllardan fallback
        console.log("Local fayllarga o'tkazilmoqda...");
        // Bu yerda eski kod ishlatilishi mumkin
      } finally {
        setLoading(false);
      }
    };

    loadGoogleDrivePresentations();
  }, []);

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
    setShowDocumentViewer(true);
  };

  const handleCloseViewer = () => {
    setShowDocumentViewer(false);
    setSelectedDocument(null);
  };

  if (loading) {
    return (
      <div className="presentation-page">
        <div className="presentation-header">
          <p>APASL 2025 Conference Materials</p>
          <h1>Presentation Documents</h1>
        </div>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Presentation fayllar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="presentation-page">
      <div className="presentation-header">
        <p>APASL 2025 Conference Materials</p>
        <h1>Presentation Documents</h1>
        <div className="presentation-stats">
          <span>{documents.length} ta fayl mavjud</span>
        </div>
      </div>

      <div className="presentations-grid">
        {documents.map((doc) => (
          <div key={doc.id} className="presentation-card">
            {/* Google Drive thumbnail yoki icon */}
            <div className="presentation-thumbnail">
              {doc.thumbnailUrl ? (
                <img
                  src={doc.thumbnailUrl}
                  alt={doc.title}
                  className="thumbnail-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <div
                className="presentation-icon"
                style={{ display: doc.thumbnailUrl ? "none" : "flex" }}
              >
                <i
                  className={
                    doc.fileType === "pdf"
                      ? "fas fa-file-pdf"
                      : "fas fa-file-powerpoint"
                  }
                ></i>
              </div>
            </div>

            <div className="presentation-info">
              <h3>{doc.title}</h3>
              <p className="presentation-description">{doc.description}</p>
              <div className="presentation-meta">
                {doc.time && (
                  <div className="presentation-time">
                    <i className="fas fa-clock"></i>
                    <span>{doc.time}</span>
                  </div>
                )}
                <div className="presentation-date">
                  <i className="fas fa-calendar"></i>
                  <span>{doc.date}</span>
                </div>
                {doc.size && (
                  <div className="presentation-size">
                    <i className="fas fa-hdd"></i>
                    <span>{doc.size}</span>
                  </div>
                )}
              </div>
              <div className="presentation-type">
                <span className="file-type">{doc.fileType.toUpperCase()}</span>
                {doc.googleDriveId !== "YOUR_GOOGLE_DRIVE_FILE_ID_1" && (
                  <span className="google-drive-badge">
                    <i className="fab fa-google-drive"></i>
                    Google Drive
                  </span>
                )}
              </div>
            </div>

            <div className="presentation-actions">
              <button
                className="view-btn primary"
                onClick={() => handleDocumentClick(doc)}
              >
                <i className="fas fa-eye"></i>
                Ko&apos;rish
              </button>

              {doc.directLink && (
                <a
                  href={doc.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn"
                  title="Google Drive da ochish"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}

              {doc.downloadLink && (
                <a
                  href={doc.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn download"
                  title="Yuklab olish"
                >
                  <i className="fas fa-download"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedDocument && (
        <DocumentViewer
          isOpen={showDocumentViewer}
          onClose={handleCloseViewer}
          fileUrl={selectedDocument.fileUrl}
          fileType={selectedDocument.fileType}
          title={selectedDocument.title}
        />
      )}
    </div>
  );
}
