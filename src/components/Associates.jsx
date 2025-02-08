import "../sass/associates.scss";
import Associate1 from "../assets/ministry_associate.png";
import Associate2 from "../assets/virusologiya_associate.png";
import Associate3 from "../assets/ahu_associate.png";
import Associate4 from "../assets/AGHA.png";
import { useTranslation } from "react-i18next";
export default function Associates() {
  const { t } = useTranslation();
  return (
    <div className="associates" id="sponsors">
      <a href="https://gov.uz/en/ssv" target="_blank">
        <img src={Associate1} className="associate_img" alt="asociate" />
        <p>{t("associates1")}</p>
      </a>
      <a href="https://riv.uz/en/institut/" target="_blank">
        <img src={Associate2} className="associate_img" alt="asociate" />
        <p>{t("associates2")}</p>
      </a>
      <a href="">
        <img src={Associate3} className="associate_img" alt="asociate" />
        <p>{t("associates3")}</p>
      </a>
      <a href="">
        <img src={Associate4} className="associate_img" alt="asociate" />
        <p>{t("associates4")}</p>
      </a>
    </div>
  );
}
