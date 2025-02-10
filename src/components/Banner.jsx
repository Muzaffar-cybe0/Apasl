import { useEffect, useState } from "react";
import "../sass/banner.scss";
import { Trans, useTranslation } from "react-i18next";

// Set the countdown target to June 4, 2025, 00:00:00 (midnight)
const COUNTDOWN_TARGET = new Date("2025-06-04T00:00:00");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();

  if (totalTimeLeft <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((totalTimeLeft / (1000 * 60)) % 60),
    seconds: Math.floor((totalTimeLeft / 1000) % 60),
  };
};

export default function Banner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft()); // Always recalculate time left
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { t } = useTranslation();

  return (
    <div className="banner">
      <div className="banner_wrapper-1">
        <div className="countdown">
          <div className="content">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div className="box" key={label}>
                <div className="times">
                  <div className="value">
                    <span>{value}</span>
                  </div>
                  <span className="label">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="banner_wrapper-1_child-2">
          <h1>{t("bannerText1")}</h1>
          <p>{t("bannerText2")}</p>
          <p>
            <Trans i18nKey="bannerText3" components={{ 1: <span /> }}>
              Uzbekistan and Azerbaijan Association of Gastroenterology and
              Hepatology
              <span>June 4-5, 2025</span>
            </Trans>
          </p>
          <button type="button">{t("bannerText4")}</button>
        </div>
      </div>
    </div>
  );
}
