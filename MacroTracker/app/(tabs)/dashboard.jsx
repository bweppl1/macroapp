import { Text, View, StyleSheet } from "react-native";

export default function DashboardScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#FFF",
    },
})