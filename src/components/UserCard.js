import React from "react";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f0f8ff;
  margin: 5px;
  min-width: 15%;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const RemoveButton = styled.div`
  align-self: flex-end;
`;

const UserCard = ({
  id,
  name,
  username,
  email,
  lat,
  lng,
  company,
  onUserClick,
}) => {
  return (
    <StyledCard
      onClick={() => {
        onUserClick(id);
      }}
    >
      <RemoveButton onClick={() => {}}>
        <GiCancel size="25px" />
      </RemoveButton>
      <p>{name}</p>
      <p>{`(${username})`}</p>
      <p>{email}</p>
      <p>{`lat: ${lat}  lng: ${lng}`}</p>
      <p>{company}</p>
    </StyledCard>
  );
};
export default UserCard;
