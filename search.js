const lyrics="if you miss the train im on you will know that im gone";
const search ='tRain';
// const lowerCase=search.toLowerCase();
// const final=lyrics.includes(lowerCase);
const final=lyrics.toLowerCase().includes(search.toLowerCase())
console.log(final);
console.log(lyrics.indexOf('miss'))
