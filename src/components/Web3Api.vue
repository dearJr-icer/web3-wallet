 <script setup>
    import {ref} from 'vue'
    import Web3 from 'web3';

    //实例化web3
    var web3 = new Web3(Web3.givenProvider || "wss://sepolia.infura.io/ws/v3/81bf523e4ea54e8eb8d9681d909005b1");
    console.log(web3)

    //创建账户---每执行一次创建一个新账号 
    //const account = web3.eth.accounts.create('123') //传入密码
    //console.log(account)

    const address = ref('0x0B9B8Ad5e660cd0e3dfE4CEa4CC21163e61CeD90')

    //获取余额
    const mount = ref(0)
    web3.eth.getBalance(address.value).then(res=>{
        console.log(res)
        mount.value = res
    })
    console.log(mount)



 </script>
 
 <template>
   <div>
     <h1>账户信息</h1>
     <p>地址：{{address}}</p>
     <p>余额：{{mount}}</p>
   </div>
 </template>
 
 <style lan="less">
   
 </style>
 