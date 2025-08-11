import { Route, Routes } from "react-router-dom"
import { Home, Login, Register } from "../pages"
import Header from "../modules/Header"

const LoginRoutes = () => {
  return (
    <div>
      <Header/>
       <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
     </Routes>
       </div>
    </div>
  )
}

export default LoginRoutes
