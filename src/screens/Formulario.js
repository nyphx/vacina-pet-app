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
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [pelagem, setPelagem] = useState('');
  const [sexo, setSexo] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  return (
    <ScrollView style={{ backgroundColor: "rgb(127 29 29)" }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Adicionar pet</Text>
        
        <View>
          <Text style={styles.label}>
            Nome do animal
          </Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View>
          <Text style={styles.label}>
            Espécie
          </Text>
          <TextInput
            style={styles.input}
            value={especie}
            onChangeText={setEspecie}
          />
        </View>

        <View>
          <Text style={styles.label}>
            Raça
          </Text>
          <TextInput
            style={styles.input}
            value={raca}
            onChangeText={setRaca}
          />
        </View>

        <View>
          <Text style={styles.label}>
            Pelagem
          </Text>
          <TextInput
            style={styles.input}
            value={pelagem}
            onChangeText={setPelagem}
          />
        </View>

        <View>
          <Text style={styles.label}>
            Sexo
          </Text>
          <TextInput
            style={styles.input}
            value={sexo}
            onChangeText={setSexo}
          />
        </View>

        <View>
          <Text style={styles.label}>
            Data de Nascimento
          </Text>
          <TextInput
            style={styles.input}
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
        </View>

        <Pressable 
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Adicionar pet</Text>
        </Pressable>
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
    color: 'white',
    fontWeight: 700,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    fontWeight: 600
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    fontSize: 18
  },
  button: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 6,
    marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
  }
})

export default Formulario;