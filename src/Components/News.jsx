import React, { useEffect, useRef, useState } from "react";

function News() {
  const API_KEY = "8eb7b22d71a7195b97d8b877502be56f";
  const url = "https://gnews.io/api/v4/search?q=";
  const [data, setData] = useState([]);
  const input = useRef(null);
  const [query, setQuery] = useState("India news");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${url}${query}&apikey=${API_KEY}`);
      const getData = await response.json();
      setData(getData.articles);
    }

    fetchData();
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-300">
      <nav className=" sticky top-0 z-10">
        <div className=" lg:h-20 shadow shadow-zinc-500 pb-2 md:h-24 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-300 flex gap-12 justify-center items-center flex-wrap">
          <span
            className="text-white font-semibold active:text-gray-400 text-xl cursor-pointer hover:scale-[1.03] transition-all duration-300"
            onClick={() => setQuery("Sports")}
          >
            Sports
          </span>
          <span
            className="text-white font-semibold  active:text-gray-400 text-xl cursor-pointer hover:scale-[1.03] transition-all duration-300"
            onClick={() => setQuery("Movies")}
          >
            Movies
          </span>
          <span
            className="text-white font-semibold  active:text-gray-400 text-xl cursor-pointer hover:scale-[1.03] transition-all duration-300"
            onClick={() => setQuery("Politics")}
          >
            Politics
          </span>
          <span
            className="text-white font-semibold  active:text-gray-400 text-xl cursor-pointer hover:scale-[1.03] transition-all duration-300"
            onClick={() => setQuery("Technology")}
          >
            Technology
          </span>
          <span
            className="text-white font-semibold  active:text-gray-400 text-xl cursor-pointer hover:scale-[1.03] transition-all duration-300"
            onClick={() => setQuery("Anime")}
          >
            Anime
          </span>
          <div className="">
            <input
              ref={input}
              type="text"
              className=" rounded px-2 py-1 outline-none focus:bg-gray-100 mr-2"
              placeholder="Search News"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setQuery(input.current.value);
                  input.current.value = "";
                }
              }}
            />
            <button
              onClick={() => {
                if (input.current.value !== "") {
                  setQuery(input.current.value);
                  input.current.value = "";
                }
              }}
              className="px-2 py-1 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded hover:scale-[1.03] transition-all duration-300 active:shadow"
            >
              Search
            </button>
          </div>
        </div>
      </nav>

      <main className="w-11/12 mx-auto py-12">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => window.open(item.url, "blank_")}
                className=" border-2 w-96 md:5/12  lg:w-3/12  shadow-xl rounded hover:shadow-slate-500 cursor-pointer  duration-700 bg-slate-200 overflow-hidden hover:scale-[1.01]"
              >
                <div className="">
                  <img
                    className=" h-52 w-full aspect-square"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="h-1/2  px-3 py-1">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p className="text-blue-500 text-xs font-bold my-2">
                    {`${item.source.name}  •  ${Date(
                      item.publishedAt
                    ).toLocaleString("en-US", {
                      timeZone: "Asia/Jakarta",
                    })}`}
                  </p>
                  <p className="text-gray-600 mb-2 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default News;
