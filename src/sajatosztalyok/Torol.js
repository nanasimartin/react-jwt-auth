import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  szavazat=(szam)=>{
    //alert(szam)
    var bemenet={
      bevitel1:szam
    }

  fetch("http://localhost:8080/torles", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }


  componentDidMount(){
    return fetch('http://localhost:8080/kerdesek')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{flexDirection:'column',flex:1, marginBottom:9 }} >
          <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5, flex:6}}   >{item.kerdesek_kerdes} </Text>
          <Image  source={{uri: 'http://localhost:8080/'+item.kerdesek_kep}} style={{flex:6,width:300,height:300,}} />  

          <TouchableOpacity
        style={styles.kekgomb}
        onPress={async ()=>this.szavazat(item.kerdesek_id)}
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15,flex:6,}}  >torlom</Text>
      </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({kerdesek_id}, index) => kerdesek_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});