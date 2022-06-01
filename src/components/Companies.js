import { Box, Image, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

const URI = "/comapp/companies/";

export const Companies = () => {
  const { dispatch } = useContext(AuthContext);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    const res = await axios.get(URI);
    setCompanies(res.data);
  };

  return (
    <>
      <Box className="header-app" position="fixed" top="0">
        <div className="gobierno-logo-container"></div>
        <div className="logo-app-container"></div>
        <Box h="100px" position="absolute" display="flex" width="100%">
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
            <Link to="/companies">
              <Image src="https://i.imgur.com/GKDwIhR.png" height="80px" />
            </Link>
            <Link
              to="/"
              onClick={() =>
                dispatch({
                  type: types.logout,
                })
              }
            >
              <Image src="https://i.imgur.com/pmn7y45.png" height="40px" />
            </Link>
          </Stack>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box
          h="100vh"
          w="30%"
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
        <Box mt={100}>
          <Box display="flex" w="1000px" height="auto" mt="40px">
            <div className="container">
              <div className="row">
                <div className="col">
                  <table className="table">
                    <thead className="table-primary">
                      <tr>
                        <th>Nombre de la Empresa</th>
                        <th>RIF</th>
                        <th>Número de Alianza</th>
                        <th>Tipo de Actividad</th>
                        <th>Actividad Minera</th>
                        <th>Promedio Compra</th>
                        <th>Ganancia Neta Mensual</th>
                        <th>Porcentaje de Compra</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {companies.map((company) => (
                        <tr key={company.guid}>
                          <td>{company.nombre}</td>
                          <td>{company.rif}</td>
                          <td>{company.numalianza}</td>
                          <td>{company.tipoactividad}</td>
                          <td>{company.actividadminera}</td>
                          <td>{company.promediooro}</td>
                          <td>{company.promedioganancia}</td>
                          <td>{company.porcentajecompra}</td>
                          <td>{company.status}</td>
                          <td>
                            <Link
                              to={`/companies/${company.guid}`}
                              className="btn btn-info"
                            >
                              Verificar
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};
