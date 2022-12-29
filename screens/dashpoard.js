import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,ScrollView
} from "react-native";
import { Avatar } from "react-native-paper";
const listTab=[
    {
      status:'Course'
    },
    {
      status:'Participants'
    },
    {
      status:'Grades'
    },
    
  ]
  const INGREDIENTSCOL = [
    {name: 'Software Testing', image: '../Image/blue.png'},
    {name: 'Mobile Programming', image: '../Image/blue.png'},
  ];
const INGREDIENTS = [
    {name: 'Web Quiz', image: '../Image/blue.png',date:'تطبيقات أنظمة الويب الكبيرة - عملي'},
    {name: 'Final Project', image: '../Image/blue.png',date:'تطبيقات أنظمة الويب الكبيرة - عملي'},  
    
  ];
export default function Dashpoard({navigation}) {
    const ingredientnsColViews = data => {
        return (
         
          <View style={styles.gridColIngredients}>
            
            <Image
              style={styles.ingredientColImage}
              resizeMode='cover'
              source={require('../Image/blue.png')}
            />
             <TouchableOpacity  >
        <Text style={styles.ingredientsText}>{data.name}</Text> 
      </TouchableOpacity>
          
            <Text  style={styles.ingredientsDesColText}>First Semester 2022/2023</Text>
          </View>
        );
      };
    const ingredientnsViews = data => {
        return (
       
            <View style={styles.gridIngredients}>
                  <Text  style={styles.emailText}>8:05 </Text>
            <Image
              style={styles.ingredientImage}
              resizeMode='cover'
              source={require('../Image/timeline.png')}
            />
            
           <View style={{  justifyContent: 'flex-start',
        margin:10}}>
           <Text  style={styles.ingredientsText}>{data.name} </Text>
           <Text style={styles.ingredientsDesText}>{data.date}</Text>
          
           </View>
          </View>
   
        );
      };
      return (
        
        <View style={styles.container}>  
        <ScrollView>
        <View style={styles.inputView}>
          <ScrollView>
          <Text  style={styles.text}>Timeline </Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {INGREDIENTS.map((value, index) => {
                return ingredientnsViews(value);
              })}
            </View>
          </ScrollView>
          </View>
          <View style={styles.inputViewCol}>
          <ScrollView>
          <View style={{alignItems:'flex-start',}}><Text  style={styles.text}>Recently accessed courses </Text></View>
            <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
              {INGREDIENTSCOL.map((value, index) => {
                return ingredientnsColViews(value);
              })}
            </View>
          </ScrollView>
          </View>
        </ScrollView>
        
        </View>
             
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
    alignSelf: 'flex-start',
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
  ingredientsDesColText: {
    //fontFamily: AppFonts.Primary.Sans.Regular,
    fontStyle: 'normal',
    fontWeight: '400',
    alignSelf: 'center',
    fontSize: 12,
    color: 'black',
    marginBottom:20,
  
  }, 
  ingredientsDesText: {
      //fontFamily: AppFonts.Primary.Sans.Regular,
      fontStyle: 'normal',
      fontWeight: '400',
      alignSelf: 'flex-start',
      fontSize: 12,
      color: 'black',
      marginBottom:20,
    
    },  emailText:{
      textAlign:'center',
      color:'black',
      fontSize:16,
      fontWeight:'400',
     marginHorizontal:10,
    },
    
  text:{
     
      
      color:'#000',
      fontSize:18,
      fontWeight:"500",
      marginBottom:10,
      marginHorizontal:10
      
     
      
     
   
    },
    gridIngredients: {
      
        width: '100%',
        backgroundColor:'#f7f7f7',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        borderRadius: 3,
        marginHorizontal:10,
        marginTop:0,
        marginBottom:20
      },
      gridColIngredients: {
      
        width: '90%',
        backgroundColor:'#f7f7f7',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 3,
        marginHorizontal:40,        marginTop:0,
        marginBottom:20
      },
      ingredientColImage: {
        alignSelf:'flex-start',
      height: 100,
      width:'93%',
   
   
      },
    
      ingredientImage: {
        alignSelf:'center',
        height: 60,
        width:60,
       
     
  
      },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "90%",
   
    marginBottom: 20,
    alignItems:'flex-start',
    marginHorizontal:20,
    marginVertical:10,
    borderColor:'f7f7f7',
    borderWidth:0.5,
    padding:10



  },
  inputViewCol: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "90%",
   
    marginBottom: 20,
    alignItems:'flex-start',
    marginHorizontal:20,
    marginVertical:10,
    borderColor:'f7f7f7',
    borderWidth:0.5,
    padding:10



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