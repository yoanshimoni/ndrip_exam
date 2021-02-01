import React, { useContext } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import PostModal from "./PostModal";
import { Context as UserContext } from "../context/UserContext";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const PostsFrame = ({ userId }) => {
  const {
    state: { postList },
  } = useContext(UserContext);

  console.log(postList);

  return (
    <>
      {postList[userId] ? (
        <Container>
          {postList[userId].map((item) => (
            <PostCard
              key={item.id}
              userId={item.userId}
              postId={item.id}
              title={item.title}
              body={item.body}
            />
          ))}
        </Container>
      ) : (
        <h2>Loading User Posts...</h2>
      )}
    </>
  );
};
export default PostsFrame;
