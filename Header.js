
import { StyleSheet, Text, View, Title, TextInput,Alert, Image, ImageBackground, NavbarNav, NavItem, Dropdown, DropdownToggle, Button, DropdownMenu, DropdownItem } from 'react-native';
import styles from './styles';

export default function Header() {
  return (

    <View style={styles.header}>
      {/* <Text style={styles.titulo001}>POKEDEX</Text> */}
      <Image style={styles.logo} source={require('./img/logo.png')} />
      <View style={styles.grupoBt}>
        <TextInput style={styles.p}></TextInput>
        <Button style={styles.bt}
          title="Buscar"
          color="#60a3bc"
          placeholder="Pesquise um Pokémon"
          onPress={() => Alert.alert('Não achei seu pokémon')}
        />
      </View>
    </View>
  );
}


