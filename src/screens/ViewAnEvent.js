import {View, Text} from "react-native";

const ViewItemScreen = ({route}) =>{
 const{id,title,content, date} = route.params;
 
    return(
        <View>
            <Text>ID: {id}</Text>
            <Text>Title: {title}</Text>
            <Text>content: {content}</Text>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
            <Text>Time: {new Date(date).toLocaleTimeString()}</Text>
        </View>
    )
}
export default ViewItemScreen;