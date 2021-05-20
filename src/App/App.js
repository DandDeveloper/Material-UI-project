import "./App.css";
import SideMenu from "../components/sidemenu/SideMenu";
import Header from "../components/header/Header";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import PageHeader from "../components/pageheader/PageHeader";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import Employees from "../pages/Employees/Employees";

import useStyles from "./styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />

        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
