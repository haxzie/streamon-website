import React from "react"
import styles from "./styles.module.scss"

export default function Button(props) {
  const iconSizes = {
    small: "18",
    medium: "24",
    large: "32",
  }

  return (
    <button
      className={`${styles.btn} ${props.className || ""} ${
        props.size ? styles[props.size] : styles.medium
      }`}
    >
      {props.iconLeft ? (
        <img
          src={props.iconLeft}
          size={iconSizes[props.size || "medium"]}
          className={styles.iconLeft}
        />
      ) : (
        <></>
      )}
      {props.children}
      {props.iconRight ? (
        <img
          src={props.iconRight}
          size={iconSizes[props.size || "medium"]}
          className={styles.iconRight}
        />
      ) : (
        <></>
      )}
    </button>
  )
}
