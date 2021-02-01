import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff0f5;
  margin: 5px;
  min-width: 22%;
  border: 1px solid black;
  display: ${(props) => (props.showModal === true ? "block" : "none")};
`;

const Button = styled.button`
  margin: 3px;
  background-color: #ccccff;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const PostModal = ({ title, body }) => {
  return (
    <StyledCard>
      <p>{title}</p>
      <p>{body}</p>
      <Button onClick={() => {}}>Update</Button>
      <Button onClick={() => {}}>Cancel</Button>
    </StyledCard>
  );
};
export default PostModal;
