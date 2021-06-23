import React, { useCallback } from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DataTable } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';

import Header from "../components/header";


export default Settings = () => {

  //select file 
  const pickFile = useCallback(async () => {
    try {
      const res = await DocumentPicker.pick({});
      alert(res.url);
      console.log(res);

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("Canceld");
      } else {
        throw err;
      }
    }
  });

  return (

    <View >
      <Header />
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.buttonAddDevices}
        >
          <Entypo name="add-to-list" size={28} color={'grey'} />
        </TouchableOpacity>
      </View>


      <DataTable >
        <DataTable.Header >
          <DataTable.Title >Devices</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell >Front door</DataTable.Cell>
          <DataTable.Cell numeric>
            <AntDesign name="ellipsis1" size={25} style={styles.icon} color={'grey'} />
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Garden door</DataTable.Cell>
          <DataTable.Cell numeric>
            <AntDesign name="ellipsis1" size={25} style={styles.icon} color={'grey'} />
          </DataTable.Cell>
        </DataTable.Row>

      </DataTable>

      <View>
        <Pressable style={styles.button}
          onPress={pickFile} >
          <Text style={styles.textButton}> Back up</Text>
        </Pressable>
        <Text style={styles.text}> Make a back up of your credentials  </Text>
      </View>
    </View>

  );
};


const styles = StyleSheet.create({

  body: {
    marginLeft: '78%',
    marginTop: 25,
    height: '12%'
  },

  buttonAddDevices: {
    marginBottom: 350,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: "deepskyblue",
    backgroundColor: 'white',
    shadowColor: 'deepskyblue',
    elevation: 10
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'deepskyblue',
    elevation: 10,
    paddingVertical: 10,
    borderRadius: 4,
    paddingTop: 20,
    color: 'black',
    width: 270,
    marginTop: 190,
    marginLeft: 40
  },

  text: {
    marginLeft: 45,
    marginTop: 10,
    fontSize: 16
  },

  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "grey"
  }
});