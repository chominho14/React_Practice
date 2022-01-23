import React, { useState, memo } from "react";

function Btn({ text, onClick }) {
  console.log(text, "was render");
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        borderRadius: 10,
        border: 0,
      }}
    >
      {text}
    </button>
  );
}

const MemorizedBtn = memo(Btn);

function App() {
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => {
    setValue("Revert Changes");
  };
  return (
    <div>
      <MemorizedBtn text={value} onClick={changeValue} />
      <MemorizedBtn text="Continue" />
    </div>
  );
}

export default App;
