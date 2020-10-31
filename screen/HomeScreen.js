import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({ navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#262833', color: '#4ACFAC' }}>
        <Text style={styles.textstyle}>Home Screen</Text>
        <Button 
          title="Go to details screen" 
          onPress={() => navigation.navigate("Detail") }
          />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textstyle:{
      color: '#4ACFAC'
    },
    boon:{
      backgroundColor: '#7E8CE0'
    }
  });

export default HomeScreen;