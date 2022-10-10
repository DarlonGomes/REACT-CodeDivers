import React from "react";

import { Indicator, Option, Wrapper, Play, Submit } from "./style";

interface Props {
  option: boolean;
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
  setWhiteboard: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmit: React.Dispatch<React.SetStateAction<number>>;
}

function EditorBar(props: Props) {
  const { option, setOption, setWhiteboard, setSubmit } = props;
  const [hover, setHover] = React.useState(false);
  return (
    <Indicator>
      <Wrapper>
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
      </Wrapper>
      <Wrapper>
        <Submit
          onMouseEnter={() => setHover((prev) => !prev)}
          onMouseLeave={() => setHover((prev) => !prev)}
          onClick={() => setSubmit((prev) => prev + 1)}
          style={{
            backgroundColor: hover
              ? "var(--bg-button-run)"
              : "var(--bg-button-selected)",
          }}
        >
          <Play />
        </Submit>
      </Wrapper>
    </Indicator>
  );
}

export default EditorBar;
