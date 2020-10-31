import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const DetailScreen = ({ navigation }) => {
    return (
      <Animatable.View animation='fadeInUpBig' style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={styles.img} source={require('../assets/delhi5.jpg') } />
        <View style={styles.footer}>
          <Text style={styles.textstyle}>
            <MaterialIcons name="location-on" color="#009387" size={20}/>
            Delhi, India    
          </Text>
          <Text style={styles.textstyle}>
            <MaterialCommunityIcons name="camera-metering-matrix" color="#009387" size={20} />
            100 sqft
          </Text>
          <Text style={styles.textstyle}>
            <MaterialCommunityIcons name="currency-inr" color="#009387" size={20} />
            1200 per sqft
          </Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => alert('Details sent to registered mail')}>
            <Text>
              Rent
            </Text>
          </TouchableOpacity>
      </View>
      
    </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      flex:1,
      height: 300,
      width: 300,
      borderRadius: 10,
      margin: 10
    },
    footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
      width: 300,
      height: 150
    },
    textstyle:{
      marginTop: '3%',      
      marginLeft: 10,
      color: 'black'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#009387",
    },
  });

export default DetailScreen;  