import { View, Text, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text>Search Bar</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#976d6d",
    marginVertical: 10,
    borderRadius: 8,
  },
});