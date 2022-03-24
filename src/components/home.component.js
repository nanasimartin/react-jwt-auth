import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native-web';
import Iframe from 'react-iframe';

export default class Fooldal extends React.Component {

  constructor(props){
    super(props);
    this.state ={
       isLoading: true,
       dataSource:[]
    }
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

    

    return(
      
      <View style={{}}>
       <Text style={{textAlign:'center',
            color:'black',
            
            marginTop:'auto',
            marginBottom:'auto',
          
            fontSize:25,
            
            }}>Üdvözöllek az oldalamon!</Text>
          <Iframe
         
          title='Crazy football skills and goals 2022'
          url="http://www.youtube.com/embed/a5G3E1Z7xRU"
          width="auto"
          height="486px"
          
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          
         />
         
  
        
      </View>
    );
  }
}
