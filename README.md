**Author**: Gino P
<br>**Tech**: NextJS + deployment on Vercel
<br>**Purpose**: Learning and for fun
<br>**Gaps**: I still have gaps in my knowledge of CSS and responsive design. I am improving, but there is still work to be done. I am also learning quite a bit of JS but need to continue improving. My understanding of everything is increasing but I need to keep coding to fully understand more of the advanced React hooks. I liked deploying to Vercel. It is really quick and easy to get your code up and running for someone to preview. I compare this to what I previously have done using docker, ECR, ECS, etc and this was a world over easier.
<br>**Live Site**: https://video-game-store-omega.vercel.app/


# DESCRIPTION 
This website is an ecommerce attempt at a video game general store. By **double clicking** on the item, it will prompt you asking if you want to add it to cart. Then it will display how many items are in your cart and it will reduce the cost of the item from your amount in your coin bag. 
ChatGPT 3.5 was used to create the descriptions, the cost, stats and item type in the json containing the items. 
All images were obtained from freepik.com free video game assets.

# PREVIEW 
![image](https://user-images.githubusercontent.com/64187887/225635043-0fa73025-c50f-4229-8e97-d7f30862d441.png)


# DATA
The item descriptions, prices, stats are included in the file itemData.js as a json - https://github.com/eugeniosp3/video-game-store/blob/master/itemData.js

```export const itemJSON = [
    {
   "ItemName": "World Map",
   "imageName": "storePackBAsset 218.png",
   "ItemType": "Miscellaneous",
   "Description": "A detailed map of the world, with all major locations marked.",
   "Cost": "150",
   "Stat": "+1 ACC",
   "Path": "/itemPhotos/storePackBAsset 218.png"
   },
   {
   "ItemName": "Witch's Brewer",
   "imageName": "cauldronsAsset 4.png",
   "ItemType": "Crafting",
   "Description": "A cauldron imbued with magical properties, used for brewing potions.",
   "Cost": "80",
   "Stat": "+1 ACC",
   "Path": "/itemPhotos/cauldronsAsset 4.png"
   },
   {
   "ItemName": "Wheel Cart",
   "imageName": "crafterPackAsset 2.png",
   "ItemType": "Transportation",
   "Description": "A sturdy cart with a large wheel, used for transporting goods.",
   "Cost": "200",
   "Stat": "+1 ACC",
   "Path": "/itemPhotos/crafterPackAsset 2.png"
   },...
   ```

# THINGS TO ADD 
<br>Interactive table that shows items in cart
<br>Buttons to remove items from cart, from this table
<br>Text letting the user know they need to double click somewhere to add the item to cart
<br>Fix the scrollbar on non Mac computers - it looks ugly
<br>Responsive to any viewport/resolution 
