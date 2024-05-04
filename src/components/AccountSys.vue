<script setup>
    import {ref} from 'vue'
    import * as bip39 from 'bip39'

    //创建助记词
    const mnemonic = bip39.generateMnemonic();
    console.log(mnemonic)
</script>

<template>
    <div>
      <h1>助记词</h1>
      <p>{{mnemonic}}</p>
    </div>
</template>

<style lan="less">
    
</style>
