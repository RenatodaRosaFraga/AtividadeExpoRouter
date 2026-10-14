import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";



const noticiasData = [
    {
        id: 1,
        titulo: "Notícia 1",
        descricao: "Descrição da notícia 1"
    },
    {
        id: 2,
        titulo: "Notícia 2",
        descricao: "Descrição da notícia 2"
    },
    {
        id: 3,
        titulo: "Notícia 3",
        descricao: "Descrição da notícia 3"
    }
];

export default function Noticias() {
    const router = useRouter();


    return (
        <View style={styles.container}>
            <FlatList
                data={noticiasData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => router.push(`/noticias-detalhe?id=${item.id}`)}
                    >
                        <Text style={styles.titulo}>{item.titulo}</Text>

                    </TouchableOpacity>
                )}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        backgroundColor: "#f0f0f0",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
    },

});    
