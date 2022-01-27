
import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity, FlatList, RefreshControl  } from 'react-native';

import Felvitel from './Felvitelkomm';



export default class Komment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nev: '',
        komment:"",

        dataSource:[]

    };
  }
  
  componentDidMount(){
    return fetch('http://localhost:8080/tema')
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




  ujratoltes=()=>{
    //alert(szam)
    this.setState({})

    return fetch('http://localhost:8080/tema')
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

  
  


 
  render() {
    return (

        <View style={{border:'black',borderStyle:'dashed', marginTop:22}}>

        <Felvitel tema_bevitel={this.state.tema}  frissit={()=>this.ujratoltes()}  />

<View style={{backgroundColor:'lightgreen',borderTopColor:'black', marginTop:12}}>
        <Text style={{fontSize:30, textAlign:'center', marginTop:25}}>Megjegyzések</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{backgroundColor:'lightblue', borderRadius:15, margin:10}}>

          <Text style={{color:"#black",fontSize:18,marginTop:5, marginLeft:10}}>
          {item.uzenet_nev} </Text>
          <Text style={{color:"black",fontSize:20, marginLeft:10}}>
          {item.uzenet_szoveg} </Text>
          <Text style={{color:"black",fontSize:12, marginRight:10, marginBottom:5, textAlign:'right'}}>
          {item.uzenet_datum} </Text>
          
     
         
   
          </View>
           
        
        }
    
          keyExtractor={({uzenet_id}, index) => uzenet_id}
        />
         </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    gombSzoveg:{
            textAlign:'center',
            color:'white',
            marginTop:'auto',
            marginBottom:'auto',
            fontSize:16
    },
    gomb:{
            height:25,
            backgroundColor:'blue',
            width:'25%',
            borderRadius:10
    },
});