import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("shaun");
  const [age, setAge] = useState("40");

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder=".e.g John Doe"
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder=".e.g 99"
        onChangeText={(value) => setAge(value)}
      />

      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 200,
    margin: 10,
  },
});
