

/* ------------------------ MODALVISIBLE IS NOT DEFINED SOLUCIONAR, "SOLUCIONADO" ------------------------ */


/* ------------------------ REVEER LA CLASE Y ANOTAR TODO. NUEVAMENTE ------------------------ */



/* siempre colocar la propiedad TITLE en button, textinput para escribir un texto */

import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"

import AddItem from "./src/components/AddItem"
import Modal from "./src/components/Modal"

export default function App() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [isReadyVisible, setIsReadyVisible] = useState(false);
  
 

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem("")
    
  }


  /* ----------- SETEO EL itemSelected con el elemento item ---------------- */
  const handleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  }

  /* ----- PARA BORRAR EL ITEM ----- */
  const onHandleDelete = item => {
    console.log(item)
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }


  /* -------- RENDEREO EL ITEM (LO MUESTRO A LA VISTA COMO YO QUIERO CON EL ESTILO QUE QUIERO Y LUEGO LO MUESTRO) */
  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>



      <Button title="Edit" onPress={() => handleModal(item)} />

{/* OPCION DE LISTO */}
      <View>
      <Button
        title="Listo"
        onPress={() => setIsReadyVisible(!isReadyVisible)}
      />
      {isReadyVisible && (
        <Text>Listo</Text>
      )}
    </View>


    </View>

    
    
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List</Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
        />
      

      
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item}
        />

      </View>
      <Modal
      /* --------- AGREGO LA VARIABLE DE LOS ESTADOS, DE ESTA FORMA DESPUES LO PUEDO PASAR EN PROPS EN MODAL.JS -------------- */
        isVisible={modalVisible}
        itemSelected={itemSelected}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        onDismissModal={setModalVisible}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  titleContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  title: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "white",
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 40,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
})