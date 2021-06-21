import React, {  useCallback } from "react";
//import { SolidNodeClient } from 'solid-node-client';
import {View , Text , Button} from 'react-native';

import Header from "../components/header";

export default Access = () => {
  // const client = new SolidNodeClient();

  // const solid_link = "https://jvwer.solidcommunity.net";
  // const filename = "trinsic-wallet-16-6-2021-1399fdf6.txt";
  // const foldername = "backup_credentials";
  
  // const account_username = "jvwer";
  // const account_password = "kY4sfHeoia5vEBAUCDrT";



  // const login = async () => {
  //   let loginformation = await client.login({
  //     idp : solid_link, 
  //     username : account_username,
  //     password : account_password,
  //   });
  //   return loginformation;
  // }
  
  // const waitForLogin = async ( loginformation ) => {
  //   if(!loginformation.loggedIn){
  //     setTimeout(waitForLogin( loginformation ), 400);
  //     return;
  //   }
  //   console.log( loginformation );
  // }
  
  return (
    <View>
      <View style={{flex:1}}>
        <Header /> 
          <Text> access screenss
          </Text>
      </View>

    

    </View>
  );
};