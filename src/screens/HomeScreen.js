import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao CTG Carreteiros da Saudade</Text>
      <Button
        title="Gerenciar Sócios"
        onPress={() => navigation.navigate('Socios')}
      />
      <Button
        title="Gerenciar Mensalidades"
        onPress={() => navigation.navigate('Mensalidades')}
      />
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
});

export default HomeScreen;
