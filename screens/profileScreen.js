import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  PermissionsAndroid
} from "react-native";
import { Avatar } from "react-native-paper";
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';

export default function EditProfile({navigation}) {
  const [userName, setUserName] = useState("");
  const [userNumber, setuserNumber] = useState("");
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,

      storageOptions: {
        skipBackup: true,
        path: 'images',

      }
    };
ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        console.log(source);
        setImageSource(JSON.stringify(source));

      }
    });
   
  }
 
  return(

    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'center',alignSelf: 'center',flex:1}}>
        <View>
        {imageSource === null ? (
           <Avatar.Image size={120} source={require('../Image/userProfile.png')} />
        ):(
          <Avatar.Image size={120} source={{uri:imageSource}} />
        )}
        </View>
     
     <View style={styles.imageView}>
      <TouchableOpacity onPress={selectImage}>
      <Image source={require('../Image/photo-camera.png')} 
      style={styles.ingredientImage}></Image>
      </TouchableOpacity>
   
     </View>
      <Text style={styles.emailText}>besan@st.edu.up</Text>
      </View>
      <Text style={styles.text}>Name</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Besan Basheer"
          placeholderTextColor="#000"
          onChangeText={(username) => setUserName(username)}
        /> 
      </View> 
      <Text style={styles.text}>Student No</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="120180585"
          placeholderTextColor="#000"
          onChangeText={(userNumber) => setuserNumber(userNumber)}
        /> 
      </View> 
      <Text style={styles.text}>Specialization</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Software Engineering"
          placeholderTextColor="#000"
          onChangeText={(username) => setUserName(username)}
        /> 
      </View> 
      <Text style={styles.text}>Description</Text>
      <View style={styles.desInputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=""
          placeholderTextColor="#000"
          onChangeText={(username) => setUserName(username)}
        /> 
      </View> 
      <View  style={{ justifyContent: 'center',}}>
      <TouchableOpacity  style={styles.loginBtn}>
        <Text style={styles.loginText}>UPDATE PROFILE</Text> 
      </TouchableOpacity> 
      </View>
      


    </SafeAreaView>
  );


    
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#fff',
    padding: 8,
  },
  ingredientsText: {
    //fontFamily: AppFonts.Primary.Sans.Regular,
    fontStyle: 'normal',
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 16,
    color: '#26385e',
    marginBottom:5,
    marginTop:10,
  },
  loginBtn: {
    width: "90%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    backgroundColor: "#26385e",
    
  },
  loginText:{
    textAlign:'center',
    color:'#fff',
    fontSize:20,
    fontWeight:'400'
  },
  ingredientsDesText: {
      //fontFamily: AppFonts.Primary.Sans.Regular,
      fontStyle: 'normal',
      fontWeight: '400',
      alignSelf: 'center',
      fontSize: 12,
      color: 'black',
      marginBottom:20,
    
    },  emailText:{
      textAlign:'center',
      color:'#A7A9B7',
      fontSize:16,
      fontWeight:'bold',
      marginVertical:10,
    },
    
  text:{
     
      paddingHorizontal:20,
      color:'#000',
      fontSize:20,
      fontWeight:"500",
     
      
     
   
    },
    imageView:{
      position:'absolute',
      justifyContent: 'flex-start',
    alignItems:'flex-start',
    },
  gridIngredients: {
    
    width: '47%',
    backgroundColor:'#f7f7f7',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 3,
    marginHorizontal:5,
    marginTop:0,
    marginBottom:20
  },

  ingredientImage: {
 
    height: 30,
    width:30,
 

  },
  inputView: {
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems:'flex-start',
    marginHorizontal:20,
    marginVertical:10


  },
  desInputView: {
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
    width: "90%",
    height: 80,
    marginBottom: 20,
    alignItems:'flex-start',
    marginHorizontal:20,
    marginVertical:10


  },

  TextInput: {
    height: 50,
   
    padding: 10,
    textAlign:'left',
    color:'#000'
  },
});