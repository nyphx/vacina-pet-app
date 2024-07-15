import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'react-native'

import Inicio from './screens/Inicio.js'
import AlterarPet from './screens/AlterarPet.js'
import AlterarVacina from './screens/AlterarVacina.js'
import AlterarVermifugo from './screens/AlterarVermifugo.js'
import Detalhes from './screens/Detalhes.js'
import Formulario from './screens/Formulario.js'
import AdicionarVacina from './screens/AdicionarVacina.js'
import AdicionarVermifugo from './screens/AdicionarVermifugo.js'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ecf0f1" />
      <Stack.Navigator>
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="AlterarPet" 
          component={AlterarPet} 
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="AlterarVacina" 
          component={AlterarVacina} 
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="AlterarVermifugo" 
          component={AlterarVermifugo} 
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="Formulario" 
          component={Formulario} 
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="AdicionarVacina" 
          component={AdicionarVacina} 
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="AdicionarVermifugo" 
          component={AdicionarVermifugo} 
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
