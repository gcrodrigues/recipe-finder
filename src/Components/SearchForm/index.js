import React from 'react';
import {FaSearch} from 'react-icons/fa'
import styles from './index.module.css';
const SearchForm = ({ submit, change, value }) => {
  return(
    <form 
    className={styles.form}
    onSubmit = {submit}>
    
    <input 
    className={styles.formInput}
    placeholder="Search for a recipe"
    type="text" id="inputRecipe" 
    value={value} 
    onChange={change}/>
    
    <button className={styles.formButton}>
      <FaSearch/>
    </button>

    </form>
  );
}

export default SearchForm;