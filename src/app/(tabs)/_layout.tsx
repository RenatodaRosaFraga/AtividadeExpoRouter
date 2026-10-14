import { Tabs } from "expo-router";


export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: true }}>
            <Tabs.Screen 
            name="noticias" options={{ title: "Notícias" }} />
            <Tabs.Screen
            name="perfil" options={{ title: "Perfil" }} />
        </Tabs>
    );
}