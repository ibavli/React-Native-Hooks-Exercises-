import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';


const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                onPress={() => setColors([...colors, randomColor()])}
                title="Add a Color" />
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{
                        height: 100,
                        width: 100,
                        backgroundColor: item
                    }}></View>
                }} />

        </View>
    )
};

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ColorScreen;
