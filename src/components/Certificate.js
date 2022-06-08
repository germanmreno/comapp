import React, { useContext, useEffect, useState } from "react";

import { Box, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import DocumentCertificate from "./DocumentCertificate";
import { PDFViewer } from "@react-pdf/renderer";
import { QRCodeCanvas } from "qrcode.react";
import "../styles/Certificate.css";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";

const URI = "/comapp/certificate";
const URL = "http://renacovem.cvm.com.ve/company/";

const Certificate = () => {
  const [isLessThan1024] = useMediaQuery("(max-width: 1024px)");
  const [QRCodeString, setQRCodeString] = useState();

  const {
    user: { jwt },
  } = useContext(AuthContext);
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.post(URI, {
      jwt,
    });
    setData(res.data);
    console.log(data);
  };

  function waitForElm(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }
  waitForElm("canvas").then(() => {
    const qrCodeCanvas = document.querySelector("canvas");
    const qrCodeDataUri = qrCodeCanvas.toDataURL("image/jpg", 0.6);
    setQRCodeString(qrCodeDataUri);
  });

  return (
    <>
      <Box className="header-app" position="fixed" top="0">
        <QRCodeCanvas value={`${URL}${data.guid}`} className="qr" />;
        <div className="gobierno-logo-container"></div>
        <div className="logo-app-container"></div>
        <Box h="100px" position="absolute" display="flex" width="100%">
          {isLessThan1024 && (
            <Menu id="burguer-menu">
              <Link to="/">
                <Image src="https://i.imgur.com/GKDwIhR.png" height="80px" />
              </Link>
              <Link to="/contact">
                <Image src="https://i.imgur.com/ruTDdtu.png" height="80px" />
              </Link>
              <Link to="/help">
                <Image src="https://i.imgur.com/LBmBrKC.png" height="80px" />
              </Link>
            </Menu>
          )}
          {!isLessThan1024 && (
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
            </Stack>
          )}
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box
          h="1000px"
          w="100%"
          backgroundImage="https://i.imgur.com/DYE4aEq.png"
          bgPosition="right"
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <Box
            display="flex"
            width="100%"
            height="600px"
            mt="100px"
            flex-direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {QRCodeString && (
              <PDFViewer width={1500} height={500}>
                <DocumentCertificate
                  nombre={data.nombre}
                  representante={data.representante}
                  inscripcion={data.createdAt}
                  guid={data.guid}
                  image={QRCodeString}
                />
              </PDFViewer>
            )}
          </Box>
          <Box
            display="flex"
            flex-direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction={"row"}
              p={3}
              flex="1"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="/">
                <Image
                  src="https://i.imgur.com/R3DQi40.png"
                  width="150px"
                  cursor="pointer"
                ></Image>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Certificate;
