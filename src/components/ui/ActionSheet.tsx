import { View, Text, Button } from 'react-native'
import React from 'react'
import { useActionSheet } from '@expo/react-native-action-sheet';

export default function ActionSheet() {

  const { showActionSheetWithOptions } = useActionSheet
  ();

  const options = ["Use", "Remove"];
  const destructiveButtonIndex = 1;

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        console.log("Selected: ", buttonIndex)
      }
    )
  }

  return (
    <>
    <Text>ActionSheet Teste</Text>
    <Button title='Open ActionSheet' onPress={handleOpen}/>
    </>
  )
}