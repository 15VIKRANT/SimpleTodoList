import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(" ");
  const [cartitem, setcartitem] = useState([]);

  const itemevent = (event) => {
    if (event.target.value != null) {
      setData(event.target.value);
    }
  };

  const addtocart = () => {
    setcartitem((olditem) => {
      return [...olditem, data];
    });

    setData("");
    //console.log(cartitem);
  };

  const deletekr = (id) => {
    setcartitem((olditem) => {
      return olditem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <input type="text" placeholder="Add Something" onChange={itemevent} />

      <button className="buttonadd" onClick={addtocart}>
        +
      </button>

      {cartitem.map((e, index) => {
        return (
          <>
            <div className="result">
              <h2>{e}</h2>
              <h2>{index}</h2>
              <h4
                className="deleteicon"
                key={index}
                onClick={() => {
                  deletekr(index);
                }}
              >
                -
              </h4>
            </div>
          </>
        );
      })}
    </div>
  );
}
