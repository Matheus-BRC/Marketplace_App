import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import linha from "../../assets/linha.png";
import { Button } from "../../components/button";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
 
export function AddressRegister() {

  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
        <Image
            source={logoSmall}
            style={styles.imageLogo}
            resizeMode="stretch"
        />
 
        <View style={styles.content}>
            <Text style={styles.title}>
                Para começar, insira {'\n'}
                seu endereço {'\n'}
            </Text>
    
            <Text style={styles.label}>Cidade * {'\n'}</Text>
            <TextInput style={styles.input} 
                placeholder="Insira seu endereço"
                placeholderTextColor={theme.colors.primary}
                maxLength={20}
            >
            </TextInput>

            <Text style={styles.label}>CEP * {'\n'}</Text>
            <TextInput style={styles.input} keyboardType='number-pad'
                placeholder="Insira seu CEP"
                maxLength={6}
                placeholderTextColor={theme.colors.primary} >
            </TextInput>
 
            <Text style={styles.label}>Endereço * {'\n'}</Text>
            <TextInput style={styles.input}
                placeholder="Insira seu Endereço"
                maxLength={20}
                placeholderTextColor={theme.colors.primary} >
            </TextInput>

            <Text style={styles.label}>Número * {'\n'}</Text>
            <TextInput style={styles.input} keyboardType='number-pad'
                placeholder="Insira seu Número"
                maxLength={20}
                placeholderTextColor={theme.colors.primary} >
            </TextInput>

            <Text style={styles.label}>Complemento {'\n'}</Text>
            <TextInput style={styles.input}
                placeholder="Insira seu Complemento"
                maxLength={20}
                placeholderTextColor={theme.colors.primary} >
            </TextInput>
        </View>
 
        <View style={styles.controlsbutons}>
            <Button title="Continuar" onPress={() => navigation.navigate('UserRegister')}/>
        </View>
    </View>
  );
}