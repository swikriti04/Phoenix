import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const CropScreen = ({navigation}) => {

  const [content, setContent] = useState([
    { name: 'Delhi, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/delhi1.jpg')},
    { name: 'Delhi, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/delhi2.jpg')},
    { name: 'Raipur, India', Price: '200 per sqft', Area: '100 sqft', src: require('../assets/delhi3.jpg')},
    { name: 'Bangalore, India', Price: '1600 per sqft', Area: '100 sqft', src: require('../assets/delhi4.jpg')},
    { name: 'Mumbai, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/delhi5.jpg')},
    { name: 'Jaipur, India', Price: '800 per sqft', Area: '100 sqft', src: require('../assets/delhi6.jpg')},
    { name: 'Kolkata, India', Price: '1400 per sqft', Area: '100 sqft', src: require('../assets/delhi7.jpg')},
    { name: 'Lucknow, India', Price: '800 per sqft', Area: '100 sqft', src: require('../assets/delhi1.jpg')},
    { name: 'Delhi, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/delhi3.jpg')},
    { name: 'Delhi, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/delhi5.jpg')},
  ])

  OpenDetailScreen = () => {
    navigation.navigate('DetailScreen');
  }

    return (
      
        <View style={styles.container}>
            <Animatable.View style={styles.header} animation="swing">
              <Text style={styles.text_header}>
                Space for Rooftop Farming
              </Text>
            </Animatable.View>          
            <ScrollView style={styles.footer}>
              {
                content.map( (i, index) => (
                  <Animatable.View key={index} animation="bounceIn" style={styles.card}>
                    <Image resize="contain" style={styles.image} source={i.src}/>
                    <View style={styles.cardDetails}>
                    <Text style={styles.textstyle}>
                        <MaterialIcons name="location-on" color="#009387" size={20}/>
                        {i.name}
                      </Text>
                      <Text style={styles.textstyle}>
                      <MaterialCommunityIcons name="camera-metering-matrix" color="#009387" size={20} />
                        {i.Area}
                      </Text>
                      <Text style={styles.textstyle}>
                        <MaterialCommunityIcons name="currency-inr" color="#009387" size={20} />
                        {i.Price}
                      </Text>
                      <TouchableOpacity>
                        <Button title="View" onPress={() => navigation.navigate("Detail")} color="darkgreen" />
                      </TouchableOpacity>
                    </View>
                  </Animatable.View>
                ))
              }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 40,
            
    },
    header: {
      flex: 0.01,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
      alignItems: 'center',
    },
    text_header: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 25
    },
    footer: {
      flex: 4,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
    },
    img:{
      flex: 1,
      justifyContent: 'center',
      resizeMode: 'cover'
    },
    textstyle:{
      marginTop: '3%',      
      marginLeft: 10,
      color: 'black'
    },
    card: {      
      borderWidth: 2,
      borderColor: '#009387',
      borderRadius: 10,
      borderTopWidth: 20,
      borderTopLeftRadius: 50,
      borderBottomWidth: 20,
      borderBottomRightRadius: 50,
      marginBottom: 15,
      flexDirection: 'row',
      borderRadius: 40,
      paddingHorizontal: 20,
    },
    cardDetails:{
      padding: 15
    },
    image: {
      marginTop: '10%',
      height: 100,
      width: 100,
      borderRadius: 10
    },
  });
export default CropScreen;