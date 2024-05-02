import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Card from '../components/containers/Card';
import FullScreen from '../components/containers/FullScreen';
import { openURL } from 'expo-linking';
import HeaderWithHamburguer from '../components/headers/HeaderWithHamburguer';
import {
  ActionSheetProvider,
  connectActionSheet,
} from '@expo/react-native-action-sheet';

export function about() {
  return (
    <ActionSheetProvider>
      <FullScreen>
        <HeaderWithHamburguer
          title='Sobre'
          optionsProps={['Home', 'Logout']}
          destructiveButtonIndex={1}
        />
        <Card>
          <View style={styles.container}>
            <View style={styles.info}>
              <Text style={[styles.title, styles.bold]}>InitialD Cars</Text>
              <Text>Versão 1.0</Text>
            </View>

            <View style={styles.info}>
              <Text>
                Desenvolvido por <Text style={styles.bold}>L.P.N</Text>
              </Text>
              <Text onPress={() => openURL('https://github.com/lpn-leandro')}>
                https://github.com/lpn-leandro
              </Text>
            </View>
          </View>
        </Card>
      </FullScreen>
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(about);

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
  },
  info: {
    margin: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
});
