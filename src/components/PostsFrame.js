import React, { useContext, useState } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import PostModal from "./PostModal";
import { Context as UserContext } from "../context/UserContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const PostsFrame = ({ userId }) => {
  const [showModal, setShowModal] = useState({
    isTrue: false,
    postId: null,
    userId: null,
  });
  const {
    state: { postList },
  } = useContext(UserContext);

  return (
    <>
      {postList[userId] ? (
        <Container>
          <PostsWrapper>
            {postList[userId].map((item) => (
              <PostCard
                key={item.id}
                userId={item.userId}
                postId={item.id}
                title={item.title}
                body={item.body}
                onPostClick={(postId, userId) => {
                  setShowModal({
                    isTrue: true,
                    postId: postId,
                    userId: userId,
                  });
                }}
              />
            ))}
          </PostsWrapper>
          {showModal.isTrue && (
            <PostModal
              postId={showModal.postId}
              userId={showModal.userId}
              setShowModal={setShowModal}
            />
          )}
        </Container>
      ) : (
        <h2>Loading User Posts...</h2>
      )}
    </>
  );
};
export default PostsFrame;
