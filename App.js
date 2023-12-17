import { StyleSheet, SafeAreaView, View } from "react-native";

import CameraComponent from "./components/CameraComponent";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
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
