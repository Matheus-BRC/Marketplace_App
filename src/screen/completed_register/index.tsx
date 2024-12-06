import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/button";
import { useNavigation } from '@react-navigation/native';
import register_completed from '../../assets/Cadastro_Confirmado.png';

export function CompletedRegister() {
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
                source={register_completed}
                style={styles.imageLogo}
                resizeMode="stretch"
            />
    
            <Text style={styles.title}>
                Seu perfil foi criado{'\n'}
                com sucesso!
            </Text>

            <Text style={styles.subtitle}>
                Realize o login com as credenciais inseridas{'\n'}
                nos passos anteriores.
            </Text>
        </View>
    
        <View style={styles.controlsbutons}>
            <Button title="Entrar" onPress={() => navigation.navigate('HomePage')}/>
        </View> 
    </View>
  );
}