import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/button";
import { useNavigation } from '@react-navigation/native';
import email_confirm from '../../assets/Email_Confirmado.png';

export function Check() {
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
    
            <Image
                source={email_confirm}
                style={styles.imageLogo}
                resizeMode="stretch"
            />
    
        <Text style={styles.title}>
            Confira seu e-mail {'\n'}
            </Text>

            <Text style={styles.subtitle}>
            Enviamos as instruções em seu e-mail{'\n'}
            para restaurar a sua senha.
            </Text>
        </View>
    
        <View style={styles.controlsbutons}>
            <Button
            title="Entrar"
            onPress={handleNavigate}
            />
        </View> 
    </View>
 
  );
}