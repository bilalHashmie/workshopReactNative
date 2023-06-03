import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

export const useMyColorScheme = () => {
const dark = {
color: 'white',
backgroundColor: 'black',
};

const light = {
color: 'black',
backgroundColor: 'white',
};

const colorScheme = useColorScheme();
const [colors, setColors] = useState({});

const checkColorScheme = () => {
if (colorScheme == 'dark') {
setColors(dark);
} else {
setColors(light);
}
};

useEffect(() => {
checkColorScheme();
}, [colorScheme]);

return colors;
};