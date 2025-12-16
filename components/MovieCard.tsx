"use client";

import Link from "next/link";
import styles from "../style/MovieCard.module.css"
import { useRouter } from "next/navigation";

interface IMovieProps {
  id:string;
  poster_path:string;
  title:string;
}

export default function MovieCard({id, poster_path, title} : IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  }
  
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick}/>
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}