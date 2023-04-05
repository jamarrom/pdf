import React,{Component} from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  baseText: {
    fontWeight: 'bold',
  },
  displayNone: {
    display: 'none',
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

export class BotonCompartir extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrar: false
    };
    this.btnMostrar=this.btnMostrar.bind(this);
  }

  btnMostrar(e) {
    this.setState ({
      mostrar: true
    });
  }

  render() {
    return(
    <div>
      {this.state.mostrar?<Pdf />:null }
      <nav>
        <button style={this.state.mostrar?styles.displayNone:styles.section} onClick={this.btnMostrar}>Compartir</button>
      </nav>
    </div>
    )
  }
}

function Pdf() {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.baseText}>CLABE</Text>
            <Text>030180900033517123</Text>
          </View>
          <View style={styles.section}>
            <Text>Denominación o Razón Social</Text>
            <Text>SILMARILS SAPI de CV</Text>
          </View>
          <View style={styles.section}>
            <Text>Institucion Ordenante</Text>
            <Text>Bajio</Text>
          </View>
          <View style={styles.section}>
            <Text>Monto</Text>
            <Text>$99.00 MXN</Text>
          </View>
          <View style={styles.section}>
            <Text>Fecha</Text>
            <Text>04/04/2023</Text>
          </View>
          <View style={styles.section}>
            <Text>Hora</Text>
            <Text>14:57:46</Text>
          </View>
          <View style={styles.section}>
            <Text>Estado</Text>
            <Text>Settled</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
