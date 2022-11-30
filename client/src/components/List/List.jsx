import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const data = [
	{
		id: 1,
		img: "https://img.ltwebstatic.com/images3_pi/2022/08/22/16611510602d3b3e1d110742c4f6062a5ac008dcfb_thumbnail_900x.webp",
		img2: "https://img.ltwebstatic.com/images3_pi/2022/07/19/1658228096a6778a476f81eb0e5b532001295f0810_thumbnail_900x.webp",
		title: "Shirt",
		oldPrice: 19,
		price: 12,
		isNew: true,
	},
	{
		id: 2,
		img: "https://img.ltwebstatic.com/images3_pi/2022/05/12/1652352623d43c694265d09a93996eabf41481aed2_thumbnail_900x.webp",
		img2: "https://img.ltwebstatic.com/images3_pi/2022/05/12/165235262539c9bc459ef85f489d6af73e90109a27_thumbnail_405x552.webp",
		title: "Shoes",
		oldPrice: 220,
		price: 180,
		isNew: true,
	},
	{
		id: 3,
		img: "https://img.ltwebstatic.com/images3_pi/2022/06/15/1655289242d39f915560231279b391063c3adc2369_thumbnail_405x552.webp",
		title: "Short",
		oldPrice: 20,
		price: 15,
		isNew: true,
	},
	{
		id: 4,
		img: "https://img.ltwebstatic.com/images3_pi/2022/07/27/165890549813f2810b89c5dc52d164ca7aa9c8e70f_thumbnail_405x552.webp",
		title: "Hat",
		oldPrice: 19,
		price: 12,
		isNew: true,
	},
];

const List = () => {
	return (
		<div className="list">
			{data?.map((item) => (
				<Card item={item} key={item.id} />
			))}
		</div>
	);
};

export default List;
