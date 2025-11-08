
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Browser from './Pages/user/Browser'
import Home from './Pages/user/Home'
import Myrequest from './Pages/user/Myrequest'
import Profile from './Pages/user/Profile'
import Auth from './Pages/user/Auth'
import Dashboard from './Pages/admin/Dashboard'
import Managepet from './Pages/admin/Managepet'
import Adoptionrequest from './Pages/admin/Adoptionrequest'
import Footer from './Components/Footer'
import Petdetails from './Pages/user/Petdetails'
import Adoptionform from './Components/Adoptionform'
import Adminlogin from './Pages/admin/Adminlogin'
import Addpet from './Pages/admin/Addpet'
import { ToastContainer } from 'react-toastify'
import Edit from './Components/Edit'

function App() {

  return (
    <>
 

  <Routes>
    {/* user */}
<Route path='/' element={<Home/>}/>
<Route path='/browser' element={<Browser/>}/>
<Route path='/myrequest' element={<Myrequest/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/Auth' element={<Auth/>}/>
<Route path='/petdetails/:id' element={<Petdetails/>}/>
<Route path='/adoptionForm/:id' element={<Adoptionform/>}/>



{/* admin */}
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/managepet' element={<Managepet/>}/>
<Route path='/adoption' element={<Adoptionrequest/>}/>
<Route path='/addpet' element={<Addpet/>}/>
<Route path='/admin' element={<Adminlogin/>}/>
<Route path='/editPet/:id' element={<Edit/>}/>















  </Routes>
<ToastContainer
position="top-center"
autoClose={5000}
theme="colored"/>

    </>
  )
}

export default App
