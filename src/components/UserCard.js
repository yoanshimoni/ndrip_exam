import React, { useContext } from "react";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
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
          removeUser(userId);
        }}
      >
        <GiCancel size="25px" />
      </RemoveButton>
      <p>{name}</p>
      <p>{`(${username})`}</p>
      <p>{email}</p>
      <Link to={`/map/${lat}/${lng}`}>{`${lat} - ${lng}`}</Link>
      <p>{company}</p>
    </StyledCard>
  );
};
export default UserCard;
