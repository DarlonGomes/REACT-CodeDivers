import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { TbScubaMask } from "react-icons/tb";
import { VscBell, VscCode } from "react-icons/vsc";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Paragraph = styled.p`
  font-family: "Lexend";
  font-size: 18px;
  color: var(--text-primary);
  margin-top: 3px;
`;

const Wrapper = styled.div`
  height: 58px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  border-radius: 15px;
  gap: 10px;
`;

const HomeIcon = styled(AiOutlineHome)`
  font-size: 25px;
  color: var(--text-primary);
`;

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 25px;
  color: var(--text-primary);
`;

const NotificationIcon = styled(VscBell)`
  font-size: 25px;
  color: var(--text-primary);
`;

const CodeIcon = styled(VscCode)`
  font-size: 25px;
  color: var(--text-primary);
`;

const UserIcon = styled(TbScubaMask)`
  font-size: 25px;
  color: var(--text-primary);
`;

const EllipsisIcon = styled(IoEllipsisHorizontalCircle)`
  font-size: 25px;
  color: var(--text-primary);
`;

export {
  Container,
  Paragraph,
  Wrapper,
  HomeIcon,
  SearchIcon,
  NotificationIcon,
  CodeIcon,
  UserIcon,
  EllipsisIcon,
};
