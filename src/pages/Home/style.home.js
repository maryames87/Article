import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[10],
  },
  homeCard: {
   
    height: "90vh",
    gap: "5rem",
    display: "flex",
    alignItems: "center",
    flexWrap:"wrap",
    marginTop:".5rem",
  },

}));
