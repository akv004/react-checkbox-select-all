import "./styles.css";

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
  return (
    <div className="App">
      {data.map((el, index) => {
        return (
          <div className="planet_checkbox">
            <label className="planet_checkbox-label">{el.name}</label>
            <input key={el.id} type="checkbox" name={el.name} />
          </div>
        );
      })}
    </div>
  );
}
