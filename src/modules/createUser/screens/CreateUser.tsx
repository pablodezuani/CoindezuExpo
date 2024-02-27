import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";
import { theme } from "../../../shared/components/themes/theme";
import { CreatUser, CreateUserContainer } from "../Styles/createUser.style";
import { useCreateUser } from "../hooks/useCreateUser";

const CreateUser = () => {

  const { createUser, handleOnChangeInput, handleCreateUser, loading } = useCreateUser();

  return (
    <CreatUser>
 
        <View style={styles.inputContainer}>
          <Input
            value={createUser.name}
            onChange={(event) => handleOnChangeInput(event, 'name')}
            margin="8px 4px 8px 0px"
            placeholder="Primeiro Nome"
            textAlign="center"
            title=""
          />
         <Input
            value={createUser.lastName}
            onChange={(event) => handleOnChangeInput(event, 'lastName')}
            margin="8px 0px 8px 4px"
            placeholder="Ultimo Nome"
            textAlign="center"
            title=""
          />
        </View>
  
      <Input
        value={createUser.phone}
        onChange={(event) => handleOnChangeInput(event, 'phone')}
        margin="8px 0px"
        textAlign="center"
        placeholder="Digite seu telefone"
        title="Telefone:"
      />
      <Input
        value={createUser.email}
        onChange={(event) => handleOnChangeInput(event, 'email')}
        margin="8px 0px"
        placeholder="Digite seu email"
        title="Email:"
        textAlign="center"
      />
      <Input
        value={createUser.cpf}
        onChange={(event) => handleOnChangeInput(event, 'cpf')}
        margin="8px 0px"
        placeholder="Digite seu CPF"
        textAlign="center"
        title="CPF:"
      />
      <Input
        value={createUser.password}
        onChange={(event) => handleOnChangeInput(event, 'password')}
        secureTextEntry
        margin="8px 0px"
        textAlign="center"
        placeholder="Digite sua senha"
        title="Senha:"
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
        margin="8px 0px"
        secureTextEntry
        textAlign="center"
        placeholder="Digite novamente sua senha"
        title="Confirmar Senha:"
      />
      <Button
        onPress={handleCreateUser}
        loading={loading}
        style={{ margin: 16 }}
        type={theme.buttons.buttonsTheme.primary}
        title="Criar acesso"
      />


    </CreatUser>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
});

export default CreateUser;
