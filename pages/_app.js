import Sidecard from "../components/sidecard";
import "../styles/globals.css";
import React, { useState } from "react";
import { itemJSON } from '/itemData.js'
import Table from "../components/Table";

export default function App({ Component, pageProps }) {
  const [checkoutItems, setcheckOutItems] = useState([]);
  const [subAmount, setSubAmount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  
  const filteredItems = itemJSON.filter((item) =>
    item.ItemName.toLowerCase().includes(searchInput.toLowerCase())
  );
  const items = searchInput === "" ? itemJSON : filteredItems;

  console.log("Howdy", subAmount, checkoutItems);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...checkoutItems];
    updatedItems.splice(index, 1);
    setcheckOutItems(updatedItems);
  
    // Recalculate subAmount and Coin Bag
    const newSubAmount = updatedItems.reduce((total, item) => total + Number(item.Cost), 0);
    setSubAmount(newSubAmount);
  
    const newCoinBag = 500 - newSubAmount;
    const coinBagEl = document.querySelector(".coinage b");
    coinBagEl.textContent = `(${newCoinBag})`;
  };
  

  return (
    <div className="mainAppDiv">
      <div className="leftDiv">

        <div className="searchBar">

          <input type="text" class="searchInput" placeholder="Search" onChange={handleSearchInputChange} />
          <p className="dblClickTitle">Double-click inventory or table to add/remove item.</p>

        </div>
        <Sidecard items={items} setcheckOutItems={setcheckOutItems} setSubAmount={setSubAmount}/>
      </div>
      <div className="rightDiv">
        <div className="cart">
          <div className="cartHolder">
           
            <p className="cartAmount">
              Items <b>({checkoutItems.length})</b>
            </p>
          </div>
          <div className="wallet">
            {/* > */}
            <p className="coinage">
              Coin Bag <b>({500 - subAmount})</b>
            </p>
          </div>
        </div>
        <div className="itemPresentation"></div>
        <div className="cartControls"></div>
        <div className="cartTable">
          <Table className="itemTableMain" setcheckOutItems={setcheckOutItems} checkoutItems={checkoutItems} handleRemoveItem={handleRemoveItem} />
        </div>
        <p className="subtotalAmt"> <b>Current Total:</b> <span className="subGold">{subAmount}g</span></p>

      </div>
      <Component {...pageProps} />
      
    </div>
  );
}
