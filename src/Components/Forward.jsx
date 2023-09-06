import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Forward = forwardRef(function Forward(props, ref) {
  const imperRef = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          imperRef.current.focus();
        },
      };
    },
    []
  );
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" ref={imperRef} className="border" />
    </div>
  );
});

export default Forward;

// import { useRef } from "react";
// import "./App.css";
// import Forward from "./Components/Forward";

// //import ToDo from "./Components/ToDo";

// function App() {
//   const inpRef = useRef(null);
//   return (
//     <div className="App">
//       <Forward ref={inpRef} />
//       <button
//         onClick={() => inpRef.current.focus()}
//         className="bg-blue-500 border"
//       >
//         Focus
//       </button>
//     </div>
//   );
// }

// export default App;
