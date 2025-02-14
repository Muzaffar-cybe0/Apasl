import { useState } from "react";
import dataJson from "../data/speakersData.json"; // Use correct data for organizers
import "../admin_Scss/organizerSection.scss";

export default function OrganizersSection() {
  const [language, setLanguage] = useState("en"); // Add language state if needed, or use i18n
  const [edit, setEdit] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // State for Add New Organizer form
  const [addFormData, setAddFormData] = useState({
    image: "",
    name: { en: "", ru: "", uz: "" },
    role: { en: "", ru: "", uz: "" },
    aboutSelf: { en: "", ru: "", uz: "" },
  });

  // State for Edit Organizer form
  const [editFormData, setEditFormData] = useState({
    image: "",
    name: { en: "", ru: "", uz: "" },
    role: { en: "", ru: "", uz: "" },
    aboutSelf: { en: "", ru: "", uz: "" },
  });

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
    setEditFormData({
      image: "",
      name: { en: "", ru: "", uz: "" },
      role: { en: "", ru: "", uz: "" },
      aboutSelf: { en: "", ru: "", uz: "" },
    });
  };

  const handleChange = (e, lang, field, formType) => {
    if (formType === "edit") {
      setEditFormData((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          [lang]: e.target.value,
        },
      }));
    } else if (formType === "add") {
      setAddFormData((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          [lang]: e.target.value,
        },
      }));
    }
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    if (formType === "add") {
      console.log("Adding New Organizer Data:", addFormData);
    } else if (formType === "edit") {
      console.log("Updated Organizer Data:", editFormData);
    }
    setOpenEdit(false);
  };

  const handleDelete = () => {
    console.log("Deleting organizer with ID:", deleteId);
    setOpenDelete(false);
    // Add your delete logic here
  };

  return (
    <div className="OrganizersSection">
      <div className="OrganizersSection_child-1">
        <h2>Add New Organizer</h2>
        <br />
        <form onSubmit={(e) => handleSubmit(e, "add")}>
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
          <button type="submit">Add Organizer</button>
        </form>
      </div>

      <div className="OrganizersSection_child-2">
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
            {dataJson.organizers.map((item) => (
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
        <div className="Orgs_Edit_modal show">
          <span className="modal-close" onClick={handleCloseEditModal}>
            &times;
          </span>

          <div className="modal-content">
            {["en", "ru", "uz"].map((lang) => (
              <div key={lang} className={`modal-${lang} modal_form`}>
                <h3>Edit Organizer ({lang.toUpperCase()})</h3>
                <form onSubmit={(e) => handleSubmit(e, "edit")}>
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
            <button type="submit" onClick={(e) => handleSubmit(e, "edit")}>
              Save Changes
            </button>
            <button type="button" onClick={handleCloseEditModal}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {openDelete && (
        <div className="Orgs_Delete_modal show">
          <span className="modal-close" onClick={() => setOpenDelete(false)}>
            &times;
          </span>
          <h3>Are you sure you want to delete this organizer?</h3>
          <div className="modal-buttons">
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={() => setOpenDelete(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
