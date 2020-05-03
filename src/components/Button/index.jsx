import React from "react"
import styles from "./styles.module.scss"
import Icon from "../Icon"

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
        <Icon
          size={iconSizes[props.size || "medium"]}
          className={styles.iconLeft}
        >
          {props.iconLeft}
        </Icon>
      ) : (
        <></>
      )}
      {props.children}
      {props.iconRight ? (
        <Icon
          size={iconSizes[props.size || "medium"]}
          className={styles.iconRight}
        >
          {props.iconRight}
        </Icon>
      ) : (
        <></>
      )}
    </button>
  )
}
