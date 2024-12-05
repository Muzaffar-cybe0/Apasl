import "../sass/associates.scss";
import Associate1 from '../assets/ahu_associate.png'
import Associate2 from '../assets/ministry_associate.png'
import Associate3 from '../assets/virusologiya_associate.png'
import Associate4 from '../assets/AGHA.png'

export default function Associates() {
  return (
    <div className="associates" id="sponsors">
      <img src={Associate1} className="associate_img" alt="asociate" />
      <img src={Associate2} className="associate_img" alt="asociate" />
      <img src={Associate3} className="associate_img" alt="asociate" />
      <img src={Associate4} className="associate_img" alt="asociate" />
    </div>
  );
}
