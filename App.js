{
  /*If you can using navigation then first install four library
            ***********
   npm i @react-navigation/native @react-navigation/native-stack react-native-safe-area-context react-native-screens
            ***********
    And then navigate screen on below format.
  */
}

  import * as React from 'react';
  import {NavigationContainer} from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import Dashboard from './src/Dashboard';

  const Stack = createNativeStackNavigator();

  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default App;