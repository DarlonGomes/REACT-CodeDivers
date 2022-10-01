import React from "react";

import { Output, Indicator, Option, OpenIcon, CloseIcon } from "./style";

interface Props {
  output: boolean;
  setOutput: React.Dispatch<React.SetStateAction<boolean>>;
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  debug: string;
  results: string;
}
function Outputs(props: Props) {
  const { output, setOutput, collapse, setCollapse, debug, results } = props;
  return (
    <>
      {!collapse && (
        <>
          <Indicator>
            <Option
              style={{
                backgroundColor: output
                  ? "var(--bg-button-unselected)"
                  : "var(--bg-button-selected)",
                color: output
                  ? "var(--text-unselected)"
                  : "var(--text-primary)",
              }}
              type="submit"
              onClick={() => setOutput((prev) => !prev)}
              disabled={!output}
            >
              Results
            </Option>
            <Option
              style={{
                backgroundColor: output
                  ? "var(--bg-button-selected)"
                  : "var(--bg-button-unselected)",
                color: output
                  ? "var(--text-primary)"
                  : "var(--text-unselected)",
              }}
              type="submit"
              onClick={() => setOutput((prev) => !prev)}
              disabled={output}
            >
              Console
            </Option>

            <CloseIcon onClick={() => setCollapse((prev) => !prev)} />
          </Indicator>
          <Output>
            {!output && <p>{results}</p>}
            {output && <p>{debug}</p>}
          </Output>
        </>
      )}
      {collapse && (
        <Indicator>
          <OpenIcon onClick={() => setCollapse((prev) => !prev)} />
        </Indicator>
      )}
    </>
  );
}

export default Outputs;
