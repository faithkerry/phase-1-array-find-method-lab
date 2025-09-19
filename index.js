function superbowlWin(record) {
  // Find the first object where the result is "W"
  const win = record.find(game => game.result === "W");
  
  // If found, return the year; otherwise undefined
  return win ? win.year : undefined;
}

module.exports = {
  superbowlWin
};

