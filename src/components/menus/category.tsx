import React from "react";

import {
  Container,
  Paragraph,
  Wrapper,
  HomeIcon,
  SearchIcon,
  NotificationIcon,
  CodeIcon,
  UserIcon,
  EllipsisIcon,
} from "./style";

interface Props {
  text: string;
}

export default function Category(props: Props) {
  const [isActive, setActivity] = React.useState(false);
  const { text } = props;

  return (
    <Container>
      <Wrapper
        status={isActive}
        onMouseEnter={() => setActivity(true)}
        onMouseLeave={() => setActivity(false)}
      >
        {text === "Home" && <HomeIcon />}
        {text === "Explore" && <SearchIcon />}
        {text === "Notifications" && <NotificationIcon />}
        {text === "Practice" && <CodeIcon />}
        {text === "Profile" && <UserIcon />}
        {text === "More" && <EllipsisIcon />}
        <Paragraph>{text}</Paragraph>
      </Wrapper>
    </Container>
  );
}
