import { API_URL } from "../app/(home)/page";
import styles from "../style/MovieVideos.module.css";

const getMovieVideos = async (id:string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json()
  return json;
}

export default async function MovieVideos({id}: {id:string}) {
  const videos = await getMovieVideos(id);
  const limitedVideos = videos.slice(0, 6);

  return (
    <div className={styles.container}>
      {limitedVideos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}