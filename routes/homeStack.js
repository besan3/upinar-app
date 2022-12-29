import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignIn from "../screens/signInScreen";
import ResetPassword from "../screens/resetPassScreen";
import Home from "../screens/homeScreen";
import CourseDetails from "../screens/courseDetailsScreen";
import EditProfile from "../screens/profileScreen";
import Dashpoard from "../screens/dashpoard";
import Participants from "../screens/participants";
import Grades from "../screens/grades";
import {Text} from 'react-native';
import SignUp from '../screens/signup';

const homeScreens={
   
SignIn:{
    screen:SignIn,
    navigationOptions: {
        headerShown: false,
      }
   
},

ResetPassword:{
    screen:ResetPassword,
    navigationOptions: {
       title:'Reset Password',
      }

},
Home:{
    screen:DrawerRoutes,
    navigationOptions: {
        headerShown: false,
      }
},
SignUp:{
      screen:SignUp,
      navigationOptions: {
          headerShown: false,
        }
  },
Dashpoard:{
    screen:Dashpoard,
    navigationOptions: {
        headerShown: false,
      }
},
EditProfile:{
    screen:EditProfile,
    navigationOptions: {
        headerShown: false,
       }
},

CourseDetails:{
    screen:CourseDetails,
    navigationOptions: {
        title:'Engineering Economy',
        style: { 
            zIndex: 1,
            elevation: 0, borderBottomWidth: 0,
          },
       
       },
},
Grades:{
  screen:Grades,
  navigationOptions: {
      title:'Grades',
      style: { 
          zIndex: 1,
          elevation: 0, borderBottomWidth: 0,
        },
     
     },
},

}

const authScreens={

    CourseDetails:{
        screen:CourseDetails,
        navigationOptions: {
            title:'Engineering Economy',
            style: { 
                zIndex: 1,
                elevation: 0, borderBottomWidth: 0,
              },
           
           },
    },
    
}


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Course" component={CourseDetails} />
      <Tab.Screen name="Participants" component={Participants} />

    
    </Tab.Navigator>
  );
}
const HomeStack=createStackNavigator(homeScreens);
const AppStack=createStackNavigator(authScreens);
const Drawer=createDrawerNavigator();

export default createAppContainer(HomeStack);

export function DrawerRoutes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="UPINAR">
        <Drawer.Screen name="UPINAR" component={Home} />
          <Drawer.Screen name="Dashpoard" component={Dashpoard} />
          <Drawer.Screen name="CourseDetails" component={MyTabs} />
          <Drawer.Screen name="Profile" component={EditProfile} />
          <Drawer.Screen name="Grades" component={Grades} />


        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
