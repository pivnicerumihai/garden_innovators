import React from "react";

function ServiceCard({ title, listArray, icon, className }) {
  return (
    <div
      className={`${
        className ? className : ""
      } flex flex-col items-center border-2 p-5 mx-10 border-[#6ca7f5] rounded-3xl h-[500px] w-3/4`}
    >
      <h2 className="text-3xl font-bold text-accent p-2 text-center">{title}</h2>
 
      <ul className="pt-10 overflow-y-auto flex flex-col">
        {listArray.map((item, index) => {
          return (
            <li key={index} className="py-1 font-rubik text-lg">
              &#x2022; {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ServiceCard;
