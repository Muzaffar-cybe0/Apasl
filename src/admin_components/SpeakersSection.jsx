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

  const [formData, setFormData] = useState({
    image: "",
    name: { en: "", ru: "", uz: "" },
    role: { en: "", ru: "", uz: "" },
    aboutSelf: { en: "", ru: "", uz: "" },
  });

  const [modalData, setModalData] = useState({
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
    setFormData({
      image: item.image || "",
      name: { ...item.name },
      role: { ...item.role },
      aboutSelf: { ...item.aboutSelf },
    });
    setOpenEdit(true); // Ensure this triggers modal visibility
  };

  const handleCloseEditModal = () => {
    setOpenEdit(false); // Close the modal when clicking Cancel or outside
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setOpenDelete(true);
  };

  const handleChange = (e, lang, field) => {
    setModalData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: e.target.value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Speaker Data:", modalData);
    setOpenEdit(false);
  };

  const confirmDelete = () => {
    console.log("Deleted speaker with ID:", deleteId);
    setOpenDelete(false);
  };

  return (
    <div className="SpeakersSection">
      <div className="SpeakersSection_child-1">
        <form onSubmit={handleSubmit}>
          {/* Main form is not populated with the modal data */}
          {["en", "ru", "uz"].map((lang) => (
            <div key={lang}>
              <label>Name ({lang.toUpperCase()}):</label>
              <input
                type="text"
                value={""} // Keep the main form empty
                onChange={() => {}}
              />
            </div>
          ))}

          {["en", "ru", "uz"].map((lang) => (
            <div key={lang}>
              <label>Role ({lang.toUpperCase()}):</label>
              <input
                type="text"
                value={""} // Keep the main form empty
                onChange={() => {}}
              />
            </div>
          ))}

          {["en", "ru", "uz"].map((lang) => (
            <div key={lang}>
              <label>About Self ({lang.toUpperCase()}):</label>
              <textarea value={""} onChange={() => {}} />
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
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
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
          </span>{" "}
          {/* Close modal on click */}
          <form onSubmit={handleSubmit}>
            {["en", "ru", "uz"].map((lang) => (
              <div key={lang}>
                <label>Name ({lang.toUpperCase()}):</label>
                <input
                  type="text"
                  value={formData.name[lang]}
                  onChange={(e) => handleChange(e, lang, "name")}
                />
              </div>
            ))}
            {["en", "ru", "uz"].map((lang) => (
              <div key={lang}>
                <label>Role ({lang.toUpperCase()}):</label>
                <input
                  type="text"
                  value={formData.role[lang]}
                  onChange={(e) => handleChange(e, lang, "role")}
                />
              </div>
            ))}
            {["en", "ru", "uz"].map((lang) => (
              <div key={lang}>
                <label>About Self ({lang.toUpperCase()}):</label>
                <textarea
                  value={formData.aboutSelf[lang]}
                  onChange={(e) => handleChange(e, lang, "aboutSelf")}
                />
              </div>
            ))}
            <button type="submit">Save Changes</button>
            <button type="button" onClick={handleCloseEditModal}>
              Cancel
            </button>{" "}
            {/* Cancel button */}
          </form>
        </div>
      )}

      {openDelete && (
        <div className="Ss_Delete_modal show">
          <p>Are you sure you want to delete this speaker?</p>
          <button onClick={confirmDelete}>Yes, Delete</button>
          <button onClick={() => setOpenDelete(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
