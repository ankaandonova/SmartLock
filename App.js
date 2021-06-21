import React from 'react';
import { StatusBar } from 'react-native';
import FontAwesome from './node_modules/react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './src/view/Dashboard';
import Access from './src/view/Access';
import Settings from './src/view/Settings';


const Tab = createBottomTabNavigator()
const App =() => {

  return (
    <>
    <StatusBar  backgroundColor="grey" /> 

    <NavigationContainer> 
    
      <Tab.Navigator
     
        screenOptions={({route})=> ({
          tabBarIcon: ({ color
           })=>{
            let iconName;
            if(route.name === 'dashboard'){
              iconName = 'home'
            }else if(route.name === 'access'){
              iconName = 'users'
            }else if(route.name === 'devices'){
              iconName = 'key'
            }
            return <FontAwesome name={iconName} size ={25} color={color} />
          }
        })}
        tabBarOptions ={{
          activeTintColor:"white",
          style:{
            backgroundColor: 'skyblue'
          }
        }}
        >
        <Tab.Screen name="dashboard"  component={Dashboard}/> 
        <Tab.Screen name="access" component={Access}/> 
        <Tab.Screen name="devices" component={Settings} /> 
      </Tab.Navigator>
      
    </NavigationContainer>
    </> 
  );
};



export default App;