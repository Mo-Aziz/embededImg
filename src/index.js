import React from "react";
import ReactDOM from "react-dom";

const img ="https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading" >Random IMages BY Lorem picsum</h1>
<img alt="random-image" src={img + "?grayscale"} />
<img alt="random-image" src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
