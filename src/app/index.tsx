import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FullScreen from "../components/containers/FullScreen";
import Card from "../components/containers/Card";
import FormInput from "../components/form/FormInput";
import FormButton from "../components/form/FormButton";

export default function index() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(username === 'teste' && password === '123')
    router.push("/home");
  }

  return (
    <FullScreen>
      <Card>
        <Image resizeMode="contain" style={styles.logo} source={require("../../assets/images/logo2.png")}/>
        <FormInput label="Username" value={username} onChangeText={setUsername}/>
        <FormInput label="Password" value={password} onChangeText={setPassword} secureTextEntry/>

        <FormButton onPress={handleLogin} title="Login"/>
      </Card>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    maxHeight: '100%',
    alignContent: "center"
  }
});
