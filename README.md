**Author**: Gino P
<br>**Tech**: NextJS + deployment on Vercel
<br>**Purpose**: Learning and for fun
<br>**Gaps**: I still have gaps in my knowledge of CSS and responsive design. I am improving, but there is still work to be done. I am also learning quite a bit of JS but need to continue improving. My understanding of everything is increasing but I need to keep coding to fully understand more of the advanced React hooks. I liked deploying to Vercel. It is really quick and easy to get your code up and running for someone to preview. I compare this to what I previously have done using docker, ECR, ECS, etc and this was a world over easier.
<br>**Live Site**: https://video-game-store-omega.vercel.app/

<h3>Preview</h3>
<b>Live Site</b>: https://video-game-store-omega.vercel.app/

![image](https://user-images.githubusercontent.com/64187887/225635043-0fa73025-c50f-4229-8e97-d7f30862d441.png)

# DESCRIPTION 
This website is an ecommerce attempt at a video game general store. By **double clicking** on the item, it will prompt you asking if you want to add it to cart. Then it will display how many items are in your cart and it will reduce the cost of the item from your amount in your coin bag. 
<b>ChatGPT 3.5</b> was used to create the descriptions, the cost, stats and item type in the json containing the items. 
All images were obtained from freepik.com free video game assets. 

<h3>Languages</h3>
If you look at the breakdown of languages, you see there is a jupyter notebook. This is in the `video-game-store/public/itemPhotos/` directory and it was used to create a path I could put into the json without doing it manually. I left the code in case anyone is curious and wants to reuse it. It is written in Python.

```python
import os
import pandas as pd
allPics = pd.Series(os.listdir())
allPics = allPics[allPics.str.contains('.png')]
allPics.apply(lambda x: \
             'os.getcwd()' + x)\
             .to_csv("imagesPaths.csv", index=False)

```

![image](https://user-images.githubusercontent.com/64187887/225639772-2e1efc77-34c1-42c1-a935-5418ef24c7e0.png)



<h3>Data</h3>
The item descriptions, prices, stats are included in the file itemData.js as a json - https://github.com/eugeniosp3/video-game-store/blob/master/itemData.js

```javascript
export const itemJSON = [
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

<h3>Roadmap</h3>

1. Interactive table that shows items in cart
<br>2. Buttons to remove items from cart, from this table
<br>3. Text letting the user know they need to double click somewhere to add the item to cart
<br>4. Fix the scrollbar on non Mac computers - it looks ugly
<br>5. Responsive to any viewport/resolution 


