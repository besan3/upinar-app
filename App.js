import React, { useContext,useState,useEffect } from 'react';
import Navigator from './routes/homeStack';
import DrawerRoutes from './routes/homeStack';
import auth from '@react-native-firebase/auth';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';



export default function App(){
 const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
 if (initializing) return null;

  if (!user) {
 
    return (
<Navigator/>


    );
}
    return (
<DrawerRoutes/>


    );
}

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  inputView: {
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
    width: "100%",
    height: 45,
    marginBottom: 20,
    alignItems:'flex-start',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign:'left',
    color:'#000'
  },
  header:{
    backgroundColor: "#fff",
  },
  headerContent:{
    padding:30,
    alignItems:'flex-start',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
  
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
    marginBottom:10
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  },
  image: {
    borderRadius:100,
    padding:20,
    width:120,
    height:120,
   // marginTop:100,
    marginBottom:20,
    
  },
});

