import React, { useState } from "react";
import style from "./country.module.css";

export default function Сountry({ name, flag, altFlag }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={style.country}>
      <div className={style.name}>{name}</div>
      {imageError ? (
        <img
          onError={() => setImageError(true)}
          className={style.img}
          src={flag}
          alt={name}
        />
      ) : (
        <img className={style.img} src={altFlag} alt={name} />
      )}
    </div>
  );
}
