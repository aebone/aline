import React from "react";
import ReactDOM from "react-dom";
import Timeless from "./timeless/components/Timeless";

const App = () => {
    return <div>
        <Timeless/>
    </div>
}

ReactDOM.render(<App/>, document.getElementById("root"));
