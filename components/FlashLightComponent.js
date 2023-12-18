import React from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "react-native-vector-icons";

const FlashLightComponent = () => {
    return (
        <View style={styles.flashLightContainer}>
            <Text style={styles.header}>Flash Light</Text>
            <TouchableOpacity>
                <Entypo name="flashlight" size={75} style={styles.flashTouchable} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default FlashLightComponent;
