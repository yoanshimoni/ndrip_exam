import React, { useContext } from "react";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";
import { Context as UserContext } from "../context/UserContext";

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
  userId,
  name,
  username,
  email,
  lat,
  lng,
  company,
  onUserClick,
}) => {
  const { removeUser } = useContext(UserContext);

  return (
    <StyledCard
      onClick={() => {
        onUserClick(userId);
      }}
    >
      <RemoveButton
        onClick={() => {
          console.log(`user id in card: ${userId}`);
          removeUser(userId);
        }}
      >
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
