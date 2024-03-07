import React, { useEffect, useRef, useState } from "react";
import style from "./visible.module.css";
import cn from "classnames";

export default function VisiblePanel({
  countries,
  setCurrentPage,
  countriesVisible,
}) {
  const [currentNum, setCurrentNum] = useState(0);

  return (
    <div className={style.visiblePanel}>
      {countries
        .slice(0, countries.length / countriesVisible)
        .map((_, index) => {
          return (
            <div
              onClick={() => {
                setCurrentNum(index);
                setCurrentPage(index);
              }}
              key={index}
              className={cn(style.num, currentNum === index && style.numActive)}
            >
              {index + 1}
            </div>
          );
        })}
    </div>
  );
}
