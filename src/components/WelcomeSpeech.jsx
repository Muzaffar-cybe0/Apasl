import "../sass/welcomeSpeech.scss";
import "animate.css";
import { useEffect, useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Trans, useTranslation } from "react-i18next";
import axios from "axios";
import DocumentViewer from "./DocumentViewer";

export default function WelcomeSpeech() {
  const { t, i18n } = useTranslation();
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [activeModal, setActiveModal] = useState(null);
  const handleOpenModal = (id) => {
    setActiveModal(id);
  };
  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://apasl1.pythonanywhere.com/api/book/books_list_${i18n.language}/`,
          { headers: { "Accept-Language": i18n.language } }
        );
        if (response?.data) {
          setData(response.data.results);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language]);

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
          <Trans i18nKey="welcomeMessage10" components={{ 1: <br /> }}>
            Acad. Erkin Musabayev <br />
            Chair, Association of Hepatologists of Uzbekistan
          </Trans>
        </cite>
        <cite>
          <Trans i18nKey="welcomeMessage11" components={{ 1: <br /> }}>
            Dr. Gulnara Agayeva <br />
            Chair, Association of Hepatologists and Gastroenterologists of
            Azerbaijan
          </Trans>
        </cite>
      </div>

      <div className="WelcomeSpeech_child-2">
        {loading ? (
          <div className="container_skeleton">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
        ) : Array.isArray(data) ? (
          data.map((item) => (
            <div
              className={`welcomeSpeech_child-2_book-${item?.uid}`}
              key={item?.uid}
            >
              <img
                src={item?.cover_image}
                alt="book"
                onClick={() => handleOpenModal(item?.uid)}
              />
              <p>{item?.title}</p>
            </div>
          ))
        ) : (
          <div className="container_skeleton">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
        )}
        <br />
      </div>
      {activeModal && (
        <DocumentViewer
          isOpen={true}
          onClose={handleCloseModal}
          fileUrl={data.find((item) => item.uid === activeModal)?.pdf}
          fileType="pdf"
          title="Document"
        />
      )}
    </div>
  );
}
