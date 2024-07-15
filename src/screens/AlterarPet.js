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
    <ScrollView style={{ backgroundColor: "#f1f1f1" }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Alterar pet</Text>
        
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

        <View style={{ marginTop: 10 }}>
          <Pressable 
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>
              Alterar
            </Text>
          </Pressable>
        </View>
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
    fontWeight: 700,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 8,
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
})

export default Formulario;
