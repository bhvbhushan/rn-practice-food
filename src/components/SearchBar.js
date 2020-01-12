import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({term, onSearchTemChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" size={30} />
      <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputStyle} 
      placeholder="Search"
      value={term}
      onChangeText={onSearchTemChange}
      onEndEditing={ onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom:10
  },
  inputStyle: {
    // borderWidth:1,
    // borderColor: 'black',
    flex: 1,
    padding: 10,
    fontSize:18
  },
  iconStyle: {}
});

export default SearchBar;
