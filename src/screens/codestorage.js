
const addNewItem=(title,content) =>
{
    setItems([
        ...items,
        {
            id: Math.floor(Math.random()*99999),
            title:title,
            content:content,
            data: new Date()
        }
    ]);
}

useEffect(()=>{
    navigation.setOptions({
        headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Add',{callback:addNewItem})}>
         <MaterialIcons name="add" size={24} color="black"/>
         </Pressable> )
    })
},[items]);

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