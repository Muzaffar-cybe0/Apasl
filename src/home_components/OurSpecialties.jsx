import { useState } from "react";
import "../home_Sass/ourSpeacialties.scss";
import HeartSvg from "../assets/heart_svg.svg";
import HeartSvg2 from "../assets/heart_svg2.svg";
export default function OurSpecialties() {
  const [specialties, setSpecialties] = useState([
    { name: "Neurology", image: HeartSvg, image2: HeartSvg2 },
    { name: "Bones", image: HeartSvg, image2: HeartSvg2 },
    { name: "Oncology", image: HeartSvg, image2: HeartSvg2 },
    { name: "Otorhinolaryngology", image: HeartSvg, image2: HeartSvg2 },
    { name: "Ophthalmology", image: HeartSvg, image2: HeartSvg2 },
    { name: "Cardiovascular", image: HeartSvg, image2: HeartSvg2 },
    { name: "Pulmonology", image: HeartSvg, image2: HeartSvg2 },
    { name: "Renal Medicine", image: HeartSvg, image2: HeartSvg2 },
    { name: "Gastroenterology", image: HeartSvg, image2: HeartSvg2 },
    { name: "Urology", image: HeartSvg, image2: HeartSvg2 },
    { name: "Dermatology", image: HeartSvg, image2: HeartSvg2 },
    { name: "Gynaecology", image: HeartSvg, image2: HeartSvg2 },
  ]);
  
  
  return (
    <div className="ourSpecialties">
      <div className="ourSpecialties_OlderChild-1">
        <p>always care</p>
        <h1>our spcialties</h1>
      </div>
      <div className="ourSpecialties_OlderChild-2">
        {specialties.length > 0
          ? specialties?.map((type) => {
               const [colorChange, setColorChange] = useState(false);
              return (
                <div
                  className="ourSpecialties_OlderChild-2_child-1"
                  onMouseEnter={() => setColorChange(true)}
                  onMouseLeave={() => setColorChange(false)}
                  key={type.name}
                >
                  <img
                    src={!colorChange ? type.image : type.image2}
                    alt="icon"
                  />
                  <p>{type.name}</p>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
