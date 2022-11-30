import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";

const Products = () => {
	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);
	return (
		<div className="products">
			<div className="left">
				<div className="filterItem">
					<h2>Product Categories</h2>
					<div className="inputItem">
						<input type="checkbox" id="1" value={1} />
						<label htmlFor="1">Shoes</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="2" value={2} />
						<label htmlFor="2">Skirts</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="3" value={3} />
						<label htmlFor="3">Coats</label>
					</div>
				</div>
				<div className="filterItem">
					<h2>Filter by price</h2>
					<div className="inputItem">
						<span>0</span>
						<input
							type="range"
							min={0}
							max={1000}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						<span>{maxPrice}</span>
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
				<List catId={catId} maxPrice={maxPrice} sort={sort} />
			</div>
		</div>
	);
};

export default Products;
