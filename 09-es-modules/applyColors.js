export default (el, colors) => Object.assign(el, {
  innerHTML: [...el.textContent].reduce(
    (memo, char, idx) => (
      `${memo}<span style="color: ${colors[idx % colors.length]}">${char}<span>`
    ),
    '',
  ),
});
