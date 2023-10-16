// import React from 'react';
// import {Link} from "react-router-dom";
// const Navbar=()=>{
//     return(
//   <nav>
//   <div className="nav-wrapper white">
//     <Link to="#" className="brand-logo">Instagram</Link>
//     <ul id="nav-mobile" className="right hide-on-med-and-down">
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/signin">Login</Link></li>
//       <li><Link to="/signup">Register</Link></li>
//       <li><Link to="/profile">Profile</Link></li>
//       <li><Link to="/create">CreatePost</Link></li>
//     </ul>
//   </div>
// </nav>
//     )
// }

// export default Navbar;


// version-1 
import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { UserContext } from '../App';
const Navbar=()=>{
  //use useContext hook to acess the UserContext and ->state and dispatch
  const {state,dispatch}=useContext(UserContext);

  //Define a functionality to render the list of navbar item
  const renderList=()=>{
    //check if the use state is there or not
    if(state){
      //if user authenticated ,render->home,profile,createpost link
      return(
        <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Order">Orders</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
        </>
      );
    }else{
      //if not authenticated,render the Login and Register Links
      return(
        <>
        <li><Link to="/RestaurantRegister">Restaurant Register/Signup</Link></li>
        <li><Link to="/CustomerRegister">Customer Register/Signup</Link></li>
        </>
      )
    }
  }


  //render the navbar component 
  return (
   
      <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/signin"} className="brand-logo">Food Ordering App</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {renderList()}
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;