function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function replaceItemById(id, array, newItem) {
  const index = array.findIndex((e) => e.id === id);
  return [...array.slice(0, index), newItem, ...array.slice(index + 1)];
}

function removeFromArrayById(id, array) {
  // console.log(id, array);
  const index = array.findIndex((e) => e.id === id);
  if (index === -1) {
    console.error("No item found to remove.");
    return array;
  }
  // console.log([...array.slice(0, index), ...array.slice(index + 1)]);
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function findMissingItems(biggerArray, smallerArray) {
  const currentSet = new Set(smallerArray);
  return biggerArray.filter((x) => !currentSet.has(x));
}

function addToDegrees(current, delta) {
  if (current + delta > 360) {
    return (current + delta) % 360;
  } else if (current + delta < 0) {
    return 360 - current + delta;
  } else {
    return current + delta;
  }
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function toTimestamp(strDate) {
  const datum = Date.parse(strDate);
  console.log(datum);
  return datum;
}

function move(array, index, delta) {
  //ref: https://gist.github.com/albertein/4496103
  console.log("move", array, index, delta);

  const newArray = [...array];

  var newIndex = index + delta;
  if (newIndex < 0 || newIndex == newArray.length) return; //Already at the top or bottom.
  var indexes = [index, newIndex].sort((a, b) => a - b); //Sort the indixes (fixed)
  newArray.splice(indexes[0], 2, newArray[indexes[1]], newArray[indexes[0]]); //Replace from lowest index, two elements, reverting the order
  return newArray;
}

function moveUp(array, currentIndex) {
  return move(array, currentIndex, -1);
}

function moveDown(array, currentIndex) {
  return move(array, currentIndex, 1);
}

function getGuidanceMessage(
  message,
  caughtPhrases = [],
  phrases = [],
  logic,
  context = "title"
) {
  if (message.length === 0 && logic === "isMissing") {
    const phrasesWithQuotes = phrases.map((p) => `"${p}"`);
    return `Posts to r/AnimalCrossing must include ${
      phrasesWithQuotes.length > 1
        ? `one of these phrases in the post ${context}:`
        : "the phrase"
    } ${
      phrasesWithQuotes.length > 2
        ? phrasesWithQuotes.join(", ")
        : phrasesWithQuotes.join(" or ")
    } ${phrasesWithQuotes.length > 2 ? `.` : `in the post ${context}.`}`;
  }
  if (message.length === 0) {
    const phrasesWithQuotes = caughtPhrases.map((p) => `"${p}"`);
    return `The phrase${phrasesWithQuotes.length > 1 ? "s" : ""} ${
      phrasesWithQuotes.length > 2
        ? phrasesWithQuotes.join(", ")
        : phrasesWithQuotes.join(" and ")
    } ${
      phrasesWithQuotes.length > 1 ? "are" : "is"
    } not allowed in the ${context} of posts to r/AnimalCrossing.`;
  }
  if (message.includes("{caught_phrases}")) {
    return message.replace(
      "{caught_phrases}",
      caughtPhrases.length > 2
        ? caughtPhrases.join(", ")
        : caughtPhrases.join(" and ")
    );
  }
  return message;
}

export {
  removeItemAtIndex,
  replaceItemAtIndex,
  replaceItemById,
  removeFromArrayById,
  findMissingItems,
  addToDegrees,
  randomIntFromInterval,
  toTitleCase,
  toTimestamp,
  moveUp,
  moveDown,
  getGuidanceMessage,
};
