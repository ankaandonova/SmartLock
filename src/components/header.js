import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default Header = () => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: "skyblue"
        }
      }}>

      <Title style={styles.titel}> Smart Lock</Title>

    </Appbar.Header>
  );
};


const styles = StyleSheet.create({
  titel: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: 'bold'
  },
});

