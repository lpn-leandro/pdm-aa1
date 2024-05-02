import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import {
  connectActionSheet,
  useActionSheet,
} from '@expo/react-native-action-sheet';
import { AntDesign } from '@expo/vector-icons';

type HeaderWithHamburguerProps = {
  title: string;
  optionsProps: string[];
  destructiveButtonIndex?: number;
};

export default function HeaderWithHamburguer({
  title,
  optionsProps,
  destructiveButtonIndex,
}: HeaderWithHamburguerProps) {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const handlePress = (title: string) => {
    showActionSheetWithOptions(
      {
        options: optionsProps,
        destructiveButtonIndex: destructiveButtonIndex,
      },
      (pressedId) => {
        console.log(title);
        if (title === 'Home') {
          if (pressedId === 0) {
            router.push('/about');
          } else {
            router.push('/');
          }
        } else {
          if (pressedId === 0) {
            router.push('/home');
          } else {
            router.push('/');
          }
        }
      }
    );
  };

  return (
    <Stack.Screen
      options={{
        headerShown: true,
        title,
        header: () => (
          <View style={styles.headerStyle}>
            <Text style={styles.title}>{title}</Text>
            <Pressable style={styles.button} onPress={() => handlePress(title)}>
              <AntDesign name='menu-fold' size={25} color='white'></AntDesign>
            </Pressable>
          </View>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'red',
    borderBottomWidth: 2,
    backgroundColor: 'black',
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 5,
  },
  button: {
    marginRight: 5,
  },
});
