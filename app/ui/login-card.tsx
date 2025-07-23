import React from "react";
import { Box, Card, CardContent, CardHeader, TextField, Checkbox, Button, Link, FormControlLabel } from "@mui/material";

export default function LoginCard() {
  return (
    <Box
      sx={{
        width: 375,
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Card sx={{ width: 1, boxShadow: "none" }}>
        <CardHeader
          title="Log In"
          titleTypographyProps={{
            fontSize: 24,
            fontWeight: 400,
            fontFamily: "Roboto, sans-serif",
            color: "rgba(0,0,0,0.87)",
          }}
        />
        <CardContent sx={{ p: 2 }}>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: {
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 16,
                  color: "rgba(0,0,0,0.6)",
                },
              }}
              inputProps={{
                style: {
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 16,
                  color: "rgba(0,0,0,0.6)",
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: {
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 16,
                  color: "rgba(0,0,0,0.6)",
                },
              }}
              inputProps={{
                style: {
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 16,
                  color: "rgba(0,0,0,0.6)",
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={<span style={{ fontFamily: "Roboto, sans-serif", fontSize: 14 }}>Remember me</span>}
            />
            <Button
              fullWidth
              disableElevation
              variant="contained"
              sx={{
                bgcolor: "#6930ca",
                color: "#fff",
                borderRadius: 3, // 24px for extra large rounding
                boxShadow: "0px 4px 0px 0px #3f1d79",
                px: 8, // generous horizontal padding
                py: 1.5, // vertical padding
                fontFamily: "Proxima Nova, Roboto, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                textAlign: "center",
                textTransform: "none",
                letterSpacing: 0.5,
                "&:hover": {
                  bgcolor: "#5a25a7",
                  boxShadow: "0px 4px 0px 0px #3f1d79",
                },
              }}
            >
              Proceed
            </Button>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "flex-start" }}>
              <Link href="#" underline="always" color="primary" sx={{ fontFamily: "Roboto, sans-serif", fontSize: 16 }}>
                Forgot password?
              </Link>
              <Link href="#" underline="always" color="primary" sx={{ fontFamily: "Roboto, sans-serif", fontSize: 16 }}>
                Sign up
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
