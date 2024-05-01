import { View, Text, Button, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import ActionSheet from '../ui/ActionSheet';
import { useActionSheet } from '@expo/react-native-action-sheet';

type HeaderWithHamburguerProps = {
  title: string;
};

export default function HeaderWithHamburguer({
  title,
}: HeaderWithHamburguerProps) {
  const router = useRouter();

  const { showActionSheetWithOptions } = useActionSheet();

  const options = ['Use', 'Remove'];
  const destructiveButtonIndex = 1;

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        console.log('Selected: ', buttonIndex);
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
            <Text>Teste</Text>
            <Pressable onPress={handleOpen}>
              <AntDesign name='menu-fold' size={20} color='white'></AntDesign>
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
    justifyContent: 'flex-end',
    paddingTop: 20,
    borderColor: 'red',
    borderBottomWidth: 2,
    backgroundColor: 'black',
    padding: 8,
  },
});
