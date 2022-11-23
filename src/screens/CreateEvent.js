import { useState } from 'react';
import {View, Text, StyleSheet,TextInput, Button} from 'react-native';

const CreateEvent =({route,navigation}) =>{
    const{callback} =route.params;
    const[title,setTitle]= useState("");
    const[content,setContent] =useState("");
    
    return(
        <View>
            <Text style={styles2.textLabel}>Enter a title:</Text>
            <TextInput style={styles2.textInput} placeholder="Type title here"
            value={title}
             onChangeText={(text) => {setTitle(text);}}
            />
            <Text style={styles2.textLabel}> Enter your content here</Text>
            <TextInput 
            style={styles2.textInput} 
            multitline placeholder="Type content here"
            value={content}
             onChangeText={(text) => {setContent(text);}}
            />
            <Button title="Submit Item" onPress={() => {
                callback({title: title, content:content});
                navigation.pop();
            }}
            />
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