import logo from './logo.svg';
import './App.css';
import NETFLIX_NAV from './COMPONTES/NETFLIX_NAV';
import MAIN from './COMPONTES/MAIN.js';
import Conditionalrendaring from './COMPONTES/Conditionalrendaring.js';
import Quest from './COMPONTES/Quest.js';
import StateComponent from './COMPONTES/StateComponent.js';
import Count from './COMPONTES/Count.js';
import Loginpage from './COMPONTES/Loginpage.js';
import Formhandling from './COMPONTES/Formhandling.js';
import Formhandlingdemo from './COMPONTES/Formhandlingdemo.js';
import Formhand from './COMPONTES/Formhand.js';
import Password from './COMPONTES/Password.js';
import Functionprops from './COMPONTES/Functionprops.js';
import ConditionalRender from './COMPONTES/ConditionalRender.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Object from './COMPONTES/Object.js';
import Axios from './COMPONTES/Axios.js';
import Api from './COMPONTES/Api.js';
import Apitest from './COMPONTES/Apitest.js';
import Array_api from './COMPONTES/Array_api.js';
import Product_api from './COMPONTES/Product_api.js';
import{BrowserRouter,Routes, Route }from 'react-router-dom' 
import Product_apimore from './COMPONTES/Product_apimore.js';
import Post_main from './COMPONTES/Post_main.js';
import Post_single from './COMPONTES/Post_single.js';
import Post_multiple from './COMPONTES/Post_multiple.js';
import Formhandling_api from './COMPONTES/Formhandling_api.js';
import Formhandling_apipost from './COMPONTES/Formhandling_apipost.js';
import A from './COMPONTES/A.js';


function App() {

  // const user = { name: 'adhil', age: 17 }

  return (

    
     <div className=''>
      
    <BrowserRouter>
      <Routes>
      
      {/* <Route path='/' element={<Product_apimore/>}/>
      <Route path='/product/:id' element={<Apitest/>}/> */}
        
        {/* <Route path='/' element= {<Post_main/>} />
        <Route path='/post/:id' element={<Post_single/>} /> */}
      </Routes>
      
    </BrowserRouter>
      {/* <NETFLIX_NAV name="Netflix" age={108} /> */}
      {/* <NETFLIX_NAV/>
      <MAIN /> */}
      {/* <Conditionalrendaring  /> */}
      {/* <Quest name="login"/> */}
      {/* <StateComponent/> */}
      {/* <Count /> */}
      {/* <Loginpage  data={user}/> */}
      {/* <Formhandling/> */}
      {/* <Formhandlingdemo/> */}
      {/* <Formhand/> */}
      {/* <Password/> */}
      {/* <Functionprops /> */}
{/* <ConditionalRender/> */}
{/* <Object/> */}
{/* <Axios/> */}
{/* <Api/> */}
{/* <Apitest/> */}
{/* <Array_api/> */}
{/* <Product_api/> */}
{/* <Product_apimore/> */}

{/* <Post_main/> */}
{/* <Post_single/> */}
{/* <Post_multiple/> */}
{/* <Formhandling_api/> */}
{/* <Formhandling_apipost/> */}

<A/>
    </div >

   
  );
}

export default App;
