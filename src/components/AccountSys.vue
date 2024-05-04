<script setup>
    import {ref} from 'vue'
    import * as bip39 from 'bip39'
    import {hdkey} from 'ethereumjs-wallet'

    //创建助记词
    /* const mnemonic = bip39.generateMnemonic();
    console.log(mnemonic) */
    const mnemonic = ref('tip uncover virus kick ridge bachelor buzz uniform shaft castle gown blossom')

    //根据助记词生成密钥对keypair
    const genMnemonic = async () =>{
        const seed =  await bip39.mnemonicToSeed(mnemonic.value)
        console.log(seed)
        const hdwallet = hdkey.fromMasterSeed(seed)
        // m/purpse'/coin_type'/account'/change/address_index
        const keypair = hdwallet.derivePath("m/44'/60'/0'/0/0")
        console.log(keypair)
    }

    genMnemonic()
</script>

<template>
    <div>
      <h1>助记词</h1>
      <p>{{mnemonic}}</p>
    </div>
</template>

<style lan="less">
    
</style>
