import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './store/rootReducer';
import MainScreen from './screens/MainScreen';
import FormNewCategory from './screens/FormNewCategory';

const store = createStore(rootReducer);
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Main"}
            component={MainScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name={"FormNewCategory"}
            component={FormNewCategory}
            options={{
              header: () => null,
              cardStyle: { backgroundColor: 'transparent' },
              mode: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
