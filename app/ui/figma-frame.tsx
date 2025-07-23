import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FigmaFrame() {
  return (
    <div
      style={{
        background: "#fff",
        position: "relative",
        width: 341,
        height: 426,
      }}
    >
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          left: 201,
          top: 347,
          width: 113,
          height: 53,
          bgcolor: "#6930ca",
          boxShadow:
            "0px 1px 5px 0px rgba(0,0,0,0.12),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.2)",
          borderRadius: 1,
          fontFamily: "Roboto, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "24px",
          textTransform: "uppercase",
        }}
      >
        Submit
      </Button>
      <div style={{ position: "absolute", left: 27, top: 26, width: 287 }}>
        <TextField
          label="Name"
          variant="filled"
          fullWidth
          focused
          InputLabelProps={{ style: { color: "#1976d2", fontSize: 12, lineHeight: "12px" } }}
          inputProps={{ style: { fontSize: 16, lineHeight: "24px" } }}
        />
      </div>
      <div style={{ position: "absolute", left: 27, top: 136, width: 287 }}>
        <TextField
          label="Aadhaar No."
          variant="filled"
          fullWidth
          focused
          InputLabelProps={{ style: { color: "#1976d2", fontSize: 12, lineHeight: "12px" } }}
          inputProps={{ style: { fontSize: 16, lineHeight: "24px" } }}
        />
      </div>
      <div style={{ position: "absolute", left: 27, top: 250, width: 287 }}>
        <TextField
          label="PAN No."
          variant="filled"
          fullWidth
          focused
          InputLabelProps={{ style: { color: "#1976d2", fontSize: 12, lineHeight: "12px" } }}
          inputProps={{ style: { fontSize: 16, lineHeight: "24px" } }}
        />
      </div>
    </div>
  );
}
