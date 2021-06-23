import React, { Component, Us } from "react";
import { View, Text, TextInput, Modal, TouchableOpacity, Button, StyleSheet, SafeAreaView, FlatList, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
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
    const updateUser = (id, name) => {
      const updatedUser = {
        id,
        name: name,
        acces,
      },
        users = users.map(u =>
          u.id === id ? { ...u, ...updateUser } : u
        );

      navigation.reset({
        index: 0,
        routes: [{ name: "access" }]
      })
    };

    Alert.prompt("Update User", `Updating User ${id}`, [
      {
        text: "Update",
        onPress: (text) => { }
      },
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => console.log("Cancelled")
      }
    ])

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
    access: ""
  };

  AddUser = () => {
    const { name, access } = this.state;
    if (name && access) {
      user.push({
        id: user[user.length - 1].id + 1,
        name: name,
        access: access
      });
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: "access" }],
      })
    }
    else {
      alert("Error", "Fields must not be empty!");
    }
  }


  render() {

    return (
      <View>
        <Header />

        <View style={styles.body}>

          <TouchableOpacity
            // onPress={AddUser}
            style={styles.button}
          >
            <Entypo name="add-user" size={28} color={'grey'} />
          </TouchableOpacity>

        </View>

        <View >


          <FlatList style={styles.users} data={user} renderItem={({ item }) => (
            <Item id={item.id} name={item.name} />
          )} />
        </View>

        {/* <View style={{ alignItems: "center" }}>
          <Text> Add New User</Text>
          <TextInput
            placeholder={"User Name"}
            style={styles.input}
            onChangeText={(text) => this.setState({ name: text })}
          />
          <TextInput
            placeholder={"User Access"}
            style={styles.input}
            onChangeText={(text) => this.setState({ access: text })}
          />

          <TouchableOpacity onPress={() => this.AddUser()}>
            <Text> Add User</Text>
          </TouchableOpacity>
        </View> */}



      </View>

    );
  }
};

const styles = StyleSheet.create({

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




});