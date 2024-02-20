import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../../shared/components/Header';
import Balance from '../../../shared/components/Balance';
import Movements from '../../../shared/components/Movements';
import Actions from '../../../shared/components/Actions';


const list =[
  {
    id:1,
    label:'boleto conta luz',
    value :'303,90',
    date :'17/20/2054',
    type: 0 // despesas
  },
  {
    id:2,
    label:'pix',
    value :'5.303,90',
    date :'17/20/2054',
    type: 1 // entrada
  },
  {
    id:3,
    label:'salario',
    value :'5.303,90',
    date :'17/20/2054',
    type: 1 // entrada
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Pablo Teixeira Dezuani"/>
     <Balance saldo="5.514.61" gastos="524,25"/>
     <Actions/>
    <Text style={styles.titulo}> Ultimas movimentações </Text>
  

    <FlatList
    style={styles.list}
    data={list}
    keyExtractor={(item) => String(item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item}) => <Movements dados={item}/>}
    />
    </View>
  );
}

const styles = StyleSheet.create(
{
    container:{
        flex:1,
        backgroundColor:'#fafafa'
    },
    titulo:{
      fontSize:18,
      fontWeight:'bold',
      marginLeft:14,
      marginRight:14,
      marginTop:14,
      marginBottom:24,
  
     },
     list:{
      marginStart: 14,
      marginEnd: 14,
     },
}

)