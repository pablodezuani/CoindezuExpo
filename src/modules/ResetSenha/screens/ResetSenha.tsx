import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Input from "../../../shared/components/input/input";
import text from "../../../shared/components/text/text";
import Button from "../../../shared/components/button/button";
import { theme } from "../../../shared/components/themes/theme";
import { ContainerLogin, Imagelogo } from "../../login/styles/login.style";
import { Imageres, Reset } from "../styles/stylesReset.styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ResetSenha = () => {
return (
   
<Reset>
<Imageres source={require('../../../assets/images/resett.png')}/>
<Text style={{fontSize:24,textAlign:"center",marginBottom:50}}> Problemas entrar? </Text>

<Text style={{fontSize: 14, textAlign: "center", marginBottom: 16, color: "#B2B2B2"}}>Insira o seu nome de usuário ou email e enviaremos um link para você voltar a acessar a sua conta.</Text>

<Input margin="0px 0px 8px 0px"
 textAlign="center" 
 title=""
 placeholder="Digite email ou Usuário"/> 

<Button
  style={{ margin: 30 }}
  type={theme.buttons.buttonsTheme.secondary}
  title="Enviar link para login"
 
/>    
<Text style={{fontSize:12,textAlign:"center"}}> ______________ OU ______________</Text>
<TouchableOpacity>
<Text style={{fontSize:12,textAlign:"center",marginTop:24}}>Criar nova conta</Text></TouchableOpacity>

</Reset>

)

};

export default ResetSenha ;

