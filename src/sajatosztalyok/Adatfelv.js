import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity } from 'react-native-web';



export default class Felvitelkomm extends Component {
  constructor(props) {
    super(props);
    this.state = {

        kerdes: '',
        kep:"", 
        valasz1:"", 
        valasz2:"", 
        valasz3:"", 
        valasz4:"", 
        helyes:"", 
        helyesid:""

        
        
    };
  }

felvitel=async ()=>{
    //alert("megnyomva a gomb")

    if (this.state.kerdes=="" || this.state.kep==""|| this.state.valasz1==""|| this.state.valasz2==""|| this.state.valasz3==""|| this.state.valasz4==""|| this.state.helyes==""|| this.state.helyesid=="")
    {
      alert("toltsd ki!!")
      return
    }
    let bemenet={
      bevitel1:this.state.kerdes,
      bevitel2:this.state.kep,
      bevitel3:this.state.valasz1,
      bevitel4:this.state.valasz2,
      bevitel5:this.state.valasz3,
      bevitel6:this.state.valasz4,
      bevitel7:this.state.helyes,
      bevitel8:this.state.helyesid
      
    }

    fetch('http://localhost:8080/adatfelvitel',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
   
    )

    

    .then((response) => response.text())
    .then((szoveg) => {

    alert(szoveg)
     
    this.setState({kerdes:""})
    this.setState({kep:""})
    this.setState({valasz1:""})
    this.setState({valasz2:""})
    this.setState({valasz3:""})
    this.setState({valasz4:""})
    this.setState({helyes:""})
    this.setState({helyesid:""})
    

})
    
}


  render() {
    return (
      <View style = {{}}>
        <View style={{padding: 10, backgroundColor:'#dddddd'}}>

        

            <Text style={{color:'black'}}>
                Kérdés
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder="Add meg a kérdést:"
            onChangeText={(kerdes) => this.setState({kerdes})}
            value={this.state.kerdes}
          />
  
          <Text style={{color:'black'}}>
                kép
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder=" Add meg a kép nevét:"
            onChangeText={(kep) => this.setState({kep})}
            value={this.state.kep}
          />
          <Text style={{color:'black'}}>
                Válasz 1
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder=" Add meg a válasz 1-et:"
            onChangeText={(valasz1) => this.setState({valasz1})}
            value={this.state.valasz1}
          />
          <Text style={{color:'black'}}>
                Válasz 2
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder=" Add meg a válasz 2-őt:"
            onChangeText={(valasz2) => this.setState({valasz2})}
            value={this.state.valasz2}
          />
          <Text style={{color:'black'}}>
                Válasz 3
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder=" Add meg a válasz 3-at:"
            onChangeText={(valasz3) => this.setState({valasz3})}
            value={this.state.valasz3}
          />
          <Text style={{color:'black'}}>
                Válasz 4
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder=" Add meg a válasz 4-et:"
            onChangeText={(valasz4) => this.setState({valasz4})}
            value={this.state.valasz4}
          />
          <Text style={{color:'black'}}>
                Helyes
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder=" Add meg a helyes választ:"
            onChangeText={(helyes) => this.setState({helyes})}
            value={this.state.helyes}
          />
          <Text style={{color:'black'}}>
                Helyes id
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder=" Add meg a helyes válasz számát:"
            onChangeText={(helyesid) => this.setState({helyesid})}
            value={this.state.helyesid}
          />
           <TouchableOpacity
            onPress={async ()=>this.felvitel()}>
            <View style={styles.gomb}>
              <Text style={styles.gombSzoveg}>Küldés</Text>
            </View>
          </TouchableOpacity> 
  
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
            fontSize:25
    },
    gomb:{
            height:45,
            backgroundColor:'blue',
            width:'45%',
            alignSelf:'center',
            borderRadius:10
    },
});