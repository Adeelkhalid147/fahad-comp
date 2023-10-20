"use client";
// import React, { useState } from "react";
// import { Stack, Switch, Button } from "@chakra-ui/react";

// function ToggleSwitch() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleToggleChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <Stack direction="row" align="center">
//       <Button
//         size="lg"
//         variant={isChecked ? "solid" : "outline"}
//         onClick={() => setIsChecked(false)}
//       >
//         Trip
//       </Button>
//       <Switch
//         colorScheme="teal"
//         size="lg"
//         isChecked={isChecked}
//         onChange={handleToggleChange}
//       />
//       <Button
//         size="lg"
//         variant={isChecked ? "outline" : "solid"}
//         onClick={() => setIsChecked(true)}
//       >
//         Order
//       </Button>
//     </Stack>
//   );
// }

// export default ToggleSwitch;

import { useState } from "react";
import { Button, Box } from "@chakra-ui/react";

export function Example() {
  const [isTrip, setIsTrip] = useState(false);

  const handleClick = () => {
    setIsTrip(!isTrip);
    console.log("Trips button clicked!");
  };

  return (
    <Box  style={{
      justifyContent: "center",
      backgroundColor: "#1d3a49",
      flexGrow: 1,
      display: "flex",
      overflow: "hidden",
      minHeight: "48px",
      color: "#8a8ba7",
      margin: 0,
      fontSize: "12px",
      fontFamily: "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
      fontWeight: 400,
      lineHeight: 1.43,
    }}>
    <Box style={{
      backgroundColor: "#3f5764",
      width: "auto !important",
      borderRadius: "10px",
      flex: "none !important",
      display: "flex !important",
    }}>
      <Box
        style={{
          color: "#8a8ba7",
          fontSize: "12px",
          fontFamily:
            "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
          fontWeight: 400,
          lineHeight: 1.43,
          boxSizing: "inherit",
        }}
      >
        <Button
          style={{
            minHeight: "28px !important",
            fontSize: "12px",
            height: "70%",
            padding: "3px 10px !important",
            margin: "0.5rem !important",
            borderRadius: "0.25rem !important",
            opacity: 1,
            minWidth: "160px",
            textAlign: "center",
            position: "relative",
            flexShrink: 0,
            fontWeight: 500,
            lineHeight: 1.75,
            textTransform: "uppercase",
            fontFamily:
              "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
            alignItems: "center",
            verticalAlign: "middle",
            justifyContent: "center",
          }}
          onClick={handleClick}
          bg={isTrip ? " #fff" : "gray.500"}
          color="#1d3a49"
        >
          Trip
        </Button>
        <Button
          style={{
            minWidth: "100px",
            minHeight: "28px !important",
            fontSize: "12px",
            opacity: 0.7,
            padding: "6px 12px",
            overflow: "hidden",
            position: "relative",
            boxSizing: "border-box",
            textAlign: "center",
            flexShrink: 0,
            fontFamily:
              "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
            fontWeight: 500,
            lineHeight: 1.75,
            whiteSpace: "normal",
            textTransform: "uppercase",
            border: 0,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            userSelect: "none",
            borderRadius: 0,
            verticalAlign: "middle",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
          bg={isTrip ? "gray.500" : "blue.500"}
          color="#1d3a49"
        >
          Orders
        </Button>
      </Box>
    </Box>
    </Box>
  );
}
