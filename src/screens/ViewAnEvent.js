import {View, Text,Button} from "react-native";

const ViewItemScreen = ({route,navigation}) =>{
 const{id,title,content, date} = route.params;
 
    return(
        <View>
            <Text>ID: {id}</Text>
            <Text>Title: {title}</Text>
            <Text>content: {content}</Text>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
            <Text>Time: {new Date(date).toLocaleTimeString()}</Text>
            <Button title="Edit Item" onPress={()=> {
                navigation.navigate('Edit',{ id:id});
            }} />
        </View>
    )
}
export default ViewItemScreen;