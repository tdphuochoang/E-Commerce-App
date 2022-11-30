import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const data = [
		"https://manofmany.com/wp-content/uploads/2019/03/10-Most-Famous-Male-Models-of-All-Time-Lucky-Blue-Smith-3.jpg",
		"https://manofmany.com/wp-content/uploads/2019/03/10-Most-Famous-Male-Models-of-All-Time-Luka-Sabbat.jpg",
		"https://manofmany.com/wp-content/uploads/2019/04/Top-50-Australian-Fashion-Clothing-Brands-Cotton-On.jpg",
	];

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
	};

	const nextSlide = () => {
		setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
	};

	return (
		<div className="slider">
			<div
				className="container"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				<img src={data[0]} alt="" />
				<img src={data[1]} alt="" />
				<img src={data[2]} alt="" />
			</div>
			<div className="icons">
				<div className="icon" onClick={prevSlide}>
					<WestOutlinedIcon />
				</div>
				<div className="icon" onClick={nextSlide}>
					<EastOutlinedIcon />
				</div>
			</div>
		</div>
	);
};

export default Slider;
