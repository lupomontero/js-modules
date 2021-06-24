// var rainbow = 1;

window.onload = function () {
  require(['colors'], (colors) => {
    colors.rainbowify(document.getElementsByTagName('h1')[0]);
    colors.greyify(document.getElementsByTagName('h2')[0]);
  });
};
