import React ,{createContext, useState}from "react";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const AuthContext=createContext();
export const AuthProvider=({children})=>{
const [user,setUser]=useState<FirebaseAuthTypes.User | null>(null);
const [initializing, setInitializing]=useState<Boolean>(true);

function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

return(
    <AuthContext.Provider
    value={{
        user,
        setUser,
        login:async(email,password)=>{
            try{
              await  auth().signInWithEmailAndPassword(email,password);
            }catch(e){
                console.log(e);
            }
        },
        logout:async()=>{
            try{
              await  auth().signOut();
            }catch(e){
                console.log(e);
            }
        }

    }}
    >
        {children}

    </AuthContext.Provider>
);
};