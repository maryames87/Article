import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  cardBox: {
  
    flexGrow: 1,
    justifyContent: "center",
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.grey[100],
    borderRadius: "1rem !important",
    height: "50%",
    width: "20rem",
    flexDirection: "column",
    boxShadow: theme.shadows[12],
    "& a": {
      color: theme.palette.grey[800],
      transition:"all .3s ease",
      "&:hover": {
        color: theme.palette.primary.main,
      },
      "& svg": {
        fontSize: "10rem",
       
      },
      "& p": {
        fontSize: "2rem",
      },
    },
  },
}));
