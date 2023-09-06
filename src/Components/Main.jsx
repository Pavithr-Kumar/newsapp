import React from "react";

function Main() {
  return (
    <div className="grid place-content-center h-screen bg-gray-800">
      <h1 className="bg-green-600 text-white p-4 border-cyan-600 border-4">
        Hello world{" "}
      </h1>
      <div className="mt-5">
        <div className="max-w-xs bg-white rounded-xl p-4">
          <div>
            <img
              src="https://w0.peakpx.com/wallpaper/759/390/HD-wallpaper-itachi-uchiha-kakashi-madara-mangekyo-sharingan-minato-sharingan.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-black font-semibold	 text-lg">Itachi Uchiha</h2>
            <p className=" text-zinc-800">A legendary Character from Naruto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
