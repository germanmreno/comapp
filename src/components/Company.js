import { Box, Image, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import moment from "moment";

const URI = "/comapp/companies/";

export const Company = () => {
  const { dispatch } = useContext(AuthContext);
  const {
    user: { logged, rol },
  } = useContext(AuthContext);
  const [company, setCompany] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = async () => {
    const res = await axios.get(URI + id);
    setCompany(res.data);
  };

  const checkCompany = async () => {
    const fechaVerificado = moment().format("YYYY-MM-DD");
    const fechafin = moment().add(6, "M").format("YYYY-MM-DD");

    try {
      await axios.put(URI + id, {
        status: "Verificado",
        fechaverificado: fechaVerificado,
        fechafinverificado: fechafin,
      });
      alert("Verificado correctamente");
      navigate("/");
    } catch (err) {
      alert("Ocurrió un error.");
    }
  };

  const solvencyCompany = async () => {
    const fechaSolvencia = moment().format("YYYY-MM-DD");
    const fechafin = moment().endOf("month").format("YYYY-MM-DD");

    try {
      await axios.put(URI + id, {
        solvencia: "Solvente",
        fechasolvencia: fechaSolvencia,
        fechafinsolvencia: fechafin,
      });
      alert("Solvencia otorgada correctamente");
      navigate("/");
    } catch (err) {
      alert("Ocurrió un error.");
    }
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
            {logged && (
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
            )}
          </Stack>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" w="100%">
        <Box mt={115}>
          <Box
            display="flex"
            w="100%"
            height="auto"
            justifyContent="center"
            alignItems="center"
            ml="100px"
          >
            <div className="container">
              <div className="row">
                <div className="col">
                  <p class="h3">Status</p>
                  <table className="table">
                    <thead className="table-primary">
                      <tr>
                        <th>Verificado</th>
                        {company.status === "Verificado" && (
                          <th>Verificado hasta el:</th>
                        )}
                        <th>Solvente</th>
                        {company.solvencia === "Solvente" && (
                          <th>Solvente hasta el:</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      <td>{company.status}</td>
                      {company.status === "Verificado" && (
                        <td>{company.fechafinverificado}</td>
                      )}
                      <td>{company.solvencia}</td>
                      {company.solvencia === "Solvente" && (
                        <td>{company.fechafinsolvencia}</td>
                      )}
                    </tbody>
                  </table>
                  <p class="h3">Información de la Empresa</p>
                  <table className="table">
                    <thead className="table-primary">
                      <tr>
                        <th>Nombre de la Empresa</th>
                        <th>RIF</th>
                        <th>Número de Alianza</th>
                        <th>Dirección Fiscal</th>
                        <th>Estado</th>
                        <th>Municipio</th>
                        <th>Parroquia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={company.guid}>
                        <td>{company.nombre}</td>
                        <td>{company.rif}</td>
                        <td>{company.numalianza}</td>
                        <td>{company.direccionfiscal}</td>
                        <td>{company.estado}</td>
                        <td>{company.municipio}</td>
                        <td>{company.parroquia}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="h3">Información del Representante</p>
                  <table className="table">
                    <thead className="table-primary">
                      <tr>
                        <th>Representante</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Cédula</th>
                        <th>RUM</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{company.representante}</td>
                        <td>{company.telefonorepresentante}</td>
                        <td>{company.correorepresentante}</td>
                        <td>{company.cedularepresentante}</td>
                        <td>{company.rumrepresentante}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="h3">Información Minera</p>
                  <table className="table">
                    <thead className="table-primary">
                      <tr>
                        <th>Tipo de Actividad</th>
                        <th>Actividad Minera</th>
                        <th>Encargado</th>
                        <th>Cédula Encargado</th>
                        <th>Número de Empleados</th>
                        <th>Medida Comercio</th>
                        <th>Inventario</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{company.tipoactividad}</td>
                        <td>{company.actividadminera}</td>
                        <td>{company.nombreencargado}</td>
                        <td>{company.cedulaencargado}</td>
                        <td>{company.numempleados}</td>
                        <td>{company.medidacomercio}</td>
                        <td>{company.inventario}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table">
                    <thead className="table-primary">
                      <tr>
                        <th>Promedio Compra</th>
                        <th>Ganancia Neta Mensual</th>
                        <th>Porcentaje de Compra</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{company.promediooro}</td>
                        <td>{company.promedioganancia}</td>
                        <td>{company.porcentajecompra}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <Box
                display="flex"
                flex-direction="row"
                alignItems="center"
                justifyContent="center"
                padding={4}
              >
                {company.status === "Espera" && (
                  <button
                    onClick={() => checkCompany()}
                    className="btn btn-success"
                  >
                    Verificar
                  </button>
                )}
                {company.status === "Verificado" && (
                  <button
                    onClick={() => solvencyCompany()}
                    className="btn btn-primary"
                  >
                    Dar solvencia
                  </button>
                )}
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};
