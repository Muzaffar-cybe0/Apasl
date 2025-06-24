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
          ) : fileType === "pptx" ? (
            <div className="pptx-fallback-simple">
              <div className="pptx-content">
                <div className="pptx-icon">
                  <i className="fas fa-file-powerpoint"></i>
                </div>
                <h3>{title}</h3>
                <p>
                  PPTX faylni ko&apos;rish uchun quyidagi variantlardan
                  foydalaning:
                </p>

                <div className="pptx-options">
                  <a href={fileUrl} download className="option-btn download">
                    <i className="fas fa-download"></i>
                    <span>Yuklab olish</span>
                  </a>

                  <a
                    href={`https://docs.google.com/viewer?url=${encodeURIComponent(
                      window.location.origin + fileUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="option-btn view-online"
                  >
                    <i className="fas fa-eye"></i>
                    <span>Online ko&apos;rish</span>
                  </a>
                </div>

                <div className="pptx-tips">
                  <h4>Ko&apos;rish usullari:</h4>
                  <ul>
                    <li>Faylni yuklab olib PowerPoint da oching</li>
                    <li>&quot;Online ko&apos;rish&quot; tugmasini bosing</li>
                    <li>Google Drive ga yuklab ko&apos;ring</li>
                  </ul>
                </div>
              </div>
            </div>
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
  fileType: PropTypes.oneOf(["pdf", "docx", "pptx"]).isRequired,
  title: PropTypes.string.isRequired,
};
