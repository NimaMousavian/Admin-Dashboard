import React, { useState } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { products as _products } from "../../datas";

const Products = () => {
  const [products, setProducts] = useState(_products);

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((prod) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={3}
            key={prod.id}
            alignItems="center"
            justify="center"
          >
            <Card
              sx={{
                maxWidth: 345,
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  sx={{
                    objectFit: "cover",
                    maxWidth: 200,
                    maxHeight: 200,
                  }}
                  component="img"
                  height="140"
                  image={prod.imageUrl}
                  alt={prod.model}
                />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {prod.model}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {prod.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Buy
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
