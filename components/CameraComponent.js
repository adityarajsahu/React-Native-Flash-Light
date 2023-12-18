import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
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
            <Camera type={Camera.Constants.Type.back} flashMode={flashMode}></Camera>

            <FlashLightComponent setFlashMode={setFlashMode} flashMode={flashMode} />
        </View>
    );
};

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        width: "100%",
    },
});

export default CameraComponent;
