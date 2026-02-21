import React, { useState } from "react";
import { Text, View, Button, Image, FlatList, Modal, Pressable, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const DATA = [
    { id: '1', title: 'First Item' },
    { id: '2', title: 'Second Item' },
    { id: '3', title: 'Third Item' },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      {}
      <View style={styles.layer}>
        <SearchBar />
      </View>

      {}
      <View style={styles.centerLayer}>
        <Text style={styles.title}>Hi Welcome got you!</Text>
        <Button title="Go to Orders" onPress={() => router.push("/orders")} />
      </View>

      {}
      <View style={styles.centerLayer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </View>

      {}
      <View style={styles.listLayer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>

      {}
      <View style={styles.centerLayer}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.modalButton}
        >
          <Text>Show Modal</Text>
        </Pressable>
      </View>

      {}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text>This is a Modal</Text>
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#b98b8b",
  },
  layer: {
    marginBottom: 20,
  },
  centerLayer: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 22,
  },
  image: {
    width: 150,
    height: 150,
  },
  listLayer: {
    flex: 1,
    marginBottom: 15,
  },
  item: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 5,
  },
  modalButton: {
    padding: 10,
    backgroundColor: "#a76969",
    borderRadius: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalContainer: {
    backgroundColor: "#d37373",
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
});