<template>
  <h3>{{string}}</h3>
  <button type="success">按钮</button>
</template>

<script setup >
  import {ref} from 'vue';
  import Web3 from 'web3';

  const string = ref('hello web3')

  //实例化web3
  var web3 = new Web3(Web3.givenProvider || "wss://sepolia.infura.io/ws/v3/81bf523e4ea54e8eb8d9681d909005b1");
  console.log(web3)

  
</script>

<styl lang="less">
  h3{
    color: red;
  }
</styl>
