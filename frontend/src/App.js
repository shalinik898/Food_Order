import './App.css';
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import CutomerRegister from './components/pages/CutomerRegister';
import CustomerSignup from './components/pages/CustomerSignup';
import RestaurantRegister from './components/pages/RestaurantRegister';
import RestaurantSignup from './components/pages/RestaurantSignup';
import Order from './components/pages/Order';
import Cart from './components/pages/Cart';
import {reducer,initialState} from "./reducers/useReducer";
// function App() {
//   return (
//     <BrowserRouter>
//     <Navbar/>
//     <Routes>
//       <Route path="/"  element={<Home/>}></Route>
//       <Route path="/signup"  element={<Signup/>}></Route>
//       <Route path="/signin"  element={<Signin/>}></Route>
//       <Route path="/profile"  element={<Profile/>}></Route>
//       <Route path="/create" element={<CreatePost/>}></Route>
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//create a context name UserContext
export const UserContext=createContext();

//Define a component for handling routes
const Routing=()=>{
  //use navigate 
  const navigate=useNavigate();
  //get state and dispatch function from the UserContext
  const {state,dispatch}=useContext(UserContext);

  //useffect to check if user data is available in local storage
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    if(user){
      //dispatch an action to set the user data in state
      dispatch({type:"USER",payload:user});
      navigate("/");//navigate to home 
    }else{
      navigate("/CustomerSignup");
    }
  },[]);

  //define all the routes 
  return(
<Routes>
    <Route path="/"  element={<Home/>}></Route>
    <Route path="/CustomerRegister"  element={<CutomerRegister/>}></Route>
    <Route path="/CustomerSignup"  element={<CustomerSignup/>}></Route>
    <Route path="/RestaurantRegister"  element={<RestaurantRegister/>}></Route>
    <Route path="/RestaurantSignup"  element={<RestaurantSignup/>}></Route>
    <Route path="/Order"  element={<Order/>}></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
</Routes>
  );
}
//Main App component
function App(){
  //use the reducer to manage state
  const [state,dispatch]=useReducer(reducer,initialState);

  return(
    //provide state and dispatch the function to component using UserContext 
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <Navbar/>
      <Routing/>
      
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
