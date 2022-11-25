import{View,Text,Button,StyleSheet} from "react-native";

const Home =({navigation})=>{
    return (
      <View>
      <View style={styles2.tablestyle}>
      <Text style={styles2.textLabel2}>Welcome to Gordon's 18 Club </Text>
      <Text style={styles2.textLabel2}>Enjoy your play time! </Text>
      </View>
      <View style={styles2.button2}>
 
    <Button 
    title="Create Event"
    onPress={
      () => navigation.navigate('CreateEvent')}
    />
    <Button 
    title="View Events"
    onPress={
      () => navigation.navigate('ViewAllEvents')}
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
      fontWeight: "bold",

   },
  row: {
      margin:15,
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
      fontWeight: "normal",
      paddingLeft: 15,
      marginTop:5,
      paddingRight:15,
  },
  textLabel2: {
      fontSize: 20,
      fontWeight: "bold",
      paddingLeft: 15,
      marginTop:5,
      paddingRight:10,
      alignItems: "center",
  },
});

export default Home;