import { ScrollView, View } from "react-native";
import Input from "../../../shared/components/input/input";
import text from "../../../shared/components/text/text";
import Button from "../../../shared/components/button/button";
import { theme } from "../../../shared/components/themes/theme";
import { CreateUserContainer } from "../Styles/createUser.style";


const CreateUser = () => {
return (
    <CreateUserContainer >
      
<Input margin="36px 0px 8px 0px"
 placeholder="Digite Nome completo"
 textAlign="center" 
 title="Nome completo:"/> 
<Input  
margin="8px 0px 8px 0px"
textAlign="center"
placeholder="Digite seu telefone" 
title="Telefone:"/> 
<Input 
margin="8px 0px 8px 0px" 
placeholder="Digite seu email" 
title="Email:"
textAlign="center"/> 
<Input 
margin="8px 0px 8px 0px" 
placeholder="Digite seu CPF" 
textAlign="center"
title="CPF:"/> 
<Input 
secureTextEntry 
margin="8px 0px 8px 0px" 
textAlign="center"
placeholder="Digite sua senha" 
title="Senha:"/> 
<Input
margin="8px 0px 8px 0px"
  secureTextEntry
  textAlign="center"
  placeholder="Digite novamente sua senha"
  title="Confirmar Senha:"
  
/>
<Button
  style={{ margin: 50 }}
  type={theme.buttons.buttonsTheme.primary}
  title="Criar acesso"
/>

        
</CreateUserContainer>
)

};

export default CreateUser ;