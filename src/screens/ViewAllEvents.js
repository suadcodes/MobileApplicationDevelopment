import{View,Text,StyleSheet,FlatList,Pressable} from "react-native";
import {useContext, useEffect } from 'react';
import{MaterialIcons} from '@expo/vector-icons'
import ItemContext from './contexts/ItemContext';

const ViewAllEvents = ({navigation}) => {
    const {state, remove} =useContext(ItemContext);
   
    useEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <>
                <Pressable onPress={() => navigation.navigate('CreateEvent'
                    )
                    }>
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
                            title:item.title,
                            content: item.content,
                            date: item.date.toUTCString()
                        }
                        )}>
                            <View style ={styles.itemContainer}>
                                <View style={styles.dataContainer}>
                                    <Text style={styles.dataText} >
                                       {item.date.toLocaleDateString()}
                                    </Text>
                                      <Text>
                                      {item.date.toLocaleTimeString()}
                                      </Text>
                                </View>
                             <Text style={styles.titleText}>{item.title}</Text>
                             <Pressable
                                onPress={()=> {
                                    remove(item.id);
                                }}>
                                    <MaterialIcons name="delete" size={38} color="red"/>
                             </Pressable>
                            </View>
                        </Pressable>
                    )
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