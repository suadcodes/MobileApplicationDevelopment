import {View, Text, StyleSheet,TextInput} from 'react-native';

const CreateEvent =() =>{
    let name ="";
    return(
        <View>
            <Text style={styles2.textLabel}>Enter your name:</Text>
            <TextInput style={styles2.textInput} placeholder="Type here"/>
            <Text style={styles2.textLabel}> Your name is {name}</Text>
        </View>
    );
};
const styles2 =StyleSheet.create({
    textInput:{
       fontSize:20,
       padding:10,
       margin:5,
       borderWidth:1,

    },
    textLabel: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop:10,
    },
});
 

 export default CreateEvent;