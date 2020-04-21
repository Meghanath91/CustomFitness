import React, { useState, useEffect } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GroupIcon from "@material-ui/icons/Group";
import axios from "axios";

const StyledBadge = withStyles(theme => ({
  badge: {
    right: 0,
    top: 11,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "14% 8%",
    fontSize: "1.5rem"
  }
}))(Badge);

export default function StudentRequest(props) {
  

  const [notification, setNotifications] = useState(props.subscriptions.length);

  useEffect(() => setNotifications(props.subscriptions.length), [
    props.subscriptions.length
  ]);

  const handleNotifications = evt => {
    evt.preventDefault();

    for (let subscription of props.subscriptions) {
      axios
        .put(`/subscriptions/${subscription.id}`, {
          seen: true
        })
        .then(res => {
          setNotifications(0);
        });
    }
  };

  return (
    <IconButton
      onClick={handleNotifications}
      aria-label="cart"
      style={{
        marginLeft: "10%"
      }}
    >
      <StyledBadge
        badgeContent={notification}
        color="secondary"
        style={{
          fontSize: "6rem"
        }}
      >
        <GroupIcon
          style={{
            fontSize: "8rem",
            textAlign: "center",
            color: "white"
          }}
        />
      </StyledBadge>
    </IconButton>
  );
}
