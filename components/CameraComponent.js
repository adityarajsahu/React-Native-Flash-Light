import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Camera, FlashMode } from "expo-camera";

import FlashLightComponent from "./FlashLightComponent";

const CameraComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [flashMode, setFlashMode] = useState(FlashMode.off);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={Camera.Constants.Type.back} flashMode={FlashMode.off}></Camera>
            <FlashLightComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        width: "100%",
    },
    // camera: {
    //     flex: 1,
    // },
    buttonContainer: {
        flex: 1,
        // backgroundColor: "transparent",
        flexDirection: "row",
    },
});

export default CameraComponent;
