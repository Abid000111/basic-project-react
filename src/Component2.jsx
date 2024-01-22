import React, { useState } from "react";

function Component2() {
    let [a, b] = useState(false);
	return(
        <div>
            <h1 className={`h-[5vh] w-[15vw] text-black flex justify-center items-center ${a === false ? "bg-red-600" : "bg-white"}`}>{a === false ? "This is false" : "This is true"}</h1>
            <button onClick={() => {
                b(!a)
            }} className="h-[4vh] w-[10vw] bg-red-600 my-10 rounded-3xl">Click</button>
        </div>
    )
}

export default Component2;