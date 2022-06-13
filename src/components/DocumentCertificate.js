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
  corptext: {
    fontWeight: "bold",
    fontSize: "22px",
    textAlign: "center",
    color: "#1b1516",
    marginTop: "30px",
    marginBottom: "5px",
  },
  certificatetext: {
    fontSize: "24px",
    color: "#016141",
    fontWeight: "bold",
    textAlign: "center",
  },
  sociedadmercantil: {
    marginTop: "5px",
    fontSize: "20px",
    fontStyle: "italic",
    color: "#003c22",
    fontWeight: "600",
    textAlign: "center",
  },
  sociedadmercantiltexto: {
    marginTop: "5px",
    fontSize: "20px",
    color: "#2e2e2f",
    fontWeight: "600",
    textAlign: "center",
  },
  titles: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    marginLeft: "30px",
  },
  titlestext: {
    marginTop: "8px",
    color: "#0c0809",
    fontWeight: "bold",
    fontSize: "16px",
  },
  titlesubtext: {
    fontStyle: "italic",
    color: "#2e2e2f",
    overflowWrap: "break-word",
  },
  titlenote: {
    marginTop: "5px",
    color: "#0c0809",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  firmacontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60px",
    marginBottom: "10px",
  },
  firma: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "2px solid black",
  },
  firmatexto: {
    width: "300px",
    position: "absolute",
    left: "260px",
    bottom: "-45px",
  },
  textfirma: {
    color: "#0c0809",
    fontWeight: "bold",
    fontSize: "11px",
  },
  qrstyle: {
    width: "80px",
    position: "absolute",
    right: "36px",
    top: "40px",
  },
});

// Create Document Component
const DocumentCertificate = (props) => {
  const {
    image,
    nombre,
    representante,
    inscripcion,
    fechaverificado,
    fechafinverificado,
  } = props;
  console.log(nombre, representante, inscripcion);
  return (
    <Document>
      <Page size={[800, 500]} style={styles.page}>
        <Image
          src="https://i.imgur.com/Eq8izVF.png"
          style={styles.pageBackground}
        />
        <View style={styles.corptext}>
          <Text>Corporación Venezolana de Minería, S.A.</Text>
        </View>
        <View style={styles.certificatetext}>
          <Text>CERTIFICADO PARA LA COMERCIALIZACIÓN</Text>
        </View>
        <View style={styles.certificatetext}>
          <Text>DE MINERAL DE ORO</Text>
        </View>
        <View style={styles.sociedadmercantil}>
          <Text>SOCIEDAD MERCANTIL:</Text>
        </View>
        <View style={styles.sociedadmercantiltexto}>
          <Text>"{nombre}"</Text>
        </View>
        <View style={styles.titles}>
          <Text style={styles.titlestext}>
            REPRESENTANTE LEGAL:{" "}
            <Text style={styles.titlesubtext}>{representante}</Text>
          </Text>
          <Text style={styles.titlestext}>
            AUTORIZADA PARA:{" "}
            <Text style={styles.titlesubtext}>
              Llevar a cabo las actividades de compra y venta del Mineral
              Aurífero.
            </Text>
          </Text>
          <Text style={styles.titlestext}>
            INSCRIPCIÓN: <Text style={styles.titlesubtext}>{inscripcion}</Text>
          </Text>
          <Text style={styles.titlestext}>
            FECHA DE EMISIÓN:{" "}
            <Text style={styles.titlesubtext}>{fechaverificado}</Text>
          </Text>
          <Text style={styles.titlestext}>
            FECHA DE VENCIMIENTO:{" "}
            <Text style={styles.titlesubtext}>{fechafinverificado}</Text>
          </Text>
          <Text style={styles.titlenote}>
            NOTA:{" "}
            <Text style={styles.titlesubtext}>
              Este Certificado debe estar visible al Público.
            </Text>
          </Text>
          <Image style={styles.qrstyle} src={{ uri: image }} />
        </View>
        <View style={styles.firmacontainer}>
          <Image
            style={styles.firmatexto}
            src="https://i.imgur.com/tv3Qgvq.png"
          />
          <View style={styles.firma}>
            <Text style={styles.textfirma}>M/G CARLOS OSORIO ZAMBRANO</Text>
            <Text style={styles.textfirma}>PRESIDENTE</Text>
            <Text style={styles.textfirma}>
              CORPORACIÓN VENEZOLANA DE MINERÍA
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DocumentCertificate;
