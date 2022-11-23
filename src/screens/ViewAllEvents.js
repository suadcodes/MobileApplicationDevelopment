import{View,Text,StyleSheet,FlatList,Pressable} from "react-native";
import {useEffect, useReducer } from 'react';
import{MaterialIcons} from '@expo/vector-icons'


const reducer = (state, action) => {
    switch(action.type) {
        case 'Create':
            return [
                ...state,
                {
                    id: Math.floor(Math.random()*99999),
                    title:action.payload.title,
                    content:action.payload.content,
                    date: new Date()
                }
                 ];
        case 'Update':
                return state.map((e) => {
                        if(e.id === action.payload.id) {
                            return action.payload;
                        }else{
                            return e;
                        }
                    });
        case 'Delete':
                return state.filter((e)=> e.id !== action.payload.id);            
                        
                 default:
                    return state;
}
};

const ViewAllEvents = ({navigation}) => {
    const[state, dispatch]= useReducer(reducer,dummyData);

    useEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <>
                <Pressable onPress={() => navigation.navigate('CreateEvent',{
                    callback:(payload) => {
                        dispatch({type: 'Create',payload:payload})
                    }
                    })
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
                            </View>
                        </Pressable>
                    )
                }}
            />
        </View>

    );

};

const dummyData = [
{
    id: -1,
    title:"This is my first item",
    content : "first id innit",
    date :new Date()
},
{
    id: -2,
    title:"This is my 2nd item",
    content : "2nd id innit",
    date :new Date()
}
]



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