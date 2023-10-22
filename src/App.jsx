import { useEffect, useState } from "react";

const data = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "|",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  '"',
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
];

function App() {
  const [char, setChar] = useState(
    data[Math.floor(Math.random() * (data.length - 1))]
  );
  const [text, setText] = useState("");
  const [cw, setCw] = useState([0, 0]);

  function handleChange() {
    if (text == char) {
      console.log("equal");
      setText("");
      setChar(data[Math.floor(Math.random() * (data.length - 1))]);
      setCw((e) => [e[0] + 1, e[1]]);
    } else {
      console.log("not equal");
      setText("");
      setCw((e) => [e[0], e[1] + 1]);
    }
  }

  useEffect(
    function () {
      if (text !== "") handleChange();
    },
    [text]
  );

  return (
    <div className="bg-slate-900 text-white h-full flex gap-4 flex-col justify-evenly text-3xl items-center">
      <p id="inp">{char || "Start Typing"}</p>
      <input
        placeholder="Start Typing"
        className="text-black text-center"
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        value={text}
      />
      <p>
        c: {cw[0]} w: {cw[1]}
      </p>
    </div>
  );
}

export default App;
