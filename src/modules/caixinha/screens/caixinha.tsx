import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const  Caixinha = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Caixinha!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Altere a cor de fundo conforme necessário
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Caixinha;
