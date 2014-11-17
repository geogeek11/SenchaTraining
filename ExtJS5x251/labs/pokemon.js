var tpl = [
    '{name} ({pkdx_id})',
    '<p>Height: {height/10}m </p>',
    '<p>Weight: {weight/10}kg </p>',
    '<p>Hit Points: {hp} </p>',
    '<tpl if="growth_rate">',
      '<p>Growth Rate: {growth_rate}</p>',
    '</tpl>',
    '<p>Egg Groups: {[values.egg_groups.join(", ")]}</p>',
    '<p>Abilities: {[Ext.Array.pluck(values.abilities, "name").join(", ")]}</p>',
    '<p>Moves: {[Ext.Array.pluck(values.moves, "name").join(", ")]}</p>',
    '<tpl for="evolutions">',
      '<p>',
        'Evolution: {to}',
        '<tpl if="level">',
          ' (level {level})',
        '</tpl>',
      '</p>',
    '</tpl>',
];

Ext.create('Ext.Viewport', {
    layout: 'hbox',
    items: [{
        xtype: 'panel',
        tpl: tpl,
        data: getPikachu(),
        title: 'Pikachu',
    }, {
        xtype: 'panel',
        tpl: tpl,
        data: getBulbasaur(),
        title: 'Bulbasaur',
    }],
    defaults: {
        margin: 8,
        bodyPadding: 8,
        autoScroll: true,
        border: true,
        height: 200,
        width: 400
    },
    renderTo: Ext.getBody()
});

function getPikachu() {
    return {
        "abilities": [{
            "name": "static",
            "resource_uri": "/api/v1/ability/9/"
        }, {
            "name": "lightningrod",
            "resource_uri": "/api/v1/ability/31/"
        }],
        "attack": 55,
        "catch_rate": 0,
        "created": "2013-11-03T15:05:41.317235",
        "defense": 40,
        "egg_cycles": 0,
        "egg_groups": ["Fairy", "Ground"],
        "ev_yield": "",
        "evolutions": [{
            "method": "stone",
            "resource_uri": "/api/v1/pokemon/26/",
            "to": "Raichu"
        }],
        "exp": 105,
        "growth_rate": "",
        "happiness": 0,
        "height": "4",
        "hp": 35,
        "male_female_ratio": "",
        "modified": "2013-11-23T13:13:24.383925",
        "moves": [{
            "learn_type": "tutor",
            "name": "Covet",
            "resource_uri": "/api/v1/move/343/"
        }, {
            "learn_type": "machine",
            "name": "Wild-charge",
            "resource_uri": "/api/v1/move/528/"
        }, {
            "learn_type": "machine",
            "name": "Volt-switch",
            "resource_uri": "/api/v1/move/521/"
        }, {
            "learn_type": "machine",
            "name": "Echoed-voice",
            "resource_uri": "/api/v1/move/497/"
        }, {
            "learn_type": "machine",
            "name": "Round",
            "resource_uri": "/api/v1/move/496/"
        }, {
            "learn_type": "level up",
            "level": 18,
            "name": "Electro-ball",
            "resource_uri": "/api/v1/move/486/"
        }, {
            "learn_type": "tutor",
            "name": "Magnet-rise",
            "resource_uri": "/api/v1/move/393/"
        }, {
            "learn_type": "tutor",
            "name": "Signal-beam",
            "resource_uri": "/api/v1/move/324/"
        }, {
            "learn_type": "tutor",
            "name": "Knock-off",
            "resource_uri": "/api/v1/move/282/"
        }, {
            "learn_type": "tutor",
            "name": "Helping-hand",
            "resource_uri": "/api/v1/move/270/"
        }, {
            "learn_type": "machine",
            "name": "Charge-beam",
            "resource_uri": "/api/v1/move/451/"
        }, {
            "learn_type": "machine",
            "name": "Grass-knot",
            "resource_uri": "/api/v1/move/447/"
        }, {
            "learn_type": "machine",
            "name": "Captivate",
            "resource_uri": "/api/v1/move/445/"
        }, {
            "learn_type": "level up",
            "level": 37,
            "name": "Discharge",
            "resource_uri": "/api/v1/move/435/"
        }, {
            "learn_type": "machine",
            "name": "Fling",
            "resource_uri": "/api/v1/move/374/"
        }, {
            "learn_type": "level up",
            "level": 29,
            "name": "Feint",
            "resource_uri": "/api/v1/move/364/"
        }, {
            "learn_type": "machine",
            "name": "Natural-gift",
            "resource_uri": "/api/v1/move/363/"
        }, {
            "learn_type": "tutor",
            "name": "Counter",
            "resource_uri": "/api/v1/move/68/"
        }, {
            "learn_type": "machine",
            "name": "Shock-wave",
            "resource_uri": "/api/v1/move/351/"
        }, {
            "learn_type": "machine",
            "name": "Secret-power",
            "resource_uri": "/api/v1/move/290/"
        }, {
            "learn_type": "machine",
            "name": "Brick-break",
            "resource_uri": "/api/v1/move/280/"
        }, {
            "learn_type": "machine",
            "name": "Focus-punch",
            "resource_uri": "/api/v1/move/264/"
        }, {
            "learn_type": "machine",
            "name": "Facade",
            "resource_uri": "/api/v1/move/263/"
        }, {
            "learn_type": "machine",
            "name": "Rock-smash",
            "resource_uri": "/api/v1/move/249/"
        }, {
            "learn_type": "machine",
            "name": "Dig",
            "resource_uri": "/api/v1/move/91/"
        }, {
            "learn_type": "machine",
            "name": "Rain-dance",
            "resource_uri": "/api/v1/move/240/"
        }, {
            "learn_type": "machine",
            "name": "Hidden-power",
            "resource_uri": "/api/v1/move/237/"
        }, {
            "learn_type": "machine",
            "name": "Iron-tail",
            "resource_uri": "/api/v1/move/231/"
        }, {
            "learn_type": "machine",
            "name": "Dynamicpunch",
            "resource_uri": "/api/v1/move/223/"
        }, {
            "learn_type": "machine",
            "name": "Frustration",
            "resource_uri": "/api/v1/move/218/"
        }, {
            "learn_type": "machine",
            "name": "Return",
            "resource_uri": "/api/v1/move/216/"
        }, {
            "learn_type": "machine",
            "name": "Sleep-talk",
            "resource_uri": "/api/v1/move/214/"
        }, {
            "learn_type": "machine",
            "name": "Attract",
            "resource_uri": "/api/v1/move/213/"
        }, {
            "learn_type": "machine",
            "name": "Swagger",
            "resource_uri": "/api/v1/move/207/"
        }, {
            "learn_type": "machine",
            "name": "Rollout",
            "resource_uri": "/api/v1/move/205/"
        }, {
            "learn_type": "machine",
            "name": "Endure",
            "resource_uri": "/api/v1/move/203/"
        }, {
            "learn_type": "machine",
            "name": "Detect",
            "resource_uri": "/api/v1/move/197/"
        }, {
            "learn_type": "machine",
            "name": "Zap-cannon",
            "resource_uri": "/api/v1/move/192/"
        }, {
            "learn_type": "machine",
            "name": "Mud-slap",
            "resource_uri": "/api/v1/move/189/"
        }, {
            "learn_type": "machine",
            "name": "Protect",
            "resource_uri": "/api/v1/move/182/"
        }, {
            "learn_type": "machine",
            "name": "Curse",
            "resource_uri": "/api/v1/move/174/"
        }, {
            "learn_type": "machine",
            "name": "Snore",
            "resource_uri": "/api/v1/move/173/"
        }, {
            "learn_type": "machine",
            "name": "Defense-curl",
            "resource_uri": "/api/v1/move/111/"
        }, {
            "learn_type": "machine",
            "name": "Strength",
            "resource_uri": "/api/v1/move/70/"
        }, {
            "learn_type": "machine",
            "name": "Headbutt",
            "resource_uri": "/api/v1/move/29/"
        }, {
            "learn_type": "machine",
            "name": "Thunderpunch",
            "resource_uri": "/api/v1/move/9/"
        }, {
            "learn_type": "level up",
            "level": 50,
            "name": "Light-screen",
            "resource_uri": "/api/v1/move/113/"
        }, {
            "learn_type": "level up",
            "level": 6,
            "name": "Tail-whip",
            "resource_uri": "/api/v1/move/39/"
        }, {
            "learn_type": "level up",
            "level": 20,
            "name": "Slam",
            "resource_uri": "/api/v1/move/21/"
        }, {
            "learn_type": "machine",
            "name": "Substitute",
            "resource_uri": "/api/v1/move/164/"
        }, {
            "learn_type": "machine",
            "name": "Rest",
            "resource_uri": "/api/v1/move/156/"
        }, {
            "learn_type": "machine",
            "name": "Flash",
            "resource_uri": "/api/v1/move/148/"
        }, {
            "learn_type": "machine",
            "name": "Skull-bash",
            "resource_uri": "/api/v1/move/130/"
        }, {
            "learn_type": "level up",
            "level": 26,
            "name": "Swift",
            "resource_uri": "/api/v1/move/129/"
        }, {
            "learn_type": "machine",
            "name": "Bide",
            "resource_uri": "/api/v1/move/117/"
        }, {
            "learn_type": "machine",
            "name": "Reflect",
            "resource_uri": "/api/v1/move/115/"
        }, {
            "learn_type": "machine",
            "name": "Double-team",
            "resource_uri": "/api/v1/move/104/"
        }, {
            "learn_type": "machine",
            "name": "Mimic",
            "resource_uri": "/api/v1/move/102/"
        }, {
            "learn_type": "machine",
            "name": "Rage",
            "resource_uri": "/api/v1/move/99/"
        }, {
            "learn_type": "level up",
            "level": 16,
            "name": "Quick-attack",
            "resource_uri": "/api/v1/move/98/"
        }, {
            "learn_type": "level up",
            "level": 33,
            "name": "Agility",
            "resource_uri": "/api/v1/move/97/"
        }, {
            "learn_type": "machine",
            "name": "Toxic",
            "resource_uri": "/api/v1/move/92/"
        }, {
            "learn_type": "level up",
            "level": 43,
            "name": "Thunder",
            "resource_uri": "/api/v1/move/87/"
        }, {
            "learn_type": "level up",
            "level": 9,
            "name": "Thunder-wave",
            "resource_uri": "/api/v1/move/86/"
        }, {
            "learn_type": "machine",
            "name": "Thunderbolt",
            "resource_uri": "/api/v1/move/85/"
        }, {
            "learn_type": "level up",
            "level": 1,
            "name": "Thundershock",
            "resource_uri": "/api/v1/move/84/"
        }, {
            "learn_type": "machine",
            "name": "Seismic-toss",
            "resource_uri": "/api/v1/move/69/"
        }, {
            "learn_type": "machine",
            "name": "Submission",
            "resource_uri": "/api/v1/move/66/"
        }, {
            "learn_type": "other",
            "name": "Surf",
            "resource_uri": "/api/v1/move/57/"
        }, {
            "learn_type": "level up",
            "level": 1,
            "name": "Growl",
            "resource_uri": "/api/v1/move/45/"
        }, {
            "learn_type": "machine",
            "name": "Double-edge",
            "resource_uri": "/api/v1/move/38/"
        }, {
            "learn_type": "machine",
            "name": "Take-down",
            "resource_uri": "/api/v1/move/36/"
        }, {
            "learn_type": "machine",
            "name": "Body-slam",
            "resource_uri": "/api/v1/move/34/"
        }, {
            "learn_type": "machine",
            "name": "Mega-kick",
            "resource_uri": "/api/v1/move/25/"
        }, {
            "learn_type": "machine",
            "name": "Pay-day",
            "resource_uri": "/api/v1/move/6/"
        }, {
            "learn_type": "machine",
            "name": "Mega-punch",
            "resource_uri": "/api/v1/move/5/"
        }],
        "name": "Pikachu",
        "national_id": 25,
        "pkdx_id": 25,
        "resource_uri": "/api/v1/pokemon/25/",
        "sp_atk": 50,
        "sp_def": 50,
        "species": "",
        "speed": 90,
        "sprites": [{
            "name": "pikachu",
            "resource_uri": "/api/v1/sprite/26/"
        }],
        "total": 0,
        "types": [{
            "name": "electric",
            "resource_uri": "/api/v1/type/13/"
        }],
        "weight": "60"
    };

}

function getBulbasaur() {
    return {
        "abilities": [{
            "name": "chlorophyll",
            "resource_uri": "/api/v1/ability/34/"
        }, {
            "name": "overgrow",
            "resource_uri": "/api/v1/ability/65/"
        }],
        "attack": 49,
        "catch_rate": 0,
        "created": "2013-11-03T15:05:41.260678",
        "defense": 49,
        "egg_cycles": 0,
        "egg_groups": ["Plant", "Monster"],
        "ev_yield": "1 special attack",
        "evolutions": [{
            "level": 16,
            "method": "level_up",
            "resource_uri": "/api/v1/pokemon/2/",
            "to": "Ivysaur"
        }],
        "exp": 64,
        "growth_rate": "medium slow",
        "happiness": 0,
        "height": "7",
        "hp": 45,
        "male_female_ratio": "87.5/12.5",
        "modified": "2013-11-30T13:59:47.261100",
        "moves": [{
            "learn_type": "tutor",
            "name": "Bind",
            "resource_uri": "/api/v1/move/20/"
        }, {
            "learn_type": "tutor",
            "name": "Grass-pledge",
            "resource_uri": "/api/v1/move/520/"
        }, {
            "learn_type": "machine",
            "name": "Echoed-voice",
            "resource_uri": "/api/v1/move/497/"
        }, {
            "learn_type": "machine",
            "name": "Round",
            "resource_uri": "/api/v1/move/496/"
        }, {
            "learn_type": "machine",
            "name": "Venoshock",
            "resource_uri": "/api/v1/move/474/"
        }, {
            "learn_type": "egg move",
            "name": "Power-whip",
            "resource_uri": "/api/v1/move/438/"
        }, {
            "learn_type": "egg move",
            "name": "Sludge",
            "resource_uri": "/api/v1/move/124/"
        }, {
            "learn_type": "tutor",
            "name": "String-shot",
            "resource_uri": "/api/v1/move/81/"
        }, {
            "learn_type": "tutor",
            "name": "Knock-off",
            "resource_uri": "/api/v1/move/282/"
        }, {
            "learn_type": "machine",
            "name": "Grass-knot",
            "resource_uri": "/api/v1/move/447/"
        }, {
            "learn_type": "machine",
            "name": "Captivate",
            "resource_uri": "/api/v1/move/445/"
        }, {
            "learn_type": "egg move",
            "name": "Leaf-storm",
            "resource_uri": "/api/v1/move/437/"
        }, {
            "learn_type": "machine",
            "name": "Energy-ball",
            "resource_uri": "/api/v1/move/412/"
        }, {
            "learn_type": "level up",
            "level": 37,
            "name": "Seed-bomb",
            "resource_uri": "/api/v1/move/402/"
        }, {
            "learn_type": "level up",
            "level": 31,
            "name": "Worry-seed",
            "resource_uri": "/api/v1/move/388/"
        }, {
            "learn_type": "machine",
            "name": "Natural-gift",
            "resource_uri": "/api/v1/move/363/"
        }, {
            "learn_type": "egg move",
            "name": "Ingrain",
            "resource_uri": "/api/v1/move/275/"
        }, {
            "learn_type": "egg move",
            "name": "Nature-power",
            "resource_uri": "/api/v1/move/267/"
        }, {
            "learn_type": "egg move",
            "name": "Amnesia",
            "resource_uri": "/api/v1/move/133/"
        }, {
            "learn_type": "egg move",
            "name": "Magical-leaf",
            "resource_uri": "/api/v1/move/345/"
        }, {
            "learn_type": "machine",
            "name": "Bullet-seed",
            "resource_uri": "/api/v1/move/331/"
        }, {
            "learn_type": "egg move",
            "name": "Grasswhistle",
            "resource_uri": "/api/v1/move/320/"
        }, {
            "learn_type": "machine",
            "name": "Secret-power",
            "resource_uri": "/api/v1/move/290/"
        }, {
            "learn_type": "machine",
            "name": "Facade",
            "resource_uri": "/api/v1/move/263/"
        }, {
            "learn_type": "machine",
            "name": "Rock-smash",
            "resource_uri": "/api/v1/move/249/"
        }, {
            "learn_type": "machine",
            "name": "Sludge-bomb",
            "resource_uri": "/api/v1/move/188/"
        }, {
            "learn_type": "machine",
            "name": "Strength",
            "resource_uri": "/api/v1/move/70/"
        }, {
            "learn_type": "machine",
            "name": "Sunny-day",
            "resource_uri": "/api/v1/move/241/"
        }, {
            "learn_type": "machine",
            "name": "Hidden-power",
            "resource_uri": "/api/v1/move/237/"
        }, {
            "learn_type": "level up",
            "level": 39,
            "name": "Synthesis",
            "resource_uri": "/api/v1/move/235/"
        }, {
            "learn_type": "level up",
            "level": 25,
            "name": "Sweet-scent",
            "resource_uri": "/api/v1/move/230/"
        }, {
            "learn_type": "egg move",
            "name": "Safeguard",
            "resource_uri": "/api/v1/move/219/"
        }, {
            "learn_type": "machine",
            "name": "Frustration",
            "resource_uri": "/api/v1/move/218/"
        }, {
            "learn_type": "machine",
            "name": "Return",
            "resource_uri": "/api/v1/move/216/"
        }, {
            "learn_type": "machine",
            "name": "Sleep-talk",
            "resource_uri": "/api/v1/move/214/"
        }, {
            "learn_type": "machine",
            "name": "Attract",
            "resource_uri": "/api/v1/move/213/"
        }, {
            "learn_type": "machine",
            "name": "Fury-cutter",
            "resource_uri": "/api/v1/move/210/"
        }, {
            "learn_type": "machine",
            "name": "Swagger",
            "resource_uri": "/api/v1/move/207/"
        }, {
            "learn_type": "egg move",
            "name": "Charm",
            "resource_uri": "/api/v1/move/204/"
        }, {
            "learn_type": "machine",
            "name": "Endure",
            "resource_uri": "/api/v1/move/203/"
        }, {
            "learn_type": "machine",
            "name": "Giga-drain",
            "resource_uri": "/api/v1/move/202/"
        }, {
            "learn_type": "machine",
            "name": "Mud-slap",
            "resource_uri": "/api/v1/move/189/"
        }, {
            "learn_type": "machine",
            "name": "Protect",
            "resource_uri": "/api/v1/move/182/"
        }, {
            "learn_type": "machine",
            "name": "Curse",
            "resource_uri": "/api/v1/move/174/"
        }, {
            "learn_type": "machine",
            "name": "Snore",
            "resource_uri": "/api/v1/move/173/"
        }, {
            "learn_type": "machine",
            "name": "Flash",
            "resource_uri": "/api/v1/move/148/"
        }, {
            "learn_type": "egg move",
            "name": "Skull-bash",
            "resource_uri": "/api/v1/move/130/"
        }, {
            "learn_type": "egg move",
            "name": "Light-screen",
            "resource_uri": "/api/v1/move/113/"
        }, {
            "learn_type": "machine",
            "name": "Defense-curl",
            "resource_uri": "/api/v1/move/111/"
        }, {
            "learn_type": "egg move",
            "name": "Petal-dance",
            "resource_uri": "/api/v1/move/80/"
        }, {
            "learn_type": "machine",
            "name": "Headbutt",
            "resource_uri": "/api/v1/move/29/"
        }, {
            "learn_type": "egg move",
            "name": "Razor-wind",
            "resource_uri": "/api/v1/move/13/"
        }, {
            "learn_type": "machine",
            "name": "Substitute",
            "resource_uri": "/api/v1/move/164/"
        }, {
            "learn_type": "machine",
            "name": "Rest",
            "resource_uri": "/api/v1/move/156/"
        }, {
            "learn_type": "machine",
            "name": "Bide",
            "resource_uri": "/api/v1/move/117/"
        }, {
            "learn_type": "machine",
            "name": "Reflect",
            "resource_uri": "/api/v1/move/115/"
        }, {
            "learn_type": "machine",
            "name": "Double-team",
            "resource_uri": "/api/v1/move/104/"
        }, {
            "learn_type": "machine",
            "name": "Mimic",
            "resource_uri": "/api/v1/move/102/"
        }, {
            "learn_type": "machine",
            "name": "Rage",
            "resource_uri": "/api/v1/move/99/"
        }, {
            "learn_type": "machine",
            "name": "Toxic",
            "resource_uri": "/api/v1/move/92/"
        }, {
            "learn_type": "level up",
            "level": 41,
            "name": "Sleep-powder",
            "resource_uri": "/api/v1/move/79/"
        }, {
            "learn_type": "level up",
            "level": 20,
            "name": "Poisonpowder",
            "resource_uri": "/api/v1/move/77/"
        }, {
            "learn_type": "level up",
            "level": 48,
            "name": "Solarbeam",
            "resource_uri": "/api/v1/move/76/"
        }, {
            "learn_type": "level up",
            "level": 27,
            "name": "Razor-leaf",
            "resource_uri": "/api/v1/move/75/"
        }, {
            "learn_type": "level up",
            "level": 34,
            "name": "Growth",
            "resource_uri": "/api/v1/move/74/"
        }, {
            "learn_type": "level up",
            "level": 7,
            "name": "Leech-seed",
            "resource_uri": "/api/v1/move/73/"
        }, {
            "learn_type": "machine",
            "name": "Mega-drain",
            "resource_uri": "/api/v1/move/72/"
        }, {
            "learn_type": "level up",
            "level": 1,
            "name": "Growl",
            "resource_uri": "/api/v1/move/45/"
        }, {
            "learn_type": "machine",
            "name": "Double-edge",
            "resource_uri": "/api/v1/move/38/"
        }, {
            "learn_type": "machine",
            "name": "Take-down",
            "resource_uri": "/api/v1/move/36/"
        }, {
            "learn_type": "machine",
            "name": "Body-slam",
            "resource_uri": "/api/v1/move/34/"
        }, {
            "learn_type": "level up",
            "level": 1,
            "name": "Tackle",
            "resource_uri": "/api/v1/move/33/"
        }, {
            "learn_type": "level up",
            "level": 13,
            "name": "Vine-whip",
            "resource_uri": "/api/v1/move/22/"
        }, {
            "learn_type": "machine",
            "name": "Cut",
            "resource_uri": "/api/v1/move/15/"
        }, {
            "learn_type": "machine",
            "name": "Swords-dance",
            "resource_uri": "/api/v1/move/14/"
        }],
        "name": "Bulbasaur",
        "national_id": 1,
        "pkdx_id": 1,
        "resource_uri": "/api/v1/pokemon/1/",
        "sp_atk": 65,
        "sp_def": 65,
        "species": "seed pokemon",
        "speed": 45,
        "sprites": [{
            "name": "bulbasaur",
            "resource_uri": "/api/v1/sprite/2/"
        }, {
            "name": "bulbasaur",
            "resource_uri": "/api/v1/sprite/1/"
        }],
        "total": 0,
        "types": [{
            "name": "poison",
            "resource_uri": "/api/v1/type/4/"
        }, {
            "name": "grass",
            "resource_uri": "/api/v1/type/12/"
        }],
        "weight": "69"
    };
}
