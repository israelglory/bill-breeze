import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const TopUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TopUp Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
});

export default TopUpScreen;
