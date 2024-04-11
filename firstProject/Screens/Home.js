import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, Button, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { useState } from "react";
export default function App(props) {
  const [hun, setHun] = useState([
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun1',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
    'hun3fekjwgfjke',
  ])
  console.log(props);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <FlatList data={hun} renderItem={({item})=>(
        <Text style = {style.list}>{item}</Text>
      )}/>
      {/* <ScrollView>
      {
        hun.map(item=>(
          <Text style={style.list}>{item}</Text>
        ))
      }
      </ScrollView> */}
      <Text>Home</Text>
      <Button
        title="Go to profile"
        onPress={() => props.navigation.navigate("Profile")}
      />
    </View>
  );
}


style = StyleSheet.create({
  list:{
    backgroundColor:'blue',
    width:300,
    marginTop: 10,
    padding: 20,
    color:'white',
  }
})