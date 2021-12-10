import { useEffect, useState } from 'react';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            console.log(searchTerm);

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

    return [searchApi, results, errorMessage];
};