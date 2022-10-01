import React from "react";

import { Indicator, Option } from "./style";

interface Props {
  option: boolean;
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
  setWhiteboard: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditorBar(props: Props) {
  const { option, setOption, setWhiteboard } = props;
  return (
    <Indicator>
      <Option
        style={{
          backgroundColor: option
            ? "var(--bg-button-unselected)"
            : "var(--bg-button-selected)",
          color: option ? "var(--text-unselected)" : "var(--text-primary)",
        }}
        type="submit"
        onClick={() => setOption((prev) => !prev)}
        disabled={!option}
      >
        Your solution
      </Option>
      <Option
        style={{
          backgroundColor: option
            ? "var(--bg-button-selected)"
            : "var(--bg-button-unselected)",
          color: option ? "var(--text-primary)" : "var(--text-unselected)",
        }}
        type="submit"
        onClick={() => setOption((prev) => !prev)}
        disabled={option}
      >
        Our solution
      </Option>
    </Indicator>
  );
}

export default EditorBar;
