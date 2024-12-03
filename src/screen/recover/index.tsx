import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/button";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
 
export function Recover() {
  const navigation = useNavigation<any>();
    
  const handleNavigate = () => {
      navigation.navigate('Check');
  }
  return (
    <View style={styles.container}>
      <Image
        source={logoSmall}
        style={styles.imageLogo}
        resizeMode="stretch"
      />
 
      <View style={styles.content}>
 
        <Text style={styles.title}>
          Esqueceu a senha? {'\n'}
        </Text>

        <Text style={styles.subtitle}>
          Digite seu e-mail abaixo para receber as{'\n'}
          instruções de redefinição de senha.
        </Text>
 
        <Text style={styles.label}>
          E-mail {'\n'}
        </Text>
        <TextInput style={styles.input} placeholder="Insira seu e-mail"
          keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        >
        </TextInput>
      </View>
 
      <View style={styles.controlsbutons}>
        <Button
          title="Recuperar senha"
          onPress={handleNavigate}
        />
      </View> 
    </View>
 
  );
}