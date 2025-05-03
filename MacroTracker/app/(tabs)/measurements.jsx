import { Text, View, StyleSheet } from "react-native";

export default function MeasurementsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Measurements Screen</Text>
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