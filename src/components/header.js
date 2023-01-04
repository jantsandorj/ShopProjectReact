import { GoLocation } from "react-icons/go";
import { FaTruckMoving } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../image/logo 1.png";

function Header(props) {
  return (
    <div>
      <div className="track d-flex justify-content-between paddin my-3">
        <p className="m-0">Need help? Call us: (+98)0234 456 789</p>
        <div className="d-flex headIcon">
          <div className="d-flex">
            <GoLocation className="align-self-center" />
            <p className="m-0 headpara">Our store</p>
          </div>
          <div className="d-flex">
            <FaTruckMoving className="align-self-center" />
            <p className="m-0 headpara">Track your order</p>
          </div>
        </div>
      </div>
      <div className="navMenu paddin d-flex w-100">
        <nav className="navbar bg-body-tertiary paddin d-flex w-100 justify-content-between">
          <div className="container-fluid logoSrch">
            <img className="navbar-brand" src={logo} />
            <form className="d-flex srchForm" role="search">
              <input
                className="form-control me-2 searchInput"
                type="search"
                placeholder="Search any things"
                aria-label="Search"
              />
              <button className="btn" id="btn" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className=" d-flex justify-content-end sign-in">
            <div className="d-flex iconNav">
              <RxAvatar className="signIcon" />
              <a className="m-0 text-decoration-none text-light" href="">
                Sign in
              </a>
            </div>
            <div className="d-flex iconNav">
              <AiOutlineHeart className="signIcon" />
              <span id="badge">1</span>
            </div>
            <div className="d-flex iconNav">
              <AiOutlineShoppingCart className="signIcon" />
              <span id="badge">1</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
