import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/button";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
 
export function UserRegister() {

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
                Insira seus dados {'\n'}
                pessoais {'\n'}
            </Text>
    
            <Text style={styles.label}>Nome * {'\n'}</Text>
            <TextInput style={styles.input} 
                placeholder="Insira seu nome"
                placeholderTextColor={theme.colors.primary}
                maxLength={20}
            >
            </TextInput>

            <Text style={styles.label}>Sobrenome * {'\n'}</Text>
            <TextInput style={styles.input}
                placeholder="Insira seu sobrenome"
                maxLength={6}
                placeholderTextColor={theme.colors.primary} >
            </TextInput>
 
            <Text style={styles.label}>Celular * {'\n'}</Text>
            <TextInput style={styles.input}
                placeholder="Insira seu celular"
                maxLength={20}
                placeholderTextColor={theme.colors.primary} >
            </TextInput>

            <Text style={styles.label}>Telefone {'\n'}</Text>
            <TextInput style={styles.input}
                placeholder="Insira seu Telefone"
                maxLength={20}
                placeholderTextColor={theme.colors.primary} >
            </TextInput>
        </View>
 
        <View style={styles.controlsbutons}>
            <Button title="Continuar" onPress={() => navigation.navigate('PhotoRegister')}/>
        </View>
    </View>
  );
}