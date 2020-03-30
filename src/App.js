import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './store/rootReducer';
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';
import FormNewCategory from './screens/FormNewCategory';
import ConfirmDialog from './screens/ConfirmDialog';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
const Stack = createStackNavigator();

const cardStyleInterpolator = ({ current: { progress } }) => ({
  cardStyle: {
    opacity: progress.interpolate({
      inputRange: [0, 0.5, 0.9, 1],
      outputRange: [0, 0.25, 0.7, 1],
    }),
  },
  overlayStyle: {
    opacity: progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.5],
      extrapolate: 'clamp',
    }),
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Splash"}
            component={SplashScreen}
            options={{ header: () => null }}
          />
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
              cardOverlayEnabled: true,
              headerMode: 'none',
              mode: 'modal',
              cardStyleInterpolator,
            }}
          />
          <Stack.Screen
            name={"ConfirmDialog"}
            component={ConfirmDialog}
            options={{
              header: () => null,
              cardStyle: { backgroundColor: 'transparent' },
              cardOverlayEnabled: true,
              headerMode: 'none',
              mode: 'modal',
              cardStyleInterpolator,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
