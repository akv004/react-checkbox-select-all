import "./styles.css";
import React from "react";
//Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.
const data = [
  {
    id: 1,
    name: "Mercury"
  },
  {
    id: 1,
    name: "Venus"
  },
  {
    id: 1,
    name: "Earth"
  },
  {
    id: 1,
    name: "Mars"
  },
  {
    id: 1,
    name: "Jupiter"
  },
  {
    id: 1,
    name: "Saturn"
  }
];

export default function App() {
  const inputRef = React.useRef<any>([]);
  const [list, setList] = React.useState<any>([]);

  const selectAll = (e: any) => {
    data.forEach((el, index) => {
      inputRef.current[index].checked = true;
    });
  };

  const clearAll = (e: any) => {
    data.forEach((el, index) => {
      inputRef.current[index].checked = false;
    });
  };

  const handleChange = () => {
    const currentSelections = data.map((el, index) => {
      return inputRef.current[index].checked;
    });
    console.log(currentSelections);
    setList(currentSelections);
  };

  return (
    <div className="App">
      {data.map((el, index) => {
        return (
          <div key={index} className="planet_checkbox">
            <label className="planet_checkbox-label">{el.name}</label>
            <input
              key={el.id}
              ref={(e) => (inputRef.current[index] = e)}
              type="checkbox"
              name={el.name}
              onChange={handleChange}
            />
          </div>
        );
      })}
      <div>
        <button onClick={selectAll}>Select All</button>
      </div>

      <div>
        <button onClick={clearAll}>Clear All</button>
      </div>
å
      <div>{JSON.stringify({ list })}</div>
    </div>
  );
}
