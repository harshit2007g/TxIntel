import React from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroSection = () => {
    useGSAP(()=>{
        gsap.from("#left-box",{y:-70});
        const tl = gsap.timeline();
        tl.from("#right-3",{x:500,ease:'expo.in',delay:0});
        tl.from("#right-2",{x:500,ease:'expo.in'},'+=0.02');
        tl.from("#right-1",{x:500,ease:'expo.in'},'+=0.02');
    })
  return (
    <section
      style={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        alignItems: "stretch",
        gap: "2rem",
        padding: "2.5rem 3rem",
        background: "#f5f2ed",
        fontFamily: "'DM Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      {/* LEFT - 40% Main Box */}
      <div id="left-box" style={{ width: "40%", flexShrink: 0 }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "500px",
            background: "#ffffff",
            border: "0.5px solid #ddd8d0",
            borderRadius: "4px",
            padding: "2rem",
            position: "relative",
            zIndex: 10,
            boxShadow: "8px 8px 0px #e8e4de, 16px 16px 0px #dedbd5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Title */}
          <div>
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 5vw, 5.5rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                color: "#1a1714",
                textAlign: "left",
              }}
            >
             Tx
              <span style={{ color: "#b8873a" }}>Intel.</span>
            </h1>
            <div
              style={{
                width: "100px",
                height: "2px",
                background: "#b8873a",
                marginTop: "1.5rem",
              }}
            />
          </div>

          {/* Bottom Meta */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p
              style={{
                fontSize: "20px",
                color: "#888",
                lineHeight: 2,
                maxWidth: "280px",
              }}
            >
            This platform provides a way through which someone can analyze their transactions.
             One place to organise your expenses.
            </p>

          </div>

          {/* Corner decoration */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              width: "40px",
              height: "40px",
              borderRight: "1px solid #ddd8d0",
              borderBottom: "1px solid #ddd8d0",
            }}
          />
        </div>
      </div>

      {/* RIGHT - Three stacked boxes */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Box 1 */}
        <div id="right-1"
          style={{
            flex: 1,
            background: "#ffffff",
            border: "0.5px solid #ddd8d0",
            borderRadius: "4px",
            padding: "1.75rem",
            position: "relative",
            zIndex: 10,
            boxShadow: "6px 6px 0px #e8e4de, 12px 12px 0px #dedbd5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.75rem",
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "#ccc",
            }}
          >
            01
          </span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
              color: "#1a1714",
              lineHeight: 1,
            }}
          >
            TRACK 
            <br />
            <span style={{ color: "#b8873a" }}>EXPENSES</span>
          </h2>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <p
              style={{
                fontSize: "16px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#bbb",
                borderLeft: "2px solid #e0dbd4",
                paddingLeft: "8px",
              }}
            >
              GET A REFINED DATA OF YOUR CRYPTO TRANSACTIONS.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 5px)", gap: "4px" }}>
              {[...Array(8)].map((_, i) => (
                <span key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e0dbd4", display: "block" }} />
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div id="right-2"
          style={{
            flex: 1,
            background: "#faf8f5",
            border: "0.5px solid #ddd8d0",
            borderRadius: "4px",
            padding: "1.75rem",
            position: "relative",
            zIndex: 10,
            boxShadow: "6px 6px 0px #e8e4de, 12px 12px 0px #dedbd5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.75rem",
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "#ccc",
            }}
          >
            02
          </span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
              color: "#1a1714",
              lineHeight: 1,
            }}
          >
            DETAILED 
            <br />
            <span style={{ color: "#b8873a" }}>INFORMATION</span>
          </h2>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <p
              style={{
                fontSize: "16px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#bbb",
                borderLeft: "2px solid #e0dbd4",
                paddingLeft: "8px",
              }}
            >
              LOOK INTO ALL THE PARAMETERS OF A TRANSACTION
            </p>
            <div
              style={{
                width: "28px",
                height: "28px",
                border: "1px solid #e0dbd4",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "8px", height: "8px", background: "#b8873a", borderRadius: "50%" }} />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div id="right-3"
          style={{
            flex: 1,
            background: "#ffffff",
            border: "0.5px solid #ddd8d0",
            borderRadius: "4px",
            padding: "1.75rem",
            position: "relative",
            zIndex: 10,
            boxShadow: "6px 6px 0px #e8e4de, 12px 12px 0px #dedbd5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.75rem",
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "#ccc",
            }}
          >
            03
          </span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
              color: "#1a1714",
              lineHeight: 1,
            }}
          >
            ANALYZE
            <br />
            <span style={{ color: "#b8873a" }}>GAS FEES</span>
          </h2>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <p
              style={{
                fontSize: "16px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#bbb",
                borderLeft: "2px solid #e0dbd4",
                paddingLeft: "8px",
              }}
            >
             THIS ANALYSIS WILL TELL YOU MORE ABOUT THE GAS FEES USED  
            </p>
            <div style={{ width: "28px", height: "1px", background: "#b8873a" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;