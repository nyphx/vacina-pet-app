import { 
  Text, 
  ScrollView,
  View,
  StyleSheet,
  Image,
  Pressable
} from 'react-native';

import data from './../data.js'

const Info = ({ titulo1, info1, titulo2, info2 }) => {
  return (
    <View style={styles.duasColunas}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titulo}>{titulo1}</Text>
        <Text style={styles.info}>{info1}</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent:'flex-end' }}>
        <Text style={styles.titulo}>{titulo2}</Text>
        <Text style={styles.info}>{info2}</Text>
      </View>
    </View>
  )
}

const Vacinas = ({ navigation, data }) => {
  return (
    <Pressable onPress={() => navigation.navigate('AlterarVacina')}>
      {
        data.map(vacina => (
          <View style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>
                Nome da vacina
              </Text>

              <Text style={styles.cardText}>
                {vacina.nome}
              </Text>
            </View>

            <View>
              <Text style={styles.cardTitle}>
                Data de vacinação
              </Text>

              <Text style={styles.cardText}>
                {vacina.nome}
              </Text>
            </View>
          </View>
        ))
      }
    </Pressable>
  )
}

const Vermifugo = ({ navigation, data }) => {
  return (
    <Pressable onPress={() => navigation.navigate('AlterarVermifugo')}>
      {
        data.map(vermifugo => (
          <View style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>
                Nome do vermífugo
              </Text>

              <Text style={styles.cardText}>
                {vermifugo.nome}
              </Text>
            </View>

            <View>
              <Text style={styles.cardTitle}>
                Primeiro vermífugo
              </Text>

              <Text style={styles.cardText}>
                {vermifugo.data}
              </Text>
            </View>

            <View>
              <Text style={styles.cardTitle}>
                Data de retorno
              </Text>

              <Text style={styles.cardText}>
                {vermifugo.retorno}
              </Text>
            </View>
          </View>
        ))
      }
    </Pressable>
  )
}

const Detalhes = ({ navigation, route }) => {
  const pet = data[route.params.id]

  return (
    <ScrollView style={{ backgroundColor: "#f1f1f1" }}>
      <View style={{ marginBottom: 20, }}>
        <Image 
          style={styles.img}
          source={pet.imagem}
        />

        <View style={styles.nomeContainer}>
          <Text style={styles.nome}>
            {pet.nome}
          </Text>
        </View>
        
        <View style={[styles.container, { gap: 20 }]}>
          <Info 
            titulo1="Data de Nascimento"
            info1={pet.dataNascimento}
            titulo2="Idade"
            info2='10'
          />

          <Info 
            titulo1="Espécie"
            info1={pet.especie}
            titulo2="Raça"
            info2={pet.raca}
          />

          <Info 
            titulo1="Sexo"
            info1={pet.sexo}
            titulo2="Pelagem"
            info2={pet.pelagem}
          />
        </View>

        <View style={{ marginHorizontal: 30 }}>
          <View style={styles.subtituloContainer}>
            <Text style={styles.subtitulo}>
              Vacinas
            </Text>

            <Pressable 
              style={styles.button}
              onPress={() => navigation.navigate('AdicionarVacina')}
            >
              <Text style={styles.buttonText}>
                Adicionar
              </Text>
            </Pressable>
          </View>

          <Vacinas 
            data={pet.vacinas}
            navigation={navigation}
          />

          <View style={styles.subtituloContainer}>
            <Text style={styles.subtitulo}>
              Vermífugo
            </Text>

            <Pressable 
              style={styles.button}
              onPress={() => navigation.navigate('AdicionarVermifugo')}
            >
              <Text style={styles.buttonText}>
                Adicionar
              </Text>
            </Pressable>
          </View>

          <Vermifugo 
            data={pet.vermifugos}
            navigation={navigation}
          />

          <View style={{ gap: 10, marginTop: 10 }}>
            <Pressable 
              style={styles.button}
              onPress={() => navigation.navigate('AlterarPet')}
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
   width: '100%',
   height: 350,
   objectFit: 'cover'
  },
  nomeContainer: {
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 12,
    marginTop: -30,
    elevation: 8,
    shadowColor: 'rgba(0 0 0 0.8)',
  },
  nome: {
    color: 'rgb(69 10 10)',
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    marginHorizontal: 50,
    marginVertical: 30,
  },
  titulo: {
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 6
  },
  subtitulo: {
    fontSize: 24,
    fontWeight: 600,
  },
  info: {
    fontSize: 20
  },
  duasColunas: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
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
  subtituloContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 16,
    gap: 14,
    borderWidth: 1,
    borderColor: "#bbb",
  },
  cardTitle: {
    fontWeight: '600', 
    fontSize: 18, 
    marginBottom: 4
  },
  cardText: {
    fontSize: 16,
  },
})

export default Detalhes;
