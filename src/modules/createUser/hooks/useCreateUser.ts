import { useState } from "react";
import { CreateUserType } from "../../../shared/types/createUserType";
import { TextInputChangeEventData } from "react-native/Libraries/Components/TextInput/TextInput";
import { NativeSyntheticEvent } from "react-native";

export const useCreateUser = () =>{
const [createUser, setCreateUser] =useState<CreateUserType>(
    {
        confirmPassword:'',
        cpf:'',
        email:'',
        name:'',
        password:'',
        phone:'',


        
    }
);
const handleOnChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => {
    setCreateUser((currentCreateUser) => ({
      ...currentCreateUser,
      [name]: event.nativeEvent.text,
    }));
  };
return{
    createUser,
}


}