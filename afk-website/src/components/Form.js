import React from "react";
// import image from "./image.svg";
// import resizingHandle from "./resizing-handle.svg";
import "./style.css";
// import vector from "./vector.svg";

export const Frame = () => {
    return (
        <div className="frame">
            <div className="textbox">
                <div className="textfield">
                    {/* <img className="vector" alt="Vector" src={image} /> */}

                    <div className="text-wrapper">Full name</div>
                </div>

                <div className="div">Your name</div>
            </div>

            <div className="textbox-2">
                <div className="div">Your email</div>

                <div className="textfield">
                    {/* <img className="vector" alt="Vector" src={vector} /> */}

                    <div className="text-wrapper">yourmail@emaily.com</div>
                </div>
            </div>

            <div className="textarea">
                <div className="div">How can we help?</div>

                <div className="textfield-2">
                    <div className="text-wrapper-2">Enter your message here</div>

                    {/* <img
                        className="resizing-handle"
                        alt="Resizing handle"
                        src={resizingHandle}
                    /> */}
                </div>
            </div>

            <button className="button">
                <div className="text-wrapper-3">Send my message</div>
            </button>
        </div>
    );
};
