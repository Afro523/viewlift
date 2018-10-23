import React, {Component} from 'react';

import propTypes from 'prop-types';

class Movie extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="movie-item">
                <img className="movie-img" src={this.props.info.images.image[0].src} />
                <div className="movie-title">
                    {this.props.info.title}
                </div>
            </div>
        );
    }
}

Movie.propTypes = {
    info: propTypes.object.isRequired
}

export default Movie