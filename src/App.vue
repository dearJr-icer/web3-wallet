<template>
  <h3>{{string}}</h3>
  <button type="success">按钮</button>

  <Web3Api></Web3Api>
</template>

<script setup >
  import {ref} from 'vue';
  //import Web3 from 'web3';
  import Web3Api from './components/Web3Api.vue'

  const string = ref('hello web3')
</script>

<styl lang="less">
  h3{
    color: red;
  }
</styl>
