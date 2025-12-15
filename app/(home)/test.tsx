"use client"
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async ()=>{
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const data = await response.json();

    setMovies(data);
    setIsLoading(false);
  }  

  useEffect(()=>{
    fetchMovies();
  },[])
  
  return (
    <div>
      {isLoading?"Loading...":JSON.stringify(movies)}
    </div>
  );
}