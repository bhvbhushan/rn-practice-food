import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultList';

const SearchScreen = () => {

    const [searchTerm, onSearchTermChange] = useState('');
    const [searchApi, results, errMsg] = useResults();

    const filterResultByPrice = (price) => {
        //price === $ || $$ | $$$
        return results.filter(result => result.price === price);
    }

    return <>
    <SearchBar 
    term={searchTerm} 
    onSearchTemChange={newTerm => onSearchTermChange(newTerm)}
    onTermSubmit={() => searchApi(term)}
    />
    {errMsg ? <Text>{errMsg}</Text> : null}
    <ScrollView>
    <ResultsList 
        title="Cost Effective" 
        results = {filterResultByPrice('$')}
        />
    <ResultsList 
        title="Bit Pricer" 
        results = {filterResultByPrice('$$')}
        />
    <ResultsList 
        title="Big Spender!" 
        results = {filterResultByPrice('$$$')}
        />
    </ScrollView>
    </>
};

const styles = StyleSheet.create({});

export default SearchScreen
