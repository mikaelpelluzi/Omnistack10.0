import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import  MapView, { Marker, Callout }  from 'react-native-maps';
import { requestPermissionAsync, getCurrentPositionAsync } from 'expo-location'

/*import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';
import socket from '../services/socket';*/

function Main ({ navigation }){
//  const [devs, setDevs] = useState([]);    
    const [currentRegion, setCurrentRegion] = useState(null);
//  const [techs, setTechs] = useState('');



    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionAsync();
        
            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
            
                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }
        
        loadInitialPosition();
    },[]);
    
    if (!currentRegion){
        return null; 
    }
    return (
        <MapView  initialRegion={currentRegion} style={styles.map} >
            <Marker coordinate={{ latitude: -27.2111164, longitude: -49.6374491 }}>
                <Image style={style.avatar} source={{ uri: `https://avatars0.githubusercontent.com/u/${}`}}>
                    <Callout onPress={()=>{
                        navigation.navigate('Profile', {github_username: ' mikaelpelluzi '});
                    }}>
                        <View style={style.Callout}>
                            <Text style={style.devName}>Mikael Arthur</Text>
                            <Text style={style.devBio}> Aprendendo novas tecnologias e avançando em busca do sucesso. </Text>
                            <Text style={style.devTechs}>ReactJS, React Native, Node.js</Text>
                        </View>
                    </Callout>
                </Image>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
})

export default Main;