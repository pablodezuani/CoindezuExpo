import styled from "styled-components/native";
import { theme } from "../themes/theme";
import { Icon } from "../icon/icon";


interface ContainerInputProps {
iserror?: boolean;
secureTextEntry?: boolean;

}
export const ContainerInput = styled.TextInput <ContainerInputProps>`
height: 48px;
padding: 16px;
background-color: ${theme.colors.neutralTheme.white};
color: ${theme.colors.pinktheme.pink};
border-radius: 24px;
border-width: 0.3px;
border-color: ${(props)=> props.iserror ? theme.colors.redtheme.rederro : theme.colors.graytheme.gray80};
`;

export const IconEye =styled(Icon)`
position: absolute;
right: 16px;
top:12px


`
