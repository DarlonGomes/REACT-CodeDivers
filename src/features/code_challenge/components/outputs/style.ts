import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const Output = styled.div`
  width: 100%;
  height: 16vh;
  background-color: var(--bg-code-nav);
  box-sizing: border-box;
  padding: 15px 10px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  p {
    font-family: "Cabin";
    font-size: 16px;
    color: var(--text-post-info);
  }
`;

const Indicator = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  position: relative;
  h3 {
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 5px 5px 0 0;
  }
`;

const Option = styled.button`
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px 5px 0 0;
  font-family: "Lexend";
  font-weight: 500;
  border: none;
  border-bottom: 1px solid var(--border-editor);
`;

const OpenIcon = styled(IoIosArrowUp)`
  color: var(--text-primary);
  margin-right: 10px;
  font-size: 22px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 7px;
`;

const CloseIcon = styled(IoIosArrowDown)`
  color: var(--text-primary);
  font-size: 22px;
  margin-right: 10px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 7px;
`;

export { Output, Indicator, Option, OpenIcon, CloseIcon };
