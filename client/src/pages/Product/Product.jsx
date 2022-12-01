import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const images = [
	"https://www.rlmedia.io/is/image/PoloGSI/s7-1303426_alternate10?$rl_df_pdp_5_7_a10$",
	"https://www.rlmedia.io/is/image/PoloGSI/s7-1303426_lifestyle?$rl_df_pdp_5_7_lif$",
];

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(0);
	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
					<img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
				</div>
				<div className="mainImg">
					<img src={images[selectedImg]} alt="" />
				</div>
			</div>
			<div className="right">
				<h1 className="title">Garment-Dyed Oxford Shirt - All Fits</h1>
				<span className="price">$199</span>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
					asperiores molestias quis non molestiae distinctio fugit unde esse
					fuga nostrum.
				</p>
				<div className="quantity">
					<button
						disabled={quantity < 1}
						onClick={() => setQuantity(quantity - 1)}
					>
						-
					</button>
					{quantity}
					<button onClick={() => setQuantity(quantity + 1)}>+</button>
				</div>
				<button className="add">
					<AddShoppingCartIcon />
					ADD TO CART
				</button>
				<div className="links">
					<div className="item">
						<FavoriteBorderIcon />
						ADD TO WISH LIST
					</div>
					<div className="item">
						<BalanceIcon />
						ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
				<hr />
				<div className="info">
					<span>DESCRIPTION</span>
					<hr align="left" />
					<span>ADDITIONAL INFORMATION</span>
					<hr align="left" />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
