import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { css } from "../assets/css/Css";

export default function Home({ navigation }) {
  return (
    <View style={css.container}>
      <View style={css.footer}>
        <Text style={css.titulo}>Bem vindo a</Text>
        <Text style={css.titulo1}> CobraFácil!</Text>
        <Text style={css.titulo2}>Cobre quem te deve!</Text>

        <TouchableOpacity
          style={css.button1}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={css.button__text}>Tá afim de cobrar? Clique aqui!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
