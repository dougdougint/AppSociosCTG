import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const MensalidadesForm = ({ onSubmit, mensalidade }) => {
  const [valor, setValor] = useState(mensalidade ? mensalidade.valor : '');
  const [descricao, setDescricao] = useState(mensalidade ? mensalidade.descricao : '');
  const [data, setData] = useState(mensalidade ? mensalidade.data : '');
  
  const handleSubmit = () => {
    if (!valor || !descricao || !data) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    const novaMensalidade = {
      valor,
      descricao,
      data,
    };

    onSubmit(novaMensalidade);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Mensalidade</Text>

      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
        placeholder="Digite o valor"
      />

      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição"
      />

      <Text style={styles.label}>Data:</Text>
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
        placeholder="Digite a data (dd/mm/yyyy)"
      />

      <Button title={mensalidade ? "Atualizar Mensalidade" : "Cadastrar Mensalidade"} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 12,
  },
});

export default MensalidadesForm;

