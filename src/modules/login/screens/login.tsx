import { SafeAreaView, Text, TouchableOpacity, View, useWindowDimensions ,StyleSheet} from "react-native";
import { ContainerLogin, Imagelogo } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";
import { ButtonSecondary } from "../../../shared/components/button/button.style";
import { theme } from "../../../shared/components/themes/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React, { useEffect, useState } from "react";
import {Icon} from '../../../shared/components/icon/icon';
import axios from "axios";
import { NativeSyntheticEvent } from "react-native";
import { TextInputChangeEventData } from "react-native";
import { useLogin } from "../hooks/useLogin";
import { pinktheme } from "../../../shared/components/themes/colors";
import { Reset } from "../../ResetSenha/styles/stylesReset.styles";
import { AntDesign } from '@expo/vector-icons';



const Login = () => {
  const{
    email,
    password,
    loading,
    errorMessage,
handleOnPress,
handleOnChangeEmail,
handleOnChangeSenha,
handleGoToCreateUser,
handleGoToResetUser,
handleGoToHome,

  } = useLogin();
return (
   <View>
<ContainerLogin>
 <Imagelogo  source={require('../../../assets/images/novo.png')}/>

      <Input 
      value={email}
      errorMessage={errorMessage} 
      margin="0px 0px 8px 0px"
       placeholder="Digite Seu E-mail" 
       title="Email:" 
       onChange={handleOnChangeEmail}/>
      <Input   
      value={password}
      errorMessage={errorMessage} 
      margin ="0px 0px 16px 0px" 
      secureTextEntry 
      placeholder="Digite Sua senha" 
      title="Senha: "
      onChange={handleOnChangeSenha}/>
    <TouchableOpacity onPress={handleGoToResetUser}>
      <Text style={{fontSize:12,marginTop:8,marginStart:200}}> Esqueceu a sua senha? </Text>
    </TouchableOpacity>
        <Button

         type={theme.buttons.buttonsTheme.primary}
         loading ={loading}
        margin="16px"
         title="Acessar" 
       onPress={handleGoToHome}// mudar apos o termino 
      
      />
       
<View style={{flexDirection: 'row'}}>
  <Text style={{fontSize:16,marginTop: 36,color:'#8C2A96'}}>__________________    </Text>
  <Text style={{fontSize:16,marginTop: 41,color:'#8C2A96'}}>Acesse com</Text>
  <Text style={{fontSize:16,marginTop: 36,color:'#8C2A96'}}>    __________________</Text>
</View>

<View style={{flexDirection: 'row'}}>
<TouchableOpacity style={styles.botao}>
      <AntDesign name="google" size={24} color="#db4a39" style={{ marginRight: 10 }} />
      <Text style={{ fontSize: 16 ,color:'#8C2A96' }}>Continuar com Google</Text>
    </TouchableOpacity>
</View>



<View>
<Text style = {{color:'orange',marginTop: 50}}>
  Não possui acesso ?{' '}
  <TouchableOpacity  onPress={handleGoToCreateUser}>
  <Text style={{color: 'orange', textDecorationLine: 'underline',marginTop:33}}>
  Cadastre-se
  </Text></TouchableOpacity>
  
</Text>
</View>
 </ContainerLogin>
   </View>
   
);
};
export default Login;



const styles = StyleSheet.create({


botao:{

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent', // Defina a cor de fundo do botão aqui
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop:16,
        borderWidth: 1, // Defina a largura da borda aqui
        borderColor: '#8C2A96', // Defina a cor da borda do botão aqui

}

})