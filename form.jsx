import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default function Form() {
  const [inputCpf, setInputCpf] = useState("");
  const [change, setChange] = useState(false);
  const {height} = useWindowDimensions();
  const handlePress = () => {
    setChange(!change);
  }
  return (
    <SafeAreaView style={[styles.container, {height}, StyleSheet.absoluteFill]}>
      <TextInput style={styles.input} placeholder='CPF' value={inputCpf} onChangeText={setInputCpf}/>
      <TextInput style={styles.input} placeholder='Nome'/>
      <Text style={{color: "red",}}>{change ? inputCpf : ""}</Text>
      <View style={styles.br} />
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.btn,
        ]}
        onPress={handlePress}
        >
        <Text style={styles.btnText}>Enviar</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  br: {
    height: 12,
  },
  btn: {
    backgroundColor: '#222',
    padding: 10,
  },
  btnText: {
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});