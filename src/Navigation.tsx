import { NavigationContainer } from "@react-navigation/native";
import Home from "./modules/home/index";
import Login from "./modules/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuUrl } from "./shared/enums/MenuUrl.enum";
import Splash from "./modules/splash";
import CreateUser from "./modules/createUser";
import ResetSenha from "./modules/ResetSenha";
const Stack = createNativeStackNavigator();
const Navigation = ()=> {
return(
<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{headerShown: false}}/>
<Stack.Screen name={MenuUrl.CREATE_USER} component={CreateUser} options={{ title: 'Criar Usuario' }} />
<Stack.Screen name={MenuUrl.RESET_USER} component={ResetSenha} options={{ title: 'Reset Senha' }} />

      <Stack.Screen name={MenuUrl.HOME} component={Home}   options={{title: 'Home'}}/>
    </Stack.Navigator>
  </NavigationContainer>
);
};
export default Navigation;