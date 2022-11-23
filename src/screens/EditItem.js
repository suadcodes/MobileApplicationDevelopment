import { useState,useContext } from 'react';
import {View, Text, StyleSheet,TextInput, Button} from 'react-native';
import ItemContext from './contexts/ItemContext';

const EditItem =({route,navigation}) =>{
    
    const{state,update} =useContext(ItemContext);
    const{id} =route.params;
    const currentItem = state.find((item) => item.id === id);
    const[title,setTitle]= useState(currentItem.title);
    const[content,setContent] =useState(currentItem.content);
    
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
            <Button title="Update Item" onPress={() => {
                update(currentItem.id,title, content, currentItem.date,()=> navigation.pop())
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
 

 export default EditItem;