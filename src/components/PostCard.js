import React from "react";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fffff0;
  margin: 5px;
  min-width: 22%;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const RemoveButton = styled.div`
  align-self: flex-end;
`;

const PostCard = ({ title, body }) => {
  return (
    <StyledCard onClick={() => {}}>
      <RemoveButton onClick={() => {}}>
        <GiCancel size="25px" />
      </RemoveButton>
      <p>{title}</p>
      <p>{body}</p>
    </StyledCard>
  );
};
export default PostCard;
