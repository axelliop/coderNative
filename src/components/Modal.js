//RFNES

// ---- al importar el modal le podemos cambiar el nombre, en este caso NewModal

import { Button, Modal as NewModal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"

/* --- IMPORTO LOS ATRIBUTOS POR PROPS, DENTRO DE UN PARENTESIS Y LLAVE --- */
const Modal = ({
  isVisible,
  actionDeleteItem,
  itemSelected,
  onDismissModal,
  
}) => {



  
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <Text style={styles.modalTextStyle}>{itemSelected}
          </Text>
          <Button title="Delete" onPress={() => actionDeleteItem()} />

          {/* ---- PARA QUE SE CIERRE EL MODAL ---- */}
          <Button title="Dismiss" onPress={() => onDismissModal(false)} />




    
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalStyle: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    fontSize: 30,
  },
})