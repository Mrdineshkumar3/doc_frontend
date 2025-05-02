import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./component/Login"
import Home from "./component/Home"
import Appointment from "./component/Appointment"
import Navbar from "./component/Navbar"
import DoctorAppointent from "./component/DoctorAppointent"
import { useState } from "react"
import User from "./component/User"
import Doctorlogin from "./component/Doctorlogin"
import Doctor from "./component/Doctor"
import ScrollToTop from "./component/ScrollToTop"

function App() {
const [onedoctor,setOnedocter] = useState('')
const [useraccount,setUserAccount] = useState('')

  return (
    <>
     <div className="">
      <BrowserRouter>
       <Navbar useraccount={useraccount} />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login setUserAccount={(aa)=>{setUserAccount(aa)}} />} />
          
        <Route path="/Doctorligin" element={<Doctorlogin setOnedocter={(ew)=>setOnedocter(ew)} />} />
        <Route path="/Doctor" element={<Doctor onedoctor = {onedoctor}/>} />

        <Route path="/home" element={<Home  useraccount={useraccount} 
        setUserAccount={(kk)=>{setUserAccount(kk)}}  />} />
        <Route path="/Appointmnet" element={<Appointment setOnedocter={setOnedocter} />} />
        <Route path="/Doctorappointment/:id" element={<DoctorAppointent onedoctor={onedoctor} 
        setOnedocter ={(bb)=>{setOnedocter(bb)}}
        useraccount={useraccount}/>} />
        <Route path="/user/:id" element={<User  useraccount={useraccount} 
        setUserAccount={(kk)=>{setUserAccount(kk)}}  />} />
      </Routes>
      </BrowserRouter>
     
     </div>
    </>
  )
}

export default App
