const team = {
  _players: [
    {
      firstName: 'Veronica',
      surName: 'Mars',
      age: 28
    },
    {
      firstName: 'Carmen',
      surName: 'Electra',
      age: 32
    },
    {
      firstName: 'Daenerys',
      surName: 'Targaryen',
      age: 30
    },
  ],
  _games: [
    {
      opponent: 'FHM',
      teamPoints: 88,
      opponentPoints: 74
    },
    {
      opponent: 'Kangaroos',
      teamPoints: 42,
      opponentPoints: 83
    },
    {
      opponent: 'Dolphins',
      teamPoints: 93,
      opponentPoints: 34
    }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, surName, age){
    let player = {
      firstName: firstName,
      surName: surName,
      age: age
    };
    this.players.push(player);
  },

  addGame(oppName, ourPoints, oppPoints){
    const game = {
      opponent: oppName,
      teamPoints: ourPoints,
      opponentPoints: oppPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Sharks', 16, 3);
team.addGame('Fred City', 7, 54);
team.addGame('The Rangers', 47, 13);

console.log(team.games);