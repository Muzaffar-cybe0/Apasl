import { useState } from "react";
import dataJson from "../data/speakersData.json";
import "../admin_Scss/booksSection.scss";
export default function BooksSection() {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openPdf, setOpenPdf] = useState(false);
  const [edit, setEdit] = useState({});
  const [Hdelete, setHdelete] = useState({});
  const [pdfModal, setPdfModal] = useState();
  const handleEditSave = (item) => {
    setEdit(item);
    setOpen(true);
  };
  const handleDelete = (item) => {
    setHdelete(item);
    setOpenDelete(true);
  };
  const PdfSave = (item) => {
     setPdfModal(item);
    setOpenPdf(true);
  };
  return (
    <div className="BooksSection">
      <div className="BooksSection_child-1">
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

      <div className="BooksSection_child-2">
        <table>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Pdf</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {dataJson.book.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.img_link} alt="book_image" />
                </td>
                <td>
                  <button type="button" onClick={() => PdfSave(item.pdf)}>
                    See Pdf
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    style={{ backgroundColor: "yellow" }}
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
          className={`Books_Edit_modal ${open === true ? "show" : ""}`}
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
          className={`Books_Delete_modal ${openDelete === true ? "show2" : ""}`}
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

        <div className="pdf_modal">
          <object
            data={`${window.location.origin}/${PdfSave}`}
            type="application/pdf"
            width="1000"
            height="1000"
          ></object>
        </div>
      </div>
    </div>
  );
}
