import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import auth from '@react-native-firebase/auth';

// Initialize Firebase
export default function SignIn({navigation}) {
  const pressHandler=()=>{
    navigation.push('ResetPassword');
  }
  const navigateToHome=()=>{
    navigation.replace('Home')
  }
   const navigateToSignUp=()=>{
    navigation.replace('SignUp')
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error =>Alert.alert('Error:', error.message)

);
  };
  return (
    
    <View style={styles.container}>
      <View>
       <View style={styles.imageView}>
       <Image style={styles.image}
        source={require('../Image/appLogo.png')}
        ></Image>
       </View>
      <Text style={styles.text}>UNIVERSITY OF PALESTINE</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Email"
          placeholderTextColor="#A7A9B7"
         
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#A7A9B7"
          secureTextEntry={true}
         
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
   
      <TouchableOpacity onPress={navigateToHome} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      <TouchableOpacity onPress={pressHandler}>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSignUp}>
        <Text style={styles.forgot_button}>Create an account?</Text>
      </TouchableOpacity>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:'center',
    alignItems:'center'
  },
  imageView:{
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    
    width:150,
    height:150
  },
  inputView: {
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
    width: "90%",
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
  forgot_button: {
    color:'#26385e',
    marginTop:10,
    marginBottom:70
  },
  loginBtn: {
    width: "90%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#26385e",
  },
  loginText:{
    textAlign:'center',
    color:'#fff',
    fontSize:22,
    fontWeight:'bold'
  },
  text:{
    padding: 10,
    textAlign:'center',
    color:'#26385e',
    fontSize:18,
    fontWeight:'bold',
    marginBottom:70
 
  },

});
