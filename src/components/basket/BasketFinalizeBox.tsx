import { Grid, Typography, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../ContextProvider";
import { Link } from "react-router-dom";
import styles from "../../palette.module.scss";
import addPricesOfBasketItems from "../../utils/componentsFunctions/addPricesOfBasketItems";

const BasketFinalizeBox = ({ text, link }: { text: string; link: boolean }) => {
  const { basketProcessedData } = useContext(dataContext);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    setPrice(addPricesOfBasketItems(basketProcessedData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketProcessedData]);
  return (
    <Grid
      sx={{
        position: "sticky",
        top: 90,
        ml: "2.5rem",
        p: "1.5rem",
        bgcolor: styles.colorAutumnLight100,
        borderRadius: "1rem",
      }}
    >
      <Typography color="primary" variant="caption">
        Products Price: {price}$
      </Typography>
      <Typography color="primary" variant="caption">
        Delivery Price: {20}$
      </Typography>
      <Typography color="primary" variant="caption">
        Total Price: {price + 20}$
      </Typography>
      {link ? (
        <Button component={Link} to="/finalize" data-testid="buttonLink">
          <Typography color="primary" variant="caption">
            {text}
          </Typography>
        </Button>
      ) : (
        <Button type="submit" data-testid="buttonSubmit">
          <Typography color="primary" variant="caption">
            {text}
          </Typography>
        </Button>
      )}
    </Grid>
  );
};

export default BasketFinalizeBox;
