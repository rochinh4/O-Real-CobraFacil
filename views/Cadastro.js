import React, { useState, useEffect } from "react";
import config from "../config/config.json";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  View,
} from "react-native";
import { css } from "../assets/css/Css";
import * as yup from "yup";
import axios, { Axios } from "axios";

export default function Cadastro({ navigation }) {
  const handleClickcobranca = (values) => {
    Axios.post("https://localhost:3001/cobranca", {
      nomedevedorUser: values.nomedevedorUser,
      numeroCobrancaUser: values.numeroCobrancaUser,
      dataCobrancaUser: values.dataCobrancaUser,
      nomeCobradorUser: values.nomeCobradorUser,
      pixCobradorUser: values.pixCobradorUser,
      valorDebitoUser: values.valorDebitoUser,
      nomeEmpresaUser: values.nomeEmpresaUser,
    }).then((response) => {
      console.log(response);
    });
  };
  const validationCobranca = yup.object().shape({
    nomedevedorUser: yup.string().required(),
    numeroCobrancaUser: yup.string().required(),
    dataCobrancaUser: yup.date().required(),
    nomeCobradorUser: yup.string().required(),
    pixCobradorUser: yup.string().required(),
    valorDebitoUser: yup.string().required(),
    NomeEmpresaUser: yup.string().required(),
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={css.container}>
        <View style={css.footer1}>
          <TextInput
            style={css.input}
            placeholder="Nome do Devedor                                    Exemplo : Joãozinho das Neves "
            validationSchema={validationCobranca}
            onChangeText={(text) => nomedevedorUser(text)}
          />

          <TextInput
            style={css.input}
            placeholder="Número de Cobrança                                         Por exemplo:5573XXXXXXXX"
            onChangeText={(text) => numeroCobrancaUser(text)}
            validationSchema={validationCobranca}
          />

          <TextInput
            style={css.input}
            placeholder="Data da Cobrança (AAAA/MM/DD) Por exemplo :             2039/12/01 "
            onChangeText={(date) => dataCobrancaUser(date)}
            validationSchema={validationCobranca}
          />
          <TextInput
            style={css.input}
            placeholder="Nome do Cobrador                                               Por exemplo : Cersina do Carmo "
            onChangeText={(text) => nomeCobradorUser(text)}
            validationSchema={validationCobranca}
          />
          <TextInput
            style={css.input}
            placeholder="Pix do Cobrador                                                 Por exemplo :CPF XXX.XXX.XXX-XX "
            onChangeText={(text) => pixCobradorUser(text)}
            validationSchema={validationCobranca}
          />
          <TextInput
            style={css.input}
            placeholder="Qual o nome de sua empresa?                               Por exemplo : EngenhariaALQ.LTDA "
            onChangeText={(text) => nomeEmpresaUser(text)}
            validationSchema={validationCobranca}
          />
          <TextInput
            style={css.input}
            placeholder="Qual o valor que ele te deve?                            Por exemplo :R$3000.000.000 "
            onChangeText={(text) => valorDebitoUser(text)}
            validationSchema={validationCobranca}
          />

          <TouchableOpacity style={css.button} onPress={handleClickcobranca}>
            <Image
              source={require("../assets/img/Logobranco.png")}
              style={css.logo}
            />
            <Text style={css.button__text}></Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
