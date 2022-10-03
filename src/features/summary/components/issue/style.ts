import styled from "styled-components";

const Container = styled.div`
  min-height: 300px;
  max-height: 300px;
  min-width: 305px;
  max-width: 305px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
`;

const Title = styled.h5`
  font-size: 1.2rem;
  font-family: "Cabin";
  color: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  font-family: "Cabin";
  line-height: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

const Progress = styled.div`
  height: 60px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    z-index: 1;
    font-family: "Cabin";
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    font-size: 14px;
    position: absolute;
  }
`;

export { Container, Image, Title, Description, Progress };
