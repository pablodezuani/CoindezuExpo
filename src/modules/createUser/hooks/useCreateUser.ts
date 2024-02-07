import { useEffect, useState } from "react";
import { CreateUserType } from "../../../shared/types/createUserType";
import { TextInputChangeEventData } from "react-native/Libraries/Components/TextInput/TextInput";
import { NativeSyntheticEvent } from "react-native";
import { URL_USER } from "../../../shared/components/constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { useRequest } from "../../../shared/hooks/useRequest";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
// import { insertMaskInCpf } from "../../../shared/components/functions/cpf";
// import { insertMaskInPhone } from "../../../shared/components/functions/connection/phone";

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
        
    });
    const handleCreateUser = async () => {
      const resultCreateUser = await request({
url: URL_USER,
method: MethodEnum.POST,
 body: createUser,
 message: 'Usuario criado com sucesso!'
})
if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{ name: MenuUrl.LOGIN }]
       });
     }
   }
 

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
  handleOnChangeInput,
  handleCreateUser,
  loading,
}};

// useEffect(() => {
//   if (
//     createUser.name !== '' &&
//     //validatePhone(createUser.phone) &&
//     //validateEmail(createUser.email) &&
//     //validateCpf(createUser.cpf) &&
//     createUser.password !== '' &&
//     createUser.password === createUser.confirmPassword
//   ) {
//     setDisabled(false);
//   } else {
//     setDisabled(true);
//   }
// }, [createUser]);


// const handleOnChangeInput = (
//   event: NativeSyntheticEvent<TextInputChangeEventData>,
//   name: string,
// ) => {
//   let text = event.nativeEvent.text;
//   switch (name) {
//     case 'cpf':
//       text = insertMaskInCpf(text)
//       break;
  
//       case 'phone':
//       text = insertMaskInPhone(text)
//       break;

//     default:
//       text = event.nativeEvent.text;
//       break;
//   }

