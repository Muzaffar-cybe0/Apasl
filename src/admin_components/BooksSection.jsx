import { useState } from "react";
import dataJson from "../data/speakersData.json";
import "../admin_Scss/booksSection.scss";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function BooksSection() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
            <label htmlFor="image">Pdf image:</label>
            <input type="file" id="image" title="Choose image" />
          </div>
          <div>
            <label htmlFor="image">Pdf file</label>
            <input type="file" id="image" title="Choose File" />
          </div>

          <button type="submit">Add New File</button>
        </form>
      </div>

      <div className="BooksSection_child-2">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Pdf</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataJson.book.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.img_link} alt="book_image" />
                  </td>
                  <td>
                    <button type="button" onClick={() => PdfSave(item.pdf)}>
                      See
                    </button>
                  </td>
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
          </tbody>
        </table>

        <div
          className={`Books_Edit_modal ${open === true ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <form>
            <img src={edit.img_link} alt="selected_image" />
            <div>
              <label htmlFor="image">Organizer image:</label>
              <input type="file" id="image" title="Choose image" />
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
            <img src={Hdelete.img_link} alt="selected_image" />
            <div>
              <label htmlFor="image">Organizer image:</label>
              <input type="file" id="image" title="Choose image" />
            </div>

            <button type="submit">Delete</button>
            <button type="button" onClick={() => setOpenDelete(false)}>
              Close
            </button>
          </form>
        </div>

        {pdfModal && ( // 🟢 Only render if pdfModal is not null
          <div className="pdf_modal">
            <button
              className="pdf_modal_closeBtn"
              onClick={() => setPdfModal(null)}
            >
              Close PDF
            </button>{" "}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <div className="pdf_div">
                <Viewer
                  fileUrl={pdfModal}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </div>
            </Worker>
          </div>
        )}
      </div>
    </div>
  );
}
