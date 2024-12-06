import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
 
import { theme } from '../../global/styles/theme';
 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    color: theme.colors.secondary90,
    fontFamily: theme.fonts.text400,
    fontSize: 18,
    textAlign: 'left',
    borderBottomColor: theme.colors.secondary90,
    borderBottomWidth: 1,
    marginBottom: 10
  },
  content: {
    marginTop: 0,
    width: '100%',
    paddingHorizontal: 35
  },
  image: {
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color:'#A9A9A9'
  },
  controlsbutons: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 35
  },
  controls: {
    marginTop: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 5
  },
  title: {
    color: theme.colors.text,
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 'bold',
    marginBlock: 20,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  imageLogo: {
    marginTop: 0,
    marginBottom: 15
  },
  linha: {
    width: '100%',
        height: 1,
        backgroundColor: '#000',  // Cor da linha
        marginVertical: 10,  // Espaçamento entre a linha e o texto
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }
 
});