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
}
function EditorComponent(props: Props) {
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
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
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

export default EditorComponent;
