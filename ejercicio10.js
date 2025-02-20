const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  return capitals[country] || `No se encontró la capital para ${country}`;
}

console.log(getCapital("Spain"));
console.log(getCapital("Spsain"));
