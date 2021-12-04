import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';


const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
    )
};


const styles = StyleSheet.create({
    
});

export default ColorCounter;
