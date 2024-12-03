import React from 'react';
import { Text, Image, View, ImageBackground } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
 
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
 
type Props = RectButtonProps & {
  title: string,
  onPress?: () => void;
}
 
export function Button({ title, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <LinearGradient colors={['#0000FF', '#8D2CE2']} // De roxo para azul
        start={{ x: 1, y: 0 }} // Começa à direita
        end={{ x: 0, y: 0 }} // Termina à esquerda
        style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
      </LinearGradient>
    </RectButton>
  );
}