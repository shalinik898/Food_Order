// import React, { useContext, useEffect, useState } from 'react';
// import axios from "axios";
// import { UserContext } from '../../App';
// const Home=()=>{
//     const[data,setData]=useState([]);
//     const {state,dispatch}=useContext(UserContext);

//     //functionality to fetch the data 
//     useEffect(()=>{
//         //Fetch the data from post db 
//         axios.get("http://localhost:5000/allpost",{
//             headers:{
//                 "Content-Type":"Application/json",
//                 "Authorization":"Bearer "+ localStorage.getItem("jwt")
//             }
//         }).then(response=>{
//             console.log(response.data);
//             setData(response.data.posts);
//         }).catch(error=>{
//             console.log(error);
//         })
//     },[])

//     return(
//         <div className='home'>
//             {
//             data && data.map(item=>{
//                 return(
//                     <div className='card home-card' key={item._id}>
//                     <h5>{item.postedBy.name}</h5>
//                             <div className='card-image'>
//                             <img className='post' src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
//                             </div>

//                             <div className='card-content'>
//                             <i className="material-icons" style={{color:"red",fontSize: "30px"}}>favorite</i>
//                             <h6>Nature pics</h6>
//                             <p>Enjoying in lapse of nature...</p>
//                             <input  type="text" placeholder='Add Comment'/>
//                             </div>
//                         </div>
//                 )
//                         })
//                     }
//                     </div>
//     )
// }

// export default Home;

import React from 'react';
const Home=()=>{
    return(
        <div className='home'>
            <div className='card home-card'>
                <h5>Pizza</h5>
                <div className='card-image'>
                <img className='post' src="https://www.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/845x440/image.jpg" alt="nature1"/>
                </div>

                <div className='card-content'>
                <i class="material-icons" style={{color:"red",fontSize: "20px"}}>Pizza Marinara: Features tomatoes, garlic, oregano, and extra virgin olive oil.</i>
                <br></br>
                 <input  type="" placeholder='Enter Quantity'/>
                 <p><button>Add to Cart</button></p>
                </div>
            </div>

            <div className='card home-card'>
                <h5>Burger</h5>
                <div className='card-image'>
                <img className='post' src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="burger"/>
                </div>

                <div className='card-content'>
                <i class="material-icons" style={{color:"red",fontSize: "20px"}}>Consists of a seasoned aloo patty, a bun, lettuce, tomato, cheese, onions, and condiments such as ketchup and mayonnaise.</i>
                <br></br>
                 <input  type="" placeholder='Enter Quantity'/>
                 <p><button>Add to Cart</button></p>
                </div>
            </div>

            <div className='card home-card'>
                <h5>White sauce pasta</h5>
                <div className='card-image'>
                <img className='post' src="https://i1.wp.com/www.tastesofmalabar.com/wp-content/uploads/2019/05/chicken-penne-pasta.jpg?fit=900%2C600&ssl=1" alt="burger"/>
                </div>

                <div className='card-content'>
                <i class="material-icons" style={{color:"red",fontSize: "20px"}}>Features pasta (typically fettuccine or penne) served with a creamy sauce made from butter, flour, milk, and grated Parmesan cheese.</i>
                <br></br>
                 <input  type="" placeholder='Enter Quantity'/>
                 <p><button>Add to Cart</button></p>
                </div>
            </div>
            <div className='card home-card'>
                <h5>French Fries</h5>
                <div className='card-image'>
                <img className='post' src="https://images.themodernproper.com/billowy-turkey/production/posts/2022/Homemade-French-Fries_8.jpg?w=800&q=82&fm=jpg&fit=crop&dm=1662474181&s=76f4dc7a5af1958d255ce8559579a6f2" alt="burger"/>
                </div>

                <div className='card-content'>
                <i class="material-icons" style={{color:"red",fontSize: "20px"}}>Deep-fried potato strips seasoned with salt, requiring only potatoes, oil, and salt as essential ingredients.</i>
                <br></br>
                 <input  type="" placeholder='Enter Quantity'/>
                 <p><button>Add to Cart</button></p>
                </div>
            </div>

            
        </div>
    )
}

export default Home;