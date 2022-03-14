import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GalleryScreen } from '../screens/GalleryScreen';
import { RootStackParamList } from '../types';
import { ImageScreen } from '../screens/ImageScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Gallery">
      <RootStack.Screen name="Gallery" component={GalleryScreen} />
      <RootStack.Screen name="Image" component={ImageScreen} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
