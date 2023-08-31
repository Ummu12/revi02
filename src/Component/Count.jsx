import React,{useEffect,useState} from "react";
import {Card,CardContent,Grid} from "@mui/material"
import axios from "axios";
import { CountItem } from "./CountItem";

export const Count=()=>{
    const[data,setData]=useState([])

   const  contApi = async()=>{
     const result= await axios.get("https://dummyjson.com/products/1")
     setData([result.data])
   }

   useEffect (()=>{
    contApi()
   },[] )

    return(
        <Grid container spacing={3}>
            {
                data.map((item)=>
                 <Grid item xs={3}>
                  <CountItem  item={item}/>
                 </Grid>
                )
            }

        </Grid>

    )
}