### IdToColor
A small library that assigns unique **color** for a unique **id**. It hashes id with sha256 to find 3 bytes that describe hex color.

### Usage 
- You may assign any possible color. 
```js script
import IdToColor from "IdToColor"

const color = new IdToColor();
const ids = ["user-1", "user-2", "user-3"];
const assignedColors = ids.map((id) => colore.get(id))

console.log(assignedColors) //["#c6c289",  "#d92b69", "#92303a"]
```
- You may narrow down possible colors by adding your own palette. Pallete is an array of colors in hex format.
```js script
import IdToColor from "IdToColor"

const pallete = ["#25283d", "#8f3985", "#98dfea", "#07beb8" (...)]
const color = new IdToColor().setPallete(pallete);
const ids = ["user-1", "user-2", "user-3"];
const assignedColors = ids.map((id) => colore.get(id))

console.log(assignedColors) //[ "#8f3985",  "#98dfea", "#25283d"]
```
