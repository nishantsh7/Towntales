import { Route, Routes,Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import TravelGenie from "./pages/TravelGenie/TravelGenie";
import { auth } from "./FireBase/FireBase";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {
  
  const [authUser]= useAuthState(auth);
  return (

    <PageLayout>
    <Routes>
              <Route path='/' element={authUser? <HomePage  />:<Navigate to="/auth"/>} />
              <Route path='/auth' element={!authUser? <AuthPage />: <Navigate to="/"/>} />
              <Route path='/:username' element={<ProfilePage/>} />
              <Route path='/travelgenie' element={<TravelGenie/>} />
     </Routes>
    </PageLayout>
  );
  
}




export default App

