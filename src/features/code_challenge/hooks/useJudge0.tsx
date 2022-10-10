import axios from "axios";

function encode(str: string) {
  return btoa(decodeURI(encodeURIComponent(str || "")));
}

function decode(bytes: string) {
  const escaped = encodeURI(atob(bytes || ""));
  try {
    return decodeURIComponent(escaped);
  } catch {
    return decodeURI(escaped);
  }
}

export default function useJudge0(code: string, input: string, output: string) {
  const encodedOutput = encode(output);

  const formData = {
    language_id: 63,
    source_code: encode(code),
    stdin: encode(input),
    expected_output: encodedOutput,
    redirect_stderr_to_stdout: true,
  };

  const options = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: { base64_encoded: "true", wait: "true", fields: "*" },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "0b5166a45emsh9eb86f705ff3a89p14042djsn44e562a0ef5e",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    data: formData,
  };

  axios.request(options).then((response) => {
    console.log(response.data);
    console.log("input: ", decode(response.data.stdin));
    console.log("output: ", decode(response.data.expected_output));
    console.log("description: ", response.data.status.description);
  });
}
