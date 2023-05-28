import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  function mensaje(){
    Alert.alert("Atencion","Usuario incorrecto")
  }
  return (
    <View style={styles.container}>
      <Image 
        style={styles.img}
        source={require('./assets/ic.png')}

        />
      <Text style={styles.txt1}>Login</Text>
      <Text style={styles.txt2}>Usuario</Text>

      <TextInput style={styles.input1}
        placeholder='Ingrese su usuario'
        keyboardType='email-address'
      />
      <Text style={styles.txt2}>Contraseña</Text>
      <TextInput style={styles.input1}
        placeholder='Ingrese su contraseña'
      />

      <Text style={styles.txt2}>Celular</Text>
      <TextInput style={styles.input2}
        placeholder='Ingrese su numero celular'
        keyboardType='numeric'
      />
      <Button 
        title='Enviar'
        onPress={mensaje}
      />
      <TouchableOpacity style={styles.btn1} onPress={mensaje}>
        <Text style={{justifyContent: 'center', fontSize:20,color:"blue"}}>Aceptar</Text>
        <Image 
          style={styles.img2}
          source={require("./assets/ic.png")}/>
      </TouchableOpacity>
    

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7fffd4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1:{
    color:'green',
    fontSize:18
  },
  input1:{
    backgroundColor:'white',
    paddingHorizontal:50,
    width:"90%",
    height: "6%",
    borderRadius:39
  },
  txt2:{
    fontSize:18,
    color:'brown',
    alignSelf: "flex-start",
    paddingHorizontal:28
  },
  input2:{
    backgroundColor:'white',
    paddingHorizontal:50,
    width:"90%",
    height: "6%",
    borderRadius:39
  },
    btn1:{
    backgroundColor:'pink',
    top:40,
    width:"40%",
    height: "8%",
    borderRadius:39,
  },
  img:{
    width:90,
    height:90
  },
  img2:{
    width:70,
    height:70,
    left:90,
    top:-30
  }
});
