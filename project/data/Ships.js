let ships=[
    {
      "name": "Aurora MR",
      "type": "Vielseitiges Einsteigerschiff",
      "manufacturer": "MISC",
      "role": "Multirole",
      "max_speed": "2000 m/s",
      "cargo_capacity": "8 SCU",
      "components": {
        "engines": {
          "name": "KR-26",
          "size": "Size 1"
        },
        "shield": {
          "name": "FR-66",
          "size": "Size 1"
        },
        "power_plant": {
          "name": "PR-16",
          "size": "Size 1"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 1"
        },
        "weapons": [
          {
            "name": "Size 1 Laser Repeater",
            "size": "Size 1"
          }
        ]
      }
    },
    {
      "name": "Mustang Alpha",
      "type": "Schneller und agiler Jäger",
      "manufacturer": "Consolidated Outland",
      "role": "Fighter",
      "max_speed": "2200 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-4",
          "size": "Size 1"
        },
        "shield": {
          "name": "FR-16",
          "size": "Size 1"
        },
        "power_plant": {
          "name": "PR-16",
          "size": "Size 1"
        },
        "cooler": {
          "name": "TR-6",
          "size": "Size 1"
        },
        "weapons": [
          {
            "name": "Size 1 Laser Repeater",
            "size": "Size 1"
          }
        ]
      }
    },
    {
      "name": "Constellation Andromeda",
      "type": "Mittelgroßes Mehrzweckschiff",
      "manufacturer": "Aegis Dynamics",
      "role": "Multirole, Gunship",
      "max_speed": "2050 m/s",
      "cargo_capacity": "66 SCU",
      "components": {
        "engines": {
          "name": "TR-15",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-III",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-22",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-9",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 4 Laser Cannon",
            "size": "Size 4"
          },
          {
            "name": "Size 4 Torpedo",
            "size": "Size 4"
          }
        ]
      }
    },
    {
      "name": "Gladius",
      "type": "Schneller und wendiger Kampfschiff-Jäger",
      "manufacturer": "Aegis Dynamics",
      "role": "Light Fighter",
      "max_speed": "2400 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-3",
          "size": "Size 1"
        },
        "shield": {
          "name": "FR-66",
          "size": "Size 1"
        },
        "power_plant": {
          "name": "PR-15",
          "size": "Size 1"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 1"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Hornet F7C",
      "type": "Robustes Kampfschiff",
      "manufacturer": "Anvil Aerospace",
      "role": "Heavy Fighter",
      "max_speed": "2100 m/s",
      "cargo_capacity": "4 SCU",
      "components": {
        "engines": {
          "name": "TR-5",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-18",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-7",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 3 Laser Cannon",
            "size": "Size 3"
          },
          {
            "name": "Size 2 Missile",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "M50 Interceptor",
      "type": "Extrem schnelles und wendiges Schiff",
      "manufacturer": "MISC",
      "role": "Interceptor",
      "max_speed": "2700 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-12",
          "size": "Size 1"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 1"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 1"
        },
        "cooler": {
          "name": "TR-6",
          "size": "Size 1"
        },
        "weapons": [
          {
            "name": "Size 1 Laser Repeater",
            "size": "Size 1"
          }
        ]
      }
    },
    {
      "name": "Freelancer",
      "type": "Mehrzweck-Transporter",
      "manufacturer": "MISC",
      "role": "Transport, Cargo Hauler",
      "max_speed": "1900 m/s",
      "cargo_capacity": "66 SCU",
      "components": {
        "engines": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "shield": {
          "name": "S-III",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-18",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-9",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Cannon",
            "size": "Size 2"
          },
          {
            "name": "Size 2 Torpedo",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Drake Cutlass Black",
      "type": "Mehrzweckschiff für Piraten und Frachttransport",
      "manufacturer": "Drake Interplanetary",
      "role": "Gunship, Transporter",
      "max_speed": "2000 m/s",
      "cargo_capacity": "46 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-7",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Cannon",
            "size": "Size 2"
          },
          {
            "name": "Size 3 Torpedo",
            "size": "Size 3"
          },
          {
            "name": "Size 2 Rocket Pod",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Vanguard Sentinel",
      "type": "Langstrecken-Kampfschiff",
      "manufacturer": "Aegis Dynamics",
      "role": "Heavy Fighter",
      "max_speed": "1950 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-9",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-III",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-10",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 4 Laser Cannon",
            "size": "Size 4"
          },
          {
            "name": "Size 3 Torpedo",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Reclaimer",
      "type": "Schrottschiff",
      "manufacturer": "Drake Interplanetary",
      "role": "Abfallentsorgung, Bergung",
      "max_speed": "1000 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-6",
          "size": "Size 2"
        },
        "shield": {
          "name": "S-III",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 3 Laser Cannon",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Starfarer Gemini",
      "type": "Tankerschiff",
      "manufacturer": "MISC",
      "role": "Transport von Treibstoff",
      "max_speed": "1600 m/s",
      "cargo_capacity": "295 SCU",
      "components": {
        "engines": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 3 Laser Cannon",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Banu Defender",
      "type": "Wendiger Jäger",
      "manufacturer": "Banu",
      "role": "Light Fighter",
      "max_speed": "2200 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-7",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-9",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          },
          {
            "name": "Size 1 Missile",
            "size": "Size 1"
          }
        ]
      }
    },
    {
      "name": "Anvil Carrack",
      "type": "Expeditionsschiff",
      "manufacturer": "Anvil Aerospace",
      "role": "Exploration",
      "max_speed": "1950 m/s",
      "cargo_capacity": "460 SCU",
      "components": {
        "engines": {
          "name": "TR-15",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-III",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-22",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-10",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 4 Laser Cannon",
            "size": "Size 4"
          },
          {
            "name": "Size 3 Torpedo",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Aegis Sabre",
      "type": "Stealth-Kampfschiff",
      "manufacturer": "Aegis Dynamics",
      "role": "Stealth Fighter",
      "max_speed": "2350 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-12",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Cannon",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Hammerhead",
      "type": "Großes Schiff für die Verteidigung",
      "manufacturer": "Aegis Dynamics",
      "role": "Anti-fighter Gunship",
      "max_speed": "1800 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-11",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 4 Laser Cannon",
            "size": "Size 4"
          },
          {
            "name": "Size 2 Torpedo",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Vanguard Hoplite",
      "type": "Schweres Landungsschiff",
      "manufacturer": "Aegis Dynamics",
      "role": "Troop Transport, Assault",
      "max_speed": "2100 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-9",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-III",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-22",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-10",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 4 Laser Cannon",
            "size": "Size 4"
          },
          {
            "name": "Size 3 Torpedo",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "MISC Starfarer",
      "type": "Tankerschiff",
      "manufacturer": "MISC",
      "role": "Fuel Hauler",
      "max_speed": "1600 m/s",
      "cargo_capacity": "320 SCU",
      "components": {
        "engines": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 3 Laser Cannon",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Prowler",
      "type": "Stealth-Landungsschiff",
      "manufacturer": "Banu",
      "role": "Troop Transport, Stealth",
      "max_speed": "2000 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 3"
        },
        "shield": {
          "name": "FR-66",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Reclaimer",
      "type": "Schrottschiff",
      "manufacturer": "Drake Interplanetary",
      "role": "Bergungs- und Recycling-Schiff",
      "max_speed": "1000 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-6",
          "size": "Size 2"
        },
        "shield": {
          "name": "S-III",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 3 Laser Cannon",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Vulcan",
      "type": "Technisches Support-Schiff",
      "manufacturer": "Aegis Dynamics",
      "role": "Repair, Refuel, Rearm",
      "max_speed": "1600 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-66",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-18",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-6",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 1 Laser Repeater",
            "size": "Size 1"
          }
        ]
      }
    },
    {
      "name": "Star Runner",
      "type": "Transport- und Raubzugschiff",
      "manufacturer": "MISC",
      "role": "Transporter, Smuggler",
      "max_speed": "2150 m/s",
      "cargo_capacity": "120 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-22",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-7",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          },
          {
            "name": "Size 2 Missile",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Orion",
      "type": "Bergungs- und Abbauschiff",
      "manufacturer": "MISC",
      "role": "Mining",
      "max_speed": "1700 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-11",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 3 Laser Cannon",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Karak",
      "type": "Bergungsschiff",
      "manufacturer": "Banu",
      "role": "Recovery Ship",
      "max_speed": "2000 m/s",
      "cargo_capacity": "40 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Crusader Mercury Star Runner",
      "type": "Multirole Transporter",
      "manufacturer": "Crusader Industries",
      "role": "Transport, Smuggler",
      "max_speed": "2150 m/s",
      "cargo_capacity": "120 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          },
          {
            "name": "Size 2 Missile",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Banu Merchantman",
      "type": "Handels- und Transportschiff",
      "manufacturer": "Banu",
      "role": "Transporter",
      "max_speed": "1800 m/s",
      "cargo_capacity": "400 SCU",
      "components": {
        "engines": {
          "name": "TR-15",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-11",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 4 Laser Cannon",
            "size": "Size 4"
          }
        ]
      }
    },
    {
      "name": "Argo Mole",
      "type": "Bergungs- und Abbau-Schiff",
      "manufacturer": "Argo Astronautics",
      "role": "Mining, Prospecting",
      "max_speed": "1650 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-9",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Vanguard Warden",
      "type": "Kampfschiff",
      "manufacturer": "Aegis Dynamics",
      "role": "Heavy Fighter",
      "max_speed": "2150 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 4 Laser Cannon",
            "size": "Size 4"
          },
          {
            "name": "Size 3 Torpedo",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Scorpius",
      "type": "Kampfschiff",
      "manufacturer": "Anvil Aerospace",
      "role": "Heavy Fighter",
      "max_speed": "2250 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-22",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          },
          {
            "name": "Size 3 Missile",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Crusader A2 Hercules",
      "type": "Transport- und Bomber-Schiff",
      "manufacturer": "Crusader Industries",
      "role": "Transport, Bomber",
      "max_speed": "1600 m/s",
      "cargo_capacity": "696 SCU",
      "components": {
        "engines": {
          "name": "TR-15",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 4 Laser Cannon",
            "size": "Size 4"
          },
          {
            "name": "Size 3 Torpedo",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Genesis Starliner",
      "type": "Passagier- und Transportschiff",
      "manufacturer": "Crusader Industries",
      "role": "Passagiertransport",
      "max_speed": "1400 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-6",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-66",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-18",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-7",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Cannon",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Eclipse",
      "type": "Stealth-Bomber",
      "manufacturer": "Aegis Dynamics",
      "role": "Stealth Bomber",
      "max_speed": "2250 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 3"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-22",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 3 Torpedo",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Aegis Reclaimer",
      "type": "Schrottschiff",
      "manufacturer": "Aegis Dynamics",
      "role": "Bergung, Recycling",
      "max_speed": "1000 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-6",
          "size": "Size 2"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-18",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-7",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Cannon",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Anvil Hornet F7C",
      "type": "Kampfschiff",
      "manufacturer": "Anvil Aerospace",
      "role": "Fighter",
      "max_speed": "2200 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-66",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          },
          {
            "name": "Size 3 Missile",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Tumbril Cyclone",
      "type": "Fahrzeug",
      "manufacturer": "Tumbril Land Systems",
      "role": "All-Terrain Vehicle",
      "max_speed": "200 m/s",
      "cargo_capacity": "4 SCU",
      "components": {
        "engines": {
          "name": "TR-4",
          "size": "Size 1"
        },
        "shield": {
          "name": "S-I",
          "size": "Size 1"
        },
        "power_plant": {
          "name": "PR-10",
          "size": "Size 1"
        },
        "cooler": {
          "name": "TR-5",
          "size": "Size 1"
        },
        "weapons": [
          {
            "name": "Size 1 Laser Repeater",
            "size": "Size 1"
          }
        ]
      }
    },
    {
      "name": "Drake Cutlass Black",
      "type": "Multirole Schiffs",
      "manufacturer": "Drake Interplanetary",
      "role": "Raubzug, Transport",
      "max_speed": "2300 m/s",
      "cargo_capacity": "46 SCU",
      "components": {
        "engines": {
          "name": "TR-15",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-11",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          },
          {
            "name": "Size 2 Torpedo",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Aegis Gladius",
      "type": "Leichtes Kampfschiff",
      "manufacturer": "Aegis Dynamics",
      "role": "Light Fighter",
      "max_speed": "2500 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-9",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Drake Vulture",
      "type": "Schrottschiff",
      "manufacturer": "Drake Interplanetary",
      "role": "Salvage and Recycling",
      "max_speed": "1100 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-6",
          "size": "Size 2"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-18",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-7",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 1 Laser Repeater",
            "size": "Size 1"
          }
        ]
      }
    },
    {
      "name": "Aegis Eclipse",
      "type": "Stealth-Bomber",
      "manufacturer": "Aegis Dynamics",
      "role": "Stealth Bomber",
      "max_speed": "2250 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 3"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-22",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 3 Torpedo",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "RSI Constellation Andromeda",
      "type": "Multirole Kampfschiff",
      "manufacturer": "Roberts Space Industries",
      "role": "Fighter, Bomber, Transport",
      "max_speed": "2000 m/s",
      "cargo_capacity": "60 SCU",
      "components": {
        "engines": {
          "name": "TR-10",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 3 Laser Repeater",
            "size": "Size 3"
          },
          {
            "name": "Size 2 Torpedo",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "MISC Freelancer",
      "type": "Transport-Schiff",
      "manufacturer": "MISC",
      "role": "Transporter",
      "max_speed": "2000 m/s",
      "cargo_capacity": "66 SCU",
      "components": {
        "engines": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-76",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-22",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-7",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Crusader Hercules Starlifter",
      "type": "Transport-Schiff",
      "manufacturer": "Crusader Industries",
      "role": "Cargo Transport",
      "max_speed": "1800 m/s",
      "cargo_capacity": "696 SCU",
      "components": {
        "engines": {
          "name": "TR-15",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 4 Laser Cannon",
            "size": "Size 4"
          }
        ]
      }
    },
    {
      "name": "Anvil Arrow",
      "type": "Leichter Jäger",
      "manufacturer": "Anvil Aerospace",
      "role": "Light Fighter",
      "max_speed": "2700 m/s",
      "cargo_capacity": "0 SCU",
      "components": {
        "engines": {
          "name": "TR-9",
          "size": "Size 2"
        },
        "shield": {
          "name": "FR-66",
          "size": "Size 2"
        },
        "power_plant": {
          "name": "PR-20",
          "size": "Size 2"
        },
        "cooler": {
          "name": "TR-8",
          "size": "Size 2"
        },
        "weapons": [
          {
            "name": "Size 2 Laser Repeater",
            "size": "Size 2"
          }
        ]
      }
    },
    {
      "name": "Drake Caterpillar",
      "type": "Transport- und Raubzugschiff",
      "manufacturer": "Drake Interplanetary",
      "role": "Transporter",
      "max_speed": "1800 m/s",
      "cargo_capacity": "456 SCU",
      "components": {
        "engines": {
          "name": "TR-15",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 3 Laser Repeater",
            "size": "Size 3"
          }
        ]
      }
    },
    {
      "name": "Anvil Carrack",
      "type": "Erkundungs- und Forschungsschiff",
      "manufacturer": "Anvil Aerospace",
      "role": "Exploration, Research",
      "max_speed": "1800 m/s",
      "cargo_capacity": "450 SCU",
      "components": {
        "engines": {
          "name": "TR-12",
          "size": "Size 3"
        },
        "shield": {
          "name": "S-VI",
          "size": "Size 3"
        },
        "power_plant": {
          "name": "PR-24",
          "size": "Size 3"
        },
        "cooler": {
          "name": "TR-11",
          "size": "Size 3"
        },
        "weapons": [
          {
            "name": "Size 3 Laser Cannon",
            "size": "Size 3"
          }
        ]
      }
    }
  ]
    
          