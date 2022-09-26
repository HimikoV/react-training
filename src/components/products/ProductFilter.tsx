import { Box, Button, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SortIcon from "@mui/icons-material/Sort";
import uniqueId from "lodash.uniqueid";
const ProductFilter = ({ sortByLetter, sortByPrice, setFilter }: any) => {
  const categories: string[] = [
    "Coffee",
    "Tea",
    "Coffee Accessories",
    "Tea Accessories",
    "Blankets",
    "Sweaters",
    "Books",
  ];

  const [expand, setExpand] = useState<boolean>(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 2,
        maxWidth: 500,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f7f4e1",
      }}
    >
      {categories.map((item: string) => (
        <Button
          onClick={() => {
            setFilter("books");
          }}
          key={uniqueId("filter_category_")}
        >
          {item}
        </Button>
      ))}
      <IconButton onClick={() => setExpand(!expand)}>
        <FilterListIcon />
      </IconButton>
      {expand ? (
        <>
          <IconButton onClick={() => sortByPrice()}>
            <SortIcon />
          </IconButton>
          <IconButton onClick={() => sortByLetter()}>
            <SortByAlphaIcon />
          </IconButton>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ProductFilter;
