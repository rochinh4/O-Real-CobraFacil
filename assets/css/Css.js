import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
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
    backgroundColor: "#3CB371",
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
    borderRadius: 100,
    width: 70,
    height: 70,
    backgroundColor: "#3CB371",
  },
  button1: {
    borderRadius: 100,
    backgroundColor: "#3CB371",
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  button__text: {
    color: "#fff",
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
    fontSize: 90,
    textAlign: "center",
    color: "#A9A9A9",
    marginBottom: 30,
    marginTop: -50,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  titulo1: {
    fontSize: 70,
    textAlign: "center",
    color: "#3CB371",
    marginBottom: 30,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  titulo2: {
    fontSize: 20,
    textAlign: "center",
    color: "#A9A9A9",
    marginBottom: 30,
    marginTop: 0,
    fontFamily: "Roboto",
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 0,
    marginLeft: 0,
  },
});

export { css };
