import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
Button,
FlatList,
SafeAreaView,
StyleSheet,
Text,
TouchableOpacity,
View,
useColorScheme,
} from 'react-native';
// import { useMyColorScheme } from './src/hooks/useMyColorScheme';
import CheckListItem from './src/components/CheckListItem';

export default function App() {
const [itemStates, setItemStates] = useState([
{
id: 1,
title: 'First Item',
checkStatus: false,
},
{
id: 2,
title: 'Second Item',
checkStatus: false,
},
{
id: 3,
title: 'Third Item',
checkStatus: false,
},
]);
ShowCurrentDate=()=>{
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var date = new Date().getDate();
  var day = days[new Date().getDay()];
  var year = new Date().getFullYear();

  return ((day + ' '+ date + ',' + year));

 }

useEffect(() => {
console.log(itemStates);
}, [itemStates]);

// const colorScheme = useColorScheme();

// const colorScheme = useMyColorScheme();
console.log("this is "+ShowCurrentDate());
return (


 <SafeAreaView
style={{
...styles.container,
// backgroundColor: colorScheme.backgroundColor,
}}
> 

<View style={{
// justifyContent:'center',
backgroundColor:'red',
}}>
<Text style={{
fontSize: 30,
fontWeight: 'bold',
marginBottom: 20,
}}>{ShowCurrentDate()}</Text>
<Text
style={{
fontSize: 30,
fontWeight: 'bold',
marginBottom: 20,
}}
>
Incomplete
</Text>
<FlatList
data={itemStates}
renderItem={({ item }) => (
<CheckListItem
checked={item.checkStatus}
title={item.title}
id={item.id}
onPress={(id) => {
setItemStates((preVal) => {
const newStates = preVal.map((item) => {
if (item.id == id) {
return {
...item,
checkStatus: !item.checkStatus,
};
} else {
return item;
}
});
return newStates;
});
}}
/>
)}
/>

<Text
style={{
fontSize: 30,
fontWeight: 'bold',
marginBottom: 20,
}}
>
Completed
</Text>

<FlatList
data={itemStates}
renderItem={({ item }) => (
<CheckListItem
checked={item.checkStatus}
title={item.title}
id={item.id}
onPress={(id) => {
setItemStates((preVal) => {
const newStates = preVal.map((item) => {
if (item.id == id) {
return {
...item,
checkStatus: !item.checkStatus,
};
} else {
return item;
}
});
return newStates;
});
}}
/>
)}
/>
</View>
 </SafeAreaView> 

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
// alignItems: 'center',
justifyContent: 'center',
// flexDirection:'row',
},
});