import React, { useState } from "react";

import { TextInput, SecretInput, OpenEye, ClosedEye, Wrapper } from "../style";

interface Props {
  type: string;
  value: string;
  placeholder: string;
  status: boolean;
  callback: (event: React.ChangeEvent<HTMLInputElement>) => unknown;
}

export function NonPrivateInput(props: Props) {
  const { type, value, placeholder, callback, status } = props;
  return (
    <TextInput
      type={type}
      value={value}
      onChange={callback}
      placeholder={placeholder}
      disabled={status}
      autoComplete="off"
    />
  );
}

export function PrivateInput(props: Props) {
  const { type, value, placeholder, callback, status } = props;
  const [visibility, setVisibility] = useState(true);

  return (
    <Wrapper>
      {visibility && (
        <>
          <SecretInput
            type={type}
            value={value}
            onChange={callback}
            placeholder={placeholder}
            disabled={status}
            autoComplete="off"
          />
          <OpenEye onClick={() => setVisibility((prev) => !prev)} />
        </>
      )}
      {!visibility && (
        <>
          <SecretInput
            type="text"
            value={value}
            onChange={callback}
            placeholder={placeholder}
            disabled={status}
            autoComplete="off"
          />
          <ClosedEye onClick={() => setVisibility((prev) => !prev)} />
        </>
      )}
    </Wrapper>
  );
}
