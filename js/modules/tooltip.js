export default function initToolTip() {}

const toolTips = document.querySelectorAll("[data-tooltip]");

toolTips.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(event) {
  const tooltipBox = criarTooltipBox(this);

  onMouseLeave.tooltipBox = tooltipBox;
  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener("mouseleave", onMouseLeave);
  this.addEventListener("mousemove", onMouseMove);
}

const onMouseLeave = {
  tooltipBox: "",
  handleEvent() {
    this.tooltipBox.remove();
  },
};

const onMouseMove = {
  handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    this.tooltipBox.style.left = event.pageX + 20 + "px";
  },
};

function criarTooltipBox(element) {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip");
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}
