import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InputRound from "../InputRound";
import PropTypes from "prop-types";
import CreatePostFeedButton from "./CreatePostFeedButton";
import { LiveVideo, Photo, Feeling } from "../Icons";
import Avatar from "../Avatar";

const Container = styled.div`
  ${props => props.theme.feedBox};
  padding: 1rem 1.5rem;
`;

const ELink = styled(Link)`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  overflow: hidden;
  margin-right: 1rem;
  display: block;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
`;

const ButtonArea = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const EInputRound = styled(InputRound)`
  cursor: pointer;
`;

const CreatePostFeed = ({ id, avatar, username }) => {
  const onClickCreatePost = () => {
    console.log("Create New Post");
  };
  return (
    <Container>
      <InputArea>
        <ELink to={`/profile/${id}`}>
          <Avatar url={avatar} size="4rem" />
        </ELink>
        <EInputRound
          value=""
          onChange={() => null}
          onClick={onClickCreatePost}
          placeholder={`What's on your mind, ${username}?`}
        />
      </InputArea>
      <ButtonArea>
        <CreatePostFeedButton
          onClick={() => null}
          icon={<LiveVideo size="2.4rem" />}
          text="Live Video"
        />
        <CreatePostFeedButton
          onClick={() => null}
          icon={<Photo size="2.4rem" />}
          text="Photo/Video"
        />
        <CreatePostFeedButton
          onClick={() => null}
          icon={<Feeling size="2.4rem" />}
          text="Feeling/Activity"
        />
      </ButtonArea>
    </Container>
  );
};

CreatePostFeed.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default CreatePostFeed;