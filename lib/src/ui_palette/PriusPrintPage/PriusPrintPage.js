import React, { useEffect } from "react";
import "./priusPrintPage.css";
export default function PriusPrintPage(props) {
    var children = props.children;
    useEffect(function () {
        setTimeout(function () { return window.print(); }, 500);
    });
    return (React.createElement("div", { className: "bg" },
        React.createElement("div", { className: "page" }, children)));
}
