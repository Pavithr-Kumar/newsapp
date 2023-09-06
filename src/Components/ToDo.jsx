import React, { useRef, useState } from "react";

function ToDo() {
  const [list, setList] = useState([]);
  const input = useRef(null);
  const addItem = () => {
    if (input.current.value === "") alert("Add a valid task");
    else {
      setList([...list, input.current.value]);
      input.current.value = "";
    }
  };

  return (
    <div className="border bg-gradient-to-br from-green-300 to-lime-300 min-h-screen ">
      <div className=" mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 w-5/6 mt-20 border p-8 bg-white rounded">
        <h1 className="text-2xl font-bold mb-7">ToDo List 📝 </h1>
        <div className="flex mb-3">
          <input
            type="text"
            placeholder="Add Tasks"
            className="border border-gray-400 pl-2  w-3/4 font-sans rounded outline-none focus:bg-gray-100"
            ref={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") addItem();
            }}
          />
          <button
            className="bg-gradient-to-br from-blue-600 to-cyan-500 active:scale-110 px-5 py-1 ml-6 rounded font-sans font-medium"
            onClick={addItem}
          >
            Add
          </button>
        </div>
        <div>
          <ul>
            {list.map((item, index) => (
              <div className="flex gap-3  mt-7  ">
                <li className="font-sans font-medium text-lg px-2 py-1 w-3/4  bg-gray-100 rounded">
                  {item}{" "}
                </li>
                <button
                  className="bg-gradient-to-tr from-red-400 to-rose-500  px-3 py-1  ml-3 rounded font-sans active:scale-110 font-medium"
                  onClick={() => {
                    const newList = list.filter((itm, i) => i !== index);
                    setList(newList);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
