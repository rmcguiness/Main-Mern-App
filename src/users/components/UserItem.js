import React from "react";

import "./UserItem.css";

const UserItem = (props) => {
  return <li>{props.user.text}</li>;
};

export default UserItem;
