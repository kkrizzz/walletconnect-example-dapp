export default process.env.NODE_ENV === "production"
  ? {
    bridge: "https://bridge.walletconnect.org",
    balanceUrl: "https://3c.treenity.space/balance",
  }
  : {
    bridge: "http://3c.treenity.space:5001",
    balanceUrl: "",
  };
