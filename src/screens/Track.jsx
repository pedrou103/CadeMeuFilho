import React, { useState, useEffect, useRef } from 'react';
import { VStack, Text, Box } from "native-base"
import MapView from "react-native-maps"
import { StyleSheet, View } from 'react-native';

import * as Location from 'expo-location';
import MapCard from '../components/MapCard';

export function Track() {
    const mapRef = useRef(null);

    const getMyLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;

        const { latitude, longitude } = (await Location.getCurrentPositionAsync({})).coords;
        const region = {
            latitude,
            longitude,
            latitudeDelta: 0.035,
            longitudeDelta: 0.035,
        };
        return region
    }

    const myLocation = async () => {
        const region = await getMyLocation();

        region && mapRef.current?.animateToRegion(region, 1000);
    }

    return (
        <Box flex={1} bgColor='black.900'>
            <MapView
                style={styles.map}
                ref={mapRef}
                onMapReady={() => {myLocation();}}
                showsUserLocation
            />
            <MapCard />
        </Box>
    )
}
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});