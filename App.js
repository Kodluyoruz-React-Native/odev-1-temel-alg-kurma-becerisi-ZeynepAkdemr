import React from 'react';
import { View, Text } from 'react-native';

class TemelAlgoritma extends React.Component{
  render(){
    const boyut=10;
    const dizi=[];

    for(let i=0;i<=boyut;i++){
      dizi[i]='';

      for(let j=0;j<=dizi-i;j++){
        dizi[i]+='';
      }
      for(let j=0;j<=2*i;j++){
        dizi[i]+='*';
      }
    }
    dizi.forEach(r=>console.log(r));

    const inverseArray=dizi.reverse();
    inverseArray.forEach(r => console.log(r));

    return <Text>Zeynep</Text>

    
  }
}
export default TemelAlgoritma;