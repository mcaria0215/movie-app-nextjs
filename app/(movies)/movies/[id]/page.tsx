import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie",
};

export default function Page({
  params: {id},
}: { params: { id: string };
}) {
  return (
    <div>
      <h1>Movie {id}</h1>
    </div>
  )
}