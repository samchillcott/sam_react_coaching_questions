const selectRandomItemFromArray = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    let choice = arr.splice(index, 1)[0];
    return choice;
};

exports.selectRandomItemFromArray = selectRandomItemFromArray;