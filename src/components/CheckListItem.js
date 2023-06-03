
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CheckListItem = ({ checked, title, onPress, id }) => {
console.log(checked);
return (
<View
style={{
flexDirection: 'row',
width: '100%',
marginBottom: 20,
}}
>
<BouncyCheckbox
isChecked={checked}
disableBuiltInState
onPress={(isChecked) => onPress(id)}
innerIconStyle={{
borderRadius: 2,
}}
iconStyle={{
borderRadius: 2,
}}
size={30}
/>
<Text
style={{
fontSize: 25,
textDecorationLine: checked ? 'line-through' : 'none',
}}
>
{title}
</Text>
</View>
);
};

export default CheckListItem;

const styles = StyleSheet.create({});