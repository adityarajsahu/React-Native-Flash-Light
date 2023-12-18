import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, FlashMode } from "expo-camera";
import { Entypo } from "react-native-vector-icons";

// import FlashLightComponent from "./FlashLightComponent";

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

    const updateFlashMode = () => {
        if (flashMode === FlashMode.off) {
            setFlashMode(FlashMode.torch);
            console.log("Flashlight ON");
        } else {
            setFlashMode(FlashMode.off);
            console.log("Flashlight OFF");
        }
    };

    return (
        <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={Camera.Constants.Type.back} flashMode={flashMode}></Camera>

            {/* <FlashLightComponent updateFlashMode={updateFlashMode} /> */}
            <View style={styles.flashLightContainer}>
                <Text style={styles.header}>Flash Light</Text>
                <TouchableOpacity>
                    <Entypo name="flashlight" size={75} style={styles.flashTouchable} onPress={updateFlashMode} />
                </TouchableOpacity>
            </View>
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
    flashLightContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#092635",
        alignItems: "center",
    },
    header: {
        fontSize: 42,
        fontWeight: "bold",
        color: "#9EC8B9",
        marginTop: 50,
        marginBottom: 250,
    },
    flashTouchable: {
        color: "#9EC8B9",
    },
});

export default CameraComponent;
