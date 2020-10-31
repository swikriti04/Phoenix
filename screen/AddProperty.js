import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const AddProperty = ({navigation}) => {
    return (
        <Animatable.View style={styles.container} animation="zoomInUp">    
            <Input
            placeholder='Location'
            />
            <Input
            placeholder='Price per sqft'
            leftIcon={{ type: 'font-awesome', name: 'chevron-left', color: '#009387' }}
            />
            <Input
            placeholder='Person Name'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='#009387'
                />}
            />
            <Input
            placeholder="Area"
            leftIcon={{ type: 'font-awesome', name: 'comment', color: '#009387' }}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => alert('Details submitted for review')}>
                <Text>
                    Add
                </Text>
            </TouchableOpacity>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
})

export default AddProperty;