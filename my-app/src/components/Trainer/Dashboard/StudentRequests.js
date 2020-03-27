import React from "react";
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
  

  const handleNotifications = evt => {
    evt.preventDefault();
    const id = 1;

    axios
      .put(
        `http://localhost:8080/subscriptions/${id}`,{
          seen:true

        }
      )
      .then(res => {
        const subscriptions = res.data;
        console.log("subscriptions", subscriptions);
        // setSubscriptions(subscriptions);
      });
  };

  return (
    <IconButton onClick={handleNotifications} aria-label="cart">
      <StyledBadge badgeContent={props.subscriptions.length} color="secondary">
        <GroupIcon style={{ fontSize: 100 }} />
      </StyledBadge>
    </IconButton>
  );
}
