
import * as React from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';

import styles from './styles';

function coresBar(valor){
  if(valor<10)
    return '#e4fee4';
  else if (valor<20)
    return '#cafdca';
  else if (valor<30)
    return '#b0fcb0';
  else if (valor<40)
    return '#96fb95';
  else if (valor<50)
    return '#7cfa7b';
  else if (valor<60)
    return '#62f961';
  else if (valor<70)
    return '#48f846';
  else if (valor<80)
    return '#2ef72c';
  else if (valor<90)
    return '#14f712';
  else
    return '#00FF00';
}

function fundoCorPrimaria(tipo){
  if(tipo=='Planta')
    return '#16a085';
  else if (tipo=='Venenoso')
    return '#574b90';
  else if (tipo=='Fogo')
    return '#ee5253';
  else if (tipo=='Voador')
    return '#3dc1d3';
  else if (tipo=='Água')
    return '#2980b9';
  else if (tipo=='Inseto')
    return '#78e08f';
  else if (tipo=='Psíquico')
    return '#7f8c8d';
  else if (tipo=='Normal')
    return '#878072';
  else if (tipo=='Elétrico')
    return '#f5cd79';
  else if (tipo=='Dragão')
    return '#f39c12';
  else if (tipo=='Gelo')
    return '#3dc1d3';
  else if (tipo=='Terra')
    return '#6c5d3e';
  else if (tipo=='Lutador')
    return '#7f8c8d';
  else if (tipo=='Pedra')
    return '#705a2b';
  else if (tipo=='Fantasma')
    return '#2f3640';
  else if (tipo=='Sombrio')
    return '#2c3e50';
  else if (tipo=='Fada')
    return '#f78fb3';
  else if (tipo=='Ferro')
    return '#ecf0f1';
  else
    return '#3c6382';
}

function fundoCorSecundaria(tipo){
  if(tipo=='Planta')
    return '#1abc9c';
  else if (tipo=='Venenoso')
    return '#786fa6';
  else if (tipo=='Fogo')
    return '#ff6b6b';
  else if (tipo=='Voador')
    return '#63cdda';
  else if (tipo=='Água')
    return '#3498db';
  else if (tipo=='Inseto')
    return '#b8e994';
  else if (tipo=='Psíquico')
    return '#95a5a6';
  else if (tipo=='Normal')
    return '#b7ad98';
  else if (tipo=='Elétrico')
    return '#f7d794';
  else if (tipo=='Dragão')
    return '#f1c40f';
  else if (tipo=='Gelo')
    return '#63cdda';
  else if (tipo=='Terra')
    return '#a39068';
    else if (tipo=='Lutador')
    return '#95a5a6';
  else if (tipo=='Pedra')
    return '#b3934f';
  else if (tipo=='Fantasma')
    return '#34495e';
  else if (tipo=='Sombrio')
    return '#353b48';
  else if (tipo=='Fada')
    return '#f8a5c2';
  else if (tipo=='Ferro')
    return '#ecf0f1';
  else
    return '#ecf0f1';
}

export default function Card({props}) {
    return (
            <View style={[styles.pokemon, {backgroundColor: fundoCorPrimaria(props.tipo1)}]} >
                <View style={styles.col2} >
                    <Text style={[styles.numberCard]}>#{props.numero}</Text>
                    <Text style={styles.nomeMini}>{props.nome}</Text>
                    <View style={styles.tipo}>
                        <Text style={[styles.tipoBloco, styles.sombra,{backgroundColor: fundoCorSecundaria(props.tipo1)}, {color: '#fff'}]}>{props.tipo1}</Text>
                        {props.tipo2 ? <Text style={[styles.tipoBloco, styles.sombra,{backgroundColor: fundoCorSecundaria(props.tipo2)}, {color: '#fff'}]}>{props.tipo2}</Text>:null}
                    </View>
                </View>
                <View style={[styles.col1]} >
                    <ImageBackground style={styles.logo} source={require('./img/pokebola.png')}>
                        <Image style={[styles.imgMini]} source={props.url} />
                    </ImageBackground>
                </View>
            </View>      
    );
}

