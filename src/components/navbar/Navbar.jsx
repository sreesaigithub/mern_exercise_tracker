import "./navbar.scss";
// import role from "../../style/images/role-image.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
    <div className="navbar">
      <div className="wrapper">
        <div className="title">
          <h3>COST OF CARE PLATFORM</h3>
        </div>
        <div className="items">
          <div className="item">
            {/* Anything */}
          </div>
          <div className="item">
          {/* Anything */}
          </div>
          <div className="item">
          {/* Anything */}
          </div>
          <div className="item">
          {/* Anything */}
          </div>
          <div className="item">
          {/* Anything */}
          </div>
          <div className="item">
            {/* Anything */}
          </div>
          <div className="item">
            {/* <img
              src="https://picsum.photos/200/300"
              alt=""
              className="avatar"
            /> */}
          </div>
        </div>
      </div>
    </div>
     <div className="navbarlinks">
     <div className="wrapper">
       <div className="items">
         <div className="item">
           <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="itemdetails">Home</span>
            </Link>
         </div>
         <div className="item">
            <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="itemdetails">Dashboard</span>
            </Link>
         </div>
         <div className="item">
            <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="itemdetails">Support</span>
            </Link>
         </div>
         <div className="item">
         {/* Anything */}
         </div>
         <div className="item">
         {/* Anything */}
         </div>
         <div className="item">
           {/* Anything */}<div className="avatarname">
           <h3 >Robert</h3>
           </div>
         </div>
         <div className="item">
           <img
             src="https://picsum.photos/200/300"
             alt=""
             className="avatar"
           />
         </div>
       </div>
     </div>
   </div>
   </div>
  );
};

export default Navbar;
