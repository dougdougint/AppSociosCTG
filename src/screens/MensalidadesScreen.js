import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const MensalidadesScreen = () => {
  const [valor, setValor] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');

  const handleAddMensalidade = () => {
    if (valor && dataPagamento) {
      Alert.alert('Sucesso', 'Mensalidade Adicionada com Sucesso!');
      setValor('');
      setDataPagamento('');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Mensalidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor da Mensalidade"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Pagamento"
        value={dataPagamento}
        onChangeText={setDataPagamento}
      />
      <Button title="Adicionar Mensalidade" onPress={handleAddMensalidade} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default MensalidadesScreen;
