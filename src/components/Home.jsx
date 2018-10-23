import React, {Component} from 'react';
import propTypes from 'prop-types';

import MovieContainer from './MovieContainer';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            films:[]
        }
    }

    componentDidMount() {
        //Get Medals JSON data
        fetch("http://www.snagfilms.com/apis/films.json?limit=10")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
                this.setState({
                    films : result.films.film
                })
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )  
    }

    render(){
        return(
            <div>
                <h2 id="movie-title">ViewLift Movie Selection</h2>
                <MovieContainer films={this.state.films} />
            </div>
        );
    }
}

export default Home