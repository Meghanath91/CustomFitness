import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GroupIcon from "@material-ui/icons/Group";

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function StudentRequest(props) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={props.number} color="secondary">
        <GroupIcon style={{ fontSize: "1.8rem" }} />
      </StyledBadge>
    </IconButton>
  );
}
