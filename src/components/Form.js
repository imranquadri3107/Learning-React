import React from 'react';

const Form =(porps)=> (
    <form onSubmit ={porps.getRecipe} style = {{marginBottom: "2rem"}}>
        <input className = "form__input" type =  'text' name = 'recipeName'/>
        <button className = "form__button">Search</button>
    </form>
);

export default Form;