import { View, Text, TextInputProps, StyleSheet, TextInput } from 'react-native'
import React from 'react'

type FormInput = {
    label?: string;
}& TextInputProps;

export default function FormInput({label, ...rest}: FormInput) {

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput {...rest}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 16,
        padding: 4,
        width: "100%",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        backgroundColor: "#ede9e8",
        borderRadius: 10
    },
    label: {
        fontSize: 12,
    }
})