import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 6vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 24px;
`;

const Return = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-family: "Lexend";
    font-size: 16px;
    color: var(--text-primary);
  }
`;

const Forward = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-family: "Lexend";
    font-size: 16px;
    color: var(--text-primary);
  }
`;

const Exercise = styled.div`
  p {
    font-family: "Lexend";
    font-size: 16px;
    color: var(--text-primary);
  }
`;

const ArrowBack = styled(IoIosArrowBack)`
  font-size: 20px;
  color: var(--text-primary);
`;

const ArrowForward = styled(IoIosArrowForward)`
  font-size: 20px;
  color: var(--text-primary);
`;

export { Container, Return, Exercise, Forward, ArrowBack, ArrowForward };
