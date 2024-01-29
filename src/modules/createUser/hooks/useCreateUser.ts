import { useEffect, useState } from "react";
import { CreateUserType } from "../../../shared/types/createUserType";
import { TextInputChangeEventData } from "react-native/Libraries/Components/TextInput/TextInput";
import { NativeSyntheticEvent } from "react-native";
import { URL_USER } from "../../../shared/components/constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { useRequest } from "../../../shared/hooks/useRequest";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { insertMaskInCpf } from "../../../shared/components/functions/cpf";
import { insertMaskInPhone } from "../../../shared/components/functions/connection/phone";

export const useCreateUser = () =>{
  const{reset} =useNavigation <NavigationProp<ParamListBase>>();
  const {request, loading} = useRequest();
  const [disabled, setDisabled] = useState<boolean>(true);
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

useEffect(() => {
  if (
    createUser.name !== '' &&
    //validatePhone(createUser.phone) &&
    //validateEmail(createUser.email) &&
    //validateCpf(createUser.cpf) &&
    createUser.password !== '' &&
    createUser.password === createUser.confirmPassword
  ) {
    setDisabled(false);
  } else {
    setDisabled(true);
  }
}, [createUser]);



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
  let text = event.nativeEvent.text;
  switch (name) {
    case 'cpf':
      text = insertMaskInCpf(text)
      break;
  
      case 'phone':
      text = insertMaskInPhone(text)
      break;

    default:
      text = event.nativeEvent.text;
      break;
  }

  
  setCreateUser((currentCreateUser) => ({
    ...currentCreateUser,
    [name]: text,
  }));
};

  return {
    createUser,
    loading,
    disabled,
    handleOnChangeInput,
    handleCreateUser,
  };
  


}

