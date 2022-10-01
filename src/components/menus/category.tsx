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
        onMouseEnter={() => setActivity(true)}
        onMouseLeave={() => setActivity(false)}
        style={{ backgroundColor: isActive ? "var(--bg-category)" : "" }}
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
