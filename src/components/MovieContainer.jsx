import React, {Component} from 'react';
import propTypes from 'prop-types';
import Movie from './Movie';

class MovieContainer extends Component{
    constructor(props) {
        super(props);
    }

    renderFilms(){
        return this.props.films.map((film) => {
            return <Movie key={film.id} info={film}/>
        })
    }

    render(){
        if(this.props.films.length > 0){
            return(
                <div className="grid-container">
                    {this.renderFilms()}
                </div>
            );
        } else {
            return(
                <div className="grid-container">
                    <div id="loader"><div></div><div></div><div></div><div></div></div>
                </div>
            );
        }
        
    }
}

MovieContainer.propTypes = {
    films: propTypes.array.isRequired
}

export default MovieContainer