import "../sass/eventOutcomes.scss";
import { useEffect, useState } from "react";
import "animate.css";

import Icon1 from "../assets/1_icon.png";
import Icon2 from "../assets/2_icon.png";
import Icon3 from "../assets/3_icon.png";
import { useTranslation } from "react-i18next";
export default function EventOutComes() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);
  const [data, setData] = useState([
    {
      id: 1,
      title: {
        en: "Advancement in Hepatitis Research and Treatment",
        ru: "Прогресс в исследованиях и лечении гепатита",
        uz: "Gepatit bo‘yicha tadqiqotlar va davolashda yutuqlar",
      },
      about: {
        en: "APASL 2025 will foster collaboration among global experts to present groundbreaking research and innovative therapies, particularly focusing on the elimination of viral hepatitis and advancements in liver transplantation.",
        ru: "APASL 2025 будет способствовать сотрудничеству мировых экспертов для представления новаторских исследований и инновационных методов терапии, с особым вниманием к ликвидации вирусного гепатита и развитию трансплантации печени.",
        uz: "APASL 2025 global ekspertlar hamkorligini mustahkamlab, ilg‘or tadqiqotlar va innovatsion terapiyalarni taqdim etadi, ayniqsa virusli gepatitni yo‘q qilish va jigar transplantatsiyasini rivojlantirishga alohida e’tibor qaratadi.",
      },
      image: Icon1,
    },
    {
      id: 2,
      title: {
        en: "Knowledge Exchange and Capacity Building",
        ru: "Обмен знаниями и развитие потенциала",
        uz: "Bilim almashinuvi va salohiyatni oshirish",
      },
      about: {
        en: "The conference will provide a platform for sharing best practices, clinical guidelines, and case studies, enhancing the expertise of healthcare professionals, with a focus on emerging challenges in hepatology across Central Asia.",
        ru: "Конференция предоставит платформу для обмена передовым опытом, клиническими рекомендациями и тематическими исследованиями, повышая уровень профессионализма медицинских специалистов с акцентом на новые вызовы в гепатологии в Центральной Азии.",
        uz: "Konferensiya ilg‘or tajriba, klinik ko‘rsatmalar va amaliy tadqiqotlar almashinuvi uchun platforma bo‘lib, Markaziy Osiyoda gepatologiya sohasidagi yangi muammolarga e’tibor qaratgan holda tibbiyot mutaxassislarining malakasini oshirishga xizmat qiladi.",
      },
      image: Icon2,
      delay: "1",
    },
    {
      id: 3,
      title: {
        en: "Strengthening Regional and Global Partnerships",
        ru: "Укрепление региональных и глобальных партнерств",
        uz: "Mintaqaviy va global hamkorlikni mustahkamlash",
      },
      about: {
        en: "APASL 2025 will facilitate international cooperation, encouraging strategic partnerships between researchers, clinicians, and policymakers to develop actionable frameworks for combating liver diseases worldwide.",
        ru: "APASL 2025 будет способствовать международному сотрудничеству, поощряя стратегические партнерства между исследователями, клиницистами и политиками для разработки эффективных механизмов борьбы с заболеваниями печени во всем мире.",
        uz: "APASL 2025 xalqaro hamkorlikni rivojlantirib, jigar kasalliklariga qarshi kurash bo‘yicha amaliy strategik asoslarni ishlab chiqish uchun tadqiqotchilar, klinisyenlar va siyosatchilar o‘rtasida hamkorlikni rag‘batlantiradi.",
      },
      image: Icon3,
      delay: "2",
    },
  ]);

  return (
    <div className="eventOutComes" id="about">
      <div className={`eventOutComes_OlderCh-1 `}>
        <p>{t("eventOutcomes1")}</p>
        <h1>{t("eventOutcomes2")}</h1>
      </div>

      <div className="eventOutComes_OlderCh-2">
        {data.map((item) => {
          return (
            <div
              className={`eventOutComes_OlderCh-2_child-${item.id}
            `}
              key={item.id}
            >
              <img src={item.image} alt="icon" />

              <h1>
                {typeof item.title === "string"
                  ? item.title
                  : item.title[language]}
              </h1>
              <p>
                {typeof item.about === "string"
                  ? item.about
                  : item.about[language]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
