import React from "react";
import { View , StyleSheet } from "react-native";
import { DrawerContentScrollView ,DrawerItem } from "@react-navigation/drawer";
import { Title , Caption, Paragraph,Drawer,TouchableRipple,Switch,Avatar } from "react-native-paper";



export function DrawerContent(){
return(
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>

        </DrawerContentScrollView>

    </View>
);

};