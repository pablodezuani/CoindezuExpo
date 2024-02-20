import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ResetSenha from "./ResetSenha";
import CreateUser from "./createUser";

const Drawer = createDrawerNavigator();
function Routes(){
    return(
<Drawer.Navigator>
<Drawer.Screen
name="Home"
component={CreateUser}/>
<Drawer.Screen
name="Rota"
component={ResetSenha}/>
</Drawer.Navigator>
    
    )
}


export default Routes;