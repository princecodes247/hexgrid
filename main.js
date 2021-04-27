let pos = 0;
mode = 2;
const light = document.querySelector(".light");
function gradientPosSetter(target = light) {
  console.log("R");
  switch (mode) {
    case 1:
      if (pos < 120) {
        target.style.background = `linear-gradient(var(--bg) ${
          pos - 10
        }%, transparent ${pos}%, var(--bg) ${pos + 10}%)`;
        pos += 1;
        console.log(pos);
      } else {
        pos = -10;
      }
      break;
    case 2:
      if (pos < 120) {
        target.style.background = `radial-gradient(
            circle at 50% 50%,
            var(--bg) ${pos - 5}%,
            transparent ${pos}%,
            var(--bg) ${pos + 10}%
          )`;
        pos += 1;
        console.log(pos);
      } else {
        pos = -10;
      }
    default:
      break;
  }
}

const shiftInterval = setInterval(gradientPosSetter, 30);
