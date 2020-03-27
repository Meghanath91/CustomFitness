import React, { useState, useEffect } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GroupIcon from "@material-ui/icons/Group";
import axios from "axios";

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function StudentRequest(props) {
  console.log("subs in stdrqst=>", props.subscriptions);

  const [notification, setNotifications] = useState(props.subscriptions.length);
  console.log("-===> props.sub", props.subscriptions.length);
  console.log(">", notification);

  useEffect(() => setNotifications(props.subscriptions.length), [
    props.subscriptions.length
  ]);

  const handleNotifications = evt => {
    evt.preventDefault();

    for (let subscription of props.subscriptions) {
      axios
        .put(`http://localhost:8080/subscriptions/${subscription.id}`, {
          seen: true
        })
        .then(res => {
          setNotifications(0);
          // console.log("subscriptions", subscriptions);
          // setSubscriptions(subscriptions);
        });
    }
  };

  return (
    <IconButton onClick={handleNotifications} aria-label="cart">
      <StyledBadge badgeContent={notification} color="secondary">
        <GroupIcon style={{ fontSize: "1.8rem" }} />
      </StyledBadge>
    </IconButton>
  );
}
