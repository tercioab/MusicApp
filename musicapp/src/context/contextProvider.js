import React from "react";
import myContext from "./context";

function MyContextProvider({ children }) {
	const obj = {
		state: "recebeu",
	};

    return (
        <myContext.Provider value={obj}>
        {children}
        </myContext.Provider>
    )
}

export default MyContextProvider;