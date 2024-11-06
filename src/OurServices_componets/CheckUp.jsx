import Circle from "../assets/circle.svg";
import "../Ourservices_scss/checkup.scss";
import Doctors1 from '../assets/checkup_doctors1.svg'
import Doctors2 from '../assets/checkup_doctors2.svg'
export default function CheckUp() {
  return (
    <div className="checkUp">
      <div className="checkUp_OlderChild-1">
        <div className="checkUp_OlderChild-1_younger-child-1">
          <p>A passion for putting patients first.</p>
        </div>

        <div className="checkUp_OlderChild-1_younger-child-2">

          <div className="row1">
            <div>
              <img src={Circle} alt="svg" />
              <p>A Passion for Healing</p>
            </div>
            <div>
              <img src={Circle} alt="svg" />
              <p>All our best</p>
            </div>
            <div>
              <img src={Circle} alt="svg" />
              <p>A Legacy of Excellence</p>
            </div>
          </div>

          <div className="row2">
            <div>
              <img src={Circle} alt="svg" />
              <p>5-Star Care</p>
            </div>
            <div>
              <img src={Circle} alt="svg" />
              <p>Believe in Us</p>
            </div>
            <div>
              <img src={Circle} alt="svg" />
              <p>Always Caring</p>
            </div>
          </div>

        </div>

        <div className="checkUp_OlderChild-1_younger-child-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae voluptatum vel consequatur magnam sit pariatur qui voluptatibus quas, eius, quo maiores, nemo dicta quam minima obcaecati quis ea! Autem est quisquam, maxime labore beatae iusto dignissimos, nemo pariatur, quaerat non adipisci fuga? Libero dolor eveniet, excepturi provident similique ullam nostrum sint eum omnis labore, facere vero ex voluptates! Fuga.</p>
        </div>
      </div>

      <div className="checkUp_OlderChild-2">
        <img src={Doctors1} alt="doctors" />
        <img src={Doctors2} alt="doctors" />
      </div>
    </div>
  );
}
