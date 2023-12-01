import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export function Items({ product, price1, price2, addtocart, removefromcart }) {
  const [add, setAdd] = useState(true);
  const sale = product == "Sale Item" || product == "Special Item" ? true : false;
  const style = { visibility: sale ? "block" : "hidden" };
  const added = () => {
    add ? setAdd(false) : setAdd(true);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <div id="img">
          <Typography gutterBottom variant="h5" component="div">
            <div id="sale" style={style}>
              Sale
            </div>
            450 X 300
          </Typography>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sale ? (
              <>
                <span style={{ textDecoration: "line-through" }}>{price1}</span>{" "}
                - {price2}
              </>
            ) : (
              `${price1} - ${price2}`
            )}
          </Typography>
        </CardContent>
        <CardActions id="cardaction">
          <Button
            size="small"
            variant="outlined"
            onClick={add ? () => {
              addtocart();
              added();
            } : () => {
              removefromcart();
              added();
            }}
          >
            {add ? "Add to cart" : "Remove from cart"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
