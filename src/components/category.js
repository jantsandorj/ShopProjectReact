import "../css/category.css";
import Dropdown from "./dropdown";
function Category({ minorMenu }) {
  return (
    <div className="menu d-flex paddin">
      <div className="d-flex">
        <div className="firstCat d-flex justify-content-center"><Dropdown text="Browser Categories"/></div>
        <ul className="list-unstyled d-flex gap-3 m-0 paddin align-items-center justify-content-between">
          <li>
            <Dropdown text="Home" />
          </li>
          <li>
            <Dropdown text="Catalog" />
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <Dropdown text="Pages" />
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <div>30 Days Free Return</div>
    </div>
  );
}
export default Category;
