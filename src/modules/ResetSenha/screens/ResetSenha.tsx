import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Input from "../../../shared/components/input/input";
import text from "../../../shared/components/text/text";
import Button from "../../../shared/components/button/button";
import { theme } from "../../../shared/components/themes/theme";
import { ContainerLogin, Imagelogo } from "../../login/styles/login.style";
import { Imageres, Reset } from "../styles/stylesReset.styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ButtonSecondary } from "../../../shared/components/button/button.style";

const ResetSenha = () => {
return (
   
<Reset>
<Text style={{fontSize:24,textAlign:"center",marginBottom:50}}> Problemas entrar? </Text>

<Text style={{fontSize: 14, textAlign: "center", marginBottom: 16, color: "#B2B2B2"}}>Insira o seu nome de usuário ou email e enviaremos um link para você voltar a acessar a sua conta.</Text>

<Input margin="0px 0px 8px 0px"
 textAlign="center" 
 title=""
 placeholder="Digite email ou Usuário"/> 

<Button
  style={{ margin: 30 }}
  title="Enviar Linddk"
 
/>    
<View style={{flexDirection: 'row'}}>
  <Text style={{fontSize:12,marginTop: 36,color:'#B1BBC2'}}>________________    </Text>
  <Text style={{fontSize:12,marginTop: 41,color:'#B1BBC2'}}>OU</Text>
  <Text style={{fontSize:12,marginTop: 36,color:'#B1BBC2'}}>    ________________</Text>
</View>
<TouchableOpacity>
<Text style={{fontSize:18,textAlign:"center",marginTop:24,color: '#8C2A96'}}>Criar nova conta</Text></TouchableOpacity>

</Reset>
)

};

export default ResetSenha ;

