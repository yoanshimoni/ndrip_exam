import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import UsersFrame from "../components/UsersFrame";
import PostsFrame from "../components/PostsFrame";
import { Context as UserContext } from "../context/UserContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  const [showPosts, setShowPosts] = useState({ isTrue: false, userId: null });
  const {
    getUsers,
    getPosts,
    state: { userList, postList },
  } = useContext(UserContext);

  useEffect(() => {
    if (!userList.length) {
      getUsers();
    }
  }, []);

  useEffect(() => {
    if (
      showPosts.isTrue &&
      showPosts.userId &&
      !postList[showPosts.userId] // we could remove this line if we prefer to fetch again from our db on every click, but it will require fetching - network latency, and deletes/edits of the state will not remain
    ) {
      console.log("getposts");
      getPosts(showPosts.userId);
    }
  }, [showPosts.userId]);

  console.log(showPosts);
  return (
    <Container>
      <UsersFrame
        onUserClick={(userId) => {
          setShowPosts({ isTrue: true, userId: userId });
        }}
      />
      {showPosts.isTrue && <PostsFrame userId={showPosts.userId} />}
    </Container>
  );
};
export default HomePage;
