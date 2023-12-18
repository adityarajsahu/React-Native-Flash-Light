import { StyleSheet, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import CameraComponent from "./components/CameraComponent";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <CameraComponent />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
});
