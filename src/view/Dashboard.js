import React, {  useState } from "react";
import {Picker} from '@react-native-picker/picker';
import {View , Text,Modal, Pressable, TouchableOpacity,Linking, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Ionicons from 'react-native-vector-icons/Ionicons';



import Header from "../components/header";

export default Dashboard = () => {
    const [selectedValue, setSelectedValue] = useState("Front door");
    const [modalVisible, setModalVisible] = useState(false);

    //
    onSuccess = e => {
      Linking.openURL(e.data).catch(err =>
         console.error('An error occured', err)
       );
      alert("The door is open ")
    };
  

    return (
     <View style={{flex:1}}>
        <Header />

        <View style={styles.picker}>
         <Ionicons name='home' size ={25}  />
          <Picker
            selectedValue={selectedValue}
            style={styles.pickerValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Front door" value="Front door" />
            <Picker.Item label="Garden door" value="Garden door" />
          </Picker>
        </View>

        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style = {styles.modal} >
              <QRCodeScanner
                onRead={onSuccess}    
              />
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    style={ styles.buttonModal}
                  >
                    <Text > Close </Text>
                  </Pressable>
                
              </View>
            </Modal>
          
  
          <View style={styles.body}>

            <TouchableOpacity 
              style={styles.button}
              onPress={() => setModalVisible(true)}>

                <Text style={styles.textValue}> {selectedValue}</Text>
                <FontAwesome name="lock" size={60} />
                <Text>Door is closed</Text>

            </TouchableOpacity>
            
          </View>
          <View style= {styles.text}> 
             
            </View>
          
     </View>
  );
};


const styles = StyleSheet.create({
    modal:{
      alignContent: 'center',
      flex: 1,
    },

    pickerValue: {
      height: 20, 
      width: 200,
    },
  
    picker:{
      flex: 1,
      paddingTop: 40,
      paddingLeft:5 ,
      alignItems: "center"

    },
    buttonModal:{
      width: 100,
      height: 50,
      backgroundColor: 'skyblue',
      paddingBottom: 80,
      marginLeft: 250,
      alignItems: 'center',
      justifyContent: 'center',
      color: "white",
      fontSize: 20,
      fontWeight: 'bold',
    },
    
    button: {
      marginBottom:350,
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      borderColor: "deepskyblue",
      backgroundColor: 'white',
      shadowColor: 'deepskyblue',
      elevation: 10
    },
 
    body:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textValue:{
      fontSize: 25
    },
  
   
  
  });