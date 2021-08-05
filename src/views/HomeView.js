import Axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeView extends Component {
    state = {
        films: [],
    }
    
    async componentDidMount() {
        const response = await Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=681186281f0908c0103f6be4e5dcc22b`);
        console.log(response.data.results);

        this.setState({
            films: response.data.results,
        })
    
}

    render() {
        
        return (
            <>
                <h1>Trending today</h1>
                <ul>{this.state.films.map(film => <li key={film.id}><Link to={`/movies/${film.id}`}>{film.title}</Link></li>)}
                </ul>
            </>
        );
    }
}

export default HomeView;