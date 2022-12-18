import React from "react";
import { useState } from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";

const Product = () => {
	const id = useParams().id;
	const [selectedImg, setSelectedImg] = useState("img");
	const [quantity, setQuantity] = useState(0);

	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

	return (
		<div className="product">
			{loading ? (
				"Loading"
			) : (
				<>
					<div className="left">
						<div className="images">
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes?.img?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setSelectedImg("img")}
							/>
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes?.img2?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setSelectedImg("img2")}
							/>
						</div>
						<div className="mainImg">
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes[selectedImg]?.data?.attributes.url
								}
								alt=""
							/>
						</div>
					</div>
					<div className="right">
						<h1 className="title">{data?.attributes?.title}</h1>
						<span className="price">{data?.attributes?.price}</span>
						<p>{data?.attributes?.desc}</p>
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
				</>
			)}
		</div>
	);
};

export default Product;
