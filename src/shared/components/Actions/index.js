import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Modal, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Input from "../../../shared/components/input/input";
import Button from "../button/button";
export default function Actions() {
  // Estados para controlar a visibilidade de cada modal
  const [modalVisibleEntradas, setModalVisibleEntradas] = useState(false);
  const [modalVisibleBoleto, setModalVisibleBoleto] = useState(false);
  const [modalVisibleCompras, setModalVisibleCompras] = useState(false);
  const [modalVisiblePix, setModalVisiblePix] = useState(false);
  const [modalVisibleCarteira, setModalVisibleCarteira] = useState(false);
  const [modalVisibleCartao, setModalVisibleCartao] = useState(false);

  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      {/* Botões para abrir cada modal */}
      <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisibleEntradas(true)}>
        <View style={styles.ButtonArea}>
          <AntDesign name="plussquare" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisibleBoleto(true)}>
        <View style={styles.ButtonArea}>
          <AntDesign name="barcode" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Boleto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisibleCompras(true)}>
        <View style={styles.ButtonArea}>
          <AntDesign name="shoppingcart" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisiblePix(true)}>
        <View style={styles.ButtonArea}>
          <AntDesign name="tagso" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisibleCarteira(true)}>
        <View style={styles.ButtonArea}>
          <AntDesign name="tagso" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisibleCartao(true)}>
        <View style={styles.ButtonArea}>
          <AntDesign name="creditcard" size={24} color="black" />
        </View>
        <Text style={styles.buttonlabel}>Cartão</Text>
      </TouchableOpacity>

      {/* Modal para Entradas */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEntradas}
        onRequestClose={() => setModalVisibleEntradas(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              
              <TouchableOpacity onPress={() => setModalVisibleEntradas(false)} style={styles.closeIcon}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.Titlehome}>Entrada</Text>
              <Input
         
       
         margin="4px 0px 4px 4px"
         placeholder="Nome da entrada"
         textAlign="center"
         title="Nome da entrada"
       />
             
             <Input
         

            margin="4px 0px 4px 4px"
            placeholder="Data da Entrada"
            textAlign="center"
            title="Data da entrada"
          />
 <Input
         
        
         margin="4px 0px 4px 4px"
         placeholder="Valor"
         textAlign="center"
         title="Valor"
       />
    

    <Button
    title="nome"/>

          
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal para Boleto */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleBoleto}
        onRequestClose={() => setModalVisibleBoleto(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text>Conteúdo do modal para Boleto</Text>
              <TouchableOpacity onPress={() => setModalVisibleBoleto(false)} style={styles.closeIcon}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal para Compras */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCompras}
        onRequestClose={() => setModalVisibleCompras(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text>Conteúdo do modal para Compras</Text>
              <TouchableOpacity onPress={() => setModalVisibleCompras(false)} style={styles.closeIcon}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal para Pix */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePix}
        onRequestClose={() => setModalVisiblePix(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text>Conteúdo do modal para Pix</Text>
              <TouchableOpacity onPress={() => setModalVisiblePix(false)} style={styles.closeIcon}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal para Carteira */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCarteira}
        onRequestClose={() => setModalVisibleCarteira(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text>Conteúdo do modal para Carteira</Text>
              <TouchableOpacity onPress={() => setModalVisibleCarteira(false)} style={styles.closeIcon}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal para Cartão */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCartao}
        onRequestClose={() => setModalVisibleCartao(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text>Conteúdo do modal para Cartão</Text>
              <TouchableOpacity onPress={() => setModalVisibleCartao(false)} style={styles.closeIcon}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32,
  },
  ButtonArea: {
    backgroundColor: '#C1F4F8',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonlabel: {
    marginTop: 8,
    textAlign: 'center'
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent:'flex-end',
    alignItems: 'center',
    padding:36,
  
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 18,
    elevation: 5,
    height:400,
    width:360,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  Titlehome:{
    marginTop:16,
    fontSize:18,
  },
});

