import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import yelp from '../api/yelp'

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = (id) => {
        yelp.get(`/${id}`)
        .then(res => {setResult(res.data)})
    }

    useEffect(()=>{
        getResult(id);
    }, [])

    if (!result){
        return null;
    }
    return (
        <View>
        <Text>{result.name}</Text>
        <FlatList 
        data = {result.photos}
        keyExtractor = {(img) => img}
        renderItem = {({item}) => {
            return <Image 
                        source = {{uri: item}}
                        style = {styles.image}
                    />
        }}
        />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultShowScreen;