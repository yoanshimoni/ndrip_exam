import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";

const Container = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
`;

const UsersFrame = ({ usersList }) => {
  return (
    <>
      {5 == 5 ? (
        <Container>
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
          <UserCard
            name="name"
            userName="userName"
            email="email"
            coordinates="corrdinates"
            companyName="companyName"
          />
        </Container>
      ) : null}
    </>
  );
};
export default UsersFrame;
