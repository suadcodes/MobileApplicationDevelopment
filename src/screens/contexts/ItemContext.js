import React, { createContext, useReducer,useEffect } from 'react';
import { actionTypes } from '../../helpers/actionTypes';
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY ="my_super_secret_key";
const ItemContext = createContext();
const initialstate = [
    ];
const reducer = (state, action) => {
    switch(action.type) {
      case actionTypes.create:
                return [
                    ...state,
                    {
                        id: Math.floor(Math.random()*99999),
                        competition: action.payload.competition,
                        rink2: action.payload.rink2,
                        teamOne: action.payload.teamOne,
                        teamTwo: action.payload.teamTwo,

                        t1player1: action.payload.t1player1,
                        t2player1: action.payload.t2player1,

                        t1player2: action.payload.t1player2,
                        t2player2: action.payload.t2player2,

                        t1player3: action.payload.t1player3,
                        t2player3: action.payload.t2player3,

                        t1player4: action.payload.t1player4,
                        t2player4: action.payload.t2player4,
                        date: new Date(),
                    }
                     ];
            case actionTypes.update:
                    return state.map((e) => {
                            if(e.id === action.payload.id) {
                                return action.payload;
                            }else{
                                return e;
                            }
                        });
            case actionTypes.delete:
                    return state.filter((e)=> e.id !== action.payload.id);            
             
            case actionTypes.save:
                try{
                    AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(state));
                }
                catch(ex){
                   console.log(ex);

                }  finally {
                    return state;
                }      

           case actionTypes.load:
           return [
             ...state,
             {
                competition: action.payload.competition,
                rink2: action.payload.rink2,
                teamOne: action.payload.teamOne,
                teamTwo: action.payload.teamTwo,
                
                t1player1: action.payload.t1player1,
                t2player1: action.payload.t2player1,

                t1player2: action.payload.t1player2,
                t2player2: action.payload.t2player2,

                t1player3: action.payload.t1player3,
                t2player3: action.payload.t2player3,

                t1player4: action.payload.t1player4,
                t2player4: action.payload.t2player4,

                date: action.payload.date,
             }
           ]
        default:
        return state;
            
    }
    };   

export const ItemProvider =({children})=> {
    const [state,dispatch] =useReducer(reducer,initialstate);

    useEffect(() =>{
     const loadStorage = async () => {
        const storage = await AsyncStorage.getItem(STORAGE_KEY);
        if(storage !== null && state.length === 0){
            initialstate =JSON.parse(storage);
            initialstate.forEach(item =>{
                dispatch({type: actionTypes.load, payload:item})
            });
        }
     }
     loadStorage();
    },[STORAGE_KEY]
    )

   const AddItem=(competition,rink2,teamOne,teamTwo,t1player1,t1player2,t1player3,t1player4,
    t2player1,t2player2,t2player3,t2player4,callback) => {
        dispatch({type:actionTypes.create, 
            payload:{competition,rink2,teamOne,teamTwo,t1player1,t1player2,t1player3,t1player4,
                t2player1,t2player2,t2player3,t2player4}
        });
        dispatch({type:actionTypes.save});
        if(callback){
            callback();
        }
   };

   const deleteItem = (id,callback) =>{
    dispatch({type:actionTypes.delete,
        payload:{id:id}});
        dispatch({type:actionTypes.save});

        if(callback){
            callback();

   }
};
   
const updateItem = (id,competition,date,rink2,teamOne,teamTwo,t1player1,t1player2,t1player3,t1player4,
    t2player1,t2player2,t2player3,t2player4,callback) =>{
    dispatch({type:actionTypes.update,
        payload:{id,competition,date,rink2,teamOne,teamTwo,t1player1,t1player2,t1player3,t1player4,
            t2player1,t2player2,t2player3,t2player4}
       
    });
        dispatch({type:actionTypes.save});
        if(callback){
            callback();

   }
};

    return(
        <ItemContext.Provider
         value ={{
            state:state,
            create: AddItem,
            remove :deleteItem,
            update:updateItem,
            }}
            >
            {children}
        </ItemContext.Provider>
    );
};


export default ItemContext;