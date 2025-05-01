import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Crapola! Page Not Found!!" }} /> 
            <View style={styles.container}>
                <Link href="/" style={styles.button}>Return to Reality</Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "yellow",
    },
});