import { useState } from 'react'

import { 
  Text, 
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Pressable
} from 'react-native';

const AdicionarVacina = ({ navigation }) => {
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')

  return (
    <ScrollView style={{ backgroundColor: "#f1f1f1" }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>
            Adicionar vacina
          </Text>
          
          <View>
            <Text style={styles.label}>
              Nome do vacina
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setNome}
              value={nome}
            />
          </View>

          <View>
            <Text style={styles.label}>
              Data de vacinação
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setData}
              value={data}
            />
          </View>
        </View>

        <Pressable 
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Adicionar vacina</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 60,
    gap: 16,
  },
  titulo: {
    color: '#303030',
    fontWeight: 700,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#303030',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 600
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#bbb",
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgb(127 29 29)',
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 500,
  }
})

export default AdicionarVacina;
