import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            //const response = await yelp.get('/search')
            //setResults(response.data.businesses);

            //imagine it call a request to api
            setResults(['test', 'test2', 'test3']);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    //useEffect(() => {})       if you don't pass any second parameter it runs every time the component is rendered
    //useEffect(() => {}, [])   if you pass empty array only one time runs, runs firs time the component is rendered
    //useEffect(() => {}, [2])  if you pass array with value, it runs 'value' time
    useEffect(() => {
        searchApi();
    }, []);

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
