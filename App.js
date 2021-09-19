import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View, Keyboard } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Table from './src/table/index'

export default function App() {

  const [inputFA, setInputFA] = useState("");
  const [inputFB, setInputFB] = useState("");
  const [inputFC, setInputFC] = useState("");
  const [inputFD, setInputFD] = useState("");
  
  const [inputFLA, setInputFLA] = useState("");
  const [inputFLB, setInputFLB] = useState("");
  const [inputFLC, setInputFLC] = useState("");
  
  const [inputX, setInputX] = useState("");

  const [tableResult, setTableResult] = useState([]);

  const calcular = ()=>{
    //n0
    let primeira = inputFA * Math.pow(inputX,3);
    let segunda = inputFB * Math.pow(inputX,2);
    let tercerira = + inputFC * inputX;
    let resultFX = primeira + segunda + tercerira + Number(inputFD);
    
    let primeiral = inputFLA * Math.pow(inputX,2);
    let segundal = inputFLB * inputX;
    let resultFXL = primeiral + segundal + Number(inputFLC);

    let xn = inputX - (resultFX/resultFXL); 
    //n++
    let x = inputX;
    
    let i = 0;
    const results = [{xn, resultFX, resultFXL, i, x}];
    let comp = 0;
    
    do{
      primeira = inputFA * Math.pow(results[i].xn,3);
      segunda = inputFB * Math.pow(results[i].xn,2);
      tercerira = + inputFC * results[i].xn;
      resultFX = primeira + segunda + tercerira + Number(inputFD);
      
      primeiral = inputFLA * Math.pow(results[i].xn,2);
      segundal = inputFLB * results[i].xn;
      resultFXL = primeiral + segundal + Number(inputFLC);
      
      xn = results[i].xn - (resultFX/resultFXL);
      x=results[i].xn;
      i++;
      results.push({xn, resultFX, resultFXL, i, x});
      
      if(inputX > 0){
        comp = (results[i-1].xn)-xn;
      }
      else{
        comp = xn-(results[i-1].xn);
      }
      console.log(xn,(results[i-1].xn))


    }while( comp > 0.000001)
    setTableResult(results);
    console.log(results)
    
    Keyboard.dismiss()
  }

  const zerar = () => {
    setInputFA("")
    setInputFB("")
    setInputFC("")
    setInputFD("")
    setInputFLA("")
    setInputFLB("")
    setInputFLC("")
    setInputX("")
    setTableResult([])
  }

  return (
    <View style={styles.container}>
      
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.font}>X: </Text>
        <TextInput 
          style={styles.input} 
          keyboardType='numeric' 
          placeholder="?" 
          placeholderTextColor="#222" 
          textAlign="center"
          onChangeText={(text)=>setInputX(text)}
          value={inputX}
          />
      </View>

      <View style={{flexDirection: 'row', paddingTop:20, flexWrap:'wrap'}}>
        <Text style={styles.font}>F(x)= </Text>
        <TextInput style={styles.input} 
          placeholder="A" 
          placeholderTextColor="#222" 
          textAlign="center" 
          keyboardType='numeric'
          value={inputFA}
          onChangeText={(text)=>setInputFA(text)}
          />
        <Text style={styles.font}> x³ + </Text>
        <TextInput style={styles.input} 
          keyboardType='numeric' 
          placeholder="B" 
          placeholderTextColor="#222" 
          textAlign="center"
          value={inputFB}
          onChangeText={(text)=>setInputFB(text)}
          />
        <Text style={styles.font}> x² + </Text>
        <TextInput style={styles.input} 
          keyboardType='numeric' 
          placeholder="C" 
          placeholderTextColor="#222" 
          textAlign="center"
          value={inputFC}
          onChangeText={(text)=>setInputFC(text)}
          />
        <Text style={styles.font}> x + </Text>
        <TextInput style={styles.input} 
          keyboardType='numeric' 
          placeholder="D" 
          placeholderTextColor="#222" 
          textAlign="center"
          value={inputFD}
          onChangeText={(text)=>setInputFD(text)}
          />
      </View>
      <View style={{flexDirection: 'row', paddingVertical:30}}>
        <Text style={styles.font}>F'(x)= </Text>
        <TextInput style={styles.input} 
          keyboardType='numeric' 
          placeholder="A" 
          placeholderTextColor="#222" 
          textAlign="center"
          value={inputFLA}
          onChangeText={(text)=>setInputFLA(text)}/>
        <Text style={styles.font}> x² + </Text>
        <TextInput style={styles.input} 
          keyboardType='numeric' 
          placeholder="B" 
          placeholderTextColor="#222" 
          textAlign="center"
          value={inputFLB}
          onChangeText={(text)=>setInputFLB(text)}
          />
        <Text style={styles.font}> x + </Text>
        <TextInput style={styles.input} 
          keyboardType='numeric' 
          placeholder="C" 
          placeholderTextColor="#222" 
          textAlign="center"
          value={inputFLC}
          onChangeText={(text)=>setInputFLC(text)}
        />
      </View>

      <View style={{flexDirection:'row',width: "50%", justifyContent:'space-evenly'}}>
        <Button title="zerar" onPress={()=>zerar()} color="#f27e7c"/>
        <Button title="calcular" onPress={()=>calcular()}/>
      </View>

      {
        tableResult == false
        ?
        <View/>
        :
        <View style={{width:'100%', marginLeft:30, maxHeight: '55%', marginTop: 20}}>
          <FlatList 
          data={tableResult}
          renderItem={({item})=><Table {...item} key={Math.random()} results={item}/>}
          keyExtractor={(item)=>`${item.i}`}
          />
        </View>
      }
     
      <StatusBar style="auto" />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    minWidth: 40,
    width:'auto',
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  font:{
    fontSize: 25,
  }
});
