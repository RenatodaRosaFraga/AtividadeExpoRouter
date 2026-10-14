import { StyleSheet, Text, View } from "react-native";



export default function Perfil() {
  return (
    <View style={styles.container}> 
    <Text style={styles.titulo}>Olá, admin</Text>
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
});