import{View,Text,StyleSheet,FlatList,Pressable} from "react-native";
import {useContext, useEffect } from 'react';
import{MaterialIcons} from '@expo/vector-icons'
import ItemContext from './contexts/ItemContext';


const ViewAllEvents = ({navigation}) => {
    const {state, remove} =useContext(ItemContext);
   
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <>
                <Pressable onPress={() => navigation.navigate('CreateEvent')}>
                <MaterialIcons name="add" size={24} color="black"/>
                </Pressable>
               </>
            )
        })
    },[state]);
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(e) => e.id}
                renderItem={({item}) => {
                    return(
                        <Pressable onPress={() =>navigation.navigate('View',
                        {
                            id: item.id,
                            rink2: item.rink2,
                            teamOne: item.teamOne,
                            teamTwo: item.teamTwo,
                            competition:item.competition,
                            date: item.date,

                            t1player1: item.t1player1,
                            t2player1: item.t2player1,

                            t1player2: item.t1player2,
                            t2player2: item.t2player2,

                            t1player3: item.t1player3,
                            t2player3: item.t2player3,

                            t1player4: item.t1player4,
                            t2player4: item.t2player4,

                            
                        }
                        )}>
                            <View style ={styles.itemContainer}>

                             <View style={styles.dataContainer}>
                                <Text style={styles.dataText}>
                               {item.date.toLocaleDateString()}
                                </Text>
                             </View>
                             <Text style={styles.titleText}>Competition:{item.competition}</Text>
                             <Text style={styles.titleText}>Rink:{item.rink2}</Text>
                            

                             <Pressable
                                onPress={()=> {
                                    remove(item.id);
                                }}>
                                    <MaterialIcons name="delete" size={38} color="red"/>
                             </Pressable>
                            </View>
                        </Pressable>
                    );
                }}
            />
        </View>

    );

};


const styles =StyleSheet.create({
itemContainer :{
    marginTop:15,
    padding:15,
    borderBottomWidth:1,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
},
dataContainer: {
    flexDirection:'column',
    alignItems:'center',
  },
  dataText: {
    fontSize: 16,
    fontWeight:'bold',
  },
  titleText:{
 fontSize:16,
 paddingLeft:15,
 flex:1,
 alignSelf:'flex-start',
  }

});

export default ViewAllEvents;