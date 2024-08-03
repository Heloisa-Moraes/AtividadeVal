import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button, ActivityIndicator,Avatar,Chip, MD2Colors } from 'react-native-paper';


// or any files within the Snack

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Avatar.Icon size={58} icon="folder" />
      <Chip icon="information" onPress={() => console.log('Pressed')}>Arquivos</Chip>
   
      {/*
      <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
        Press me
  </Button>*/}
<ActivityIndicator animating={true} color={'red'} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
