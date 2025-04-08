import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

// export default function Login({navigation}) {

//   const[offset] = useState(new Animated.ValueXY({x:0, y:90}));
//   const[opac] = useState(new Animated.Value(0));

//   useEffect(()=> {
//     Animated.parallel([
//       Animated.spring(offset.y, {
//         toValue:0, 
//         speed:4,
//         bounciness:20
//       }),
//       Animated.timing(opac, {
//         toValue:1,
//         duration:2000,
//       })
//     ]).start();
  
// }, [])}


export default function  Login({ navigation }){
    return(
        <View style={styles.container}>

          <Text style={styles.titulo}>Faça o Login!</Text>
          <View style={styles.inputGroup}>
              <Text style={styles.inputText}>Usuário:</Text>
              <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.inputGroup}>
              <Text style={styles.inputText}>Senha:</Text>
              <TextInput
              style={styles.input}
              secureTextEntry='true'
              ></TextInput>
          </View>
{/* Adicionar onPress para mudar de pagina */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}> 
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

        </View>

    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#306',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 60,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 150,
    fontWeight: 'bold',

  },
  inputGroup:{
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },  
  inputText:{
    color: '#fff',
    fontSize:20,
    marginRight: 15,
    height: 20,
    width: 80,
  },
  input:{
    backgroundColor: '#fff',
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 3,
  },
  button:{
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 150,
    margin: 20, 
    height: 50,
    width: 150
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
});
