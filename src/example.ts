import IdToColor from "./IdToColor";
import pallate from "./example.pallete.json";

let inputId = "user";

const container = document.querySelector("#container");

const input = document.querySelector("#input") as HTMLInputElement;
input.value = inputId;
input?.addEventListener("change", (e) => {
  inputId = (e.target as HTMLInputElement).value;
});

const button = document.querySelector("#restart");
button?.addEventListener("click", () => {
  restart();
});

const createBox = (color: string) => {
  const box = document.createElement("div");
  box.style.height = "50px";
  box.style.width = "50px";
  box.style.backgroundColor = color;
  return box;
};

const createEntry = (color: string, id: string) => {
  const entry = document.createElement("div");
  entry.style.display = "flex";
  entry.style.alignItems = "center";
  entry.style.gap = "10px";

  const label = document.createElement("div");
  label.innerText = id;
  entry.appendChild(label);

  const box = createBox(color);
  entry.appendChild(box);

  return entry;
};

const populate = () => {
  for (let i = 1; i < 1000 - 99; i++) {
    const id = `${inputId}-${i + 99}`;
    const color = new IdToColor().setPallete(pallate).get(id);
    container && container.appendChild(createEntry(color, id));
  }
};

const restart = () => {
  while (container?.firstChild) {
    container.removeChild(container.lastChild!);
  }
  populate();
};

populate();
