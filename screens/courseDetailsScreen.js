import React, { useState,useEffect } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView, TouchableOpacity
} from "react-native";
import SignIn from "./signInScreen";
import ResetPassword from "./resetPassScreen";


 const INGREDIENTS = [
    {name: 'Topic 1', image: '../Image/blue.png',date:'1 October - 7 October'},
    {name: 'Topic 2', image: '../Image/blue.png',date:'8 October - 14 October'},
    {name: 'Topic 3', image: '../Image/blue.png',date:'15 October - 21 October'},
    {name: 'Topic 4', image: '../Image/blue.png',date:'22 October - 28 October'},
    {name: 'Topic 5', image: '../Image/blue.png',date:'1 October - 7 October'},
    {name: 'Topic 6', image: '../Image/blue.png',date:'1 October - 7 October'},
    {name: 'Topic 7', image: '../Image/blue.png',date:'1 October - 7 October'},
    {name: 'Topic 8', image: '../Image/blue.png',date:'1 October - 7 October'},
    {name: 'Topic 9', image: '../Image/blue.png',date:'1 October - 7 October'},
    {name: 'Topic 10', image: '../Image/blue.png',date:'1 October - 7 October'},
    {name: 'Topic 11', image: '../Image/blue.png',date:'1 October - 7 October'},
    {name: 'Topic 12', image: '../Image/blue.png',date:'1 October - 7 October'},
    {name: 'Topic 13', image: '../Image/blue.png',date:'1 October - 7 October'},

  
    
  ];

  const Drawer = createDrawerNavigator();
export default function CourseDetails({navigation}) {
 
  const ingredientnsViews = data => {
        return (
         
          <View style={styles.gridIngredients}>
            <Image
              style={styles.ingredientImage}
              resizeMode='cover'
              source={require('../Image/form.png')}
            />
            
           <View style={{  justifyContent: 'flex-start',}}>
           <Text  style={styles.ingredientsText}>{data.date} </Text>
           <Text  style={styles.ingredientsText}>File </Text>
           <Text style={styles.ingredientsDesText}>{data.name}</Text>
          
           </View>
          </View>
        );
      };
      return (
        
        <View style={styles.container}>
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {INGREDIENTS.map((value, index) => {
                return ingredientnsViews(value);
              })}
            </View>
          </ScrollView>
        </View>
      );
      
}

const styles = StyleSheet.create({
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
      fontSize: 18,
      color: '#26385e',
    
      marginTop:5,
      marginHorizontal:10
    },
    ingredientsDesText: {
        //fontFamily: AppFonts.Primary.Sans.Regular,
        fontStyle: 'normal',
        fontWeight: '400',
       
        fontSize: 12,
        color: 'black',
        marginBottom:5,
        marginTop:5,
        marginHorizontal:10
      
      },
      btnActive:{
        backgroundColor:'#B5B5B5'
      },
      
    text:{
       
        paddingHorizontal:10,
        color:'#000',
        fontSize:16,
        fontWeight:"500",
      margin:10
        
       
     
      },
      listTab:{
       
        flexDirection:'row',
        marginBottom:20,
   height:40,alignItems:'center',
      },
      btnTab:{
       
        flexDirection:'row',
        borderColor:'#ebebeb',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        margin:20
      },
    gridIngredients: {
      
      width: '100%',
      backgroundColor:'#f7f7f7',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      borderRadius: 3,
      marginHorizontal:5,
      marginTop:0,
      marginBottom:20
    },
  
    ingredientImage: {
      alignSelf:'flex-start',
      height: 60,
      width:60,
      margin:15
   

    },
  });
