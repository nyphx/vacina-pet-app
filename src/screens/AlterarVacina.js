import { useState } from 'react'

import { 
  Text, 
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Pressable
} from 'react-native';

const Formulario = ({ navigation }) => {
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')

  return (
    <ScrollView style={{ backgroundColor: "#f1f1f1" }}>
      <View style={styles.container}>
        <View style={{ gap: 20 }}>
          <Text style={styles.titulo}>
            Alterar vacina
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

        <View style={{ gap: 10, marginTop: 10 }}>
          <Pressable 
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>
              Alterar
            </Text>
          </Pressable>

          <Pressable 
            style={styles.buttonRemover}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonRemoverText}>
              Excluir
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizonal: 20,
    marginVertical: 60,
    gap: 16,
  },
  titulo: {
    fontWeight: 700,
    fontSize: 24,
    textAlign: 'center',
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
  },
  button: {
    backgroundColor: "rgb(127 29 29)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "500",
    textAlign: 'center'
  },
  buttonRemover: {
    borderWidth: 2,
    borderColor: "#505050",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonRemoverText: {
    color: '#505050',
    fontSize: 16,
    fontWeight: "500",
    textAlign: 'center'
  },
})

export default Formulario;
