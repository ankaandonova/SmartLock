import React, { Component, Us } from "react";
import { View, Text, Pressable,  Modal, TouchableOpacity, TextInput, Button, StyleSheet, SafeAreaView, FlatList, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from "../components/header";

let user = [
  {
    id: 1,
    name: "Luca",
    access: "no"
  },
  {
    id: 2,
    name: "Julian",
    access: "no"
  },
  {
    id: 3,
    name: "Mark",
    access: "no"
  },
];

function Item({ id, name, access }) {
  const onPress = (id) => {
    const users = user.find((u) => {
      return u.id === id;
    });

  };

  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      style={styles.listItem}
    >
      <Entypo name="user" size={25} style={styles.icon} color={'grey'} />
      <Text style={styles.listName}>{name}</Text>
    </TouchableOpacity>
  )
}


export default class Access extends Component {

  state = {
    name: "",
    access: "",
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  AddUser = () => {
    const { name } = this.state;
    if (name ) {
      user.push({
        id: user[user.length - 1].id + 1,
        name: name,
      });
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: "access" }],
      })
    }
    else {
      alert("Fields must not be empty! ");
    }
  }


  render() {
    const { modalVisible } = this.state;

    return (
      <View>
        <Header />

        <View style={styles.body}>

          <TouchableOpacity
             onPress={() => this.setModalVisible(true)}
            style={styles.button}
          >
            <Entypo name="add-user" size={28} color={'grey'} />
          </TouchableOpacity>

        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.title}>
                <Text style= {styles.text}> Add new user</Text>
                <Pressable
                  style = {styles.buttonClose}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <AntDesign name="close" size={30}   />
                </Pressable>
                
              </View>
             
              <View style={{ alignItems: "center" }}>
                  <TextInput
                    placeholder={"User Name"}
                    style={styles.input}
                    onChangeText={(text) => this.setState({ name: text })}
                  />
                  {/* <TextInput
                    placeholder={"User Access"}
                    style={styles.input}
                    onChangeText={(text) => this.setState({ access: text })}
                  /> */}
                  <TouchableOpacity 
                    style= {styles.buttonOpen}
                    onPress={() => this.AddUser()}>
                    <Text> Add User</Text>
                  </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>

        <View >
          <FlatList style={styles.users} data={user} renderItem={({ item }) => (
            <Item id={item.id} name={item.name} />
          )} />
        </View>

      </View>

    );
  }
};

const styles = StyleSheet.create({
  title:{
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 300
  },

  buttonClose: {
    backgroundColor: "white",
    marginLeft: 90

  },

  buttonOpen:{
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth:0.5,
    borderColor: "skyblue",
    backgroundColor: 'white',
    shadowColor: 'deepskyblue',
    elevation: 10

  },

  body: {
    marginLeft: '78%',
    marginTop: 25,
    height: '20%'
  },

  button: {
    marginBottom: 350,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: "deepskyblue",
    backgroundColor: 'white',
    shadowColor: 'deepskyblue',
    elevation: 10
  },

  input: {
    width: 250,
    borderWidth: 1,
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    borderColor: "skyblue",
    textAlign: "center"

  },

  listItem: {
    marginLeft: 30,
    width: 300,
    flexDirection: "row",
    marginVertical: 15,
    padding: 15,
    elevation: 10,
    borderRadius: 20,
    borderColor: "deepskyblue",
    backgroundColor: 'white',
    shadowColor: 'deepskyblue',
  },
  icon: {
    flex: 0.2,
    textAlign: "center",
    alignItems: "flex-start",
  },

  listName: {
    flex: 0.2,
    textAlign: "center",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 20,
  }

});