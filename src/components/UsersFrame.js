import React, { useContext } from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import { Context as UserContext } from "../context/UserContext";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const UsersFrame = ({ onUserClick }) => {
  const {
    state: { userList },
  } = useContext(UserContext);

  return (
    <>
      {userList.length ? (
        <Container>
          {userList.map((item) => (
            <UserCard
              key={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              lat={item.address.geo.lat}
              lng={item.address.geo.lng}
              company={item.company.name}
              onUserClick={onUserClick}
              userId={item.id}
            />
          ))}
        </Container>
      ) : (
        <h2>Loading Users...</h2>
      )}
    </>
  );
};
export default UsersFrame;
