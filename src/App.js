import React, { useState, memo } from "react";
import PropTypes from "prop-types";

function Btn({ text, onClick, fontSize = 16 }) {
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
        fontSize,
      }}
    >
      {text}
    </button>
  );
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};

const MemorizedBtn = memo(Btn);

function App() {
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => {
    setValue("Revert Changes");
  };
  return (
    <div>
      <MemorizedBtn text={value} onClick={changeValue} />
      <MemorizedBtn text="Save Changes" fontSize={18} />
    </div>
  );
}

export default App;
