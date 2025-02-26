import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SociosForm = ({ onSubmit, socio }) => {
  const [nome, setNome] = useState(socio ? socio.nome : '');
  const [email, setEmail] = useState(socio ? socio.email : '');
  const [telefone, setTelefone] = useState(socio ? socio.telefone : '');
  const [dataNascimento, setDataNascimento] = useState(socio ? socio.dataNascimento : '');
  
  const handleSubmit = () => {
    if (!nome || !email || !telefone || !dataNascimento) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    const novoSocio = {
      nome,
      email,
      telefone,
      dataNascimento,
    };

    onSubmit(novoSocio);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Sócio</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o e-mail"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite o telefone"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="Digite a data de nascimento (dd/mm/yyyy)"
      />

      <Button title={socio ? "Atualizar Sócio" : "Cadastrar Sócio"} onPress={handleSubmit} />
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

export default SociosForm;

