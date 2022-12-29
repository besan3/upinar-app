import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function ResetPassword() {
 
  const [email, setEmail] = useState("");
 
  return (
    
    <View style={styles.container}>
      <View style={styles.imageView}>
       <Image style={styles.image}
        source={require('../Image/appLogo.png')}
        ></Image>
       </View>
      <View>
      <Text style={styles.text}>RESET PASSWORD</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#A7A9B7"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SEND</Text> 
      </TouchableOpacity> 
      <TouchableOpacity >
        <Text style={styles.forgot_button}>Resend Code?</Text> 
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
    height:150,
    
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
    marginBottom:150
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
