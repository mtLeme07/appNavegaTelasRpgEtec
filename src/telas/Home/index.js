import React, {useState} from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";

export default function Home({route, navigation}){
    return(
        <View style={styles.container}>
           <ImageBackground
                source={require('../../../assets/purpleBg.jpg')}
                style={styles.imgBg}
            > 
                
                <Text style={styles.title}>Bem-Vindo</Text>
                <View style={styles.buttonGroup}> 
                  <View style={styles.viewBotao}>
                      <TouchableOpacity
                          style={styles.button}
                          onPress={() => navigation.navigate("Ficha")}
                      >
                          <Text style={styles.textoBotao}>Ir para a ficha</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.viewBotao}>
                      <TouchableOpacity
                          style={styles.button}
                          onPress={() => navigation.navigate("Jogo")}
                      >
                          <Text style={styles.textoBotao}>Ir para o jogo</Text>
                      </TouchableOpacity>
                  </View>
                </View>
             </ImageBackground> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 60,
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 10,
      color: '#fff',
    },
    buttonGroup:{marginTop: 80},
    input:{
        textAlign: 'center',
        width: 100,
        borderWidth: 5,
        borderColor: 'black'
    },
    imgBg:{
        width: '100%',
        height: '100%',
        opacity: 1
    },
    button:{
        backgroundColor: "#4654ef",
        height: 45,
        width: 250,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        padding: 10,
        margin: 30,
    },
    textoBotao: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 18
    }
  });
  