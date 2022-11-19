import{View,Text,Button} from "react-native";

const Home =({navigation})=>{
    return (
        <View>
            <Text> This is Home Page</Text>
          <Button
            title="Events Page"
            onPress={
                () => navigation.navigate('Events')}
          />

        </View>
    )

}

export default Home;