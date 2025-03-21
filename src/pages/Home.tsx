import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, fetchTrendingMovies } from '../redux/MovieSlice'; 
import { RootState, AppDispatch } from '../redux/Store'; 
import MovieCard from '../components/MovieCard'; 
//import { getPopularMovies, getTrendingMovies } from '../utils/api';


const Home: React.FC = () => { 
  const dispatch = useDispatch<AppDispatch>(); 
  const { popularMovies, trendingMovies, loading, error } = useSelector( 
    (state: RootState) => state.movie
  ); 

  useEffect(() => { 
    dispatch(fetchPopularMovies()); 
    dispatch(fetchTrendingMovies()); 
  }, [dispatch]); 

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>{error}</p>; 

  return ( 
    <div> 
      <h2>Popular Movies</h2>
      <div style={gridStyle}> 
        {popularMovies.map((movie: any) => ( 
          <MovieCard key={movie.id} movie={movie} />
        ))} 
      </div>

      <h2>Trending Movies</h2> 
      <div style={gridStyle}>
        {trendingMovies.map((movie: any) => ( 
          <MovieCard key={movie.id} movie={movie} />
        ))} 
      </div> 
    </div> 
  );
}; 

const gridStyle = { 
  display: 'grid', 
  gridTemplateColumns: 'repeat(3, 1fr)', 
  gap: '30px', 
  padding: '200 100px',
}; 

export default Home;