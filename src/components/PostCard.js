import React, { useContext } from "react";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";
import { Context as UserContext } from "../context/UserContext";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffff0;
  margin: 5px;
  width: 22%;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const RemoveButton = styled.div`
  align-self: flex-end;
`;

const Content = styled.div`
  text-align: center;
`;

const PostCard = ({ userId, postId, title, body }) => {
  const { removePost } = useContext(UserContext);

  return (
    <StyledCard onClick={() => {}}>
      <RemoveButton
        onClick={() => {
          removePost(userId, postId);
        }}
      >
        <GiCancel size="25px" />
      </RemoveButton>
      <Content>
        <h4>{title}</h4>
        <p>{body}</p>
      </Content>
    </StyledCard>
  );
};
export default PostCard;
