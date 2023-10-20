import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Switch } from "@chakra-ui/react";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";

const HistoryComp = () => {
  return (
    <Box>
      <Box
        style={{
          opacity: 0.999512,
          transform: "translateX(-0.0976562px) scale(1) translateZ(0px)",
        }}
      >
        <Box
          style={{
            color: "#fff",
            backgroundColor: "#1d3a49",
            // position: "static",
            width: "100%",
            display: "flex",
            boxSizing: "border-box",
            flexDirection: "column",
            // boxShadow:
            //   "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            // transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Box
            style={{
              paddingBottom: "1.5rem",
              paddingTop: "1.5rem",
              justifyContent: "center",
              display: "flex",
              minHeight: "48px",
              paddingLeft: "24px",
              paddingRight: "24px",
              // position: "relative",
              alignItems: "center",
              color: "#fff",
              // fontSize: "12px",
              // fontFamily:
                // "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
              // fontWeight: 400,
              // lineHeight: 1.43,
            }}
          >
            <button
              style={{
                // flex: "0 0 auto",
                // padding: "12px",
                // overflow: "visible",
                // fontSize: "1.5rem",
                // textAlign: "center",
                // transition:
                //   "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                // borderRadius: "50%",
                // alignItems: "center",
                // verticalAlign: "middle",
                // justifyContent: "center",
                // textDecoration: "none",
                // backgroundColor: "transparent",
                position: "absolute",
                top: "10px",
                left: "10px",
                // boxSizing: "inherit",
                // textRendering: "auto",
                // letterSpacing: "normal",
                // wordSpacing: "normal",
                // lineHeight: "normal",
                // textTransform: "none",
                // textIndent: "0px",
                // textShadow: "none",
                // paddingBlock: "1px",
                // paddingInline: "6px",
              }}
            >
              <span
                style={{
                  width: "100%",
                  // display: "flex",
                  // alignItems: "inherit",
                  // justifyContent: "inherit",
                  fontSize: "1.5rem",
                  // textAlign: "center",
                  // cursor: "pointer",
                  // textRendering: "auto",
                  // letterSpacing: "normal",
                  // wordSpacing: "normal",
                  // lineHeight: "normal",
                  // textTransform: "none",
                  // textIndent: "0px",
                  // textShadow: "none",
                }}
              >
                <CgMenuRightAlt />
              </span>
              <span
                style={{
                  // overflow: "hidden",
                  // position: "absolute",
                  // borderRadius: "inherit",
                  // pointerEvents: "none",
                  // color: "inherit",
                  // fontSize: "1.5rem",
                  // textAlign: "center",
                  // letterSpacing: "normal",
                  // wordSpacing: "normal",
                  // lineHeight: "normal",
                  // textTransform: "none",
                  // textIndent: "0px",
                  // textShadow: "none",
                }}
              ></span>
            </button>

            <button
              style={{
                padding: "12px",
                overflow: "visible",
                // fontSize: "1.5rem",
                // textAlign: "center",
                // transition:
                //   "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                borderRadius: "50%",
                cursor: "pointer",
                // alignItems: "center",
                userSelect: "none",
                // verticalAlign: "middle",
                // justifyContent: "center",
                // textDecoration: "none",
                // backgroundColor: "transparent",
                right: "10px",
                position: "absolute",
                top: "10px",
                textRendering: "auto",
                letterSpacing: "normal",
                wordSpacing: "normal",
                lineHeight: "normal",
                textTransform: "none",
                textIndent: "0px",
                textShadow: "none",
              }}
            >
              <span
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "inherit",
                  justifyContent: "inherit",
                  color: "inherit",
                  boxSizing: "inherit",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  cursor: "pointer",
                  userSelect: "none",
                  textRendering: "auto",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  lineHeight: "normal",
                  textTransform: "none",
                  textIndent: "0px",
                  textShadow: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    position: "relative",
                    flexShrink: 0,
                    verticalAlign: "middle",
                    fontSize: "1.5rem",
                    textAlign: "center",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <AiOutlineBell
                    style={{
                      fill: "currentColor",
                      width: "1em",
                      height: "1em",
                      display: "inline-block",
                      fontSize: "1.5rem",
                      transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      flexShrink: 0,
                      userSelect: "none",
                      overflowClipMargin: "content-box",
                      overflow: "hidden",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  />
                </span>
              </span>
              <span
                style={{
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  lineHeight: "normal",
                  textTransform: "none",
                  // textIndent: "0px",
                  textShadow: "none",
                  textRendering: "auto",
                 
                  // overflow: "hidden",
                  // position: "absolute",
                  borderRadius: "inherit",
                  pointerEvents: "none",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              ></span>
            </button>
            <Heading
              style={{
                fontSize: "1.4996rem",
                fontFamily:
                  "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
                fontWeight: 500,
                lineHeight: 1.167,
                marginBlockStart: 1,
                marginBlockEnd: 1,
                marginInlineStart: 0,
                marginInlineEnd: 0,
                display: "block",
              }}
            >
              History
            </Heading>
          </Box>
        </Box>
      </Box>

      {/* button work */}
      <Box
        style={{
          width: "100%",
          display: "block",
          // boxSizing: "border-box",
        }}
      >
        <Box
          style={{
            // marginTop: "-0.5rem",
            // justifyContent: "center",
            flexDirection: "column",
            // display: "flex",
            
            // boxSizing: "inherit",
          }}
        >
          <Box
            style={{
              justifyContent: "center",
              backgroundColor: "#1d3a49",
              // flexGrow: 1,
              display: "flex",
              // overflow: "hidden",
              minHeight: "48px",
              // boxSizing: "inherit",
            }}
          >
            <Box
              style={{
                // overflow: "hidden",
                width: "auto",
                backgroundColor: "#3f5764",
                color: "#fff",
                borderRadius: "10px",
                flex: "none",
                display: "flex",
              }}
            >
              <Box
                style={{
                  justifyContent: "center",
                  display: "flex",
                  // boxSizing: "inherit",
                  color: "#fff",
                }}
              >
                <button
                  style={{
                    minWidth: "100px",
                    minHeight: "28px!important",
                    fontSize: "12px",
                    backgroundColor: "#fff",
                    color: "#1d3a49",
                    height: "70%",
                    padding: "3px 10px!important",
                    margin: "0.5rem!important",
                    borderRadius: "0.25rem!important",
                    opacity: 1,
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    textAlign: "center",
                    fontFamily:
                      "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
                    fontWeight: 500,
                    lineHeight: 1.75,
                    whiteSpace: "normal",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      width: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                      boxSizing: "inherit",
                      fontSize: "12px",
                      color: "#1d3a49",
                      textAlign: "center",
                      fontFamily:
                        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
                      fontWeight: 500,
                      lineHeight: 1.75,
                      whiteSpace: "normal",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    Trip
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      // position: "absolute",
                      borderRadius: "inherit",
                      pointerEvents: "none",
                      boxSizing: "inherit",
                      fontSize: "12px",
                      color: "#1d3a49",
                      textAlign: "center",
                      fontFamily:
                        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
                      fontWeight: 500,
                      lineHeight: 1.75,
                      whiteSpace: "normal",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  ></span>
                </button>

                <button
                  style={{
                    minWidth: "100px",
                    minHeight: "28px!important",
                    fontSize: "12px",
                    color: "inherit",
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
                    margin: 0,
                    display: "inline-flex",
                    outline: 0,
                    alignItems: "center",
                    userSelect: "none",
                    borderRadius: 0,
                    verticalAlign: "middle",
                    appearance: "none",
                    justifyContent: "center",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <span
                    style={{
                      width: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                      boxSizing: "inherit",
                      fontSize: "12px",
                      color: "inherit",
                      textAlign: "center",
                      userSelect: "none",
                      fontFamily:
                        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
                      fontWeight: 500,
                      lineHeight: 1.75,
                      whiteSpace: "normal",
                      textTransform: "uppercase",
                    }}
                  >
                    Order{" "}
                  </span>
                  <span
                    style={{
                      width: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                      boxSizing: "inherit",
                      fontSize: "12px",
                      color: "inherit",
                      textAlign: "center",
                      fontFamily:
                        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
                      fontWeight: 500,
                      lineHeight: 1.75,
                      whiteSpace: "normal",
                      textTransform: "uppercase",
                      userSelect: "none",
                      letterSpacing: "normal",
                      wordSpacing: "normal",
                    }}
                  ></span>
                </button>
              </Box>
            </Box>
          </Box>

          <Box>
            {/* 3rd BOx */}
            <Box mb={4}
              style={{
                justifyContent: "space-around !important",
                flexDirection: "column",
                display: "flex",
                
              }}
            >
              <Box
                style={{
                  backgroundColor: "#1d3a49",
                  minHeight: "1.5rem",
                  border: "none",
                  padding: 0,
                  // margin: "-1px 0 0",
                  // boxSizing: "inherit",
                }}
              ></Box>
              <Box
                // justifyContent="center"
                // flexDirection="column"
                // display="flex"
              >
                <Box
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  display="flex"
                  flexWrap="wrap"
                  boxSizing="border-box"
                >
                  <Box
                    flexGrow={0}
                    // maxWidth="50%"
                    // flexBasis="50%"
                    justifyContent="center"
                    alignItems="center"
                    boxSizing="border-box"
                    width="100%"
                    display="flex"
                    flexWrap="wrap"
                  >
                    <Box
                      flexGrow={0}
                      maxWidth="50%"
                      flexBasis="50%"
                      justifyContent="center"
                      alignItems="center"
                      boxSizing="border-box"
                      width="100%"
                      display="flex"
                      flexWrap="wrap"
                    >
                      <Box
                        minHeight="9rem"
                        marginTop="0.5rem"
                        width="95%!important"
                        alignSelf="center!important"
                        boxShadow="0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
                        borderRadius="0.5rem"
                        color="#8a8ba7"
                        transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                        backgroundColor="#fff"
                        alignItems="center!important"
                        justifyContent="center!important"
                        display="flex!important"
                        boxSizing="inherit"
                      >
                        <Text
                          color="#1d3a49"
                          textAlign="center"
                          fontSize="12px"
                          fontFamily="Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Metroplis,Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'"
                          fontWeight={400}
                          lineHeight={1.43}
                          boxSizing="inherit"
                        >
                          No trip found
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

                {/* ORDER BOX */}
                <Box mb={4} justifyContent="center" alignItems="center" width="100%" display="flex" flexWrap="wrap" boxSizing="border-box">
                  <Box justifyContent="center" alignItems="center" flexGrow={0} maxWidth="50%" flexBasis="50%" width="100%" display="flex" flexWrap="wrap">
                    <Box marginTop="0.5rem!important" width="95%!important" alignSelf="center" flexDirection="column" display="flex!important" boxShadow="0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)" borderRadius="0.5rem" color="#8a8ba7" transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" backgroundColor="#fff">
                      <Box style={{position: "relative"}} >
                        <Box padding=".5rem" flexDirection="row" display="flex!important" color="inherit" cursor="pointer">
                          <Box width="7.7rem" display="flex" marginLeft="0.75rem" flexDirection="column" color="inherit" cursor="pointer">
                            <Text  style={{ fontSize: '12px', fontFamily: 'Montserrat', fontWeight: 400, lineHeight: 1.5, boxSizing: 'inherit', color: 'inherit' }}>Departure</Text>
                            <Heading style={{ color: '#1d3a49', fontSize: '14px', fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Metroplis, Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontWeight: 600, lineHeight: 1.334, cursor: 'pointer'}}>Any City, Country</Heading>
                            <span style={{fontSize: '12px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Metroplis, Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontWeight: 400, lineHeight: 1.66, boxSizing: 'inherit', color: 'inherit', cursor: 'pointer'}}>15 Jun 2022</span>
                          </Box>
                          {/* SVG */}
                          <Box>
                            <Image src={"/journeyLine.svg"} alt="journyline" height={70} width={250} style={{margin: 8,marginTop: '0.5rem!important',boxSizing: 'inherit', overflowClipMargin: 'content-box',flexGrow: 1}}/>
                          </Box>
                          {/* arrival box */}
                          <Box width="7.7rem" display="flex" marginLeft="0.75rem" flexDirection="column" boxSizing="inherit" color="inherit" cursor="pointer">
                            <Text style={{ fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Metroplis, Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',}} fontSize="12px" fontWeight="400" lineHeight="1.5" boxSizing="inherit" color="inherit">Arrival</Text>
                            <Heading style={{ fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Metroplis, Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}} color="#1d3a49" fontSize="14px" fontWeight="600" lineHeight="1.334" boxSizing="inherit" cursor="pointer">Karachi, Pakistan</Heading>
                            <span style={{fontSize: '12px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Metroplis, Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontWeight: 400, lineHeight: 1.66, boxSizing: 'inherit', color: 'inherit', cursor: 'pointer'}} >15 JUN 2022</span>
                          </Box>
                          {/* base svg */}
                          <Box position="absolute" top="8px" right="0" width="49px" color="inherit" cursor="pointer">
                            <Image src={"/basic.svg"} alt="basic" height={25} width={82} />
                          </Box>
                        </Box>
                        {/* neche pic or order complite */}
                        <Box  paddingLeft="0.5rem" paddingBottom="0.5rem" paddingRight="0.5rem" paddingTop="0.25rem" marginTop="0.25rem" flexDirection="row" display="flex!important" borderTop="1px solid #dee2e6!important">
                          <Box flexGrow={0} maxWidth="75%" flexBasis="75%" boxSizing="border-box" color="inherit" cursor="pointer">
                            <Box paddingTop="0.25rem" marginTop="0.25rem" flexDirection="row" display="flex" boxSizing="inherit" color="inherit">
                              <Box width="3rem" height="3rem" borderRadius="0.5rem" display="flex" overflow="hidden" position="relative" fontSize="1.25rem" alignItems="center" flexShrink={0} lineHeight={1} userSelect="none" justifyContent="center" boxSizing="inherit" color="inherit" cursor="pointer">
                                <Box>
                                  <Image src={"/user (1).png"} alt="user" height={100} width={100} objectFit="contain" color="transparent" style={{boxSizing: 'inherit',textAlign: 'center',textIndent: '10000px',overflowClipMargin: 'content-box',overflow: 'clip'}}/>
                                </Box>
                              </Box>
                              {/* hirawasi box */}
                              <Box paddingLeft="0.25rem" paddingRight="0.25rem" boxSizing="inherit" color="inherit" cursor="pointer">
                                <Text style={{ fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Metroplis, Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',}} color="#1d3a49" fontSize="14px" fontWeight="500" lineHeight="1.6" boxSizing="inherit" cursor="pointer">hirawasi</Text>
                                <Box>
                                  <Image src={"/35174011.jpg"} alt="star" height={70} width={70} />
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                              <Box fontSize={"sm"} textAlign="right" flexGrow={0} maxWidth="25%" flexBasis="25%" boxSizing="border-box" color="inherit" cursor="pointer">Order Completed</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>






    </Box>

    // <Box height={"full"} width={"full"}>
    //   <Box
    //     bg="#1D3A49"
    //     textColor="white"
    //     fontSize="3xl"
    //     display={{ base: "block", md: "flex" }}
    //     alignItems="center"
    //     justifyContent="center"
    //     textAlign="center"
    //     py={10}
    //     letterSpacing="1px"
    //   >
    //     History
    //   </Box>
    //   <Box>
    //     <Box>
    //       <Center>
    //         <Box
    //           height="135px"
    //           width="50%"
    //           rounded="md"
    //           boxShadow="md"
    //           bg="#FFFFFF"
    //           m={"2"}
    //           display="flex"
    //           justifyContent="center"
    //           alignItems="center"
    //         >
    //           <Box>
    //             <Text color={"#CDD3D7"} fontSize="sm">
    //               No trip found in history.
    //             </Text>
    //           </Box>
    //         </Box>
    //       </Center>
    //     </Box>

    //     {/* 2nd box */}
    //     <Box>
    //       <Center>
    //         <Box
    //           height="150px"
    //           width="50%"
    //           rounded="md"
    //           boxShadow="md"
    //           bg="#FFFFFF"
    //           m={"2"}
    //         >
    //           <Box px={"6"}>
    //             <Flex justify="space-between">
    //               <Box>
    //                 <Text color={"#CDD3D7"}  fontSize="xs">Departure</Text>
    //                 <Heading fontSize="sm">Any City,</Heading>
    //                 <Heading fontSize="sm">Country</Heading>
    //                 <Text color={"#CDD3D7"}  fontSize="xs">15 jun 2022</Text>
    //               </Box>

    //               <Image
    //                 src={"/journeyLine.svg"}
    //                 height={300}
    //                 width={300}
    //                 alt="svg"
    //               />

    //               <Box>
    //                 <Text color={"#CDD3D7"}  fontSize="xs">Arrival</Text>
    //                 <Heading fontSize="sm">Karachi,</Heading>
    //                 <Heading fontSize="sm">Pakistan</Heading>
    //                 <Text color={"#CDD3D7"}  fontSize="xs">15 jun 2022</Text>
    //               </Box>
    //             </Flex>
    //           </Box>
    //           <Divider
    //             maxW="full"
    //             my="5px"
    //             mx="auto"
    //             borderWidth="1px"
    //             borderColor="gray"
    //           />
    //           <Box p={"5px"}>
    //             {/* image */}
    //             <Flex justify="space-between">
    //               <Box>
    //                 <Flex>
    //                   <Box>
    //                     <Image
    //                       src={"/user.png"}
    //                       alt="pic"
    //                       height={50}
    //                       width={50}
    //                     />
    //                   </Box>
    //                   <Box>
    //                     <Text>hirawasi</Text>
    //                     <Image
    //                       src={"/35174011.jpg"}
    //                       alt="star"
    //                       height={70}
    //                       width={70}
    //                     />
    //                   </Box>
    //                 </Flex>
    //               </Box>
    //               <Text color={"#CDD3D7"} fontSize="sm">Order Completed</Text>
    //             </Flex>
    //           </Box>
    //         </Box>
    //       </Center>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default HistoryComp;
