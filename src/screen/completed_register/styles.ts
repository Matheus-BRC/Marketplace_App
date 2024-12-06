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
  content: {
    alignItems: 'center',
    marginTop: 100,
    width: '100%',
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
    color: theme.colors.secondary100,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  imageLogo: {
    marginTop: 0,
    marginBottom: 15
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 50,
    fontFamily: theme.fonts.title500,
  }
});