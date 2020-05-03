import React from 'react';
import {FaAngleRight} from 'react-icons/fa'
import styles from './index.module.css'

const Cards = ({ image, title, cal, ingredients}) => {
  return(
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.image} src={image} alt={{title}}/>
      <p className={styles.cal}>{`Calories: ${cal.toFixed(0)} cal`}</p>
      <h3 className={styles.ingredientsTitle}>Ingredients:</h3>
      <ul className={styles.ingredients}>
        {ingredients.map((ingredient, index) => {
          return(<li className={styles.ingredient} key={index}><FaAngleRight size={16}/>{ingredient.text}</li>)
        })}
      </ul>
    </div>
  );
}

export default Cards;