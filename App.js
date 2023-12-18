import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Modal, FlatList } from "react-native";
import toDoApp from "./src/screens/toDoApp";


const App = () => {

  return (
    <SafeAreaView style={[styles.container]}>
      <toDoApp />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EB',
  },
  subContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#88AB8E',
    alignSelf: 'center',
    marginBottom: 10,
  },
  textInputContainer: {
    backgroundColor: '#EEE7DA',
    // backgroundColor: '#AFC8AD',
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  titleInput: {
    fontSize: 22,
    color: '#6d6875',
  },
  dividerLine: {
    borderBottomWidth: 0.5,
    borderColor: '#88AB8E'
  },
  descriptionInput: {
    fontSize: 20,
    color: '#6d6875',
  },
  addButton: {
    backgroundColor: '#AFC8AD',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginTop: 10
  },
  addButtonText: {
    color: '#6d6875',
    fontSize: 18,
  },
  taskListContainer: {

  },
  taskListTitle: {
    fontSize: 25,
    color: '#88AB8E',
    fontWeight: '500',
    marginTop: 20,
  },
  singleTask: {
    margin: 10,
  },
  listTitle: {
    fontSize: 18,
  },
  listDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  modalBtn: {
    backgroundColor: '#AFC8AD',
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center'
  },
  modalBtnText: {
    fontSize: 20,
    fontWeight: '800',
  }
})