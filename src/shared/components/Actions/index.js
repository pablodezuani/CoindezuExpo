import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Modal, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleActionPress = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress("Conteúdo do modal para Entradas")}>
        <View style={styles.ButtonArea}>
          <AntDesign name="plussquare" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress("Conteúdo do modal para Boleto")}>
        <View style={styles.ButtonArea}>
          <AntDesign name="barcode" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Boleto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress("Conteúdo do modal para Compras")}>
        <View style={styles.ButtonArea}>
          <AntDesign name="shoppingcart" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress("Conteúdo do modal para Pix")}>
        <View style={styles.ButtonArea}>
          <AntDesign name="tagso" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress("Conteúdo do modal para Carteira")}>
        <View style={styles.ButtonArea}>
          <AntDesign name="tagso" size={24} color="#8C2A96" />
        </View>
        <Text style={styles.buttonlabel}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress("Conteúdo do modal para Cartão")}>
        <View style={styles.ButtonArea}>
          <AntDesign name="creditcard" size={24} color="black" />
        </View>
        <Text style={styles.buttonlabel}>Cartão</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text>{modalContent}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});
