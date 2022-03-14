import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/store';
import AppNavigator from './src/navigation';

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.wrapper}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
