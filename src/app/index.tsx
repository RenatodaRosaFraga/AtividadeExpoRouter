import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";



export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = () => {
  
    if (usuario === "admin" && senha === "1234") {
      router.push("/(tabs)/noticias");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

return (
  <View style={styles.container}>
    <Text style={styles.titulo}>Login</Text>


  <TextInput
    style={styles.input}
    placeholder="Usuário"
    value={usuario}
    onChangeText={setUsuario}
  />
  <TextInput
    style={styles.input}
    placeholder="Senha"
    value={senha}
    onChangeText={setSenha}
    secureTextEntry
  />

  <Button title="Entrar" onPress={handleLogin} />
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
