import React, { useState, useContext } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/context';

const SignInScreen = ({navigation}) => {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    const { signIn } = useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecurityTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="red" barStyle="default"/>
          <Animatable.View style={styles.header} animation="swing">
              <Text style={styles.text_header}>
                  Welcome!!! Enter your Sign In details
              </Text>
          </Animatable.View>
          <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
            >
              <Text style={styles.text_footer}>
                  Email
              </Text>
              <View style={styles.action}>
                  <FontAwesome 
                      name="user-o"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput 
                      placeholder='Enter Email'
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={ (val) => textInputChange(val)}
                  />
                  { data.check_textInputChange ?
                  <Feather 
                      name="check-circle"
                      color="green"
                      size={20}
                  />
                  : null }
              </View>
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>
                  Password
              </Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput
                      secureTextEntry={data.secureTextEntry ? true : false} 
                      placeholder='Enter Password'
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={ (val) => handlePasswordChange(val)}
                  />
                  <TouchableOpacity onPress={updateSecurityTextEntry}>
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="green"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />} 
                  </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <LinearGradient 
                    colors={['#5AFF15','#00B712']}
                    style={styles.signIn}
                >
                <TouchableOpacity onPress={ () => {signIn()}}>
                    <Text style={styles.textSign}>Sign In</Text>
                </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity 
                    onPress={ () => navigation.navigate('SignUpScreen')}
                    style={[
                        styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }
                    ]}
                >
                    <Text style={[ styles.textSign, {
                        color: '#009387'
                    }]}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
              </View>
          </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#008037'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,        
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color: 'white'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
  });