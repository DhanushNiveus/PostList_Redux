import React from "react";
import { useSelector } from "react-redux";
import { SelectedAllUsers } from "../users/UsersSlice";

const PostAuthor = ({ userId }) => {
  console.log(userId);

  const users = useSelector(SelectedAllUsers);
  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
