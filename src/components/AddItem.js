import { Button, StyleSheet, TextInput, View } from "react-native"

import React from "react"

/* ---------- AÑADIR EL PRODUCTO ---------- */

const AddItem = ({ onChange, textValue, onAddItem, modalVisible }) => {
  return (
    <View style={styles.inputContainer}>
      
      <TextInput
        placeholder="Escribe el producto!"
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
      <Button title="ADD" onPress={onAddItem} />

    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    width: "80%",
    height: 45,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
})