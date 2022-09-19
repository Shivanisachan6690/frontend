import{BrowserRouter, Route, Routes} from"react-router-dom";
import FileManager from "./components/FileManager";
// import EventHandling from "./components/EventHandling";
import Login from "./components/Login";
import Header from "./components/Header";
import Signup from "./components/Signup";
// import {Toaster} from "react-hot-toast";
function App() {
  return (
    <div>
     
      
      <BrowserRouter>
      <Header/>
    
      <Routes>
    
     
         <Route element={<FileManager />} path="/"/>
         <Route element={<Login></Login>} path="/loginpage"/>
        
         <Route element={<Signup></Signup>} path="/signuppage"/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
