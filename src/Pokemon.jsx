import React from 'react';

const typeColor = {
  Normal: '#A8A77A',
  Fire: '#EE8130',
  Water: '#6390F0',
  Electric: '#F7D02C',
  Grass: '#7AC74C',
  Ice: '#96D9D6',
  Fighting: '#C22E28',
  Poison: '#A33EA1',
  Ground: '#E2BF65',
  Flying: '#A98FF3',
  Psychic: '#F95587',
  Bug: '#A6B91A',
  Rock: '#B6A136',
  Ghost: '#735797',
  Dragon: '#6F35FC', 
  Dark: '#705746',
  Steel: '#B7B7CE',
  Fairy: '#D685AD'
};

const Pokemon = ({ pokemon, language }) => {
  const getNameByLanguage = () => {
    switch (language) {
      case 'japanese':
        return pokemon.name.japanese;
      case 'chinese':
        return pokemon.name.chinese;
      case 'french':
        return pokemon.name.french;
      default:
        return pokemon.name.english;
    }
  };

  const getTypeColors = () => {
    return pokemon.type.map((type) => ({
      type: type,
      color: typeColor[type],
    }));
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
        <img src={pokemon.image} alt={getNameByLanguage()} />
      </div>
      <div className="pokemon-details">
        <div className="pokemon-id-name"> [{pokemon.id}] {getNameByLanguage()}</div>
        <div className="pokemon-type">
          {getTypeColors().map(({ type, color }, index) => (
            <span key={index} style={{ backgroundColor: color, marginRight: '5px', padding: '5px 5px', borderRadius: '15px' }}>{type}</span>
          ))}
        </div>
        <div className="stats-container">
          <div className="pokemon-stats-column">
            <div>HP: {pokemon.base.HP}</div>
            <div>Attk: {pokemon.base.Attack}</div>
            <div>Def: {pokemon.base.Defense}</div>
          </div>
          <div className="pokemon-stats-column"> 
            <div>Speed: {pokemon.base.Speed}</div>
            <div>Sp. Attk: {pokemon.base['Sp. Attack']}</div>
            <div>Sp. Def: {pokemon.base['Sp. Defense']}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
