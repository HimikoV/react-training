import ProductItem from "./ProductItem";
import { productType } from "../../types/productType";
import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { basketType } from "../../types/basketType";
// import { addProductToBasket } from "../../service/addProductToBasket";
import { dataContext } from "../../ContextProvider";
const ProductList = ({ items }: any) => {
  const { basketData, setBasketData, loadLimit } = useContext(dataContext);

  // const postData = (data: basketType[]) => {
  //   addProductToBasket(data);
  // };

  const addToBasket = (item: string) => {
    if (basketData.some((e: basketType) => e.id === item)) {
      const index = basketData.findIndex((e: basketType) => e.id === item);
      const newBasketData = basketData;
      newBasketData[index].quantity += 1;
      setBasketData([...newBasketData]);
    } else {
      setBasketData((basketData: basketType[]) => [
        ...basketData,
        { id: item, quantity: 1 },
      ]);
    }
    localStorage.setItem("basketData", JSON.stringify(basketData));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 750,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f7f4e1",
      }}
    >
      {items.slice(0, loadLimit).map((item: productType) => (
        <ProductItem item={item} key={item.key} addToBasket={addToBasket} />
      ))}
    </Box>
  );
};

export default ProductList;
