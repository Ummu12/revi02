import React from "react";
import { Grid,Card,CardContent,Rating,Button} from "@mui/material";

export const ProItem=({item})=>{
    return(
<Card>
    <CardContent sx={{border:"3px solid red", fontSize:"20px",fontWeight:"bold", bgcolor:"black", color:"white"}}>
        <Grid container spacing={2} align="center">
          <Grid item xs={12}>
         <img src={item.image}  alt="" height={100} width={100} />
        
          </Grid>
          <Grid item xs={12}>
           <span>{item.title.slice(0,10)+"..."}</span>
          </Grid>

          <Grid xs={12}>
            <span> ${item.price}</span>
          </Grid>

          <Grid item xs={12}>
            <Rating  value={item.rating.rate} />
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" fullWidth color="warning">
                       BUY
            </Button>

          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" fullWidth color="success">
                       Cart
            </Button>

          </Grid>

        </Grid>
    </CardContent>
</Card>
    )
}