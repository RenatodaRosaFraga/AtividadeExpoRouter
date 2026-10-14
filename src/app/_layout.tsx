import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
    {/* Tela de Login (index.tsx) */}
    <Stack.Screen name="index" />

    {/* Pasta de Abas da Área Restrita */}
    <Stack.Screen name="(tabs)" />

    {/* Tela de Detalhes da Notícia (Stack individual ) */}
    <Stack.Screen name="noticiasdetalhe" 
    options={{ headerShown: true, title: "Detalhes" }} />
    </Stack>
  );
}