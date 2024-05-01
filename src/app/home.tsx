import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Scrollable from '../components/containers/Scrollable'
import HeaderWithHamburguer from '../components/headers/HeaderWithHamburguer'

export default function home() {
  return (
    <Scrollable>
      <HeaderWithHamburguer title='Home'/>
      <Text style={styles.title}> Carros a Venda </Text>
    </Scrollable>
  )
}

const styles = StyleSheet.create({
  title:{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  }
}) ;