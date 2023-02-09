import {BrowserRouter,Routes,Route,} from "react-router-dom";
import LoginPage from "./Pages/AdminLoginPage";
import { AuthProvider } from "./context/AuthContext";
import AdminHomePage from "./Pages/AdminHomePage";
import AddUserPage from "./Pages/AddUserPage";
import EditUserPage from "./Pages/EditUserPage";
import UserHomePage from "./Pages/UserHomePage";
import UserLoginCase from "./utils/UserLoginCase";
import AdminLoginCase from "./utils/AdminLoginCase";
import PrivetRouterAdmin from "./utils/PrivetRouterAdmin";
import PrivetRouter from "./utils/PrivetRouter";

function App() {
  return (
    <div >
      <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route element={<AdminLoginCase />} >  
            <Route element={<UserLoginCase />} >
              {/* both admin and user have same login */}
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<AddUserPage />} />
             
              
              </Route>
            </Route>   

            <Route element={<PrivetRouterAdmin />} >                  
                <Route path='/adminHome' element={<AdminHomePage />} />
                <Route path='/adminHome/addUser' element={<AddUserPage />} />
                <Route path='/adminHome/editUser/:id' element={<EditUserPage />} />
             </Route>

            <Route element={<PrivetRouter />}>             
                <Route path='/' element={<UserHomePage />}/>
               
            </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
  
      </div>
    
  );
}

export default App;
