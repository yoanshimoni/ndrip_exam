import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Context as UserContext } from "../context/UserContext";

const ModalCard = styled.div`
  background-color: #fff0f5;
  margin: 5px;
  width: 22%;
  border: 1px solid black;
  display: block;
  position: fixed;
  bottom: 0;
  width: 40%;
  height: 50%;
  z-index: 1;
  opacity: 0.9;
`;

const Container = styled.div`
  diaplay: flex;
  flex-direction: column;
  margin: 5px;
`;
const Button = styled.button`
  margin: 3px;
  background-color: #ccccff;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const Input = styled.textarea`
  height: 100px;
  width: 90%;
`;

const PostModal = ({ setShowModal, postId, userId }) => {
  const {
    editPost,
    state: { postList },
  } = useContext(UserContext);

  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  useEffect(() => {
    const post = postList[userId].find((post) => post.id === postId);
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [postId]);

  return (
    <>
      <ModalCard>
        {title !== null && body !== null ? (
          <Container>
            <Input
              placeHolder={title}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <Input
              placeHolder={body}
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
            <Container>
              <Button
                onClick={() => {
                  editPost(title, body, userId, postId);
                  setShowModal({ isTrue: false, postId: null, userId: null });
                }}
              >
                Update
              </Button>
              <Button
                onClick={() => {
                  setShowModal({ isTrue: false, postId: null, userId: null });
                }}
              >
                Cancel
              </Button>
            </Container>
          </Container>
        ) : (
          <h2>Loading Post...</h2>
        )}
      </ModalCard>
    </>
  );
};
export default PostModal;
