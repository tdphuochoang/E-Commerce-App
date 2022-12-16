import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";
import useFetch from "../../hooks/useFetch";

const Products = () => {
	const catId = parseInt(useParams().id);
	const [priceValue, setPriceValue] = useState(0);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);
	const [selectedSubCats, setSelectedSubCats] = useState([]);

	const { data, loading, error } = useFetch(
		`/sub-categories?[filters][categories][id][$eq]=${catId}`
	);

	const handleChange = (e) => {
		const value = e.target.value;
		const isChecked = e.target.checked;

		setSelectedSubCats(
			isChecked
				? [...selectedSubCats, value]
				: selectedSubCats.filter((item) => item !== value)
		);
	};

	return (
		<div className="products">
			<div className="left">
				<div className="filterItem">
					<h2>Product Categories</h2>
					{data?.map((item) => (
						<div className="inputItem" key={item.id}>
							<input
								type="checkbox"
								id="1"
								value={item.id}
								onChange={handleChange}
							/>
							<label htmlFor={item.id}>{item.attributes.title}</label>
						</div>
					))}
				</div>
				<div className="filterItem">
					<h2>Filter by price</h2>
					<div className="inputItem">
						<span>0</span>
						<input
							type="range"
							min={0}
							max={1000}
							onChange={(e) => setPriceValue(e.target.value)}
						/>
						<span>{priceValue}</span>
						<button id="applyPriceBtn" onClick={() => setMaxPrice(priceValue)}>
							Apply
						</button>
					</div>
				</div>
				<div className="filterItem">
					<h2>Sort By</h2>
					<div className="inputItem">
						<input
							type="radio"
							id="asc"
							value="asc"
							name="price"
							onChange={(e) => setSort("asc")}
						/>
						<label htmlFor="asc">Price (Lowest First)</label>
					</div>
					<div className="inputItem">
						<input
							type="radio"
							id="desc"
							value="desc"
							name="price"
							onChange={(e) => setSort("desc")}
						/>
						<label htmlFor="desc">Price (Highest First)</label>
					</div>
				</div>
			</div>
			<div className="right">
				<img
					className="catImg"
					src="https://cdn-fsly.yottaa.net/5e18d625d9314057054ee33e/www.ralphlauren.com/v~4b.88/on/demandware.static/-/Sites-RalphLauren_US-Library/default/dwfc3c1ff7/img/202210/20221018-holiday-shared-in-grid/1018_holiday_plp_shared_wishlist.jpg?yocs=2M_2Q_2T_"
					alt=""
				/>
				<List
					catId={catId}
					maxPrice={maxPrice}
					sort={sort}
					subCats={selectedSubCats}
				/>
			</div>
		</div>
	);
};

export default Products;
