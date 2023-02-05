import React from "react";

const TextoDuasCores = ({ texto, palavra1, palavra2, cor1, cor2 }) => {
  const dividirTexto = texto.split(" ");

  return (
    <h1>
      {dividirTexto.map((palavraAtual, index) => (
        <span
          key={index}
          style={{
            color:
              palavraAtual === palavra1
                ? cor1
                : palavraAtual === palavra2
                ? cor2
                : "inherit",
          }}
        >
          {palavraAtual}{" "}
        </span>
      ))}
    </h1>
  );
};

export default TextoDuasCores;
