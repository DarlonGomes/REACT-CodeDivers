import React from "react";

import useJudge0 from "../../hooks/useJudge0";
import { EditorComponent, SolvedComponent } from "../editor";
import EditorBar from "../options";
import Outputs from "../outputs";
import { Container, Wrapper } from "./style";

interface Props {
  solution: string;
  code: string;
}
function CodeEditor(props: Props) {
  const { solution, code } = props;
  const [option, setOption] = React.useState(false);
  const [output, setOutput] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);
  const [debug, setDebug] = React.useState(
    "Here will be shown all debugging console logs"
  );
  const [results, setResults] = React.useState(
    "Result for each test will be shown here"
  );
  const [submit, setSubmit] = React.useState(0);
  const [whiteboard, setWhiteboard] = React.useState(false);
  const [values, setValues] = React.useState(() => code);
  const input = "Hello";
  const expected = "";

  const handleChange = (newValue: string) => {
    setValues(newValue);
  };

  const handleSubmit = () => {
    alert(values);
  };

  React.useEffect(() => {
    if (submit === 0) return;
    console.log(submit);
    useJudge0(values, input, input);
    setSubmit(0);
  }, [submit]);
  return (
    <Container>
      <Wrapper>
        <EditorBar
          option={option}
          setOption={setOption}
          setWhiteboard={setWhiteboard}
          setSubmit={setSubmit}
        />
        {option && <SolvedComponent value={solution} collapse="76vh" />}
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
