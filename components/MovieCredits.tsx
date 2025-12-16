import { API_URL } from "../app/(home)/page";
import styles from "../style/MovieCredits.module.css";

const DEFAULT_PROFILE_IMAGE = "https://img.freepik.com/premium-vector/logo-movie-film-company_745688-275.jpg";

export const getMovieCredits = async (id:string) => {
  const response = await fetch(`${API_URL}/${id}/credits`);
  const json = await response.json()
  return json;  
}

export default async function MovieCredits({id}: {id:string}) {
  const credits = await getMovieCredits(id);
  const limited = credits.slice(0, 12);

  return (
    <div className={styles.container}>
      {limited.map((credit) => (
        <div>
          <img className={styles.poster} src={credit.profile_path||DEFAULT_PROFILE_IMAGE} alt={credit.name} />
          <div className={styles.info}>
            <p>{credit.character}</p>
            <p>{credit.name}</p>
          </div>
        </div>
      ))}   
    </div>    
  );
}