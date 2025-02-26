import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SociosScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleAddSocio = () => {
    if (nome && email) {
      Alert.alert('Sucesso', 'Sócio Adicionado com Sucesso!');
      setNome('');
      setEmail('');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Novo Sócio</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Sócio"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Adicionar Sócio" onPress={handleAddSocio} />
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

export default SociosScreen;
