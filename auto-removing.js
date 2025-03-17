const buttons = Array.from(document.querySelectorAll('button[aria-label^="Delete activity item"]'));
let index = 0;
const getRandomOffset = (min, max) => Math.random() * (max - min) + min;

const clickNextButton = () => {
  if (index < buttons.length) {
    const button = buttons[index];

    // ? Scroll to the button smoothly
    button.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      button.click();

      index++;

      setTimeout(() => {
        // ? Random small scroll up or down
        window.scrollBy(0, getRandomOffset(-450, 450));

        // ? Random bottom-right click
        const randomClick = new MouseEvent("click", {
          bubbles: true,
          clientX: window.innerWidth - getRandomOffset(20, 60), // ? Near the bottom-right
          clientY: window.innerHeight - getRandomOffset(20, 60),
        });

        document.dispatchEvent(randomClick);

        // ? Random delay (3-5 seconds), mimicing further real user behavior
        setTimeout(clickNextButton, getRandomOffset(3000, 5000));
      }, 50); // ? Wait after clicking
    }, 50); // ? Wait after scrolling
  } else {
    console.log("Finished clicking all buttons.");
  }
};

clickNextButton();
