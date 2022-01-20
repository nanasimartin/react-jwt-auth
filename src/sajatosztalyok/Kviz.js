import React, { Component } from 'react';
import { Text, TextInput, View, Image,  StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';




export default class Jatek extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
      dataSource:[], 
      pressed:false,

      lenyomva:[],

      nev:''

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
      
      let m=this.state.lenyomva;
        for (let elem of this.state.dataSource)
            m[elem.kepek_id]=0
        this.setState({lenyomva:m})

    })
    .catch((error) =>{
      console.error(error);
    });


   
  


    
}
                                                                                                                                                                                                                                                                               
 kivalaszt=async (szam,valaszszama )=>{
  //alert([szam, valaszszama])
  let m=this.state.lenyomva
  m[szam]=valaszszama
  this.setState({lenyomva:m})

  }

  bekuld=async()=>{
    //alert('asddsa')

    
      
    

     var bemenet={
      beviteltomb:this.state.lenyomva,
      bevitel1:this.state.nev

      
     
    }
    
    fetch('http://localhost:8080/beerkezett', {
    method: "POST",
    body: JSON.stringify(bemenet),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }
  
  )
  .then(x => x.text())
  .then(y => {
  alert(y)
  
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
    <View style={{flex: 1, paddingTop:20, backgroundColor:'lightgreen'}}>
      <View style={{flex: 1, paddingTop:20, backgroundColor:'lightgreen'}}>

      <View style={{marginTop:13, marginBottom:13, borderColor:'Red'}}>
   <TextInput placeholderTextColor="black"
          style={{height: 40,width:'50%',alignItems:'center', alignSelf:'center',backgroundColor:'grey',borderColor:'black',color:"white",borderRadius:10, marginBottom:10,   }}
          placeholder="Add meg a neved:"
          onChangeText={(nev) => this.setState({nev})}
          value={this.state.nev}
          
          />

      <TouchableOpacity 
  style={{backgroundColor:"grey",alignSelf:'center',width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center', }}
  onPress={async()=>this.bekuld()}
  >

    <Text>Elküld</Text>
   
  </TouchableOpacity> 
  </View>
  

    <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => 

      <View>

      <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.kerdesek_kerdes} </Text>
      <Image  source={{uri: 'http://localhost:8080/'+item.kerdesek_kep}} style={{width:245,height:245,marginLeft:"auto",marginRight:"auto", borderRadius:12}} />

      <View style={{flex: 1, flexDirection: 'row', marginLeft:'auto', marginRight:'auto',  }}>
      
        <View style={{width: 50, height: 50,  flex:6, alignItems:'center'}} >

{/*------------------------------------------------------------------------------------------------1*/}
{ this.state.lenyomva[item.kerdesek_id] == 1 ?

        <TouchableOpacity 
        style={{backgroundColor:"orange",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
        onPress={async()=>this.kivalaszt(item.kerdesek_id, 1)}
 >
      
        <Text>{item.kerdesek_valasz1}</Text>
 
      </TouchableOpacity>

      : 
      
      <TouchableOpacity 
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
        onPress={async()=>this.kivalaszt(item.kerdesek_id,1)}
        >

          <Text>{item.kerdesek_valasz1}</Text>

        </TouchableOpacity>  
        
}
        </View>
        
        
        <View style={{width: 50,  height: 50, flex:6, alignItems:'center'}}>

{/*-------------------------------------------------------------------------------------------------2*/}
{ this.state.lenyomva[item.kerdesek_id] == 2 ?

        <TouchableOpacity
        style={{backgroundColor:"orange",width:150,margin:10,borderRadius:10, padding:10,marginTop:'auto', marginBottom:'auto',alignItems:'center'}}
        onPress={async()=>this.kivalaszt(item.kerdesek_id, item.kerdesek_valasz2)}
      >
        <Text>{item.kerdesek_valasz2}</Text>

      </TouchableOpacity>

      :

      <TouchableOpacity 
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
        onPress={async()=>this.kivalaszt(item.kerdesek_id,2)}
        >

          <Text>{item.kerdesek_valasz2}</Text>

        </TouchableOpacity>  
        
}
       </View>

          </View>
         
          <View style={{flex: 1, flexDirection: 'row', marginLeft:'auto', marginRight:'auto',}}>

        <View style={{width: 50, height: 50,  flex:6, alignItems:'center'}} >

{/*------------------------------------------------------------------------------------------------3*/}
{ this.state.lenyomva[item.kerdesek_id] == 3 ?
        <TouchableOpacity
        style={{backgroundColor:"orange",width:150,margin:10,borderRadius:10, padding:10,marginTop:'auto', marginBottom:'auto',alignItems:'center'}}
        onPress={async()=>this.kivalaszt(item.kerdesek_valasz3)}
      >
        <Text>{item.kerdesek_valasz3}</Text>

      </TouchableOpacity>

:

<TouchableOpacity 
  style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
  onPress={async()=>this.kivalaszt(item.kerdesek_id,3)}
  >

    <Text>{item.kerdesek_valasz3}</Text>

  </TouchableOpacity>  
  
}
          </View>
          <View style={{width: 50, height: 50, flex:6, alignItems:'center'}} >

{/*-----------------------------------------------------------------------------------------------4*/}
{ this.state.lenyomva[item.kerdesek_id] == 4 ?

          <TouchableOpacity
        style={{backgroundColor:"orange",width:150,margin:10,borderRadius:10, padding:10,marginTop:'auto', marginBottom:'auto',alignItems:'center'}}
        onPress={async()=>this.kivalaszt(item.kerdesek_valasz4)}
      >
        <Text>{item.kerdesek_valasz4}</Text>

      </TouchableOpacity>

:

<TouchableOpacity 
  style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
  onPress={async()=>this.kivalaszt(item.kerdesek_id,4)}
  >

    <Text>{item.kerdesek_valasz4}</Text>

  </TouchableOpacity>  

}

          </View>
   
      </View>
   
      </View>
      
    }
 
      keyExtractor={({kerdesek_id}, index) => kerdesek_id}
    />
    
    </View>

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