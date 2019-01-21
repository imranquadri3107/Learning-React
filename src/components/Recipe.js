import React from 'react';

const API_KEY = '2930981db6150663e713632187ef62bc';

class Recipe extends React.Component{
    state = {
        activeRecipe: []
    }

    componentDidMount =async ()=>{

        const title = this.props.location.state.recipe;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
      
        const res = await req.json();
        console.log(res.recipes[0]);
        
    }
    render(){
        console.log(this.props);
        return(
            <div>Recipe componenet</div>
        );
    }
}

export default Recipe;