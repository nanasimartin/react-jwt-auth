import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native-web';

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

  fetch("http://localhost:8080/uzenettorles", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

{alert(); this.lekerdezes()}

  }


  componentDidMount(){
    this.lekerdezes()


  }

lekerdezes=()=>{
  fetch('http://localhost:8080/uzenet')
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
      <View style={{flex: 1, paddingTop:20,}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{flexDirection:'row',flex:1, marginBottom:9, }} >
          <Text style={{color:"black",backgroundColor:"lightblue",borderRadius:12,fontSize:22,textAlign:"center",marginTop:15,marginBottom:5, flex:6,}}   >{item.uzenet_nev}: {item.uzenet_szoveg} </Text>
          
           

          <TouchableOpacity
        style={styles.kekgomb}
        onPress={async ()=>this.szavazat(item.uzenet_id)}
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15,flex:6, alignItems:'center,', marginTop:'auto', marginBottom:'auto'}}  >Törlés</Text>
      </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({uzenet_id}, index) => uzenet_id}
        />
        
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius:10,
    padding: 10,
    width:220,
    marginLeft:11,
    marginRight:"auto",
    
    
    
  }
});