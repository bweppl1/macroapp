import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Link href="/goals" style={styles.button}>Set Goals</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#f00",
  },
})