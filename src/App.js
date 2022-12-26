
import './App.css';
import LoginForm from "./component/LoginForm/LoginForm"
import ForgetPassword from './component/ForgetPassword/ForgetPassword';
import Create from './component/Creat/Creat';

import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <div className="App">
   


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="forget" element={<ForgetPassword/>}/>
       
        <Route path="create" element={<Create/>}></Route>
      
      
     
  
     

      

    
  
       
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
