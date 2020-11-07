const spawn = (pokemon, rate, minLevel, maxLevel) => {
  return {
    pokemon,
    level: [minLevel, maxLevel],
    rate: rate / 100,
  };
};

const pidgeotSpawn = () => {
  return {
    method: 'sky',
    spawns: [
      spawn('pidgey', 60, 3, 56),
      spawn('pidgeotto', 35, 3, 56),
      spawn('pidgeot', 5, 3, 56),
    ],
  };
};

const fearowSpawn = () => {
  return {
    method: 'sky',
    spawns: [spawn('spearow', 60, 3, 56), spawn('fearow', 40, 3, 56)],
  };
};

const tentacruelSpawn = () => {
  return {
    method: 'water',
    spawns: [
      spawn('tentacool', 45, 7, 12),
      spawn('magikarp', 45, 7, 12),
      spawn('tentacruel', 10, 7, 12),
    ],
  };
};

const seadraSpawn = () => {
  return {
    method: 'water',
    spawns: [
      spawn('tentacool', 30, 31, 36),
      spawn('horsea', 30, 31, 36),
      spawn('magikarp', 30, 31, 36),
      spawn('tentacruel', 5, 31, 36),
      spawn('seadra', 5, 31, 36),
    ],
  };
};

const scytherSpawn = () => {
  return {
    method: 'ground',
    spawns: [
      spawn('pidgey', 20, 33, 38),
      spawn('pidgeotto', 20, 33, 38),
      spawn('oddish', 15, 33, 38),
      spawn('gloom', 15, 33, 38),
      spawn('venonat', 15, 33, 38),
      spawn('venomoth', 9, 33, 38),
      spawn('tauros', 5, 33, 38),
      spawn('scyther', 1, 33, 38),
    ],
  };
};

const starmieSpawn = () => {
  return {
    method: 'water',
    spawns: [
      spawn('tentacool', 30, 37, 42),
      spawn('staryu', 30, 37, 42),
      spawn('magikarp', 30, 37, 42),
      spawn('tentacruel', 9, 37, 42),
      spawn('starmie', 1, 37, 42),
    ],
  };
};

const psyduckSpawn = () => {
  return {
    method: 'ground',
    spawns: [
      spawn('golbat', 15, 51, 56),
      spawn('golduck', 15, 51, 56),
      spawn('graveler', 15, 51, 56),
      spawn('zubat', 10, 51, 56),
      spawn('geodude', 10, 51, 56),
      spawn('lickitung', 10, 51, 56),
      spawn('rhyhorn', 10, 51, 56),
      spawn('ditto', 5, 51, 56),
      spawn('rhydon', 5, 51, 56),
      spawn('psyduck', 5, 51, 56),
    ],
  };
};

const poliwrathSpawn = () => {
  return {
    method: 'water',
    spawns: [
      spawn('poliwag', 45, 51, 56),
      spawn('magikarp', 45, 51, 56),
      spawn('poliwhirl', 9, 51, 56),
      spawn('poliwrath', 1, 51, 56),
    ],
  };
};

const onixSpawn = () => {
  return {
    method: 'ground',
    spawns: [
      spawn('zubat', 40, 5, 10),
      spawn('geodude', 40, 5, 10),
      spawn('paras', 15, 5, 10),
      spawn('clefairy', 4, 5, 10),
      spawn('onix', 1, 5, 10),
    ],
  };
};

const dittoSpawn = () => {
  return {
    method: 'ground',
    spawns: [
      spawn('grimer', 40, 39, 44),
      spawn('rattata', 20, 39, 44),
      spawn('raticate', 20, 39, 44),
      spawn('magmar', 14, 39, 44),
      spawn('muk', 5, 39, 44),
      spawn('ditto', 1, 39, 44),
    ],
  };
};

const haunterSpawn = () => {
  return {
    method: 'ground',
    spawns: [
      spawn('gastly', 75, 27, 32),
      spawn('cubone', 10, 27, 32),
      spawn('zubat', 5, 27, 32),
      spawn('golbat', 5, 27, 32),
      spawn('haunter', 5, 27, 32),
    ],
  };
};

const kangaskhanSpawn = () => {
  return {
    method: 'ground',
    spawns: [
      spawn('zubat', 20, 18, 23),
      spawn('geodude', 20, 18, 23),
      spawn('golbat', 10, 18, 23),
      spawn('machop', 10, 18, 23),
      spawn('graveler', 10, 18, 23),
      spawn('onix', 10, 18, 23),
      spawn('rhyhorn', 10, 18, 23),
      spawn('cubone', 9, 18, 23),
      spawn('kangaskhan', 1, 18, 23),
    ],
  };
};

const dewgongSpawn = () => {
  return {
    method: 'ground',
    spawns: [
      spawn('golbat', 20, 39, 44),
      spawn('slowpoke', 20, 39, 44),
      spawn('seel', 20, 39, 44),
      spawn('zubat', 16, 39, 44),
      spawn('jynx', 14, 39, 44),
      spawn('slowbro', 5, 39, 44),
      spawn('dewgong', 5, 39, 44),
    ],
  };
};

const cloysterSpawn = () => {
  return {
    method: 'water',
    spawns: [
      spawn('tentacool', 30, 39, 44),
      spawn('shellder', 30, 39, 44),
      spawn('magikarp', 30, 39, 44),
      spawn('tentacruel', 9, 39, 44),
      spawn('cloyster', 1, 39, 44),
    ],
  };
};

const rhydonSpawn = () => {
  return {
    method: 'ground',
    spawns: [
      spawn('golbat', 15, 41, 46),
      spawn('machoke', 15, 41, 46),
      spawn('graveler', 15, 41, 46),
      spawn('zubat', 10, 41, 46),
      spawn('machop', 10, 41, 46),
      spawn('geodude', 10, 41, 46),
      spawn('onix', 10, 41, 46),
      spawn('rhyhorn', 10, 41, 46),
      spawn('rhydon', 5, 41, 46),
    ],
  };
};

const arcanineKadabraSpawn = () => {
  return {
    method: 'ground',
    spawns: [
      spawn('growlithe', 19, 22, 27),
      spawn('pidgey', 15, 22, 27),
      spawn('pidgeotto', 15, 22, 27),
      spawn('rattata', 15, 22, 27),
      spawn('raticate', 15, 22, 27),
      spawn('jigglypuff', 15, 22, 27),
      spawn('abra', 4, 22, 27),
      spawn('arcanine', 1, 22, 27),
      spawn('kadabra', 1, 22, 27),
    ],
  };
};

const locations = {
  route1: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 40, 3, 4),
              spawn('rattata', 30, 3, 4),
              spawn('oddish', 30, 3, 4),
            ],
          },
          pidgeotSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['viridianCity', 'palletTown'],
    label: 'Rota 1',
  },
  route2: {
    areas: [
      {
        area: 'south',
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 30, 3, 4),
              spawn('rattata', 20, 3, 4),
              spawn('oddish', 20, 3, 4),
              spawn('caterpie', 15, 3, 4),
              spawn('weedle', 15, 3, 4),
            ],
          },
          pidgeotSpawn(),
        ],
      },
      {
        area: 'north',
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 30, 3, 8),
              spawn('rattata', 20, 3, 8),
              spawn('oddish', 20, 3, 8),
              spawn('caterpie', 15, 3, 8),
              spawn('weedle', 15, 3, 8),
            ],
          },
          pidgeotSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['pewterCity', 'viridianCity', 'viridianForest', 'diglettsCave'],
    label: 'Rota 2',
  },
  route3: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('rattata', 30, 3, 8),
              spawn('spearow', 30, 3, 8),
              spawn('sandshrew', 20, 3, 8),
              spawn('mankey', 20, 3, 8),
            ],
          },
          fearowSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['route4', 'pewterCity'],
    label: 'Rota 3',
  },
  route4: {
    areas: [
      {
        area: 'east',
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('spearow', 30, 7, 12),
              spawn('rattata', 25, 7, 12),
              spawn('sandshrew', 20, 7, 12),
              spawn('mankey', 20, 7, 12),
              spawn('psyduck', 5, 7, 12),
            ],
          },
          fearowSpawn(),
          tentacruelSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['route3', 'ceruleanCity', 'mtMoon'],
    label: 'Rota 4',
  },
  route5: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 20, 11, 16),
              spawn('rattata', 20, 11, 16),
              spawn('growlithe', 20, 11, 16),
              spawn('jigglypuff', 15, 11, 16),
              spawn('pidgeotto', 10, 11, 16),
              spawn('psyduck', 10, 11, 16),
              spawn('abra', 5, 11, 16),
            ],
          },
          pidgeotSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['ceruleanCity', 'saffronCity', 'undergroundPath56'],
    label: 'Rota 5',
  },
  route6: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 20, 11, 6),
              spawn('rattata', 20, 11, 6),
              spawn('growlithe', 20, 11, 6),
              spawn('jigglypuff', 15, 11, 6),
              spawn('pidgeotto', 10, 11, 6),
              spawn('psyduck', 10, 11, 6),
              spawn('abra', 5, 11, 6),
            ],
          },
          pidgeotSpawn(),
          {
            method: 'water',
            spawns: [
              spawn('goldeen', 45, 11, 16),
              spawn('magikarp', 45, 11, 16),
              spawn('seaking', 10, 11, 16),
            ],
          },
        ],
      },
    ],
    background: 'forest',
    exits: ['saffronCity', 'vermilionCity', 'undergroundPath56'],
    label: 'Rota 6',
  },
  route7: {
    areas: [
      {
        methods: [arcanineKadabraSpawn(), pidgeotSpawn()],
      },
    ],
    background: 'forest',
    exits: ['saffronCity', 'celadonCity', 'undergroundPath78'],
    label: 'Rota 7',
  },
  route8: {
    areas: [
      {
        methods: [arcanineKadabraSpawn(), pidgeotSpawn()],
      },
    ],
    background: 'forest',
    exits: ['lavenderTown', 'saffronCity', 'undergroundPath78'],
    label: 'Rota 8',
  },
  route9: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('rattata', 20, 17, 22),
              spawn('spearow', 20, 17, 22),
              spawn('nidoranF', 15, 17, 22),
              spawn('nidoranM', 15, 17, 22),
              spawn('raticate', 10, 17, 22),
              spawn('fearow', 10, 17, 22),
              spawn('nidorina', 5, 17, 22),
              spawn('nidorino', 5, 17, 22),
            ],
          },
          fearowSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['route10', 'ceruleanCity'],
    label: 'Rota 9',
  },
  route10: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('rattata', 15, 18, 23),
              spawn('spearow', 15, 18, 23),
              spawn('nidoranF', 15, 18, 23),
              spawn('nidoranM', 15, 18, 23),
              spawn('raticate', 10, 18, 23),
              spawn('fearow', 10, 18, 23),
              spawn('krabby', 10, 18, 23),
              spawn('nidorina', 5, 18, 23),
              spawn('nidorino', 5, 18, 23),
            ],
          },
          fearowSpawn(),
          {
            method: 'water',
            spawns: [
              spawn('tentacool', 45, 18, 23),
              spawn('magikarp', 45, 18, 23),
              spawn('tentacruel', 5, 18, 23),
              spawn('dratini', 4, 18, 23),
              spawn('dragonair', 1, 18, 23),
            ],
          },
        ],
      },
    ],
    background: 'forest',
    exits: ['lavenderTown', 'route9', 'rockTunnel', 'powerPlant'],
    label: 'Rota 10',
  },
  route11: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 25, 13, 18),
              spawn('rattata', 25, 13, 18),
              spawn('drowzee', 25, 13, 18),
              spawn('pidgeotto', 10, 13, 18),
              spawn('raticate', 10, 13, 18),
              spawn('mrMime', 5, 13, 18),
            ],
          },
          pidgeotSpawn(),
          seadraSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['route12', 'vermilionCity', 'diglettsCave'],
    label: 'Rota 11',
  },
  route12: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 20, 31, 36),
              spawn('pidgeotto', 20, 31, 36),
              spawn('oddish', 15, 31, 36),
              spawn('gloom', 15, 31, 36),
              spawn('krabby', 15, 31, 36),
              spawn('farfetchD', 10, 31, 36),
              spawn('kingler', 5, 31, 36),
            ],
          },
          pidgeotSpawn(),
          seadraSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['lavenderTown', 'route13', 'route11'],
    label: 'Rota 12',
  },
  route13: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 20, 33, 38),
              spawn('pidgeotto', 20, 33, 38),
              spawn('oddish', 15, 33, 38),
              spawn('gloom', 15, 33, 38),
              spawn('krabby', 15, 33, 38),
              spawn('farfetchD', 10, 33, 38),
              spawn('kingler', 5, 33, 38),
            ],
          },
          {
            method: 'water',
            spawns: [
              spawn('tentacool', 30, 33, 38),
              spawn('horsea', 30, 33, 38),
              spawn('magikarp', 30, 33, 38),
              spawn('tentacruel', 5, 33, 38),
              spawn('seadra', 5, 33, 38),
            ],
          },
        ],
      },
    ],
    background: 'forest',
    exits: ['route12', 'route14'],
    label: 'Rota 13',
  },
  route14: {
    areas: [
      {
        methods: [scytherSpawn(), pidgeotSpawn()],
      },
    ],
    background: 'forest',
    exits: ['route13', 'route15'],
    label: 'Rota 14',
  },
  route15: {
    areas: [
      {
        methods: [scytherSpawn(), pidgeotSpawn()],
      },
    ],
    background: 'forest',
    exits: ['route14', 'fuchsiaCity'],
    label: 'Rota 15',
  },
  route16: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('doduo', 25, 31, 36),
              spawn('pidgey', 20, 31, 36),
              spawn('pidgeotto', 20, 31, 36),
              spawn('rattata', 15, 31, 36),
              spawn('raticate', 15, 31, 36),
              spawn('dodrio', 5, 31, 36),
            ],
          },
          pidgeotSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['route17', 'celadonCity'],
    label: 'Rota 16',
  },
  route17: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('ponyta', 20, 33, 38),
              spawn('doduo', 20, 33, 38),
              spawn('psyduck', 15, 33, 38),
              spawn('pidgey', 10, 33, 38),
              spawn('pidgeotto', 10, 33, 38),
              spawn('rattata', 5, 33, 38),
              spawn('raticate', 5, 33, 38),
              spawn('dodrio', 5, 33, 38),
              spawn('rapidash', 5, 33, 38),
              spawn('eevee', 5, 33, 38),
            ],
          },
          pidgeotSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['route16', 'route18'],
    label: 'Rota 17',
  },
  route18: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 20, 33, 38),
              spawn('pidgeotto', 20, 33, 38),
              spawn('doduo', 20, 33, 38),
              spawn('rattata', 15, 33, 38),
              spawn('raticate', 15, 33, 38),
              spawn('dodrio', 10, 33, 38),
            ],
          },
          pidgeotSpawn(),
          {
            method: 'water',
            spawns: [
              spawn('tentacool', 30, 33, 38),
              spawn('staryu', 30, 33, 38),
              spawn('magikarp', 30, 33, 38),
              spawn('tentacruel', 9, 33, 38),
              spawn('starmie', 1, 33, 38),
            ],
          },
        ],
      },
    ],
    background: 'forest',
    exits: ['route17', 'fuchsiaCity'],
    label: 'Rota 18',
  },
  route19: {
    areas: [
      {
        methods: [pidgeotSpawn(), starmieSpawn()],
      },
    ],
    background: 'forest',
    exits: ['fuchsiaCity', 'route20'],
    label: 'Rota 19',
  },
  route20: {
    areas: [
      {
        area: 'east',
        methods: [
          pidgeotSpawn(),
          {
            method: 'water',
            spawns: [
              spawn('tentacool', 45, 37, 42),
              spawn('magikarp', 45, 37, 42),
              spawn('tentacruel', 5, 37, 42),
              spawn('gyarados', 5, 37, 42),
            ],
          },
        ],
      },
      {
        area: 'west',
        methods: [
          pidgeotSpawn(),
          {
            method: 'water',
            spawns: [
              spawn('tentacool', 45, 39, 44),
              spawn('magikarp', 45, 39, 44),
              spawn('tentacruel', 5, 39, 44),
              spawn('gyarados', 5, 39, 44),
            ],
          },
        ],
      },
    ],
    background: 'coast',
    exits: ['route19', 'cinnabarIsland', 'seafoamIslands'],
    label: 'Rota 20',
  },
  route21: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgeotto', 20, 37, 42),
              spawn('raticate', 20, 37, 42),
              spawn('tangela', 15, 37, 42),
              spawn('gloom', 14, 37, 42),
              spawn('pidgey', 10, 37, 42),
              spawn('rattata', 10, 37, 42),
              spawn('oddish', 10, 37, 42),
              spawn('vileplume', 1, 37, 42),
            ],
          },
          pidgeotSpawn(),
          starmieSpawn(),
        ],
      },
    ],
    background: 'coast',
    exits: ['palletTown', 'cinnabarIsland'],
    label: 'Rota 21',
  },
  route22: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('rattata', 30, 3, 4),
              spawn('spearow', 30, 3, 4),
              spawn('nidoranF', 20, 3, 4),
              spawn('nidoranM', 20, 3, 4),
            ],
          },
          fearowSpawn(),
          {
            method: 'water',
            spawns: [
              spawn('poliwag', 45, 3, 4),
              spawn('magikarp', 45, 3, 4),
              spawn('poliwhirl', 10, 3, 4),
            ],
          },
        ],
      },
    ],
    background: 'forest',
    exits: ['route23', 'viridianCity'],
    label: 'Rota 22',
  },
  route23: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('nidorina', 19, 41, 46),
              spawn('nidorino', 19, 41, 46),
              spawn('fearow', 15, 41, 46),
              spawn('exeggcute', 14, 41, 46),
              spawn('spearow', 10, 41, 46),
              spawn('nidoranF', 10, 41, 46),
              spawn('nidoranM', 10, 41, 46),
              spawn('nidoqueen', 1, 41, 46),
              spawn('nidoking', 1, 41, 46),
              spawn('exeggutor', 1, 41, 46),
            ],
          },
          fearowSpawn(),
          {
            method: 'water',
            spawns: [
              spawn('poliwag', 45, 41, 46),
              spawn('magikarp', 45, 41, 46),
              spawn('poliwhirl', 10, 41, 46),
            ],
          },
        ],
      },
    ],
    background: 'forest',
    exits: ['indigoPlateau', 'route22', 'victoryRoad'],
    label: 'Rota 23',
  },
  route24: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 30, 7, 12),
              spawn('venonat', 30, 7, 12),
              spawn('oddish', 20, 7, 12),
              spawn('psyduck', 20, 7, 12),
            ],
          },
          pidgeotSpawn(),
          tentacruelSpawn(),
        ],
      },
    ],
    background: 'forest',
    exits: ['ceruleanCity', 'route25'],
    label: 'Rota 24',
  },
  route25: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('pidgey', 30, 9, 14),
              spawn('venonat', 30, 9, 14),
              spawn('oddish', 20, 9, 14),
              spawn('psyduck', 20, 9, 14),
            ],
          },
          pidgeotSpawn(),
          {
            method: 'water',
            spawns: [
              spawn('tentacool', 45, 9, 14),
              spawn('magikarp', 45, 9, 14),
              spawn('tentacruel', 10, 9, 14),
            ],
          },
        ],
      },
    ],
    background: 'forest',
    exits: ['route24'],
    label: 'Rota 25',
  },
  ceruleanCave: {
    areas: [
      {
        area: 'f1',
        methods: [psyduckSpawn(), poliwrathSpawn()],
      },
      {
        area: 'f2',
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('golbat', 20, 51, 56),
              spawn('graveler', 20, 51, 56),
              spawn('lickitung', 15, 51, 56),
              spawn('rhyhorn', 10, 51, 56),
              spawn('rhydon', 10, 51, 56),
              spawn('chansey', 10, 51, 56),
              spawn('zubat', 5, 51, 56),
              spawn('geodude', 5, 51, 56),
              spawn('ditto', 5, 51, 56),
            ],
          },
        ],
      },
      {
        area: 'b1f',
        methods: [psyduckSpawn(), poliwrathSpawn()],
      },
    ],
    background: 'forest',
    exits: ['ceruleanCity'],
    label: 'Caverna Cerúleo',
  },
  ceruleanCity: {
    areas: [],
    background: 'city',
    exits: ['route24', 'route5', 'route9', 'route4', 'ceruleanCave'],
    label: 'Cidade Cerúleo',
  },
  cinnabarIsland: {
    areas: [],
    background: 'city',
    exits: ['route21', 'route20', 'pokemonMansion'],
    label: 'Ilha Cinábrio',
  },
  celadonCity: {
    areas: [],
    background: 'city',
    exits: ['route7', 'route16', 'rocketHideout'],
    label: 'Cidade Celadon',
  },
  diglettsCave: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('diglett', 85, 13, 18),
              spawn('zubat', 10, 13, 18),
              spawn('dugtrio', 5, 13, 18),
            ],
          },
        ],
      },
    ],
    background: 'forest',
    exits: ['route2', 'route11'],
    label: `Caverna Digglett's`,
  },
  fuchsiaCity: {
    areas: [],
    background: 'forest',
    exits: ['route19', 'route15', 'route18'],
    label: 'Cidade Fúcsia',
  },
  indigoPlateau: {
    areas: [],
    background: 'forest',
    exits: ['route23'],
    label: 'Planalto Índigo',
  },
  lavenderTown: {
    areas: [],
    background: 'city',
    exits: ['route10', 'route12', 'route8', 'pokemonTower'],
    label: 'Cidade Lavanda',
  },
  mtMoon: {
    areas: [
      {
        area: 'f1',
        methods: [onixSpawn()],
      },
      {
        area: 'b1f',
        methods: [onixSpawn()],
      },
      {
        area: 'b2f',
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('zubat', 40, 5, 10),
              spawn('geodude', 34, 5, 10),
              spawn('paras', 15, 5, 10),
              spawn('clefairy', 9, 5, 10),
              spawn('clefable', 1, 5, 10),
              spawn('onix', 1, 5, 10),
            ],
          },
        ],
      },
    ],
    background: 'city',
    exits: ['route4', 'route4'],
    label: 'Montanha Lua',
  },
  palletTown: {
    areas: [],
    background: 'city',
    exits: ['route1', 'route21'],
    label: 'Cidade Palete',
  },
  pewterCity: {
    areas: [],
    background: 'city',
    exits: ['route2', 'route3'],
    label: 'Cidade Peltre',
  },
  pokemonMansion: {
    areas: [
      {
        area: 'f1',
        methods: [dittoSpawn()],
      },
      {
        area: 'f2',
        methods: [dittoSpawn()],
      },
      {
        area: 'f3',
        methods: [dittoSpawn()],
      },
      {
        area: 'b1f',
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('grimer', 30, 39, 44),
              spawn('rattata', 20, 39, 44),
              spawn('raticate', 20, 39, 44),
              spawn('muk', 10, 39, 44),
              spawn('magmar', 10, 39, 44),
              spawn('ditto', 10, 39, 44),
            ],
          },
        ],
      },
    ],
    background: 'arena',
    exits: ['cinnabarIsland'],
    label: 'Mansão Pokémon',
  },
  pokemonTower: {
    areas: [
      {
        area: 'f3',
        methods: [haunterSpawn()],
      },
      {
        area: 'f4',
        methods: [haunterSpawn()],
      },
      {
        area: 'f5',
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('gastly', 70, 27, 32),
              spawn('cubone', 10, 27, 32),
              spawn('haunter', 10, 27, 32),
              spawn('zubat', 5, 27, 32),
              spawn('golbat', 5, 27, 32),
            ],
          },
        ],
      },
      {
        area: 'f6',
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('gastly', 60, 27, 32),
              spawn('haunter', 20, 27, 32),
              spawn('cubone', 10, 27, 32),
              spawn('zubat', 5, 27, 32),
              spawn('golbat', 5, 27, 32),
            ],
          },
        ],
      },
    ],
    background: 'city',
    exits: ['lavenderTown'],
    label: 'Torre Pokémon',
  },
  powerPlant: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('grimer', 25, 37, 42),
              spawn('magnemite', 23, 37, 42),
              spawn('voltorb', 23, 37, 42),
              spawn('electabuzz', 14, 37, 42),
              spawn('magneton', 5, 37, 42),
              spawn('muk', 5, 37, 42),
              spawn('electrode', 5, 37, 42),
            ],
          },
        ],
      },
    ],
    background: 'city',
    exits: ['route10', 'route10'],
    label: 'Usina Elétrica',
  },
  rockTunnel: {
    areas: [
      {
        area: 'f1',
        methods: [kangaskhanSpawn()],
      },
      {
        area: 'b1f',
        methods: [kangaskhanSpawn()],
      },
    ],
    background: 'city',
    exits: ['route10', 'route10'],
    label: 'Túnel de Pedra',
  },
  rocketHideout: {
    areas: [],
    background: 'city',
    exits: ['celadonCity'],
    label: 'Esconderijo Foguete',
  },
  saffronCity: {
    areas: [],
    background: 'city',
    exits: ['route5', 'route6', 'route8', 'route7', 'silphCo'],
    label: 'Cidade Açafrão',
  },
  seafoamIslands: {
    areas: [
      {
        area: 'f1',
        methods: [dewgongSpawn()],
      },
      {
        area: 'b1f',
        methods: [dewgongSpawn()],
      },
      {
        area: 'b2f',
        methods: [dewgongSpawn()],
      },
      {
        area: 'b3f',
        methods: [dewgongSpawn(), cloysterSpawn()],
      },
      {
        area: 'b4f',
        methods: [dewgongSpawn(), cloysterSpawn()],
      },
    ],
    background: 'glacier',
    exits: ['route20', 'route20'],
    label: 'Ilhas Espumas do Mar',
  },
  silphCo: {
    areas: [],
    background: 'city',
    exits: ['saffronCity'],
    label: 'Companhia Silph',
  },
  ssAnne: {
    areas: [],
    background: 'city',
    exits: ['vermilionCity'],
    label: 'SS Anne',
  },
  undergroundPath56: {
    areas: [],
    background: 'city',
    exits: ['route5', 'route6'],
    label: 'Caminho Subterrâneo 5-6',
  },
  undergroundPath78: {
    areas: [],
    background: 'city',
    exits: ['route7', 'route8'],
    label: 'Caminho Subterrâneo 7-8',
  },
  vermilionCity: {
    areas: [],
    background: 'city',
    exits: ['route6', 'ssAnne', 'route11'],
    label: 'Cidade Vermelhão',
  },
  victoryRoad: {
    areas: [
      {
        area: 'f1',
        methods: [rhydonSpawn()],
      },
      {
        area: 'f2',
        methods: [rhydonSpawn()],
      },
      {
        area: 'f3',
        methods: [rhydonSpawn()],
      },
    ],
    background: 'forest',
    exits: ['route23', 'route23'],
    label: 'Estrada da Vitória',
  },
  viridianCity: {
    areas: [],
    background: 'city',
    exits: ['route2', 'route1', 'route22'],
    label: 'Cidade Viridiana',
  },
  viridianForest: {
    areas: [
      {
        methods: [
          {
            method: 'ground',
            spawns: [
              spawn('caterpie', 25, 3, 6),
              spawn('weedle', 24, 3, 6),
              spawn('pidgey', 15, 3, 6),
              spawn('metapod', 10, 3, 6),
              spawn('kakuna', 10, 3, 6),
              spawn('oddish', 10, 3, 6),
              spawn('pikachu', 5, 3, 6),
              spawn('butterfree', 1, 3, 6),
            ],
          },
        ],
      },
    ],
    background: 'forest',
    exits: ['route2', 'route2'],
    label: 'Floresta Viridiana',
  },
};

export default locations;
