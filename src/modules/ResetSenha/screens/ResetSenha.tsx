import { ScrollView, View, Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import Input from "../../../shared/components/input/input";
import text from "../../../shared/components/text/text";
import Button from "../../../shared/components/button/button";
import { theme } from "../../../shared/components/themes/theme";
import { ContainerLogin, Imagelogo } from "../../login/styles/login.style";
import { Imageres, Reset } from "../styles/stylesReset.styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ButtonSecondary } from "../../../shared/components/button/button.style";

const ResetSenha = () => {
  function handleGoToCreateUser(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

return (
   
<Reset>
<Text style={{fontSize:20,textAlign:"center",marginBottom:50}}> Problemas entrar? </Text>

<Text style={{fontSize: 14, textAlign: "center", marginBottom: 16, color: "#B2B2B2"}}>Digite seu nome de usuário ou endereço de e-mail. Enviaremos um link para que você possa recuperar o acesso à sua conta.</Text>

<Input margin="0px 0px 8px 0px"
 textAlign="center" 
 title=""
 placeholder="Digite email ou Usuário"/> 

<Button
  style={{ margin: 30 }}
  title="Recuperar Acesso"
 
/>   
<View style={{flexDirection: 'row'}}>
  <Text style={{fontSize:12,marginTop: 36,color:'#B1BBC2'}}>________________    </Text>
  <Text style={{fontSize:12,marginTop: 41,color:'#B1BBC2'}}>OU</Text>
  <Text style={{fontSize:12,marginTop: 36,color:'#B1BBC2'}}>    ________________</Text>
</View>
<TouchableOpacity onPress={handleGoToCreateUser}>
<Text style={{fontSize:18,textAlign:"center",marginTop:24,color: '#8C2A96'}}>Criar nova conta</Text></TouchableOpacity>

</Reset>
)

};

export default ResetSenha ;

