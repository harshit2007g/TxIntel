import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const Dashboard = () => {
  const [address, setAddress] = useState("0x28C6c06298d514Db089934071355E5743bf21d60");
  const [balance, setBalance] = useState(null);
  const [txns, setTxns] = useState([]);
  const [price, newPrice] = useState(null);
  const [gasFee, newGasFee] = useState(null);
  const baseUrl = 'https://api.etherscan.io/v2/api'
  const API_KEY = import.meta.env.VITE_ETHERSCAN_API_KEY;

  useEffect(() => {
    const fetchWalletData = async () => {
      if (!address) return;
      try {
        const balRes = await fetch(`${baseUrl}?chainid=1&module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`);
        const balData = await balRes.json();
        setBalance((balData.result / 1e18).toFixed(4));

        const txList = await fetch(`${baseUrl}?chainid=1&module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&page=1&offset=5&apikey=${API_KEY}`);
        const txData = await txList.json();
        setTxns(txData.result || []);
        
        const pc = await fetch(`${baseUrl}?chainid=1&module=stats&action=ethprice&apikey=${API_KEY}`);
        const pr = await pc.json();
        newPrice(pr.result.ethusd);
           
          if (!txData?.result?.length) return;
          let total = 0;
          for (let i = 0; i < txData.result.length; i++) {
            total += (parseInt(txData.result[i].gasPrice) * parseInt(txData.result[i].gasUsed)) / 1e9;
          }
          const avg = total / txData.result.length;
          newGasFee(avg.toFixed(6));
          
      } catch (e) {
        console.log(e);
      }
    };

    fetchWalletData();
  }, []);

  

  return (
    <div className="min-h-screen p-6" style={{ fontFamily: "'DM Sans', sans-serif", background: "#f0f2f8", color: "#1a1d2e" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 4 }}>Overview</p>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1a1d2e" }}>Crypto Dashboard</h1>
        </div>

      </div>

      {/* Stat bg-white rounded-xls */}
      <div className="grid grid-cols-4 gap-4 mb-5">

        {/* Portfolio Value — accent bg-white rounded-xl */}
        <div className="bg-blue-400 rounded-xl p-5">
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.65)", marginBottom: 4 }}>Portfolio Value</p>
          <p style={{ fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 12 }}>${Math.round(balance * price).toLocaleString()}</p>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "5px 10px", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 12 }}>
            <span style={{ color: "#a7f3d0", fontSize: 12, fontWeight: 600 }}>▲ 12.4%</span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>this month</span>
          </div>
          <div className="flex gap-4" style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>

          </div>
        </div>

        {/* 24h Volume */}
        <div className="bg-white rounded-xl p-5">
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 4 }}>24h Volume</p>
          <p style={{ fontSize: 28, fontWeight: 700, color: "#1a1d2e", lineHeight: 1.1, marginBottom: 12 }}>$34,210</p>
          <span style={{ background: "#fee2e2", color: "#dc2626", fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 999, border: "1px solid #fecaca" }}>▼ 3.1%</span>
          <div className="flex gap-4 mt-3" style={{ fontSize: 12, color: "#9ca3af" }}>
            <span>Buy <strong style={{ color: "#16a34a" }}>$22k</strong></span>
            <span>Sell <strong style={{ color: "#dc2626" }}>$12k</strong></span>
          </div>
        </div>

        {/* Gas Tracker */}
        <div className="bg-white rounded-xl p-5">
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 4 }}>Avg Gas Fee</p>
          <p style={{ fontSize: 28, fontWeight: 700, color: "#1a1d2e", lineHeight: 1.1, marginBottom: 12 }}>{Math.round(gasFee).toLocaleString()} <span style={{ fontSize: 16, fontWeight: 500, color: "#6b7280" }}>Gwei</span></p>
          <span style={{ background: "#fef9c3", color: "#b45309", fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 999, border: "1px solid #fde68a" }}>🟡 Normal</span>
          <div className="flex gap-4 mt-3" style={{ fontSize: 12, color: "#9ca3af" }}>

          </div>
        </div>
      </div>

      {/* Chart + Allocation */}
      <div className="grid grid-cols-3 gap-4 mb-5">

        {/* Line Chart */}
        <div className="bg-blue-300 rounded-xl col-span-2 p-5">
          <div className="flex items-center justify-between mb-4">
            <p style={{ fontWeight: 600, color: "#1a1d2e" }}>Price Performance</p>
            <div className="flex items-center gap-4" style={{ fontSize: 20, color: "#6b7280" }}>
              <span className="flex items-center gap-1"><span  style={{ background: "#6366f1" }}></span>ETH</span>
              </div>
          </div>
          <div className="text-3xl text-white">
                $  {price} - (Current price of a single ETH token)
            </div>  
        </div>
        
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <p style={{ fontWeight: 600, color: "#1a1d2e" }}>Recent Transactions</p>
          <button style={{ fontSize: 12, color: "#6366f1", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
            View all →
          </button>
        </div>
        <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #f1f3fb" }}>
              {["Tx Hash", "Type", "Asset", "Amount", "Value", "Time", "Status"].map(h => (
                <th key={h} style={{ textAlign: "left", paddingBottom: 10, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", color: "#9ca3af", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>

            {txns.map((tx) => {
              const isSent = tx.from.toLowerCase() === address.toLowerCase();
              const type = isSent ? "sent" : "received";
              const status = tx.isError === "1" ? "failed" : "success";
              const gasUsed = BigInt(tx.gasUsed);
              const gasPrice = BigInt(tx.gasPrice);
              const eth = Number(gasUsed * gasPrice) / 1e18;

              return (
                <tr key={tx.hash} style={{ borderBottom: "1px solid #f8f7ff" }}>
                  <td style={{ padding: "13px 0", fontFamily: "monospace", fontSize: 12, color: "#6b7280" }}>
                    {tx.hash.slice(0, 12)}....
                  </td>
                  <td className={`type-${type}`} style={{ padding: "13px 8px 13px 0" }}>{type}</td>
                  <td style={{ padding: "13px 8px 13px 0" }}>
                    <span style={{ background: "#f5f3ff", color: "#6366f1", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6, border: "1px solid #ede9fe" }}>
                      ETH
                    </span>
                  </td>
                  <td style={{ padding: "13px 8px 13px 0", fontWeight: 600, color: isSent ? "#dc2626" : "#16a34a" }}>
                    {(eth.toFixed(6) * price).toFixed(4)} USD
                  </td>
                  <td style={{ padding: "13px 8px 13px 0", color: "#374151" }}>
                    {eth.toFixed(6)} ETH
                  </td>
                  <td style={{ padding: "13px 8px 13px 0", color: "#9ca3af", fontSize: 12 }}>
                    {new Date(parseInt(tx.timeStamp) * 1000).toLocaleDateString()}
                  </td>
                  <td style={{ padding: "13px 0" }}>
                    <span className={`badge-${status}`} style={{ fontSize: 11, padding: "3px 10px", fontWeight: 600 }}>
                      {status === "failed" ? "Failed" : "Success"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;