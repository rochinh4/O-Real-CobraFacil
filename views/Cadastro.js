import React, { useState, useEffect } from "react";
import config from "../config/config.json";
import {
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
        nomedevedorUser: nomeDevedor,
        numeroCobrancaUser: numerocobranca,
        dataCobrancaUser: datacobranca,
        nomeCobradorUser: nomecobrador,
        pixCobradorUser: pixcobrador,
        valorDebitoUser: valordebito,
        NomeEmpresaUser: nomeEmpresa,
      }),
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={css.container}>
        <ImageBackground
          source={require("../assets/img/splash.png")}
          style={css.background}
        >
          <View style={css.footer1}>
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
              placeholder="Data da Cobrança (AAAA/MM/DD) Por exemplo :             2039/12/01 "
              onChangeText={(datetime) => setDatacobranca(datetime)}
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
