import {View, Text,Button,StyleSheet} from "react-native";

const ViewItemScreen = ({route,navigation}) =>{
 const{id,competition,date,rink2,teamOne,teamTwo,t1player1,t1player2,t1player3,t1player4,
    t2player1,t2player2,t2player3,t2player4,} = route.params;
 
    return(
        <View style={styles2.tablestyle}>
            <View style={styles2.row}>

            <Text style={styles2.textLabel2}>ID:{id}</Text>
            <Text style={styles2.textLabel2}>Date: {new Date(date).toLocaleDateString()}</Text>
            </View>

            <View style={styles2.row}>

            <Text style={styles2.textLabel2}>Competition: {competition}</Text>
            <Text style={styles2.textLabel2}>Rink: {rink2}</Text>
            </View>
            

            <View style={styles2.row}>
            <Text style={styles2.textLabel2}>Team one: {teamOne}</Text>
            <Text style={styles2.textLabel2}>Team two: {teamTwo}</Text>
            </View>

            <View style={styles2.row}>
            <Text style={styles2.textLabel}>Player one: {t1player1}</Text>
            <Text style={styles2.textLabel}>Player one: {t2player1}</Text>
            </View>

            <View style={styles2.row}>
            <Text style={styles2.textLabel}>Player two: {t1player2}</Text>
            <Text style={styles2.textLabel}>Player two: {t2player2}</Text>
            </View>

            <View style={styles2.row}>
            <Text style={styles2.textLabel}>Player three: {t1player3}</Text>
            <Text style={styles2.textLabel}>Player three: {t2player3}</Text>
            </View>

            <View style={styles2.row}>
            <Text style={styles2.textLabel}>Player four: {t1player4}</Text>
            <Text style={styles2.textLabel}>Player four: {t2player4}</Text>
            </View>

        <View style={styles2.button2}>

            <Button title="Edit Item" onPress={()=> {
                navigation.navigate('Edit',{ id:id});
            }} />
        </View>

        </View>
    );
};
const styles2 =StyleSheet.create({
    tablestyle:{
       marginTop:20,
    },
    button2:{
        marginTop:50,
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
    },
});

export default ViewItemScreen;