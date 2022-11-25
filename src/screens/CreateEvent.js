import { useState,useContext } from 'react';
import {View, Text, StyleSheet,TextInput, Button} from 'react-native';
import ItemContext from './contexts/ItemContext';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


const CreateEvent =({navigation}) =>{
    const{create} =useContext(ItemContext);
    const[competition,setcompetition] = useState("");
    const[rink2,setrink] = useState(0);
    const[teamOne,setteamOne] =useState("");
    const[teamTwo,setteamTwo] =useState("");

    const[t1player1,sett1p1] =useState("");
    const[t2player1,sett2p1] =useState("");

    const[t1player2,sett1p2] =useState("");
    const[t2player2,sett2p2] =useState("");

    const[t1player3,sett1p3] =useState("");
    const[t2player3,sett2p3] =useState("");

    const[t1player4,sett1p4] =useState("");
    const[t2player4,sett2p4] =useState("");

    
    return(
        <View style={styles2.tablestyle}>
            <Text style={styles2.textLabel2}>Welcome {"\n"}View your saved event in {"\n"} 'View Event Page'</Text>
        
            <View style={styles2.row}>
            <Text style={styles2.textLabel}>Competition:</Text>
            <TextInput
             style={styles2.textInput} 
             placeholder="Type here"
             value={competition}
             onChangeText={(text) => {setcompetition(text);}}
            />
             <Text style={styles2.textLabel}>Rink</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="number"
            value={rink2}
             onChangeText={(text) => {setrink(text);}}
            />
            
            </View>
            <View style={styles2.row}>
            <Text style={styles2.textLabel}> Team 1:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={teamOne}
             onChangeText={(text) => {setteamOne(text);}}
            />
            <Text style={styles2.textLabel}> VS  Team 2 :</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={teamTwo}
             onChangeText={(text) => {setteamTwo(text);}}
            />
        </View>
        <View style={styles2.row}>
        <Text style={styles2.textLabel}> Player 1:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={t1player1}
             onChangeText={(text) => {sett1p1(text);}}
            />
            <Text style={styles2.textLabel}> Player 1:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={t2player1}
             onChangeText={(text) => {sett2p1(text);}}
            />
        </View>
        <View style={styles2.row}>
        <Text style={styles2.textLabel}> Player 2:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={t1player2}
             onChangeText={(text) => {sett1p2(text);}}
            />
            <Text style={styles2.textLabel}> Player 2:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={t2player2}
             onChangeText={(text) => {sett2p2(text);}}
            />
        </View>
        <View style={styles2.row}>
        <Text style={styles2.textLabel}> Player 3:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={t1player3}
             onChangeText={(text) => {sett1p3(text);}}
            />
            <Text style={styles2.textLabel}> Player 3:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={t2player3}
             onChangeText={(text) => {sett2p3(text);}}
            />
        </View>
        <View style={styles2.row}>
        <Text style={styles2.textLabel}> Player 4:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={t1player4}
             onChangeText={(text) => {sett1p4(text);}}
            />
            <Text style={styles2.textLabel}> Player 4:</Text>
            <TextInput 
            style={styles2.textInput} 
            placeholder="name"
            value={t2player4}
             onChangeText={(text) => {sett2p4(text);}}
            />
        </View>

        <View style={styles2.button2}>
            <Button  title="Submit Item" onPress={() => {
                create(competition,rink2,teamOne,teamTwo,t1player1,t1player2,t1player3,t1player4,
                    t2player1,t2player2,t2player3,t2player4, ()=> navigation.pop())
            }}
            />
        </View>
        </View>
    )
};
const styles2 =StyleSheet.create({
    tablestyle:{
       marginTop:20,
    },
    button2:{
        marginTop:50,
     },
    row: {
        
        flexDirection: 'row',
        alignItems: "center",
        
      },
    textInput:{
       
       fontSize:17,
       padding:5,
       margin:5,
       //borderWidth:1,

    },
    textLabel: {
        fontSize: 18,
        paddingLeft: 5,
        marginTop:5,
    },
    textLabel2: {
        fontSize: 18,
        padding: 15,
        marginBottom:20,
        textAlign:'center',
    },
});
 

 export default CreateEvent;