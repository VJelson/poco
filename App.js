import "./App.css";
import Counter from "./Counter";

export const Hi = (props) => {
  return (
    <div>
      HI {props.name} your age is {props.age}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        JAFAKE!
        <Counter />
        <Hi name="arlene" age="19" />
        <Hi name="aiza" age="18" />
        <Hi name="ana" age="17" />
        <Hi name="adrian" age="14" />
      </header>
    </div>
  );
}

export default App;
// import React from "react";

// const employee = ["Martin", "nteng", "khey"];
// export default function App() {
//   return (
//     <div className="App">
//       {employee.map((employee) => {
//         return <h1> {employee} </h1>;
//       })}
//     </div>
//   );
// }
