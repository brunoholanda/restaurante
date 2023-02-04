import React from "react";

const TextoDuasCores = ({ text, word1, word2, cor1, cor2 }) => {
  const splitText = text.split(" ");

  return (
    <h1>
      {splitText.map((currentWord, index) => (
        <span
          key={index}
          style={{
            color:
              currentWord === word1
                ? cor1
                : currentWord === word2
                ? cor2
                : "inherit",
          }}
        >
          {currentWord}{" "}
        </span>
      ))}
    </h1>
  );
};

export default TextoDuasCores;
