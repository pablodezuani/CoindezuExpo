import { ScrollView, View } from "react-native";
import Input from "../../../shared/components/input/input";
import text from "../../../shared/components/text/text";
import Button from "../../../shared/components/button/button";
import { theme } from "../../../shared/components/themes/theme";



const ResetSenha = () => {
return (
    <ScrollView >
<Input margin="0px 0px 8px 0px"
 placeholder="Digite Nome completo"
 textAlign="center" 
 title="Nome completo:"/> 

<Button
  style={{ margin: 50 }}
  type={theme.buttons.buttonsTheme.primary}
  title="Criar acesso"
 
/>

        
</ScrollView>
)

};

export default ResetSenha ;