import type { Metadata } from "next";
import { Suspense } from "react";
import MovieVideos from "../../../../components/MovieVideos";
import MovieInfo from "../../../../components/MovieInfo";
import { getMovieId } from "../../../../components/MovieInfo";
import MovieCredits from "../../../../components/MovieCredits";

interface IParams {
  params: {id: string};
}

export async function generateMetadata({ params: {id}} : IParams) {
  const movie = await getMovieId(id);
  return {
    title: movie.title,
  }
}

export default async function MovieDetailPage({
  params: {id},
}: IParams) {
  return (
    <div>
      <h2>Movie info</h2>
      <Suspense fallback={<h3>Loading movie info</h3>}>
        <MovieInfo id={id}/>
      </Suspense>      
      <Suspense fallback={<h3>Loading movie credits</h3>}>
        <MovieCredits id={id}/>
      </Suspense>
      <h2>Movie videos</h2>
      <Suspense fallback={<h3>Loading movie videos</h3>}>
        <MovieVideos id={id}/>
      </Suspense>      
    </div>
  )
}