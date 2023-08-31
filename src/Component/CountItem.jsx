import React from "react";
import { Card,CardContent,Grid,Rating ,Button} from "@mui/material";

export const CountItem=({item})=>{
    return(
      <Card sx={{width:"1000px"}}>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                  <h3>  ID : {item.id}</h3>
                  <h2>Title : {item.title}</h2>
                  <span> Description : {item.description}</span>
                   <h2>Price : {item.price}</h2>
                   <h2>DiscountPercentage: {item.discountPercentage}</h2>
                   <Rating  value={item.rating} />
                   <h3>Stock : {item.stock}</h3>
                   <h3>Brand : {item.brand}</h3>
                   <h3>Category : {item.category}</h3>
                   <h6>thumbnail : {item.thumbnail}</h6>
                   
                   
                    <Card>
                        <CardContent>
                        <Button variant="contained" fullWidth color="warning">
                       BUY Now
            </Button>
        
                        </CardContent>
                    </Card>
           

                <Card>
                    <CardContent>
                                <Button variant="contained" fullWidth color="success">
                       ADD to Cart
            </Button>
                              </CardContent>
                </Card>
                       
                       
                       </Grid>

                      
                        <Card sx={{border:"5px solid black"}}>
                            <CardContent>
                            <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"  alt="" height={600} width={450} />
                            </CardContent>
                        </Card>
            </Grid>
        </CardContent>
      </Card>

     
    )
}