import Sidecard from "../components/sidecard";
import "../styles/globals.css";
import React, { useState } from "react";
import { itemJSON } from '/itemData.js'

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

  return (
    <div className="mainAppDiv">
      <div className="leftDiv">
        <div className="searchBar">
          <input type="text" class="searchInput" placeholder="Search" onChange={handleSearchInputChange} />
        </div>
        <Sidecard items={items} setcheckOutItems={setcheckOutItems} setSubAmount={setSubAmount}/>
      </div>
      <Component {...pageProps} subAmount={subAmount} />
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
      </div>
    </div>
  );
}
