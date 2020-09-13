import React from "react";
import { connect } from "react-redux";
import PostOptionPresenter from "./PostOptionPresenter";

const PostOptionContainer = ({ facebook: { me }, user, onDeletePopup, onEditPopup }) => {
  return (
    <PostOptionPresenter
      me={me}
      user={user}
      onDeletePopup={onDeletePopup}
      onEditPopup={onEditPopup}
    />
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(PostOptionContainer);
