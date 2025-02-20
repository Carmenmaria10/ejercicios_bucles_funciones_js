const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantsByPower(mutants, power) {
  const filteredMutants = mutants.filter(mutant => mutant.power === power);

  if (filteredMutants.length > 0) {
    return filteredMutants.map(mutant => mutant.name).join(', ');
  } else {
    return `No se encontró un mutante con el poder '${power}'.`;
  }
}

console.log(findMutantsByPower(mutants, 'telekinesis'));
console.log(findMutantsByPower(mutants, 'telepathy'));
console.log(findMutantsByPower(mutants, 'flight'));