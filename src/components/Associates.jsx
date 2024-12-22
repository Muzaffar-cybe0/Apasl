import "../sass/associates.scss";
import Associate1 from "../assets/ministry_associate.png";
import Associate2 from "../assets/virusologiya_associate.png";
import Associate3 from "../assets/ahu_associate.png";
import Associate4 from "../assets/AGHA.png";

export default function Associates() {
  return (
    <div className="associates" id="sponsors">
      <a href="https://gov.uz/en/ssv" target="_blank">
        <img src={Associate1} className="associate_img" alt="asociate" />
        <p>Ministry of Health of the Republican Uzbekistan</p>
      </a>
      <a href="https://riv.uz/en/institut/" target="_blank">
        <img src={Associate2} className="associate_img" alt="asociate" />
        <p>
          Research Insitute of Virology of the Republican specialized scientific
          and practical medical center of the epidemiology, microbiology,
          infectious and parasitic diseases.
        </p>
      </a>
      <a href="">
        <img src={Associate3} className="associate_img" alt="asociate" />
        <p>Association of hepatologists of uzbekistan</p>
      </a>
      <a href="">
        <img src={Associate4} className="associate_img" alt="asociate" />
        <p>Azerbaijan gastroentrology and hepatology association</p>
      </a>
    </div>
  );
}
