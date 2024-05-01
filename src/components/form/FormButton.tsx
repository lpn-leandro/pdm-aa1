import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';

type FormInput = {
  title: string;
} & TouchableOpacityProps;

export default function FormButton({ title, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image
        source={require("../../../assets/images/logo1.png")}
        style={styles.buttonImageIconStyle}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 16,
    width: '100%',
    maxHeight: 60,
  },
  title: {
    color: 'white',
    textAlign: "right",
    alignSelf: "center"
  },
  buttonImageIconStyle: {
    marginRight: 10,
    height: 30,
    width: 30,
    resizeMode: "stretch",
    alignSelf: "center"
  },
});
