import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import Gc from "./components/Gc"
import Nav from "./components/Nav"
import Login from "./components/Login"
import Reg from "./components/Reg"
import { useState } from "react"
import Addprod from "./components/Addprod"
import Cart from "./components/Cart"

let App=()=>{
  let [contr,setContr]=useState({"token":"","uid":"","name":"","islogin":false,"isadmin":false,"carttotal":0


})
 let fun=(objs)=>{
  console.log(objs)
  setContr({...objs})
 }
 let obj={"contr":contr,"stateupdate":fun}
  return(
    <BrowserRouter>
    <Gc.Provider value={obj}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reg" element={<Reg/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add" element={<Addprod/>}/>
        <Route path="/cart" element={<Cart/>}/>


      </Routes>


    </Gc.Provider>
    
    </BrowserRouter>
   
  )

}
export default App