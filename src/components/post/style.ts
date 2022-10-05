import {
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineEllipsis,
} from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 150px;
  border-bottom: 1px solid var(--border-feed);
  padding: 15px;
  display: flex;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  object-fit: cover;
  border: 1px solid var(--border-user);
  padding: 1px;
`;

const LeftSide = styled.div`
  width: 60px;
  min-height: 150px;
`;

const Informative = styled.div`
  width: 100%;
  min-height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const UserBar = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    font-family: "Lexend";
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary);
    :hover {
      text-decoration: 0.5px underline;
      cursor: pointer;
    }
  }

  p {
    font-family: "Lexend";
    margin-left: 10px;
    font-size: 16px;
    font-weight: 300;
    color: var(--text-post-info);
  }

  .text {
    display: flex;
    align-items: center;
  }
`;

const TextArea = styled.div`
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  padding: 10px 0 0 10px;

  p {
    font-family: "Lexend";
    font-size: 15px;
    line-height: 16px;
    text-align: justify;
    font-weight: 400;
    color: var(--text-primary);
  }
`;

const OptionBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  p {
    font-family: "Lexend";
    font-size: 14px;
    font-weight: 400;
    color: var(--text-post-info);
  }
`;

const Comment = styled(AiOutlineComment)`
  font-size: 18px;
  color: var(--text-post-info);
  cursor: pointer;
`;

const Heart = styled(AiOutlineHeart)`
  font-size: 18px;
  color: var(--text-post-info);
  cursor: pointer;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Ellipsis = styled(AiOutlineEllipsis)`
  font-size: 18px;
  color: var(--text-primary);
  cursor: pointer;
`;
export {
  Container,
  UserImage,
  LeftSide,
  Informative,
  UserBar,
  TextArea,
  OptionBar,
  Option,
  Comment,
  Heart,
  Ellipsis,
};
