import {
  Card,
  CardContent,
  Box,
  Typography,
  CardMedia,
  IconButton,
} from "@mui/material";
import { productInterface } from "../../interfaces/productInterface";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
const ProductItem = ({ item }: productInterface) => {
  return (
    <Box
      sx={{
        m: 1,
        fontSize: "0.875rem",
        fontWeight: "700",
        width: 230,
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height="250"
          image="https://images.unsplash.com/photo-1515471897120-85416077e011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              color: "#3d405b",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                color: "#3d405b",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {item.name}
              </Typography>
              <Typography variant="h5" component="div">
                {item.price}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.category}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                color: "#3d405b",
                justifyContent: "flex-end",
                alignSelf: "flex-end",
                flexDirection: "column",
              }}
            >
              <IconButton aria-label="delete">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductItem;
