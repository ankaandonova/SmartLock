import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { Button, Icon, Right, Body, } from 'native-base';


export default Header = () => {

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: "skyblue"
        }
      }}>


      <Body>
        <Title style={styles.titel}> Smart Lock</Title>
      </Body>

      <Right>
        <Button transparent>
          <Icon name='menu' color={'grey'} />
        </Button>
      </Right>


    </Appbar.Header>
  );
};


const styles = StyleSheet.create({
  titel: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',

  },
});

