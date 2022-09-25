import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  container__center: {
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#006400",
    padding: 5,
    width: "100%",
    height: "22%",
    paddingTop: 0,
    marginTop: 0,
  },
  header__img: {
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  footer1: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 9,
    height: 60,
    padding: 10,
    backgroundColor: "#363636",
    borderWidth: 3,
    borderColor: "#FFFAFA",
    width: "95%",
    marginBottom: 20,
    fontSize: 18,
    color: "#FFFAFA",
    fontFamily: "Roboto",
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  textoWidth: {
    width: "80%",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#006400",
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
  },
  button1: {
    borderRadius: 5,
    backgroundColor: "#006400",
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  button__text: {
    color: "#FFFAFA",
    fontWeight: "bold",
    fontSize: 17,
    fontFamily: "Roboto",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    backgroundColor: "#00000090 ",
  },
  titulo: {
    fontSize: 60,
    textAlign: "center",
    color: "#FFFAFA",
    marginBottom: 30,
    marginTop: -200,
    fontFamily: "Roboto",
  },
});

export { css };
