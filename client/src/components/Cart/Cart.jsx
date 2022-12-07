import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
	const data = [
		{
			id: 1,
			img: "https://img.ltwebstatic.com/images3_pi/2022/08/22/16611510602d3b3e1d110742c4f6062a5ac008dcfb_thumbnail_900x.webp",
			img2: "https://img.ltwebstatic.com/images3_pi/2022/07/19/1658228096a6778a476f81eb0e5b532001295f0810_thumbnail_900x.webp",
			title: "Shirt",
			desc: "This is a good shirt",
			oldPrice: 19,
			price: 12,
			isNew: true,
		},
		{
			id: 2,
			img: "https://img.ltwebstatic.com/images3_pi/2022/05/12/1652352623d43c694265d09a93996eabf41481aed2_thumbnail_900x.webp",
			img2: "https://img.ltwebstatic.com/images3_pi/2022/05/12/165235262539c9bc459ef85f489d6af73e90109a27_thumbnail_405x552.webp",
			title: "Shoes",
			desc: "This is a nice shoes",
			oldPrice: 220,
			price: 180,
			isNew: true,
		},
	];
	return (
		<div className="cart">
			<h1>Products in your cart</h1>
			{data?.map((item) => (
				<div className="item" key={item.id}>
					<img src={item.img} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.desc?.substring(0, 100)}</p>
						<div className="price">1 x ${item.price}</div>
					</div>
					<DeleteOutlinedIcon className="delete" />
				</div>
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>$123</span>
			</div>
			<button>PROCEED TO CHECKOUT</button>
			<span className="reset">Reset Cart</span>
		</div>
	);
};

export default Cart;
