import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    width: "800px",
  },
  pageBackground: {
    margin: 0,
    padding: 0,
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
  },
  container: {
    margin: "40px",
  },
  encabezado: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cintillo: {
    height: "30px",
  },
  logo: {
    width: "80px",
  },
  negrita: {
    fontWeight: "bold",
  },
  titulosolvencia: {
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "24px",
    marginTop: "25px",
  },
  textocontainer: {
    marginTop: "25px",
    marginLeft: "60px",
    marginRight: "60px",
  },
  textocuerpo: { fontSize: "11px", textAlign: "justify" },
  textoexpedicion: {
    marginTop: "35px",
    marginLeft: "15px",
    marginRight: "15px",
    textAlign: "center",
    fontSize: "11px",
  },
  textoatentamente: {
    marginTop: "70px",
    fontSize: "11px",
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
  },
  firmaimagen: {
    alignSelf: "center",
    width: "300px",
    marginTop: "-60px",
  },
  textfirma: {
    textAlign: "center",
    fontSize: "11px",
  },
  qrstyle: {
    width: "50px",
    margin: "0 auto",
    marginTop: "20px",
  },
  piedepagina: {
    marginTop: "30px",
    fontSize: "8px",
    textAlign: "center",
  },
});

// Create Document Component
const DocumentSolvency = (props) => {
  const { image, nombre, representante, cedula, mes, anio } = props;
  const month = new Date();
  const dayMonth = month.getDate();
  return (
    <Document>
      <Page size={[600, 700]} style={styles.page}>
        <Image
          src="https://i.imgur.com/Ii1o2ct.jpg"
          style={styles.pageBackground}
        />
        <View style={styles.container}>
          <View style={styles.encabezado}>
            <Image
              src="https://i.imgur.com/cEVtpsZ.png"
              style={styles.cintillo}
            />
            <Image src="https://i.imgur.com/x8RWwzE.png" style={styles.logo} />
          </View>
          <View style={styles.cuerpo}>
            <Text style={styles.titulosolvencia}>SOLVENCIA</Text>
            <View style={styles.textocontainer}>
              <Text style={styles.textocuerpo}>
                Como parte de las acciones realizadas por el ejecutivo Nacional
                liderado por el Presidente de la República Bolivariana de
                Venezuela, Nicolás Maduro, en aporte al desarrollo productivo de
                la Venezuela Potencia, la{" "}
                <Text style={{ fontFamily: "Helvetica-Bold" }}>
                  CORPORACIÓN VENEZOLANA DE MINERÍA S.A.
                </Text>{" "}
                deja constancia que el ciudadano{" "}
                <Text style={{ fontFamily: "Helvetica-Bold" }}>
                  {representante}
                </Text>{" "}
                portador de la{" "}
                <Text style={{ fontFamily: "Helvetica-Bold" }}>
                  CÉDULA DE IDENTIDAD: {cedula}
                </Text>
                , quien representa legalmente a la{" "}
                <Text style={{ fontFamily: "Helvetica-Bold" }}>
                  Sociedad Mercantil: {nombre}
                </Text>{" "}
                realizó de manera exitosa las operaciones de notificación y
                carga del aporte correspondiente a la CVM por realizar las
                actividades de Comercialización de Minerales Estratégicos
                propias al cumplimiento de sus obligaciones establecidas en la
                Alianza Estratégica.
              </Text>
              <Text style={styles.textoexpedicion}>
                Constancia que se expide a petición de la parte interesada a los{" "}
                {dayMonth} días del mes {mes} del {anio}.
              </Text>
              <Text style={styles.textoatentamente}>Atentamente</Text>
              <Image
                style={styles.firmaimagen}
                src="https://i.imgur.com/tv3Qgvq.png"
              />
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontSize: "11px",
                  textAlign: "center",
                  marginTop: "-45px",
                }}
              >
                M/G CARLOS OSORIO ZAMBRANO{" "}
              </Text>
              <Text style={styles.textfirma}>
                PRESIDENTE DE LA CORPORACIÓN VENEZOLANA DE MINERÍA S.A.{" "}
              </Text>
              <Text style={styles.textfirma}>
                Designado mediante Decreto Nro. 3.878, de fecha 21 de junio de
                2019{" "}
              </Text>
              <Text style={styles.textfirma}>
                Publicado en GORBV N° 41.660 de la misma fecha.
              </Text>
              <Image style={styles.qrstyle} src={{ uri: image }} />
              <Text style={styles.piedepagina}>
                <Text
                  style={{
                    fontFamily: "Helvetica-Bold",
                    fontSize: "8px",
                  }}
                >
                  Corporación Venezolana de Minería (CVM)
                </Text>
                , S.A., Calle Cali con Avenida Veracruz, Urbanización Las
                Mercedes, Edificio PAWA, Piso PB. Municipio Baruta. Estado
                Miranda. Venezuela.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DocumentSolvency;
