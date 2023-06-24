import IdToColor from "./IdToColor";
import pallate from "./example.pallete.json";

const container = document.querySelector("#container");
const button = document.querySelector("#restart");

const createBox = (color: string, id: string) => {
  const box = document.createElement("div");
  box.style.height = "50px";
  box.style.width = "50px";
  box.style.backgroundColor = color;
  box.style.wordBreak = "break-all";
  box.style.textAlign = "center";
  box.innerHTML = id.slice(2, 6);
  return box;
};

for (let i = 1; i < 1000; i++) {
  const id = Math.random().toString();
  const color = new IdToColor().setPallete(pallate).get(id);
  container && container.appendChild(createBox(color, id));
}
