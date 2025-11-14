import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts as useLivvic, Livvic_600SemiBold, Livvic_700Bold } from '@expo-google-fonts/livvic';
import { useFonts as usePoppins, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'; 

import Routes from './src/navigation';
import { colors } from './src/theme/colors';

export default function App() {
    const [livvicLoaded] = useLivvic({
        Livvic_600SemiBold,
        Livvic_700Bold,
    });

    const [poppinsLoaded] = usePoppins({
        Poppins_400Regular,
        Poppins_500Medium,
    });

    if (!livvicLoaded || !poppinsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Routes />
        </NavigationContainer>
    );
}
