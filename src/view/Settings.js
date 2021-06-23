import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Modal, Button, Pressable } from 'react-native';
import { DataTable } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';

import Header from "../components/header";




export default Settings = () => {
  const [BackupModalVisible, setBackupModalVisible] = useState(false);

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
      <DataTable style={styles.content}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title >Devices</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell >Front door</DataTable.Cell>
          <DataTable.Cell numeric>...</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Garden door</DataTable.Cell>
          <DataTable.Cell numeric>...</DataTable.Cell>
        </DataTable.Row>

      </DataTable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={BackupModalVisible}
        onRequestClose={() => { setBackupModalVisible(!BackupModalVisible); }
        }
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button
              title="Select Document"
              onPress={pickFile}

            />
            <Text style={styles.modalText}>...........</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setBackupModalVisible(!BackupModalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View>
        <Pressable style={styles.button}
          onPress={() => setBackupModalVisible(true)}  >
          <Text style={styles.textModal}> Back up</Text>
        </Pressable>
        <Text style={styles.text}> Make a back up of your credentials  </Text>
      </View>


    </View>



  );
};


const styles = StyleSheet.create({
  content: {
    marginTop: 30
  },
  tableHeader: {
    fontSize: 40

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
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
  textModal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "grey"

  }
});