import React from "react";
import { ScrollView } from "react-native";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";
import { theme } from "../../../shared/components/themes/theme";
import { CreatUser, CreateUserContainer } from "../Styles/createUser.style";
import { useCreateUser } from "../hooks/useCreateUser";

const CreateUser = () => {

  const { createUser,  handleOnChangeInput,handleCreateUser,loading} = useCreateUser();

  // disabled,loading,handleCreateUser

  
  return (
    <ScrollView>
      <CreatUser>
      <Input
  value={createUser.name}
  onChange={(event) => handleOnChangeInput(event, 'name')}
  margin="30px 0px 8px 0px"
  placeholder="Primeiro Nome"
  textAlign="center"
  title=""
/>

<Input
  value={createUser.name}
  onChange={(event) => handleOnChangeInput(event, 'name')}
  margin="30px 0px 8px 0px"
  placeholder="Ultimo nome "
  textAlign="center"
  title=""
/>


        <Input
value={createUser.phone}
onChange={(event) => handleOnChangeInput(event,'phone')}
          margin="8px 0px 8px 0px"
          textAlign="center"
          placeholder="Digite seu telefone"
          title="Telefone:"
        />
        <Input
        value={createUser.email}
        onChange={(event) => handleOnChangeInput(event,'email')}
          margin="8px 0px 8px 0px"
          placeholder="Digite seu email"
          title="Email:"
          textAlign="center"
        />
        <Input
        value={createUser.cpf}
        onChange={(event) => handleOnChangeInput(event,'cpf')}
          margin="8px 0px 8px 0px"
          placeholder="Digite seu CPF"
          textAlign="center"
          title="CPF:"
        />
        <Input
        value={createUser.password}
        onChange={(event) => handleOnChangeInput(event,'password')}
          secureTextEntry
          margin="8px 0px 8px 0px"
          textAlign="center"
          placeholder="Digite sua senha"
          title="Senha:"
        />
        <Input
        value={createUser.confirmPassword}
        onChange={(event) => handleOnChangeInput(event,'confirmPassword')}
          margin="8px 0px 8px 0px"
          secureTextEntry
          textAlign="center"
          placeholder="Digite novamente sua senha"
          title="Confirmar Senha:"
        />
  <Button
  //disabled={disabled}
  onPress={handleCreateUser}
  loading={loading}
  style={{ margin: 16 }}
  type={theme.buttons.buttonsTheme.primary}
  title="Criar acesso"
/>

      
      </CreatUser>
    </ScrollView>
  );
};

export default CreateUser;
