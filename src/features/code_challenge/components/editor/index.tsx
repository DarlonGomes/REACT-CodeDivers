import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import { Container } from "./style";

function CodeEditor() {
  const [values, setValues] = React.useState(`function alfa(arr){
    for(let i = 0; i < arr.length; i ++){
      if(arr[i] === "Giggs){
        return true
      }
    }
    return false
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
      <AceEditor
        placeholder=""
        mode="javascript"
        theme="cobalt"
        name="blah2"
        onChange={(value: string) => handleChange(value)}
        fontSize={17}
        showPrintMargin
        showGutter
        highlightActiveLine
        value={values}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{
          width: "100%",
        }}
      />
      <button
        type="submit"
        onClick={() => handleSubmit()}
        style={{ width: "50px", height: "100px" }}
      >
        Submit
      </button>
    </Container>
  );
}

export default CodeEditor;
