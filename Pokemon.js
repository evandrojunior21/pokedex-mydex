import * as React from 'react';
import { View,Text, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';

import styles from './styles';
// import esquemaCores from './esquemaCores';
// import fundoCorPrimaria from './esquemaCores';
// import fundoCorSecundaria from './esquemaCores';
// import coresBar from './esquemaCores';
import * as Progress from 'react-native-progress';

// function coresBar(atributo) {
//   if (atributo < 50) {
//       let red = parseInt(255 * atributo / 50).toString(16);
//       return red.length < 2 ? '#0' + red + 'ff00' : '#' + red + 'ff00';
//   } else {
//       let green = parseInt(255 - 255 * (atributo - 50) / 50).toString(16);
//       return green.length < 2 ? '#ff0' + green + '00' : '#ff' + green + '00';
//   }
// }

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
    return '#0a3d62';
}

export default function Pokemon({navigation, route}) {
    return (
      <View style={[styles.content, styles.sombra, {backgroundColor: fundoCorPrimaria(route.params.tipo1)}]}>
        <ImageBackground style={styles.fundo} source={require('./img/fundoPokemon.png')}>
          <Text style={styles.number}>#{route.params.numero}</Text>
          <Text style={[styles.nome, styles.textoBranco]}>{route.params.nome}</Text>
          <View style={styles.tipo}>
            <Text style={[styles.tipoBloco,  {backgroundColor: fundoCorSecundaria(route.params.tipo1)}, styles.sombra, {color: '#fff'}]}>{route.params.tipo1}</Text>
            {route.params.tipo2 ? <Text style={[styles.tipoBloco,  {backgroundColor: fundoCorSecundaria(route.params.tipo2)}, styles.sombra, {color: '#fff'}]}>{route.params.tipo2}</Text>:null}
          </View>
          <View style={[styles.imgContent]}>
            <Image style={styles.img} source={route.params.url} />
          </View>
        </ImageBackground>

        <View style={[styles.bodyContent, {backgroundColor: fundoCorSecundaria(route.params.tipo1)}]}>
          <Text style={[styles.titulo]}>Atributos</Text>
          <View style={[styles.contAtrib]}>
            <Text style={[styles.hp]}>HP:</Text>
            <Text style={[styles.ponto]}>{route.params.hp}</Text>
            <Progress.Bar style={[styles.bar]} progress={route.params.hp/100} height={12} color={coresBar(route.params.hp)} />
          </View>
          <View style={[styles.contAtrib]}>
            <Text style={[styles.hp]}>Ataque:</Text>
            <Text style={[styles.ponto]}>{route.params.at}</Text>
            <Progress.Bar style={[styles.bar]} progress={route.params.at/100} height={12} color={coresBar(route.params.at)} />
          </View>
          <View style={[styles.contAtrib]}>
            <Text style={[styles.hp]}>Defesa:</Text>
            <Text style={[styles.ponto]}>{route.params.de}</Text>
            <Progress.Bar style={[styles.bar]} progress={route.params.de/100} height={12} color={coresBar(route.params.de)} />
          </View>
          <View style={[styles.contAtrib]}>
            <Text style={[styles.hp]}>Ataque especial:</Text>
            <Text style={[styles.ponto]}>{route.params.as}</Text>
            <Progress.Bar style={[styles.bar]} progress={route.params.as/100} height={12} color={coresBar(route.params.as)} />
          </View>
          <View style={[styles.contAtrib]}>
            <Text style={[styles.hp]}>Defesa especial:</Text>
            <Text style={[styles.ponto]}>{route.params.ds}</Text>
            <Progress.Bar style={[styles.bar]} progress={route.params.ds/100} height={12} color={coresBar(route.params.ds)} />
          </View>
          <View style={[styles.contAtrib]}>
            <Text style={[styles.hp]}>Velocidade:</Text>
            <Text style={[styles.ponto]}>{route.params.vl}</Text>
            <Progress.Bar style={[styles.bar]} progress={route.params.vl/100} height={12} color={coresBar(route.params.vl)} />
          </View>
        </View>
      </View>
    );
}

