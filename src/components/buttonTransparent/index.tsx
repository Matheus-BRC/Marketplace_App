import React from 'react';
import { Text, Image, View, ImageBackground } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
 
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
 
type Props = RectButtonProps & {
  title: string,
  onPress?: () => void;
}
 
export function ButtonTransparent({ title, ...rest }: Props) {
  return (
    <RectButton {...rest} style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
    </RectButton>
  );
}