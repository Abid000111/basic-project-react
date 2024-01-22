import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

function App() {
	let [a, b] = useState(90);
	return (
		<div className="bg-zinc-950 w-full h-screen p-4">
			<div className="text-4xl">App</div>
			<h1 className="my-10">Marks = {a + 7}</h1>
			<button className="h-[4vh] w-[10vw] bg-red-600 rounded-3xl" onClick={() => {
				b(a+1)
			}}>Click</button>
			<Component1 price = {a} data = {{name: "Abid Shahrier", age: 23}}/>
			<Component2/>
		</div>
	);
}

export default App;
