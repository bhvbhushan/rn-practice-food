import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const ResultsDetails = ({data}) => {

    return (
        <View style={styles.container}>
        <Image 
            source={{uri: data.image_url}}
            style={styles.image}
        />
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.subResult}>
        <Text style={styles.detail}>{`Rating: ${data.rating}`}</Text>
        <Text style={styles.detail}>{`Reviews: ${data.review_count}`}</Text>
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom:5
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    detail: {
        color: 'red',
        padding:10
    },
    subResult: {
        flexDirection: 'row'
    },
    container:{
        marginLeft: 10
    }

});

export default ResultsDetails