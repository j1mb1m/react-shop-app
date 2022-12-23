import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";


export default function Card({ title, price, size, isNew, colors, img }) {

    return (
        <div className={styles.card}>
            <img src={img} alt={title} />
            <img className={styles.like} src="./img/like-yes.svg" alt="Unliked" />
            <div className="description">
                <p className={styles.title} >{title}<span>{isNew ? "new" : ""}</span></p>
                <p className={styles.price} >{price}</p>
                <p className={styles.size} >{size.join(" ")}</p>
                <ul>
                    {colors.map((color, index) =>
                        <li key={index}>
                            <div style={{
                                backgroundColor: `${color}`,
                                width: "14px",
                                height: "14px",
                                border: "0.3px solid #252525",
                                marginRight: "5px",
                                borderRadius: "50%"
                            }}></div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired,
    size: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
}
