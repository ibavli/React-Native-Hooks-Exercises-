import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, FlatList, TextInput } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const TextScreen = () => {
    const [name, setName] = useState("");

    return (
        <>
            <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.input}
                value={name} 
                placeholder="input something"
                onChangeText={(newValue) => setName(newValue)}/>
            <Text style={styles.text}>Your input is <Text style={[styles.text, { color: 'red' }]}>{name}</Text></Text>
        </>
    )
};


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default TextScreen;
