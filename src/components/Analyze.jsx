import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Analyze = () => {


  const [to, newTo] = useState("");
  const [status, statusUpdate] = useState("");
  const [blockNumber, newBlockNumber] = useState("");
  const [time, newTime] = useState("");
  const [from, newFrom] = useState("");
  const [value, newValue] = useState("");
  const [fee, newFee] = useState("");
  const [gas, newGas] = useState("");

  const { hash } = useParams();
  console.log(hash)
  const API_KEY = import.meta.env.VITE_ETHERSCAN_API_KEY;
  useEffect(() => {
    const fetchTxData = async () => {
      
      if (!hash) return;
      try {
        statusUpdate("Success");
        const txHash = await fetch(`https://api.etherscan.io/v2/api?chainid=1&module=proxy&action=eth_getTransactionByHash&txhash=${hash}&apikey=${API_KEY}`)
        const txResult = await txHash.json();
        
        newTo(txResult.result.to);
        newBlockNumber(txResult.result.blockNumber);
        const temp = parseInt(txResult.result.blockTimestamp, 16);
        const temp2 = new Date(temp * 1000);
        newTime(temp2.toLocaleString());
        newFrom(txResult.result.from);
        newValue(parseInt(txResult.result.value, 16));
        newGas(parseInt(txResult.result.gasPrice));
        const gasUsed = parseInt(txResult.result.gas, 16)
        newFee(gasUsed * gas);
        console.log(fee);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTxData();
  }, [hash]);




  return (

    <div>

      <div className="tx-container">
        <div className="tx-box">
          <div className="tx-header">
            <div className="tx-title ">TRANSACTION DETAILS</div>

          </div>

          <div className="tx-body">
            <div className="tx-row">
              <span className="label">Transaction Hash: {hash}</span>
            </div>

            <div className="tx-row">
              <p className="label ">Status: </p>
              <p className='status success'>{status}</p>
            </div>

            <div className="tx-row">
              <span className="label">Block:</span>
              <a className="value">{parseInt(blockNumber, 16) || null}</a>
            </div>

            <div className="tx-row">
              <span className="label">Date:</span>
              <span className="value">{time}</span>
            </div>

            <div className="divider" />

            <div className="tx-row">
              <span className="label">From:</span>
              <span className="link">{from}</span>
            </div>

            <div className="tx-row">
              <span className="label">To:</span>
              <span className="link">{to}</span>
            </div>

            <div className="tx-row">
              <span className="label">Value:</span>
              <span className="value">{(value / 1e18).toFixed(9) || null} ETH</span>
            </div>

            <div className="tx-row">
              <span className="label">Transaction Fee:</span>
              <span className="value">{fee / 1e9 || null} GWEI</span>
            </div>

            <div className="tx-row">
              <span className="label">Gas Price:</span>
              <span className="value">{(gas / 1e9).toFixed(6) || null} GWEI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Analyze
