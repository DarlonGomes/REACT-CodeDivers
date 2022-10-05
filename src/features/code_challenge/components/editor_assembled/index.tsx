import React from "react";

import { EditorComponent, SolvedComponent } from "../editor";
import EditorBar from "../options";
import Outputs from "../outputs";
import { Container, Wrapper } from "./style";

interface Props {
  solution: { code: string };
}
function CodeEditor(props: Props) {
  const { solution } = props;
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

  const handleChange = (newValue: string) => {
    setValues(newValue);
  };

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
        {option && <SolvedComponent value={solution.code} collapse="76vh" />}
        {!option && !collapse && (
          <EditorComponent
            value={values}
            onChange={handleChange}
            collapse="55vh"
          />
        )}
        {!option && collapse && (
          <EditorComponent
            value={values}
            onChange={handleChange}
            collapse="72vh"
          />
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
