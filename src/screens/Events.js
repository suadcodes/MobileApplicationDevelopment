import{View,Text,Button} from "react-native";

const Events =({navigation})=>{
    return (
        <View>
            <Text>This is Events Page</Text>
          <Button 
          title="Create Event"
          onPress={
            () => navigation.navigate('CreateEvent')}
          />
          
        </View>
    )

}

export default Events;