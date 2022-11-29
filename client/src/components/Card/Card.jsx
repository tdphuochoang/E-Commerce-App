import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
	return (
		<Link className="link" to={`/product/${item.id}`}>
			<div className="card">
				<div className="images">
					{item.isNew && <span>New Season</span>}
					<img src={item.img} alt="" className="mainImg" />
					<img src={item.img2} alt="" className="secondImg" />
				</div>
				<p className="title">{item.title}</p>
				<div className="prices">
					<h3>${item.oldPrice}</h3>
					<h3>${item.price}</h3>
				</div>
			</div>
		</Link>
	);
};

export default Card;
