import { useState } from "react";
import { useNavigate } from "react-router-dom";
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #ffffff;
    font-family: 'DM Sans', sans-serif;
  }

  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .title {
    font-size: 15px;
    font-weight: 500;
    color: #aaa;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  .input-wrap {
    width: 100%;
    max-width: 680px;
    position: relative;
  }

  .hash-input {
    width: 100%;
    padding: 20px 24px;
    font-family: 'DM Mono', monospace;
    font-size: 16px;
    color: #1a1a1a;
    background: #fff;
    border: 1.5px solid #e2e2e2;
    border-radius: 12px;
    outline: none;
    transition: border-color 0.2s;
    text-align: center;
  }

  .hash-input::placeholder {
    color: #ccc;
  }

  .hash-input:focus {
    border-color: #1a1a1a;
  }

  .hint {
    margin-top: 14px;
    font-size: 12px;
    color: #ccc;
    text-align: center;
    font-family: 'DM Mono', monospace;
  }

  .go-btn {
    margin-top: 20px;
    display: block;
    width: 100%;
    max-width: 680px;
    padding: 14px;
    background: #1a1a1a;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.04em;
    transition: background 0.15s;
  }

  .go-btn:hover { background: #333; }
  .go-btn:disabled { background: #e2e2e2; color: #aaa; cursor: not-allowed; }
`;

export default function Entry() {
  const [hash, setHash] = useState("");
  const navigate = useNavigate();
  function handleSearch() {
    navigate(`/detail/${hash.trim()}`)
    console.log("Search:", hash.trim());
  }

  return (
    <>
      <style>{styles}</style>
      <div className="page">
        <p className="title">Transaction Lookup</p>

        <input
          className="hash-input"
          type="text"
          placeholder="0x..."
          value={hash}
          onChange={e => setHash(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSearch()}
          spellCheck={false}
          autoComplete="off"
        />

        <button
          className="go-btn"
          onClick={handleSearch}
          disabled={!hash.trim()}
        >
          Search
        </button>

        <p className="hint">Press Enter or click Search</p>
      </div>
    </>
  );
}