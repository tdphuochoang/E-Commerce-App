import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<div className="categories">
			<div className="col">
				<div className="row">
					<img
						src="https://img.ltwebstatic.com/images3_pi/2022/11/19/1668844235bcea213a17605e3cc8a981944ba24477_thumbnail_900x.webp"
						alt=""
					/>
					<button>
						<Link className="link" to="/products/1">
							NEW IN
						</Link>
					</button>
				</div>
				<div className="row">
					<img
						src="https://img.ltwebstatic.com/images3_pi/2022/08/12/166028683316378516c81b27d372d3913a97278e2b_thumbnail_900x.webp"
						alt=""
					/>
					<button>
						<Link className="link" to="/products/1">
							TRENDS
						</Link>
					</button>
				</div>
			</div>
			<div className="col">
				<div className="row">
					<img
						src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664520276a3634ed8689a3b073317d98ee78ba988_thumbnail_900x.webp"
						alt=""
					/>
					<button>
						<Link className="link" to="/products/1">
							SALE
						</Link>
					</button>
				</div>
			</div>
			<div className="col col-lg">
				<div className="row">
					<div className="col">
						<div className="row">
							<img
								src="https://img.ltwebstatic.com/images3_pi/2021/05/10/1620651337140843b9d5eb454686d3dcc786bf9a82_thumbnail_900x.webp"
								alt=""
							/>
							<button>
								<Link className="link" to="/products/1">
									TOPS
								</Link>
							</button>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img
								src="https://img.ltwebstatic.com/images3_pi/2022/07/18/1658139592752d2f3cdeb194cf7d094a00ad2b3a11_thumbnail_900x.webp"
								alt=""
							/>
							<button>
								<Link className="link" to="/products/1">
									BOTTOMS
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<img
						src="https://img.ltwebstatic.com/images3_pi/2022/09/23/1663916403ca0478907242cbcb32bfe239cd5ca9f1_thumbnail_900x.webp"
						alt=""
					/>
					<button>
						<Link className="link" to="/products/1">
							SHOES & ACCESSORIES
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Categories;
