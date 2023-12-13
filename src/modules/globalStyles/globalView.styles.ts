import  Styled  from 'styled-components/native';

interface DisplayProps{
    CustomMargin?:string;

}

export const DisplayFlexColumm = Styled.View <DisplayProps>`
width: 100%;
flex-direction: column;
display: flex;
margin: ${(props) => props.CustomMargin ? props.CustomMargin : '0px'};


`;

