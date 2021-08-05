import { Suspense, Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Axios from 'axios';
import Cast from '../Components/Cast';
import Reviews from '../Components/Reviews';

class MovieDetailsPage extends Component {
    state = {
          poster_path: null,
        release_date: null,
        title: null,
        vote_average: null,
        overview: null,
        genres: [],
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=681186281f0908c0103f6be4e5dcc22b`);
        
        this.setState({
            ...response.data
        })

       
}


    render() {
        const { poster_path, title, release_date, vote_average, overview, genres } = this.state;
        const image = `https://image.tmdb.org/t/p/w200/${poster_path}`
        const { match } = this.props;
        return (
          
            <>
                <h1>THIS IS PAGE ONE MOVIE {this.props.match.params.movieId}</h1>
                <NavLink to="/"><button type="button">Go back</button></NavLink>
                <img src={image} alt={title} />
                <h1>{title}({release_date})</h1>
                <p>User Score: {vote_average * 10}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                {genres.map(({ id, name }) => (<li key={id}>{name}</li>))}
                </ul>
                <h2>Additional information</h2>
                <ul>
                    <li><NavLink to={`${match.url}/cast`}>Cast</NavLink></li>
                    <li><NavLink to={`${match.url}/reviews`}>Reviews</NavLink></li>
                </ul>

              <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>
                        <Route path={`${match.path}/cast`} component={Cast} />
                        <Route path={`${match.path}/reviews`} component={Reviews} />
                    </Switch>
                </Suspense>
                   
                </>
        )
    }
}

export default MovieDetailsPage;