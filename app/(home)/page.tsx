import type { Metadata } from "next";
import MovieCard from "../../components/MovieCard";
import styles from "../../style/home.module.css";

export const metadata: Metadata = {
  title: "Home",
}

export const API_URL: string = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const response = await fetch(API_URL);
  const json = await response.json()
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie)=>(
        <MovieCard key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
      ))}
    </div>
  );
}