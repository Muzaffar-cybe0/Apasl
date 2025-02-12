import { useState } from "react";
import dataJson from "../data/speakersData.json";
import "../admin_Scss/organizerSection.scss"
export default function OrganizersSection() {
  const truncateText = (text) => {
    const words = text.split(" ");
    return words.length > 5 ? words.slice(0, 5).join(" ") + "..." : text;
  };
  const [edit, setEdit] = useState({});
  const [Hdelete, setHdelete] = useState({});

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleEditSave = (item) => {
    setEdit(item);
    setOpen(true);
  };
  const handleDelete = (item) => {
    setHdelete(item);
    setOpenDelete(true);
  };

  return (
    <div className="OrganizersSection">
      <div className="OrganizersSection_child-1">
        <form>
          <div>
            <label htmlFor="image">Organizer image:</label>
            <input type="file" id="image" title="Choose image" />
          </div>
          <div>
            <label htmlFor="name">Organizer name:</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="role">Organizer role:</label>
            <input type="text" id="role" placeholder="Role" />
          </div>
          <div>
            <label htmlFor="abtS">AboutSelf:</label>
            <textarea placeholder="AboutSelf" id="abtS"></textarea>
          </div>
          <button type="submit">Add New Organizer</button>
        </form>
      </div>

      <div className="OrganizersSection_child-2">
        <table>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Role</th>
            <th>AboutSelf</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {dataJson.organizers.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{truncateText(item.aboutSelf)}</td>
                <td>
                  <button
                    type="button"
                    style={{ backgroundColor: "rgb(182, 182, 0)" }}
                    onClick={() => handleEditSave(item)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    style={{ backgroundColor: "red" }}
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>

        <div
          className={`Orgs_Edit_modal ${open === true ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <form>
            <div>
              <label htmlFor="image">Organizer image:</label>
              <input type="file" id="image" title="Choose image" />
            </div>
            <div>
              <label htmlFor="name">Organizer name:</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="role">Organizer role:</label>
              <input type="text" id="role" placeholder="Role" />
            </div>
            <div>
              <label htmlFor="abtS">AboutSelf:</label>
              <textarea placeholder="AboutSelf" id="abtS"></textarea>
            </div>
            <button type="submit">Edit</button>
            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </form>
        </div>

        <div
          className={`Orgs_Delete_modal ${openDelete === true ? "show2" : ""}`}
        >
          <form>
            <div>
              <label htmlFor="image">Organizer image:</label>
              <input type="file" id="image" title="Choose image" />
            </div>
            <div>
              <label htmlFor="name">Organizer name:</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="role">Organizer role:</label>
              <input type="text" id="role" placeholder="Role" />
            </div>
            <div>
              <label htmlFor="abtS">AboutSelf:</label>
              <textarea placeholder="AboutSelf" id="abtS"></textarea>
            </div>
            <button type="submit">Delete</button>
            <button type="button" onClick={() => setOpenDelete(false)}>
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
