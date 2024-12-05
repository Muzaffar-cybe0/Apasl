import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import '../sass/breadCrumbs.scss'
export default function BreadCrumbs() {
  const location = useLocation();
  // help/contact --> help | contact
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((item) => item !== "")
    .map((item) => {
      currentLink += `/${item}`;
      return (
        <div key={item}>
          <Link to={currentLink}>/{item}</Link>
        </div>
      );
    });

  return (
    <div className="breadCrumbs">
      {crumbs}
    </div>
  );
}
