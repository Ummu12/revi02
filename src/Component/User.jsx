import React,{useState,useEffect} from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { UserItem } from "./UserItem";


export const User=()=>{
    const [data,setData]=useState([])

    const getApi= async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/users")
      setData(result.data)
        }

        useEffect(()=>{
            getApi()
       },[])
       



    return(
    <Grid container spacing={3}>
      {
        data.map((item)=>
         <Grid item xs={3}>
         <UserItem item={item}/>
         </Grid>
        )
      }
    </Grid>
    )
}