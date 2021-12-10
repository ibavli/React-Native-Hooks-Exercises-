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

            <Button
                onPress={() => navigation.navigate("SquareScreen")}
                title="Go to Square Screen" />

            <Button
                onPress={() => navigation.navigate("TextScreen")}
                title="Go to Text Screen" />
    
            <Button
                onPress={() => navigation.navigate("SearchScreen")}
                title="Go to Search Screen" />

        </View>
    )
};

const styles = StyleSheet.create({

});

export default HomeScreen;
