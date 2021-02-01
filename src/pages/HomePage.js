import React from "react";
import styled from "styled-components";
import UsersFrame from "../components/UsersFrame";
import PostsFrame from "../components/PostsFrame";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return (
    <Container>
      <UsersFrame usersList={"usersList"} />
      <PostsFrame usersList={"PostsList"} />
    </Container>
  );
};
export default HomePage;
