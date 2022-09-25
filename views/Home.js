import React, { useEffect } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import { css } from "../assets/css/Css";

export default function Home({ navigation }) {
  return (
    <View style={css.container}>
      <ImageBackground
        source={require("../assets/img/splash.png")}
        style={css.background}
      >
        <View style={css.footer}>
          <Text style={css.titulo}> Bem vindos a CobraFácil!!</Text>
          <TouchableOpacity
            style={css.button1}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={css.button__text}>
              Tá afim de cobrar? Clique aqui!
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
