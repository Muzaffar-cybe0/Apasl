import "../sass/welcomeSpeech.scss";
import "animate.css";
import { useState } from "react";
import dataJson from "../data/data";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Trans, useTranslation } from "react-i18next";
export default function WelcomeSpeech() {
  const { t } = useTranslation();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (id) => {
    setActiveModal(id);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };
  return (
    <div className="WelcomeSpeech">
      
      <div className="WelcomeSpeech_child-1">
        <h1>{t("welcomeMessage1")}</h1>
        <p>
          <Trans
            i18nKey="welcomeMessage2"
            components={{ 1: <span />, 2: <span />, 3: <span /> }}
          >
            It is with immense pleasure that I invite you to{" "}
            <span>the APASL 2025 Conference</span>, which will be held in the
            vibrant and historic city of <span>Tashkent, Uzbekistan</span>,{" "}
            <span>on June 4-5, 2025</span>.
          </Trans>
        </p>
        <p>{t("welcomeMessage3")}</p>
        <p>{t("welcomeMessage4")}</p>
        <p>{t("welcomeMessage5")}</p>
        <p>{t("welcomeMessage6")}</p>
        <p>{t("welcomeMessage7")}</p>
        <p>{t("welcomeMessage8")}</p>
        <p>{t("welcomeMessage9")}</p>
        <cite>
          <Trans
            i18nKey="welcomeMessage10"
            components={{ 1: <br />}}
          >
            Acad. Erkin Musabayev <br />
            Chair, Association of Hepatologists of Uzbekistan
          </Trans>
        </cite>
        <cite>
          <Trans
            i18nKey="welcomeMessage11"
            components={{ 1: <br />}}
          >
            Dr. Gulnara Agayeva <br />
            Chair, Association of Hepatologists and Gastroenterologists of
            Azerbaijan
          </Trans>
        </cite>
      </div>

      <div className="WelcomeSpeech_child-2">
        {dataJson.book.map((item) => {
          return (
            <div
              className={`welcomeSpeech_child-2_book-${item.id}`}
              key={item.id}
            >
              <img
                src={item.img_link}
                alt="book"
                onClick={() => handleOpenModal(item.id)}
              />
            </div>
          );
        })}
      </div>

      {activeModal && (
        <div className="WelcomeSpeech_child-3">
          <div className="WelcomeSpeech_child-3_modalContent animate__animated animate__slideInDown">
            <button
              className="WelcomeSpeech_child-3_closeButton"
              onClick={handleCloseModal}
            >
              ✕
            </button>

            {dataJson.book
              .filter((item) => item.id === activeModal)
              .map((item) => (
                <div
                  key={item.id}
                  className="WelcomeSpeech_child-3_modalContent-child"
                >
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div className="pdf_div">
                      <Viewer
                        fileUrl={`${window.location.origin}/${item.pdf}`}
                        plugins={[defaultLayoutPluginInstance]}
                      />
                    </div>
                  </Worker>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
