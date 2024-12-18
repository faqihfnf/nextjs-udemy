import Link from "next/link";
import React from "react";

const Shows = async () => {
  //# membuat request ke API
  const response = await fetch("https://api.tvmaze.com/shows");
  const shows = await response.json();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-6 text-center">TV Shows</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shows.map((show) => (
          <div
            key={show.id}
            className="mb-4 p-4 bg-gray-100 rounded-lg shadow-lg">
            <Link
              href={`/shows/${show.id}`}
              className="text-xl font-semibold text-blue-600">
              {show.name}
            </Link>
            <div className="grid grid-cols-2 ">
              <div className="mt-2">
                <p className="text-sm text-gray-600">Type: {show.type}</p>
                <p className="text-sm text-gray-600">
                  Language: {show.language}
                </p>
                <p className="text-sm text-gray-600">
                  Genres: {show.genres.join(", ")}
                </p>
                <p className="text-sm text-gray-600">Status: {show.status}</p>
                <p className="text-sm text-gray-600">
                  Runtime: {show.runtime} minutes
                </p>
                <p className="text-sm text-gray-600">
                  Premiered: {show.premiered}
                </p>
                {show.ended && (
                  <p className="text-sm text-gray-600">Ended: {show.ended}</p>
                )}
                <p className="text-sm text-gray-600">
                  Schedule: {show.schedule.time} on{" "}
                  {show.schedule.days.join(", ")}
                </p>
                <p className="text-sm text-gray-600">
                  Rating: {show.rating.average}
                </p>
                {show.network && (
                  <div className="text-sm text-gray-600">
                    Network: {show.network.name} ({show.network.country.code})
                  </div>
                )}
              </div>
              {show.image && (
                <div className="flex justify-end">
                  <img
                    src={show.image.medium}
                    alt={`Cover image of ${show.name}`}
                    className=" h-56 w-48 rounded-lg"
                  />
                </div>
              )}
            </div>

            {show.officialSite && (
              <div className="mt-2">
                <Link
                  href={`/shows/${show.id}`}
                  className="text-xl font-semibold text-blue-600">
                  Read More
                </Link>
              </div>
            )}
            <div className="mt-2">
              <span className="font-bold text-xl">Summary: </span>
              <span className="text-sm text-gray-600">
                {show.summary.replace(/<[^>]+>/g, "")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
