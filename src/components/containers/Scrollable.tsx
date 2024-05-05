import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Stack } from 'expo-router';

type FullScreenProps = {
    children: ReactNode;
};

export default function Scrollable({children}:FullScreenProps) {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerShown: false}}/>

      {/* <ScrollView>{children}</ScrollView> */}
      <View>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})