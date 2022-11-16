import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    alignItems: "center",
  },
  formGroup: {
    gap: "1rem",
  },
  authPic:{
    alignItems:"center",
    display:"flex",
    "& svg":{

        fontSize:"20rem",
    },
  },
}));
