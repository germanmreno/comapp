import React from "react";
import "../styles/Contact.css";

import { Box, Heading, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

const Contact = () => {
  const [isLessThan1200] = useMediaQuery('(max-width: 1200px)');
  return (
    <>
      <Box className="header-app" position="fixed" top="0">
        <div className="gobierno-logo-container"></div>
        <div className="logo-app-container"></div>
        <Box h="100px" position="absolute" display="flex" width="100%">
        {isLessThan1200 && (
        <Menu id="home-menu">
          <Link to="/">
              <Image src="https://i.imgur.com/GKDwIhR.png" height="80px" />
            </Link>
            <Link to="/contact">
              <Image src="https://i.imgur.com/ruTDdtu.png" height="80px" />
            </Link>
            <Link to="/help">
              <Image src="https://i.imgur.com/LBmBrKC.png" height="80px" />
            </Link>
        </Menu>)}
          {!isLessThan1200 && (
            <Stack
            spacing={1}
            direction={"row"}
            p={2}
            flex="1"
            justify="flex-end"
            width="100%"
          >
            <Link to="/">
              <Image src="https://i.imgur.com/GKDwIhR.png" height="80px" />
            </Link>
            <Link to="/contact">
              <Image src="https://i.imgur.com/ruTDdtu.png" height="80px" />
            </Link>
            <Link to="/help">
              <Image src="https://i.imgur.com/LBmBrKC.png" height="80px" />
            </Link>
          </Stack>)} 
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
      {!isLessThan1200 && (<Box
          h="100vh"
          w="50%"
          backgroundImage="https://i.imgur.com/DYE4aEq.png"
          bgPosition="right"
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <Box
            display="flex"
            width="100%"
            height="600px"
            mb="0"
            flex-direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Image src="https://i.imgur.com/Iyg74x0.png" width="400px" />
          </Box>
        </Box>)}
        <Box
          display="flex"
          w={!isLessThan1200 ? "50%" : "100%"}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            mt="150px"
            w="95%"
            height="600px"
            border="2px solid #f7cd00"
            borderRadius="25px 0px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex-direction="column"
          >
            <Stack
              spacing={4}
              direction={"column"}
              p={2}
              flex="1"
              justify="center"
              align="center"
            >
              <Heading
                fontFamily="conthraxsemibold"
                color="#fed305"
                fontSize="28px"
              >
                CONTACTO
              </Heading>
              <Stack
                spacing={4}
                direction={"row"}
                p={2}
                flex="1"
                justify="center"
                align="center"
              >
                <Box w="50%" fontSize={isLessThan1200 ? "12px" : "14px"}>
                  <Stack
                    spacing={1}
                    direction={"row"}
                    p={1}
                    flex="1"
                    align="center"
                  >
                    <Image src="https://i.imgur.com/nGs8XFr.png" width="30px" />
                    <Text>
                      <i>info.contactocvm@cvm</i>
                    </Text>
                  </Stack>
                  <Stack
                    spacing={1}
                    direction={"row"}
                    p={1}
                    flex="1"
                    align="center"
                  >
                    <Image src="https://i.imgur.com/621beG4.png" width="30px" />
                    <Text>
                      <i>
                        Calle Cali, entre Av. Veracruz y Av. Orinoco <br />
                        Las Mercedes
                      </i>
                    </Text>
                  </Stack>
                  <Stack
                    spacing={1}
                    direction={"row"}
                    p={1}
                    flex="1"
                    justify="center"
                    align="center"
                  >
                    <Image
                      src="https://i.imgur.com/JJaqegX.pngom/621beG4.png"
                      width="30px"
                    />
                    <Image src="https://i.imgur.com/KSRTJRj.png" width="30px" />
                    <Image src="https://i.imgur.com/f5RqJAP.png" width="30px" />
                  </Stack>
                </Box>
                <Box>
                  <Stack
                    spacing={3}
                    direction={"column"}
                    p={1}
                    flex="1"
                    justify="center"
                    align="center"
                  >
                    <Box
                      border="3px solid #f7cd00"
                      borderRadius="25px 0px"
                      h="50px"
                      w="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <input
                        type="text"
                        className="contact-form"
                        placeholder="Nombre y Apellido"
                      ></input>
                    </Box>
                    <Box
                      border="3px solid #f7cd00"
                      borderRadius="25px 0px"
                      h="50px"
                      w="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <input
                        type="text"
                        className="contact-form"
                        placeholder="Correo electrónico"
                      ></input>
                    </Box>
                    <Box
                      border="3px solid #f7cd00"
                      borderRadius="25px 0px"
                      h="50px"
                      w="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <input
                        type="text"
                        className="contact-form"
                        placeholder="Asunto"
                      ></input>
                    </Box>
                    <Box
                      border="3px solid #f7cd00"
                      borderRadius="25px 0px"
                      h="50px"
                      w="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <input
                        type="text"
                        className="contact-form"
                        placeholder="Mensaje"
                      ></input>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
              <Stack
                spacing={4}
                direction={"row"}
                p={3}
                flex="1"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="https://i.imgur.com/cWcllqB.png"
                  width="150px"
                  cursor="pointer"
                />
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
