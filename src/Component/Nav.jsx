import React, {useState}from "react";
import { Navdata } from "../Data/Navdata";
import { Grid,Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav=()=>{
    const [data,setData]=useState(Navdata)
    return(
         <Grid container spacing={2}>
            {
                data.map((item)=>
                <Grid item xs={item.xs}>
                  <Link  to ={item.path}>
           <Button variant="contained" fullWidth>
              {item.title}
           </Button>
                  </Link>
                </Grid>
                )
            }

         </Grid>
    )
}