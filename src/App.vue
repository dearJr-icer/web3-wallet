<template>
  <h3>{{string}}</h3>
  <button type="success">按钮</button>
</template>

<script setup >
  import {ref} from 'vue';

  const string = ref('hello web3')
</script>

<styl lang="less">
  h3{
    color: red;
  }
</styl>
