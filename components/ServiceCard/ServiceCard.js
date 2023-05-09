import React from "react";

function ServiceCard({ title, listArray, icon, className }) {
  return (
    <div
      className={`${
        className ? className : ""
      } flex flex-col items-center justify-center border-2 p-5 mx-10 border-[#79b473] rounded-3xl h-[500px] w-3/4`}
    >
      <h2 className="text-3xl font-bold text-accent p-3">{title}</h2>
      <br />
      <ul className="pt-10 flex-col overflow-y-auto">
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
