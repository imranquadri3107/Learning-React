import React from 'react';

const Form =(porps)=> (
    <form onSubmit ={porps.getRecipe}>
        <input type = "text"/>
        <button>Search</button>
    </form>
);

export default Form;