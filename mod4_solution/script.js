var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]); // Call the speak method of byeSpeaker
  } else {
    helloSpeaker.speak(names[i]); // Call the speak method of helloSpeaker
  }
}