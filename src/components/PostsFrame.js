import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import PostModal from "./PostModal";

const Container = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
`;

const PostsFrame = ({ usersList }) => {
  return (
    <>
      {5 == 5 ? (
        <Container>
          <PostCard title="title" body="body" />
          <PostCard title="title" body="body" />
          <PostCard title="title" body="body" />
          <PostCard title="title" body="body" />
          <PostCard title="title" body="body" />
          <PostCard title="title" body="body" />
          <PostCard title="title" body="body" />
          <PostCard title="title" body="body" />
          <PostCard title="title" body="body" />
          <PostCard title="title" body="body" />
          <PostModal title="title" body="body" />
        </Container>
      ) : null}
    </>
  );
};
export default PostsFrame;
