import PropTypes from "prop-types";
import { renderAsync } from "docx-preview";
import { useEffect, useRef, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "../sass/documentViewer.scss";

export default function DocumentViewer({
  isOpen,
  onClose,
  fileUrl,
  fileType,
  title,
}) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const loadDocument = async () => {
      if (fileType === "docx") {
        try {
          setLoading(true);
          const response = await fetch(fileUrl);
          const blob = await response.blob();

          if (containerRef.current) {
            await renderAsync(
              blob,
              containerRef.current,
              containerRef.current,
              {
                className: "docx-viewer",
              }
            );
          }
        } catch (error) {
          console.error("Faylni yuklashda xatolik:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (isOpen && fileType === "docx") {
      loadDocument();
    }
  }, [isOpen, fileUrl, fileType]);

  if (!isOpen) return null;

  return (
    <div className="document-modal">
      <div className="document-modal-content">
        <div className="document-modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">
            ✕
          </button>
        </div>
        <div className="document-viewer-container">
          {loading && <div className="loading">Yuklanmoqda...</div>}

          {fileType === "pdf" ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer
                fileUrl={fileUrl}
                plugins={[defaultLayoutPluginInstance]}
                onError={(error) => {
                  console.error("PDF yuklashda xatolik:", error);
                }}
              />
            </Worker>
          ) : (
            <div ref={containerRef} className="docx-container" />
          )}
        </div>
      </div>
    </div>
  );
}

DocumentViewer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  fileType: PropTypes.oneOf(["pdf", "docx"]).isRequired,
  title: PropTypes.string.isRequired,
};
