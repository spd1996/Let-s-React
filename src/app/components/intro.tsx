import React from "react";
import ColorfulClock from "./clock";

const SelfIntroduction = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-white text-center pt-20">
        <h1 className="text-4xl font-bold mb-4 text-white">
          {`Hello, I'm Suraj Prakash Dwivedi`}
        </h1>
        <p className="text-lg mb-6 text-white">
          A React developer with expertise in backend development using Node.js.
        </p>

        <div className="flex items-center justify-center mb-8 h-full">
          <svg
            fill="#000000"
            height="200px"
            width="200px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 485.8 485.8"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M346.3,440.6h2.3c-24-3-36.8-12.6-43.6-22.3H180.8c-6.8,9.7-19.6,19.3-43.6,22.3h1.5c-7.5,0-13.5,6.1-13.5,13.5 s6.1,13.5,13.5,13.5h207.6c7.5,0,13.5-6.1,13.5-13.5S353.8,440.6,346.3,440.6z"></path>{" "}
                  <path d="M342.4,170.9l-19.7-3.4c-1.9-7.6-4.8-14.7-8.7-21.3l11.6-16.2c2.1-3,1.8-7.1-0.8-9.7l-6.9-7l-6.9-7 c-2.6-2.6-6.7-3-9.7-0.8L285,117c-6.7-4-14-7.1-21.8-9L260,88.5c-0.6-3.7-3.7-6.3-7.5-6.4h-9.9h-9.9c-3.7,0-6.9,2.6-7.5,6.3 l-3.5,19.8c-7.6,1.9-14.7,5-21.2,8.8l-16-11.7c-3-2.1-7.1-1.8-9.7,0.8l-7,6.9l-7,6.9c-2.6,2.6-3,6.7-0.8,9.7l11.6,16.4 c-3.9,6.6-6.8,13.7-8.7,21.2l-19.5,3.2c-3.7,0.6-6.3,3.7-6.4,7.5v9.9v9.9c0,3.7,2.6,6.9,6.3,7.5l19.8,3.5c1.9,7.6,5,14.7,8.8,21.2 L160.3,246c-2.1,3-1.8,7.1,0.8,9.7l6.9,7l6.9,7c2.6,2.6,6.7,3,9.7,0.8l16.4-11.6c6.4,3.8,13.4,6.7,20.7,8.6l3.2,19.7 c0.6,3.7,3.7,6.3,7.5,6.4h9.9h9.9c3.7,0,6.9-2.6,7.5-6.3l3.4-19.7c7.6-1.9,14.7-4.8,21.3-8.7l16.2,11.6c3,2.1,7.1,1.8,9.7-0.8 l7-6.9l7-6.9c2.6-2.6,3-6.7,0.8-9.7l-11.3-16.3c3.9-6.6,6.9-13.7,8.9-21.2l19.7-3.2c3.7-0.6,6.3-3.7,6.4-7.5v-9.9v-9.9 C348.6,174.7,346,171.5,342.4,170.9z M254.3,237.6c-27.5,6.3-54.9-10.9-61.2-38.4s10.9-54.9,38.4-61.2s54.9,10.9,61.2,38.4 C298.9,203.8,281.8,231.2,254.3,237.6z"></path>{" "}
                  <path d="M485.8,307.8V53.5c0-19.5-15.8-35.3-35.3-35.3H35.3C15.8,18.2,0,34,0,53.5V314c0,0.1,0,0.3,0,0.4v47.2c0,0.2,0,0.4,0,0.6 v2.6c0,0.2,0,0.4,0,0.6v0.7l0,0C0.6,382.7,14.3,396,31.1,396h143.3h14.3H297h8.8h148.8c16.8,0,30.4-13.3,31.1-29.9l0,0 L485.8,307.8L485.8,307.8z M271.1,362.1c0,4.3-3.5,7.8-7.8,7.8h-40.9c-4.3,0-7.8-3.5-7.8-7.8v-5.4c0-4.3,3.5-7.8,7.8-7.8h40.9 c4.3,0,7.8,3.5,7.8,7.8V362.1z M450.5,320.2H35.3c-3.4,0-6.2-2.8-6.2-6.2V53.5c0-3.4,2.8-6.2,6.2-6.2h415.1c3.4,0,6.2,2.8,6.2,6.2 V314l0,0C456.6,317.4,453.9,320.2,450.5,320.2z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>

        <p className="text-lg text-white">
          {`Let's build amazing things together! 🚀`}
        </p>
        <div className="pt-4">
            <ColorfulClock></ColorfulClock>
        </div>
      </div>
    </div>
  );
};

export default SelfIntroduction;
