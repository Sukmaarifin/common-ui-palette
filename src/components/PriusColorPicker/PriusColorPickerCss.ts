import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { EditableInputStyles } from "react-color/lib/components/common/EditableInput";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hueContainer: {
      margin: "15px 0",
    },
    hue: {
      height: 30,
      width: 300,
      position: "relative",
      borderRadius: "3px",
      marginRight: 8,
    },
    huepointer: {
      height: "30px",
      width: "20px",
      backgroundColor: theme.colors.white,
      borderRadius: 3,
      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.2)",
    },
    colorBox: {
      width: 30,
      height: 30,
      borderRadius: 3,
    },
    saturation: {
      height: 200,
      width: 340,
      position: "relative",
    },
    saturationPointer: {
      height: "8px",
      width: "8px",
      borderRadius: "50%",
      border: `1px solid ${theme.colors.grey4}`,
      backgroundColor: theme.colors.white,
    },
    editableInputLabel: {
      fontWeight: "bold",
    },
    divider: {
      width: 340,
      height: 1,
      margin: "0.8rem 0",
      backgroundColor: theme.colors.grey4,
    },
    swatchBox: {
      width: 26,
      height: 26,
      borderRadius: 3,
      marginRight: 8,
      border: `2px solid ${theme.colors.grey4}`,
    },
    swatchBoxLastChild: {
      marginRight: 0,
    },
  })
);

export const editableInputStyle: {
  hex: EditableInputStyles;
  rgb: EditableInputStyles;
  rgbLastChild: EditableInputStyles;
} = {
  hex: {
    input: {
      width: 70,
      marginRight: 20,
      padding: "0.8rem",
      fontFamily: "Metropolis",
      fontWeight: "bold",
      border: "2px solid #E8E8E8",
      borderRadius: 3,
    },
  },
  rgb: {
    input: {
      width: 28,
      marginRight: 20,
      padding: "0.8rem",
      fontFamily: "Metropolis",
      fontWeight: "bold",
      border: "2px solid #E8E8E8",
      borderRadius: 3,
    },
  },
  rgbLastChild: {
    input: {
      width: 28,
      padding: "0.8rem",
      fontFamily: "Metropolis",
      fontWeight: "bold",
      border: "2px solid #E8E8E8",
      borderRadius: 3,
    },
  },
};

export const presetColors = [
  { hex: "#FFFFFF" },
  { hex: "#000000" },
  { hex: "#FF0000" },
  { hex: "#FFA600" },
  { hex: "#F9EE00" },
  { hex: "#00FF00" },
  { hex: "#0000FF" },
  { hex: "#BEC2EC" },
  { hex: "#D100E7" },
];
