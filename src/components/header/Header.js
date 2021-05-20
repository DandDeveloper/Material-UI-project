import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  NotificationsNone,
  PowerSettingsNew,
  Search,
} from "@material-ui/icons";

import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <InputBase
                placeholder="search topics"
                className={classes.searchInput}
                startAdornment={<Search fontSize="small" />}
              />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNone fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ChatBubbleOutline fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge>
                  <PowerSettingsNew />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
