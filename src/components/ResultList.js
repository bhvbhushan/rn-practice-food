import React from 'react';
import {withNavigation} from 'react-navigation';

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from '../components/ResultsDetail';

const ResultsList = ({title, results, navigation}) => {
    if (results.length === 0){
        return null;
    }
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
        data={results}
        horizontal
        keyExtractor={result => result.id}
        renderItem={({item})=> {
            return (
                <TouchableOpacity onPress={()=>navigation.navigate('result', {id: item.id})}>
                <ResultsDetails data={item} />
                </TouchableOpacity>
                )
        }}
        showsHorizontalScrollIndicator={false}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom:10
    },
    container:{
        marginBottom: 15
    }
});

export default withNavigation(ResultsList);