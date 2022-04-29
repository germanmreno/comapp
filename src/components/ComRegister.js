import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  Textarea,
  Checkbox,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Input,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import venezuela from "venezuela";
import { Link, useNavigate } from "react-router-dom";

const ComRegister = () => {
  const ve = venezuela;
  const { pais: estado } = ve;
  let navigate = useNavigate();

  const [pagina, setPagina] = useState(1);
  const [numEmpleados, setNumEmpleados] = useState(0);
  console.log(numEmpleados)
  const empleados = [];
  for (let i = 0; i < numEmpleados; i++) {
    empleados.push(<Stack spacing={4} direction={"row"} p={3} flex="1">
    <Text>{i+1}</Text>
    <Input
      placeholder="Nombres y Apellidos"
      size="md"
      boxShadow="xs"
    />
    <Input
      placeholder="C.I."
      size="md"
      boxShadow="xs"
    />
    <Input
      placeholder="Cargo"
      size="md"
      boxShadow="xs"
    />
  </Stack>)
  }
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  // eslint-disable-next-line
  const [parish, setParish] = useState("");

  const [actValue, setActValue] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  let municipios = ve.estado(state, {
    municipios: true,
  }).municipios;
  let parroquia = ve.municipio(town, { parroquias: true }).parroquias;

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <Box display="flex" flexDirection="row">
      <Box
        h="auto"
        w="50%"
        backgroundImage="https://i.imgur.com/X5w7nmt.png"
        backgroundRepeat="no-repeat"
        bgSize="cover"
      ></Box>
      <form onSubmit={handleSubmit(onSubmit)}>

        {pagina === 1 && (<>
        <Stack
          mt={-2}
          spacing={4}
          direction={"row"}
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
        </Stack>
        <Box m={4} mt={-6}>
          <Heading as="h3" size="md" mb={4} isTruncated>
            Datos de la Empresa
          </Heading>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            <Input
              placeholder="Nombre de la Empresa"
              id="empresa"
              name="empresa"
              size="md"
              boxShadow="xs"
              {...register("nombre")}
            />
            <Input
              placeholder="RIF"
              size="md"
              id="rif"
              name="rif"
              boxShadow="xs"
              {...register("rif")}
            />
          </Stack>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            <Input
              placeholder="Número de alianza"
              id="numalianza"
              name="numalianza"
              size="md"
              boxShadow="xs"
              {...register("numalianza")}
            />
            <Input
              placeholder="Dirección fiscal"
              id="dirfiscal"
              name="dirfiscal"
              size="md"
              boxShadow="xs"
              {...register("dirfiscal")}
            />
          </Stack>

          <Stack spacing={4} direction={"column"} p={3} flex="1">
            <Select
              {...register("estado")}
              onChange={(e) => {
                setTown("");
                setParish("");
                setState(e.target.value);
                setTown("");
              }}
            >
              <option value="">Elige un estado</option>
              {estado.map((el) => (
                <option key={el.id_estado} value={el.estado}>
                  {el.estado}
                </option>
              ))}
            </Select>
          </Stack>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            {state && (
              <Select
                {...register("municipio")}
                onChange={(e) => {
                  setParish("");
                  setTown(e.target.value);
                }}
              >
                <option value="">Elige un municipio</option>
                {municipios.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            )}
            {town && (
              <Select
                {...register("parroquia")}
                onChange={(e) => {
                  setParish(e.target.value || "");
                }}
              >
                <option value="">Elige una parroquia</option>
                {parroquia.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            )}
          </Stack>
        </Box>

        <Box m={4}>
          <Heading as="h3" size="md" mb={4} isTruncated>
            Datos del Representante
          </Heading>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            <Input
              placeholder="Representante"
              size="md"
              boxShadow="xs"
              {...register("representante")}
            />
            <Input
              placeholder="Número de teléfono"
              size="md"
              boxShadow="xs"
              {...register("rnumtelefono")}
            />
          </Stack>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            <Input
              placeholder="Email"
              size="md"
              boxShadow="xs"
              {...register("rcorreo")}
            />
            <Input
              placeholder="Número de cédula"
              size="md"
              boxShadow="xs"
              {...register("rcedula")}
            />
            <Input
              placeholder="RUM"
              size="md"
              boxShadow="xs"
              {...register("rrum")}
            />
          </Stack>
        </Box>

        <Box m={4}>
          <Heading as="h3" size="md" mb={4} isTruncated>
            Tipo de Actividad
          </Heading>
          <RadioGroup onChange={setActValue} value={actValue}>
            <Stack spacing={4} direction={"column"} p={3} flex="1">
              <Radio {...register("actividad")} value="compra">
                Compra/Venta
              </Radio>
              <Radio {...register("actividad")} value="analisisfundicion">
                Análisis/Fundición
              </Radio>
              <Radio
                {...register("actividad")}
                value="comercializacionexportacion"
              >
                Comercialización/Exportadores
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box m={4}>
          <Heading as="h3" size="md" mb={4} isTruncated>
            Actividad Minera
          </Heading>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            <Checkbox
              {...register("activmin")}
              value="oro"
              colorScheme={"green"}
            >
              Oro
            </Checkbox>
            <Checkbox
              {...register("activmin")}
              value="diamante"
              colorScheme={"green"}
            >
              Diamante
            </Checkbox>
            <Checkbox
              {...register("activmin")}
              value="coltan"
              colorScheme={"green"}
            >
              Coltán
            </Checkbox>
            <Checkbox
              {...register("activmin")}
              value="plata"
              colorScheme={"green"}
            >
              Plata
            </Checkbox>
            <Checkbox
              {...register("activmin")}
              value="calsiterita"
              colorScheme={"green"}
            >
              Casiterita
            </Checkbox>
          </Stack>
          <Textarea
            {...register("descactivmin")}
            placeholder="Breve descripción de su actividad minera"
          />
        </Box>
        </>)}

        {pagina === 2 && (<>
        <Stack
          mt={-2}
          spacing={4}
          direction={"row"}
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
        </Stack>
        <Box m={4} mt={-6}>
          <Heading as="h3" size="md" mb={4} isTruncated>
            Información General
          </Heading>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            <Input
              placeholder="Nombres y Apellido del Encargado"
              id="nombreencargado"
              name="nombreencargado"
              size="md"
              boxShadow="xs"
              {...register("nombreencargado")}
            />
          </Stack>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            <Input
              placeholder="Cédula de Identidad"
              id="cedulaencargado"
              name="cedulaencargado"
              size="md"
              boxShadow="xs"
              {...register("cedulaencargado")}
            />
            <Text>Número de Empleados:</Text>
            <Input
              id="numempleados"
              name="numempleados"
              size="md"
              boxShadow="xs"
              {...register("numempleados")}
              onChange={(e) => setNumEmpleados(e.target.value)}
            />
            
          </Stack>
          {empleados}

          <Stack spacing={4} direction={"row"} p={3} flex="1">
          <Text>Datos del Comercio:</Text>
            <Input
              placeholder="Medidas en m^2"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
          </Stack>
        </Box>

        <Box m={4}>
          <Heading as="h3" size="md" mb={4} display="flex" justifyContent="space-around" isTruncated>
            Inventario
            <Text color="#4d917a" fontSize={14}><i>Observaciones</i></Text>
          </Heading>
          <RadioGroup onChange={setActValue} value={actValue}>
            <Stack spacing={4} direction={"row"} p={3} flex="1" justifyContent="space-around">
              <Box w="30%">
              <Radio {...register("actividad")} value="compra">
                Espectómetro
              </Radio>
              </Box>
              <Box>
              <Input
              placeholder="Serial, Marca y Modelo"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
            </Box>
            </Stack>
            <Stack spacing={4} direction={"row"} p={3} flex="1" justifyContent="space-around">
            <Box w="30%">
              <Radio {...register("actividad")} value="compra">
                Caja Fuerte
              </Radio>
            </Box>
              <Box>
              <Input
              placeholder="Cantidad y Modelo"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
            </Box>
            </Stack>
            <Stack spacing={4} direction={"row"} p={3} flex="1" justifyContent="space-around">
            <Box w="30%">
              <Radio {...register("actividad")} value="compra">
                Cerradura
              </Radio>
              </Box>
              <Box>
              <Input
              placeholder="Cantidad y Modelo"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
            </Box>
            </Stack>
            <Stack spacing={4} direction={"row"} p={3} flex="1" justifyContent="space-around">
            <Box w="30%">
              <Radio {...register("actividad")} value="compra">
                Bombona
              </Radio>
              </Box>
              <Box>
              <Input
              placeholder="Modelo"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
            </Box>
            </Stack>
            <Stack spacing={4} direction={"row"} p={3} flex="1" justifyContent="space-around">
            <Box w="30%">
              <Radio {...register("actividad")} value="compra">
                Balanza
              </Radio>
              </Box>
              <Box>
              <Input
              placeholder="Cantidad y Modelo"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
            </Box>
            </Stack>
            <Stack spacing={4} direction={"row"} p={3} flex="1" justifyContent="space-around">
            <Box w="30%">
              <Radio {...register("actividad")} value="compra">
                Rejas
              </Radio>
              </Box>
              <Box>
              <Input
              placeholder="Cantidad y Modelo"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
            </Box>
            </Stack>
            <Stack spacing={4} direction={"row"} p={3} flex="1" justifyContent="space-around">
            <Box w="30%">
              <Radio {...register("actividad")} value="compra">
                Puerta Reforzada
              </Radio>
              </Box>
              <Box>
              <Input
              placeholder="Cantidad y Modelo"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
            </Box>
            </Stack>
            <Stack spacing={4} direction={"row"} p={3} flex="1" justifyContent="space-around">
            <Box w="30%">
              <Radio {...register("actividad")} value="compra">
                Otros
              </Radio>
              </Box>
              <Box>
              <Input
              placeholder="Especifique"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
            </Box>
            </Stack>
          </RadioGroup>
        </Box>

        <Box m={4}>
          <Heading as="h3" size="md" mb={4} isTruncated>
            Información Comercial
          </Heading>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            <Input
              placeholder="Promedio de compra de oro mensual"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
            <Input
              placeholder="Promedio de ganancia neta mensual"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
          </Stack>
          <Stack spacing={4} direction={"row"} p={3} flex="1">
            <Input
              placeholder="% de la compra en oro en relación al precio internacional"
              id="medidacomercio"
              name="medidacomercio"
              size="md"
              boxShadow="xs"
              {...register("medidacomercio")}
            />
          </Stack>
        </Box>
        </>)}
        
        <Box
          m={4}
          display="flex"
          flex-direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            spacing={4}
            direction={"row"}
            p={3}
            flex="1"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="https://i.imgur.com/R3DQi40.png" width="150px" cursor="pointer" onClick={ 
              () => {setPagina(pagina === 1 ? pagina : pagina-1)
                if(pagina===1) {
                  navigate("/home")
                } }}>
            </Image>
            {pagina === 2 && (
              <><Image src="https://i.imgur.com/3cZFOXx.png" width="150px" cursor="pointer">
              </Image></>
  )}
            <Image src="https://i.imgur.com/xbXg15F.png" width="150px" onClick={ () => setPagina(pagina === 1 ? pagina+1 : navigate("/homeauth"))}>
            </Image>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default ComRegister;