 <script setup>
    //import {ref} from 'vue'
    import Web3 from 'web3';

    //实例化web3
    var web3 = new Web3(Web3.givenProvider || "wss://sepolia.infura.io/ws/v3/81bf523e4ea54e8eb8d9681d909005b1");
    console.log(web3)

    //创建账户
    const account = web3.eth.accounts.create('123') //传入密码
    console.log(account)




 </script>
 
 <template>
   <div>
     api
   </div>
 </template>
 
 <style lan="less">
   
 </style>
 