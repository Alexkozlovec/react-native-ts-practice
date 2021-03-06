import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface IAppTextProps {
  size?: number;
  style?: StyleProp<TextStyle>;
}

export const AppText: React.FC<IAppTextProps> = ({
  size = 16,
  style,
  ...props
}) => {
  return (
    <Text
      style={[
        style,
        {
          fontSize: size,
        },
      ]}
      {...props}
    />
  );
};
