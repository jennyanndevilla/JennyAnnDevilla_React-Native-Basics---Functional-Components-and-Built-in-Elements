import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const Orders = () => {
  return (
    <View style={{ padding: 20 }}>
      <SearchBar />
      <Text style={{ fontSize: 18, marginVertical: 10 }}>You can order here!</Text>
    </View>
  );
};

export default Orders;