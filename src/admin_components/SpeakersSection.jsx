import dataJson from "../data/speakersData.json";
import "../admin_Scss/speakerSection.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SpeakersSection() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [edit, setEdit] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [addFormData, setAddFormData] = useState({
    image: "",
    name: { en: "", ru: "", uz: "" },
    role: { en: "", ru: "", uz: "" },
    aboutSelf: { en: "", ru: "", uz: "" },
  });

  const [editFormData, setEditFormData] = useState({
    image: "",
    name: { en: "", ru: "", uz: "" },
    role: { en: "", ru: "", uz: "" },
    aboutSelf: { en: "", ru: "", uz: "" },
  });

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(i18n.language);
    i18n.on("languageChanged", handleLanguageChange);
    return () => i18n.off("languageChanged", handleLanguageChange);
  }, [i18n]);

  const handleEdit = (item) => {
    setEdit(item);
    setEditFormData({
      image: item.image || "",
      name: { ...item.name },
      role: { ...item.role },
      aboutSelf: { ...item.aboutSelf },
    });
    setOpenEdit(true);
  };

  const handleCloseEditModal = () => {
    setOpenEdit(false);
  };

  const handleChange = (e, lang, field, formType) => {
    const setter = formType === "edit" ? setEditFormData : setAddFormData;
    setter((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: e.target.value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (openEdit) {
      console.log("Updated Speaker Data:", editFormData);
    } else {
      console.log("New Speaker Data:", addFormData);
    }
    setOpenEdit(false);
  };

  const handleDelete = () => {
    console.log("Deleting speaker with ID:", deleteId);
    setOpenDelete(false);
    // Add your delete logic here
  };

  return (
    <div className="SpeakersSection">
      <div className="SpeakersSection_child-1">
        <h2>Add New Speaker</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label>Image URL:</label>
          <input
            type="file"
            onChange={(e) =>
              setAddFormData({ ...addFormData, image: e.target.value })
            }
          />
          {["en", "ru", "uz"].map((lang) => (
            <div key={lang}>
              <label>Name ({lang.toUpperCase()}):</label>
              <input
                type="text"
                value={addFormData.name[lang]}
                onChange={(e) => handleChange(e, lang, "name", "add")}
              />
              <label>Role ({lang.toUpperCase()}):</label>
              <input
                type="text"
                value={addFormData.role[lang]}
                onChange={(e) => handleChange(e, lang, "role", "add")}
              />
              <label>About Self ({lang.toUpperCase()}):</label>
              <textarea
                value={addFormData.aboutSelf[lang]}
                onChange={(e) => handleChange(e, lang, "aboutSelf", "add")}
              />
            </div>
          ))}
          <button type="submit">Add Speaker</button>
        </form>
      </div>

      <div className="SpeakersSection_child-2">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Role</th>
              <th>About Self</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataJson.speakers.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} alt={item.name[language]} width="50" />
                </td>
                <td>{item.name[language]}</td>
                <td>{item.role?.[language] || "N/A"}</td>
                <td>{item.aboutSelf[language]?.slice(0, 50) + "..."}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setDeleteId(item.id);
                      setOpenDelete(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openEdit && (
        <div className="Ss_Edit_modal show">
          <span className="modal-close" onClick={handleCloseEditModal}>
            &times;
          </span>

          <div className="modal-content">
            {["en", "ru", "uz"].map((lang) => (
              <div key={lang} className={`modal-${lang} modal_form`}>
                <h3>Edit Speaker ({lang.toUpperCase()})</h3>
                <form onSubmit={handleSubmit}>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={editFormData.name[lang]}
                    onChange={(e) => handleChange(e, lang, "name", "edit")}
                  />
                  <label>Role:</label>
                  <input
                    type="text"
                    value={editFormData.role[lang]}
                    onChange={(e) => handleChange(e, lang, "role", "edit")}
                  />
                  <label>About Self:</label>
                  <textarea
                    value={editFormData.aboutSelf[lang]}
                    onChange={(e) => handleChange(e, lang, "aboutSelf", "edit")}
                  />
                </form>
              </div>
            ))}
          </div>

          <div className="modal_buttons">
            <button type="submit" onClick={handleSubmit}>
              Save Changes
            </button>
            <button type="button" onClick={handleCloseEditModal}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {openDelete && (
        <div className="Ss_Delete_modal show">
          <span className="modal-close" onClick={() => setOpenDelete(false)}>
            &times;
          </span>
          <h3>Are you sure you want to delete this speaker?</h3>
          <div className="modal-buttons">
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={() => setOpenDelete(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
