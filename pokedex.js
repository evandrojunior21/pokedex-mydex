import * as React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';

import Header from './Header';
import styles from './styles';
import Card from './card';
import {POKEMON} from './Basededados';



export default function Pokedex({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header />
                {POKEMON.map(item => 
                    <TouchableOpacity key={item.numero} onPress={() => navigation.navigate('Pokemon', {...item})}>
                        <Card props={item}/>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    );
}

