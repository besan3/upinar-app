import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView, TouchableOpacity
} from "react-native";
import { Drawer } from "react-native-paper";
 navigationOptions={
    
 }
 const INGREDIENTS = [
    {name: 'Software Testing', image: '../Image/blue.png'},
    {name: 'Mobile Programming', image: '../Image/blue.png'},
    {name: 'Web', image: '../Image/blue.png'},
    {name: 'Engineering Economy', image: '../Image/blue.png'},
    {name: 'Software Testing', image: '../Image/blue.png'},
    {name: 'Mobile Programming', image: '../Image/blue.png'},
    {name: 'Web', image: '../Image/blue.png'},
    {name: 'Engineering Economy', image: '../Image/blue.png'},
  
    
  ];

  const Images=[
    '../Image/blue.png','../Image/blue.png','../Image/blue.png','../Image/blue.png','../Image/blue.png','../Image/blue.png','../Image/blue.png','../Image/blue.png'

  ]

export default function Home({navigation}) {
  const navigateToCourseDetails=()=>{
    navigation.push('CourseDetails')
  }
    const ingredientnsViews = data => {
        return (
         
          <View style={styles.gridIngredients}>
            
            <Image
              style={styles.ingredientImage}
              resizeMode='cover'
              source={require('../Image/blue.png')}
            />
             <TouchableOpacity onPress={this.navigateToCourseDetails} >
        <Text style={styles.ingredientsText}>{data.name}</Text> 
      </TouchableOpacity>
          
            <Text  style={styles.ingredientsDesText}>First Semester 2022/2023</Text>
          </View>
        );
      };
      return (
        
        <View style={styles.container}>
             
               <Text  style={styles.text}>My courses </Text>
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
      justifyContent: 'center',
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
    ingredientsDesText: {
        //fontFamily: AppFonts.Primary.Sans.Regular,
        fontStyle: 'normal',
        fontWeight: '400',
        alignSelf: 'center',
        fontSize: 12,
        color: 'black',
        marginBottom:20,
      
      },
      
    text:{
       
        paddingHorizontal:10,
        color:'#000',
        fontSize:24,
        fontWeight:"500",
        marginBottom:20
        
       
     
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
      alignSelf:'flex-start',
      height: 100,
      width:173,
   

    },
  });
