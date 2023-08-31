import React,{useState,useEffect} from "react";
import { Grid } from "@mui/material";
import axios from "axios"; 
import { ProItem } from "./ProItem";

export const Product=()=>{
    const[data,setData]=useState([])

    const ApiData= async()=>{
        const result= await axios.get("https://fakestoreapi.com/products")
       setData(result.data)    
    }

    useEffect(()=>{
         ApiData()
    },[])
    
    return(
         <Grid container spacing={3}>
              {
                data.map((item)=>
                <Grid item xs={3}>
                  <ProItem item={item}/>
                </Grid>
                )
              }
           
         </Grid>
    )
}