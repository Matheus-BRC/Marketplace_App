import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import imagemPerfil from "../../assets/ImagemPerfil.png";
import { Button } from "../../components/button";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ButtonTransparent } from '../../components/buttonTransparent';
 
export function PhotoRegister() {

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
                Para finalizar, insira {'\n'}
                uma foto de perfil {'\n'}
            </Text>
        </View>

        {/* <View style={styles.linha}></View> */}

        <View style={styles.image}>
            <Image
                source={imagemPerfil}
                style={styles.imageLogo}
                resizeMode="stretch"
            />
            <TouchableOpacity>
                <Text style={styles.text}>
                    Selecionar Foto de Perfil
                </Text>
            </TouchableOpacity>
        </View>
 
        <View style={styles.controlsbutons}>
            <ButtonTransparent title="Pular esta etapa" onPress={() => navigation.navigate('CadastroPessoal')}/>
        </View>
        <View style={styles.controlsbutons}>
            <Button title="Continuar" onPress={() => navigation.navigate('CompletedRegister')}/>
        </View>
    </View>
  );
}