 <script setup>
    import {ref} from 'vue'
    import Web3 from 'web3';
    //import Transaction from '@ethereumjs/tx';
    var Tx = require('ethereumjs-tx');
    console.log(Tx)

    //实例化web3
    var web3 = new Web3(Web3.givenProvider || "wss://sepolia.infura.io/ws/v3/81bf523e4ea54e8eb8d9681d909005b1");
    console.log(web3)

    //创建账户---每执行一次创建一个新账号 
    //const account = web3.eth.accounts.create('123') //传入密码
    //console.log(account)

    const address = ref('0x9da9fb06bB71ad6E08ef0376207c0f0Aa796b6C7')
    const priviteKey = ref('0xa83487148948a17b00dd41b5ea3369929665f88d23f79099e0fae5212ed7a60c')

    //获取余额----返回结果是wei 可通过单位转换 转换为eth
    const mount = ref(-1)
    web3.eth.getBalance(address.value).then(res=>{
        console.log(res)
        mount.value = res>0 ? web3.utils.fromWei(res,'ether') : 0
    })
    console.log(mount)

    //单位转换
    /* const weiNum = web3.utils.toWei(3, 'ether');
    console.log(weiNum)
    const ethNum = web3.utils.fromWei('1000000000000','ether')
    console.log(ethNum) */

    const send = async () => {
      //账户交易次数
      const nonce = await web3.eth.getTransactionCount(address.value);
      //预计gas费用
      const gasPrice = await web3.eth.getGasPrice();
      //转账金额
      const value = web3.utils.toWei('0.005','ether');
      //构建转账参数
      const rawTx = {
        from: address.value,
        to :'0x191FeB1B11544d8C2ec2335b1BDd0EB754620354',
        nonce:`0x${nonce.toString()}`,
        gasPrice:`0x${gasPrice.toString()}`,
        value:`0x${value}`,
        data:"0x0000",
      };
      console.log('rawTx',rawTx)

      //转换私钥
      console.log(priviteKey.value.slice(2))
      const pKey = Buffer.from(priviteKey.value.slice(2), 'hex');
      console.log('pKey',pKey)

      //gas估算
      const gas = await web3.eth.estimateGas(rawTx);
      console.log('gas',gas)
      rawTx.gas = gas;

      //生产序列化tx
      const tx = new Tx(rawTx);
      console.log('tx',tx)

      tx.sign(pKey);
      const serializedTx = `0x${tx.serialize().toString('hex')}`;
      //开始转账
      const trans = web3.eth.sendSignedTransaction(serializedTx);
      trans.on('transactionHash',(txid)=>{
        console.log('交易id',txid)
        console.log(`https://sepolia.etherscan.io/tx/${txid}`)
      })
      trans.on('receipt', res=>{
        console.log('节点确认1',res)
      })
      trans.on('confirmation',res=>{
        console.log('节点确认n',res)
      })


    }



 </script>
 
 <template>
   <div>
     <h1>账户信息</h1>
     <p>地址：{{address}}</p>
     <p>私钥：{{priviteKey}}</p>
     <p>余额：{{mount}}</p>
     <h1>转账</h1>
     <button @click="send">转账</button>
   </div>
 </template>
 
 <style lan="less">
   
 </style>
 