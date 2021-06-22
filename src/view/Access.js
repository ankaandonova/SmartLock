import React, { useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from "../components/header";

export default Access = () => {
  const state = {
    MyTextInput: '',
    user: ['Jon', 'James']
  }

  // const onChangeInput = (event) => {
  //   setState({
  //     MyTextInput: event
  //   })
  // }

  const onAddUser = () => {
    alert("add new user")
    // setState(prevState => {
    //   return {
    //     MyTextInput: '',
    //     users: [...prevState.users.prevState.MyTextInput]
    //   }
    // })

  }

  return (
    <View>
      <Header />
      <View style={styles.body}>

        <TouchableOpacity
          onPress={onAddUser}
          style={styles.button}
        >
          <Entypo name="add-user" size={28} color={'grey'} />
        </TouchableOpacity>

      </View>

      <View style={styles.usersView}>
        <TouchableOpacity>
          {
            state.user.map(item => (
              <Text style={styles.users} key={item}> {item} </Text>
            ))
          }
        </TouchableOpacity>
      </View>

      {/* <TextInput
        value={state.MyTextInput}
        onChangeText={onChangeInput}
        style={styles.input}
      /> */}




    </View>




  );
};

const styles = StyleSheet.create({


  usersView: {
    marginBottom: 100
  },

  users: {
    fontSize: 20,
    borderWidth: 0.2,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20


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



});