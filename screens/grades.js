import React, { useState,useEffect } from "react";
import { DataTable } from "react-native-paper";
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

export default function Grades({navigation}) {

      return (
        <ScrollView >
        <DataTable style={styles.tableContainer}>
         <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title >Course name</DataTable.Title>
          <DataTable.Title>Grade</DataTable.Title>
          </DataTable.Header>
                 <DataTable.Row>
                     <DataTable.Cell>Software Testing</DataTable.Cell>
                     <DataTable.Cell>-</DataTable.Cell>
                  </DataTable.Row>
    
                 <DataTable.Row>
                     <DataTable.Cell >Mobile Programming</DataTable.Cell>
                     <DataTable.Cell>-</DataTable.Cell>
                 </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Engineering Economy</DataTable.Cell>
                    <DataTable.Cell>-</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Web</DataTable.Cell>
                    <DataTable.Cell>-</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>AI</DataTable.Cell>
                    <DataTable.Cell>-</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                     <DataTable.Cell>Software Testing</DataTable.Cell>
                     <DataTable.Cell>-</DataTable.Cell>
                  </DataTable.Row>
    
                 <DataTable.Row>
                     <DataTable.Cell >Mobile Programming</DataTable.Cell>
                     <DataTable.Cell>-</DataTable.Cell>
                 </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Engineering Economy</DataTable.Cell>
                    <DataTable.Cell>-</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Web</DataTable.Cell>
                    <DataTable.Cell>-</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>AI</DataTable.Cell>
                    <DataTable.Cell>-</DataTable.Cell>
                </DataTable.Row>
        
      </DataTable>
      
      </ScrollView>
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
    tableContainer: {
        padding: 15,
      },
      tableHeader: {
        backgroundColor: '#DCDCDC',
      },
      ingredientsText: {
        
        fontStyle: 'normal',
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 16,
        color: '#26385e',
        marginBottom:5,
        marginTop:10,
      },
    text:{
       
        paddingHorizontal:10,
        color:'#000',
        fontSize:16,
        fontWeight:"500",
      margin:10
        
       
     
      },
   
  });
