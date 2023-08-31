import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Product } from "./Product";
import { User } from "./User";
import { Count } from "./Count";

export const Landing=()=>{
    return(
     <BrowserRouter>
     <Nav/>
     <br />
     <br />
       <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/api1" element ={<Product/>}/>
        <Route path="/api2" element ={<User/>}/>
        <Route path="/api3" element ={<Count/>}/>

       </Routes>
     </BrowserRouter>
    )
}