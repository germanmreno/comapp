import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";

import { Box, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { types } from "../types/types";
import { slide as Menu } from "react-burger-menu";
import axios from "axios";
import "../styles/ComHome.css";

const URI = "/comapp/home";

const ComHome = () => {
  const [isLessThan1200] = useMediaQuery("(max-width: 1200px)");
  const [isLargerThan1200] = useMediaQuery("(min-width: 1201px)");
  const {
    user: { jwt },
  } = useContext(AuthContext);
  const [authComRegister, setAuthComRegister] = useState(false);
  const [verified, setVerified] = useState("Espera");
  const [solvency, setSolvency] = useState("Espera");

  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    confirmComRegister();
  }, []);

  const confirmComRegister = async () => {
    const res = await axios.post(URI, {
      jwt,
    });
    setAuthComRegister(res.data.exist);
    setVerified(res.data.verificado);
    setSolvency(res.data.solvencia);
  };

  return (
    <>
      <Box className="header-app" position="fixed" top="0">
        <div className="gobierno-logo-container"></div>
        <div className="logo-app-container"></div>
        <Box h="100px" position="absolute" display="flex" width="100%">
          {isLessThan1200 && (
            <Menu id="home-menu">
              <Link to="/home">
                <Image src="https://i.imgur.com/GKDwIhR.png" height="5em" />
              </Link>
              <Link to="/contact">
                <Image src="https://i.imgur.com/ruTDdtu.png" height="5em" />
              </Link>
              <Link to="/help">
                <Image src="https://i.imgur.com/LBmBrKC.png" height="5em" />
              </Link>
              <Link
                to="/"
                onClick={() =>
                  dispatch({
                    type: types.logout,
                  })
                }
              >
                <Image
                  src="https://i.imgur.com/pmn7y45.png"
                  ml="18px"
                  height="3em"
                />
              </Link>
            </Menu>
          )}
          {isLargerThan1200 && (
            <Stack
              spacing={1}
              direction={"row"}
              p={2}
              flex="1"
              justify="flex-end"
              alignItems="center"
              width="100%"
              mr={3}
            >
              <Link to="/home">
                <Image src="https://i.imgur.com/GKDwIhR.png" height="5em" />
              </Link>
              <Link to="/contact">
                <Image src="https://i.imgur.com/ruTDdtu.png" height="5em" />
              </Link>
              <Link to="/help">
                <Image src="https://i.imgur.com/LBmBrKC.png" height="5em" />
              </Link>
              <Link
                to="/"
                onClick={() =>
                  dispatch({
                    type: types.logout,
                  })
                }
              >
                <Image src="https://i.imgur.com/pmn7y45.png" height="3em" />
              </Link>
            </Stack>
          )}
        </Box>
      </Box>

      <Box display="flex" flexDirection="row">
        {isLargerThan1200 && (
          <Box
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
          </Box>
        )}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w={isLargerThan1200 ? "50%" : "100%"}
          flexDirection="column"
          id="home-items-container"
        >
          {isLessThan1200 && (
            <Box
              display="flex"
              width="100%"
              mb="0"
              flex-direction="column"
              justifyContent="center"
              alignItems="center"
              height="30vh"
              backgroundImage="https://i.imgur.com/DYE4aEq.png"
              backgroundPosition="top"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              mt="100px"
            >
              <Image src="https://i.imgur.com/Iyg74x0.png" width="300px" />
            </Box>
          )}
          {authComRegister && (
            <Stack
              mt={-2}
              spacing={4}
              direction={"column"}
              p={3}
              flex="1"
              alignItems="center"
              justifyContent="Center"
            >
              <Image
                marginTop="80px"
                htmlWidth="275px"
                src="https://i.imgur.com/61iZxXu.png"
                alt="Comercialización CVM"
              />
              <Link to="/confirmregister">
                <Image
                  src="https://i.imgur.com/bS7KIPb.png"
                  width="300px"
                ></Image>
              </Link>
              {verified === "Verificado" && (
                <Link to="/certificate">
                  <Image
                    src="https://i.imgur.com/67q3YFP.png"
                    width="300px"
                  ></Image>
                </Link>
              )}
              <Link to="/activregister">
                <Image
                  src="https://i.imgur.com/djTo1lG.png"
                  width="300px"
                ></Image>
              </Link>
              <Link to="/actarecepcion">
                <Image
                  src="https://i.imgur.com/0biuOBJ.png"
                  width="300px"
                ></Image>
              </Link>
              {solvency === "Solvente" && (
                <Link to="/solvency">
                  <Image
                    src="https://i.imgur.com/Gws6piK.png"
                    width="300px"
                  ></Image>
                </Link>
              )}

              {solvency === "Solvente" && (
                <button type="button" class="btn btn-success" disabled>
                  Usted se encuentra solvente.
                </button>
              )}
              {solvency !== "Solvente" && (
                <button type="button" class="btn btn-danger" disabled>
                  Usted se encuentra en mora.
                </button>
              )}
            </Stack>
          )}

          {!authComRegister && (
            <Stack
              mt={-2}
              spacing={4}
              direction={"column"}
              p={3}
              flex="1"
              alignItems="center"
              justifyContent="Center"
            >
              <Image
                htmlWidth="275px"
                src="https://i.imgur.com/61iZxXu.png"
                alt="Comercialización CVM"
              />
              <Link to="/comregister">
                <Image
                  src="https://i.imgur.com/R7uehhJ.png"
                  width="250px"
                ></Image>
              </Link>
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ComHome;
