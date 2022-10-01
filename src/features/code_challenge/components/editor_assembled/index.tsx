import React from "react";

import EditorComponent from "../editor";
import EditorBar from "../options";
import Outputs from "../outputs";
import { Container, Wrapper } from "./style";

function CodeEditor() {
  const [option, setOption] = React.useState(false);
  const [output, setOutput] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);
  const [debug, setDebug] = React.useState(
    "Here will be shown all debugging console logs"
  );
  const [results, setResults] = React.useState(
    "Result for each test will be shown here"
  );
  const [whiteboard, setWhiteboard] = React.useState(false);
  const [values, setValues] = React.useState(`function modaTetragrama(str) {

}`);

  const [answer, setAnswer] = React.useState(`function modaTetragrama(str) {
  const tetragramas = [];
  for (let i = 0; i < str.length - 3; i++) {
    const tetragrama = str.slice(i, i + 4);
    tetragramas.push(tetragrama);
  }
  const hashtable = {};
  for (let i = 0; i < tetragramas.length; i++) {
    const tetragrama = tetragramas[i];
    if (!hashtable.hasOwnProperty(tetragrama)) {
      hashtable[tetragrama] = 0;
    }
    hashtable[tetragrama]++;
  }
  let contagemResposta = 0;
  let resposta = "";
  Object.keys(hashtable).forEach((tetragrama) => {
    if (
      hashtable[tetragrama] > contagemResposta ||
      (hashtable[tetragrama] === contagemResposta && tetragrama > resposta)
    ) {
      resposta = tetragrama;
      contagemResposta = hashtable[tetragrama];
    }
  });
  return resposta;
}`);

  const handleChange = (value: string) => {
    setValues(value);
  };
  console.log(values);

  const handleSubmit = () => {
    alert(values);
  };
  return (
    <Container>
      <Wrapper>
        <EditorBar
          option={option}
          setOption={setOption}
          setWhiteboard={setWhiteboard}
        />
        {option && <EditorComponent value={answer} collapse="76vh" />}
        {!option && !collapse && (
          <EditorComponent value={values} collapse="55vh" />
        )}
        {!option && collapse && (
          <EditorComponent value={values} collapse="72vh" />
        )}
      </Wrapper>

      {!option && (
        <Wrapper>
          <Outputs
            output={output}
            setOutput={setOutput}
            collapse={collapse}
            setCollapse={setCollapse}
            results={results}
            debug={debug}
          />
        </Wrapper>
      )}
    </Container>
  );
}

export default CodeEditor;
