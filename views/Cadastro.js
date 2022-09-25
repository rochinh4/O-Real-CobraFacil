import React, { useState, useEffect } from "react";
import config from "../config/config.json";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  View,
} from "react-native";
import { css } from "../assets/css/Css";

export default function Cadastro({ navigation }) {
  const [nomeDevedor, setNomedevedor] = useState(null);
  const [numerocobranca, setNumerocobranca] = useState(null);
  const [datacobranca, setDatacobranca] = useState(null);
  const [nomecobrador, setNomecobrador] = useState(null);
  const [pixcobrador, setPixcobrador] = useState(null);
  const [valordebito, setValordebito] = useState(null);
  const [nomeEmpresa, setNomeempresa] = useState(null);
  const [message, setMessage] = useState(null);

  //Envia os dados do formulário para o backend
  async function registerUser() {
    let reqs = await fetch(config.urlRootNode + "create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeDevedor: nomeDevedor,
        numerocobranca: numerocobranca,
        datacobranca: datacobranca,
        nomecobrador: nomecobrador,
        pixcobrador: pixcobrador,
        valordebito: valordebito,
        nomeEmpresa: nomeEmpresa,
      }),
    });
    let ress = await reqs.json();
    setMessage(ress);
  }

  return (
    <TouchableWithoutFeedback onClick={() => Keyboard.dismiss()}>
      <View style={css.container}>
        <ImageBackground
          source={require("../assets/img/splash.png")}
          style={css.background}
        >
          <View style={css.footer1}>
            {message && <Text>{message}</Text>}
            <TextInput
              style={css.input}
              placeholder="Nome do Devedor                                    Exemplo : Joãozinho das Neves "
              onChangeText={(text) => setNomedevedor(text)}
            />

            <TextInput
              style={css.input}
              placeholder="Número de Cobrança                                         Por exemplo:5573XXXXXXXX"
              onChangeText={(text) => setNumerocobranca(text)}
            />

            <TextInput
              style={css.input}
              placeholder="Data da Cobrança (DD/MM/AAAA) Por exemplo :              01/12/2039 "
              onChangeText={(text) => setDatacobranca(text)}
            />
            <TextInput
              style={css.input}
              placeholder="Nome do Cobrador                                               Por exemplo : Cersina do Carmo "
              onChangeText={(text) => setNomecobrador(text)}
            />
            <TextInput
              style={css.input}
              placeholder="Pix do Cobrador                                                 Por exemplo :CPF XXX.XXX.XXX-XX "
              onChangeText={(text) => setPixcobrador(text)}
            />
            <TextInput
              style={css.input}
              placeholder="Qual o nome de sua empresa?                               Por exemplo : EngenhariaALQ.LTDA "
              onChangeText={(text) => setNomeempresa(text)}
            />
            <TextInput
              style={css.input}
              placeholder="Qual o valor que ele te deve?                            Por exemplo :R$3000.000.000 "
              onChangeText={(text) => setValordebito(text)}
            />

            <TouchableOpacity style={css.button} onPress={registerUser}>
              <Text style={css.button__text}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
