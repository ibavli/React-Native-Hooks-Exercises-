import React from 'react';
import { View, Button, StyleSheet } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <View>

            <Button
                onPress={() => navigation.navigate("CounterScreen")}
                title="Go to Counter Screen" />

            <Button
                onPress={() => navigation.navigate("ColorScreen")}
                title="Go to Color Screen" />

        </View>
    )
};

const styles = StyleSheet.create({

});

export default HomeScreen;
