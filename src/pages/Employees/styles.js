import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "200%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

export default useStyles;
