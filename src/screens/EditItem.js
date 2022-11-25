import { useState,useContext } from 'react';
import {View, Text, StyleSheet,TextInput, Button} from 'react-native';
import ItemContext from './contexts/ItemContext';

const EditItem =({route,navigation}) =>{
    
    const{state,update} =useContext(ItemContext);
    const{id} =route.params;
    const currentItem = state.find((item) => item.id === id);
    const[competition,setcompetition]= useState(currentItem.competition);
    const[rink2,setrink]= useState(currentItem.rink2);
    const[date,setDate]= useState(currentItem.date);
    const[teamOne,setteamOne] =useState(currentItem.teamOne);
    const[teamTwo,setteamTwo] =useState(currentItem.teamTwo);
    const[playerone,setpone] =useState(currentItem.playerone);
    const[playertwo,setptwo] =useState(currentItem.playertwo);



    return(
        <View>
            
            <Text style={styles2.textLabel}>Competition:</Text>
            <TextInput style={styles2.textInput} 
            value={competition}
             onChangeText={(text) => {setcompetition(text);}}
            />
        
            <Text style={styles2.textLabel}>Date:</Text>
            <TextInput style={styles2.textInput} placeholder="Type date"
            value={date}
             onChangeText={(text) => {setDate(text);}}
            />
            <Text style={styles2.textLabel}>Rink no:</Text>
            <TextInput style={styles2.textInput} placeholder="Type rink no here"
            value={rink2}
             onChangeText={(text) => {setrink(text);}}
            />

            <Text style={styles2.textLabel}> Team one:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={teamOne}
             onChangeText={(text) => {setteamOne(text);}}
            />
            <Text style={styles2.textLabel}>VS  Team Two:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={teamTwo}
             onChangeText={(text) => {setteamTwo(text);}}
            />
            
            <Button title="Update Item" onPress={() => {
                update(currentItem.id,currentItem.rink2,currentItem.teamOne,currentItem.teamTwo,
                    currentItem.competition,currentItem.date,()=> navigation.pop())
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
    row: {
        
        flexDirection: 'row',
        alignItems: "center",
        
      },
});
 

 export default EditItem;