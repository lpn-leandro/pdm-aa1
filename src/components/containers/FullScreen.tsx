import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Stack } from 'expo-router';

type FullScreenProps = {
    children: ReactNode;
}

export default function FullScreen({children}: FullScreenProps) {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerShown: false}}/>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})