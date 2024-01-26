import { useState } from "react";
import { CreateUserType } from "../../../shared/types/createUserType";
import { TextInputChangeEventData } from "react-native/Libraries/Components/TextInput/TextInput";
import { NativeSyntheticEvent } from "react-native";
import { URL_USER } from "../../../shared/components/constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { useRequest } from "../../../shared/hooks/useRequest";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

export const useCreateUser = () =>{
  const{reset} =useNavigation <NavigationProp<ParamListBase>>();
  const {request, loading} = useRequest();
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

const handleCreateUser = async () => {
  try {
    const resultCreateUser = await request({
      url: URL_USER,
      method: MethodEnum.POST,
      body: createUser,
      message: 'Usuario criado com sucesso!'
    });

    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{ name: MenuUrl.Login }]
      });
    }
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  
  }
}

const handleOnChangeInput = (
  event: NativeSyntheticEvent<TextInputChangeEventData>,
  name: string,
) => {
  const newText = event.nativeEvent ? event.nativeEvent.text : ''; // Verifica se event.nativeEvent existe
  setCreateUser((currentCreateUser) => ({
    ...currentCreateUser,
    [name]: newText,
  }));
};

  return {
    createUser,
    loading,
    handleOnChangeInput,
    handleCreateUser,
  };
  


}

