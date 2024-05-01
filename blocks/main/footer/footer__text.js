const numberEditor = (num) => {
  const numStr = num.toString();
  return num >= 1000 ? numStr.slice(0, -3) + "K" : num;
};

module.exports = numberEditor;
