import type { Metadata } from "next";
import { API_URL } from "../../../(home)/page";

export const metadata: Metadata = {
  title: "Movie",
};

const getMovie = async (id:string) => {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json()
  return json;
}


export default async function MovieDetail({
  params: {id},
}: { params: { id: string };
}) {
  const movie = await getMovie(id);

  return (
    <div>      
      <h1>{movie.title}</h1>
    </div>
  )
}