import { 
  Text, 
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  StatusBar
} from 'react-native';

import data from './../data.js'

const Item = ({ id, nome, imagem, navigation }) => (
  <Pressable 
    style={styles.card}
    onPress={() => navigation.navigate('Detalhes', { id: id })}
  >
    <Image 
      style={styles.icon}
      source={imagem}
    />
    <Text style={styles.nome}>{nome}</Text>
  </Pressable>
);

const App = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "rgb(127 29 29)" }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Meus pets</Text>

        <Pressable 
          style={styles.button}
          onPress={() => navigation.navigate('Formulario')}
        >
          <Text style={styles.buttonText}>Adicionar pet</Text>
        </Pressable>

        <FlatList
            data={data}
            renderItem={({item}) => 
              <Item 
                id={item.id}
                navigation={navigation}
                nome={item.nome} 
                imagem={item.imagem} 
              />
            }
            keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: 'rgb(254 242 242)',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    marginVertical: 60,
    marginHorizontal: 20
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 14,
    width: '100%',
    padding: 8,
    borderRadius: 8,
  },
  icon: {
    width: '100%',
    height: 200,
    borderRadius: 6
  },
  nome: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 6,
    color: 'rgb(69 10 10)'
  },
  button: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
  }
})

export default App;
