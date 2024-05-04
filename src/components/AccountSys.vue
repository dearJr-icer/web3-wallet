<script setup>
    import {ref} from 'vue'
    import * as bip39 from 'bip39'
    import ethWallet, {hdkey} from 'ethereumjs-wallet'
    import Web3 from 'web3'



    //创建助记词
    /* const mnemonic = bip39.generateMnemonic();
    console.log(mnemonic) */
    const mnemonic = ref('tip uncover virus kick ridge bachelor buzz uniform shaft castle gown blossom')
    const address = ref(0)
    const priviteKey = ref(0)

    //根据助记词生成密钥对keypair
    const genMnemonic = async () =>{
        const seed =  await bip39.mnemonicToSeed(mnemonic.value)
        const hdwallet = hdkey.fromMasterSeed(seed)
        // m/purpse'/coin_type'/account'/change/address_index
        const keypair = hdwallet.derivePath("m/44'/60'/0'/0/0")
        //获取私钥
        const wallet = keypair.getWallet();
        //获取钱包地址
        const lowerCaseAddress = wallet.getAddressString()
        const checkAddress = wallet.getChecksumAddressString()
        //获取私钥
        const prikey = wallet.getPrivateKey().toString('hex')
        address.value = lowerCaseAddress
        priviteKey.value = prikey

        //导出keystore
        var web3 = new Web3(Web3.givenProvider || "wss://sepolia.infura.io/ws/v3/81bf523e4ea54e8eb8d9681d909005b1");
        //方式一
        const keyStore = await web3.eth.accounts.encrypt(`0x${prikey}`,'1111') //参数是  私钥，密码
        console.log(keyStore)
        //方式二 
        const keyStore2 = await wallet.toV3('1111');
        console.log(keyStore2)

        //通过keystore获取私钥
        //方式一
        const result = await web3.eth.accounts.decrypt(keyStore, '1111');
        console.log(result)
        //方式二
        const result2 = await ethWallet.fromV3(keyStore2,'1111')
        console.log(result2)
        const pKey = result2.getPrivateKey().toString('hex')
        console.log(pKey)

        const prikey2 = Buffer(prikey,'hex')
        const wallet2 = ethWallet.fromPrivateKey(prikey2)
        const lowerCaseAddress2 = wallet2.getAddressString()
        console.log(lowerCaseAddress)


    }

    genMnemonic()
</script>

<template>
    <div>
      <h1>助记词</h1>
      <p>{{mnemonic}}</p>
      <p>路径：m/44'/60'/0'/0/0</p>
      <p>地址：{{address}}</p>
      <p>秘钥：{{priviteKey}}</p>
    </div>
</template>

<style lan="less">
    
</style>
