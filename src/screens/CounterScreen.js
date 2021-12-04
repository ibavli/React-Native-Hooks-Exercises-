import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';


const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button
                onPress={() => setCounter(counter + 1)}
                title="Increase" />
            <Button
                onPress={() => setCounter(counter - 1)}
                title="Decrease" />
            <Text style={styles.text}>
                Current Count : {counter}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default CounterScreen;
