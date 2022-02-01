import React from "react";

const CryptoCard = () => {
  const cryptoCurrencies = [
    {
      cryptoName: "Bitcoin",
      cryptoPrice: "$35,000",
      numLikes: "12",
    },
    {
      cryptoName: "Ethereum",
      cryptoPrice: "$4,000",
      numLikes: "9",
    },
    {
      cryptoName: "Dogecoin",
      cryptoPrice: "$0.35",
      numLikes: "3",
    },
    {
      cryptoName: "Solana",
      cryptoPrice: "$93.75",
      numLikes: "23",
    },
    {
      cryptoName: "Polygon",
      cryptoPrice: "$63.56",
      numLikes: "21",
    },
    {
      cryptoName: "Litecoin",
      cryptoPrice: "$478.53",
      numLikes: "6",
    },
    {
      cryptoName: "Uniswap",
      cryptoPrice: "$38.45",
      numLikes: "8",
    },
    {
      cryptoName: "Chainlink",
      cryptoPrice: "$85.95",
      numLikes: "25",
    },
    {
      cryptoName: "Cardano",
      cryptoPrice: "$1.95",
      numLikes: "24",
    },
    {
      cryptoName: "Polkadot",
      cryptoPrice: "$19.56",
      numLikes: "4",
    },
    {
      cryptoName: "Polygon",
      cryptoPrice: "$1.65",
      numLikes: "21",
    },
    {
      cryptoName: "Avalanche",
      cryptoPrice: "$70.17",
      numLikes: "15",
    },
  ];

  return (
    <div class="flex justify-around">
      <div class="flex flex-col">
        <div class="flex flex-row flex-wrap justify-center">
          {cryptoCurrencies.map((eachCrypto, index) => {
            return (
              <div
                class="flex flex-row justify-between border border-slate-700 rounded-lg 
            w-64 h-20 m-2 shadow-md shadow-slate-700 py-4 px-3.5 text-sm bg-slate-900"
                key={index}
              >
                <div class="text-left">
                  <p class="font-bold text-slate-200">
                    {eachCrypto.cryptoName}
                  </p>
                  <p class="font-light text-slate-400">
                    {eachCrypto.cryptoPrice}
                  </p>
                </div>
                <div class="text-right">
                  <p class="font-light text-slate-400">{eachCrypto.numLikes}</p>
                  <div>
                    <p class="text-xs py-1 px-0.5">🤍</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
