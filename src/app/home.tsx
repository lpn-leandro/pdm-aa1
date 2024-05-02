import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Scrollable from '../components/containers/Scrollable'
import HeaderWithHamburguer from '../components/headers/HeaderWithHamburguer'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import SectionListUi from '../components/ui/SectionListUi'

export default function home() {
  return (
    <ActionSheetProvider>
    <Scrollable>
      <HeaderWithHamburguer title='Home' optionsProps={["About", "Logout"]} destructiveButtonIndex={1}/>
      <Text style={styles.title}> Carros a Venda </Text>
      <SectionListUi/>
    </Scrollable>
    </ActionSheetProvider>
  )
}

const styles = StyleSheet.create({
  title:{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  }
}) ;