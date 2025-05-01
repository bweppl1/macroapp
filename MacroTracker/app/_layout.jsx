import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" option={{ title: "Dashboard" }} />
      <Stack.Screen name="goals" option={{ title: "Goals" }} />
    </Stack>
  );
}
