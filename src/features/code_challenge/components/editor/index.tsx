import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";

interface Props {
  value: string;
  collapse: string;
  onChange: (newValue: string) => void;
}
function EditorComponent(props: Props) {
  const { value, collapse, onChange } = props;
  return (
    <AceEditor
      placeholder=""
      mode="javascript"
      theme="cobalt"
      name="blah2"
      fontSize={19}
      showPrintMargin
      showGutter
      highlightActiveLine={false}
      value={value}
      onChange={onChange}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      style={{
        width: "100%",
        height: collapse,
        lineHeight: "21px",
        letterSpacing: "1px",
      }}
    />
  );
}

function SolvedComponent(props: Partial<Props>) {
  const { value, collapse } = props;
  return (
    <AceEditor
      placeholder=""
      mode="javascript"
      theme="cobalt"
      name="blah2"
      fontSize={19}
      showPrintMargin
      showGutter
      highlightActiveLine={false}
      value={value}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      style={{
        width: "100%",
        height: collapse,
        lineHeight: "21px",
        letterSpacing: "1px",
      }}
    />
  );
}

export { EditorComponent, SolvedComponent };
