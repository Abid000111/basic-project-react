import React from "react";

function Component1({ price, data }) {
	return (
		<div className="h-[14vh] w-[18vw] bg-red-600 flex flex-wrap justify-center items-center my-10">
			<div>Price = {price}</div>
			<h2>Name: {data.name}</h2>
			<h2>Age: {data.age}</h2>
		</div>
	);
}

export default Component1;
