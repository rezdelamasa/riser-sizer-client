const fixtures = [
  {
    name: "Bathroom Group",
    occupancy: "Private",
    fixtureType: "Flush Tank",
    loadValues: {
      cold: 2.7,
      hot: 1.5,
      total: 3.6
    },
    shorthand: {
      name: "BTG",
      occupancy: "Pr.",
      fixtureType: "FT"
    }
  },
  {
    name: "Bathroom Group",
    occupancy: "Private",
    fixtureType: "Flushometer Valve",
    loadValues: {
      cold: 6.0,
      hot: 3.0,
      total: 8.0
    },
    shorthand: {
      name: "BTG",
      occupancy: "Pr.",
      fixtureType: "FV"
    }
  },
  {
    name: "Bathtub",
    occupancy: "Private",
    fixtureType: "Faucet",
    loadValues: {
      cold: 1.0,
      hot: 1.0,
      total: 1.4
    },
    shorthand: {
      name: "BT",
      occupancy: "Pr.",
      fixtureType: "Fa."
    }
  },
  {
    name: "Bathtub",
    occupancy: "Public",
    fixtureType: "Faucet",
    loadValues: {
      cold: 3.0,
      hot: 3.0,
      total: 4.0
    },
    shorthand: {
      name: "BT",
      occupancy: "Pu.",
      fixtureType: "Fa."
    }
  },
  {
    name: "Bidet",
    occupancy: "Private",
    fixtureType: "Faucet",
    loadValues: {
      cold: 1.5,
      hot: 1.5,
      total: 2.0
    },
    shorthand: {
      occupancy: "Pr.",
      fixtureType: "Fa."
    }
  },
  {
    name: "Combination Fixture",
    occupancy: "Private",
    fixtureType: "Faucet",
    loadValues: {
      cold: 2.25,
      hot: 2.25,
      total: 3.0
    },
    shorthand: {
      occupancy: "Pr.",
      fixtureType: "Fa.",
      name: "Combo"
    }
  },
  {
    name: "Dishwashing Machine",
    occupancy: "Private",
    fixtureType: "Faucet",
    loadValues: {
      cold: 1.0,
      hot: 1.0,
      total: 1.4
    },
    shorthand: {
      occupancy: "Pr.",
      fixtureType: "Fa.",
      name: "DW"
    }
  },
  {
    name: "Drinking Fountain",
    occupancy: "Offices, etc.",
    fixtureType: '3/8" valve',
    loadValues: {
      cold: 0.25,
      hot: 0,
      total: 0.25
    },
    shorthand: {
      occupancy: "Of.",
      fixtureType: '3/8" V',
      nane: "DF"
    }
  },
  {
    name: "Kitchen Sink",
    occupancy: "Private",
    fixtureType: "Faucet",
    loadValues: {
      cold: 1.0,
      hot: 1.0,
      total: 1.4
    },
    shorthand: {
      name: "SK",
      occupancy: "Pr.",
      fixtureType: "Fa."
    }
  },
  {
    name: "Kitchen Sink",
    occupancy: "Hotel, restaurant",
    fixtureType: "Faucet",
    loadValues: {
      cold: 3.0,
      hot: 3.0,
      total: 4.0
    },
    shorthand: {
      name: "SK",
      occupancy: "H/R",
      fixtureType: "Fa."
    }
  },
  {
    name: "Laundry Trays (1 to 3)",
    occupancy: "Private",
    fixtureType: "Faucet",
    loadValues: {
      cold: 1.0,
      hot: 1.0,
      total: 1.4
    },
    shorthand: {
      occupancy: "Pr.",
      fixtureType: "Fa.",
      name: "Laun. Trays 1-3"
    }
  },
  {
    name: "Lavatory",
    occupancy: "Private",
    fixtureType: "Faucet",
    loadValues: {
      cold: 0.5,
      hot: 0.5,
      total: 0.7
    },
    shorthand: {
      name: "Lav",
      occupancy: "Pr.",
      fixtureType: "Fa."
    }
  },
  {
    name: "Lavatory",
    occupancy: "Public",
    fixtureType: "Faucet",
    loadValues: {
      cold: 1.5,
      hot: 1.5,
      total: 2.0
    },
    shorthand: {
      name: "Lav",
      occupancy: "Pu.",
      fixtureType: "Fa."
    }
  },
  {
    name: "Service Sink",
    occupancy: "Offices, etc.",
    fixtureType: "Faucet",
    loadValues: {
      cold: 2.25,
      hot: 2.25,
      total: 3.0
    },
    shorthand: {
      name: "SS",
      occupancy: "Of.",
      fixtureType: "Fa."
    }
  },
  {
    name: "Shower Head",
    occupancy: "Private",
    fixtureType: "Mixing Valve",
    loadValues: {
      cold: 1.0,
      hot: 1.0,
      total: 1.4
    },
    shorthand: {
      name: "SH",
      occupancy: "Pr.",
      fixtureType: "MV"
    }
  },
  {
    name: "Shower Head",
    occupancy: "Public",
    fixtureType: "Mixing Valve",
    loadValues: {
      cold: 3.0,
      hot: 3.0,
      total: 4.0
    },
    shorthand: {
      name: "SH",
      occupancy: "Pu.",
      fixtureType: "MV"
    }
  },
  {
    name: "Urinal",
    occupancy: "Public",
    fixtureType: '1" Flushometer Valve',
    loadValues: {
      cold: 10.0,
      hot: 0,
      total: 10.0
    },
    shorthand: {
      name: "UR",
      occupancy: "Pu.",
      fixtureType: '1" FV'
    }
  },
  {
    name: "Urinal",
    occupancy: "Public",
    fixtureType: '3/4" Flushometer Valve',
    loadValues: {
      cold: 5.0,
      hot: 0,
      total: 5.0
    },
    shorthand: {
      name: "UR",
      occupancy: "Pu.",
      fixtureType: '3/4" FV'
    }
  },
  {
    name: "Urinal",
    occupancy: "Public",
    fixtureType: 'Flush Tank',
    loadValues: {
      cold: 3.0,
      hot: 0,
      total: 3.0
    },
    shorthand: {
      name: "UR",
      occupancy: "Pu.",
      fixtureType: "FT"
    }
  },
  {
    name: "Washing Machine (8 lb)",
    occupancy: "Private",
    fixtureType: 'Automatic',
    loadValues: {
      cold: 1.0,
      hot: 1.0,
      total: 1.4
    },
    shorthand: {
      occupancy: "Pr.",
      fixtureType: "Auto",
      name: "WM (8lb)"
    }
  },
  {
    name: "Washing Machine (8 lb)",
    occupancy: "Public",
    fixtureType: 'Automatic',
    loadValues: {
      cold: 2.25,
      hot: 2.25,
      total: 3.0
    },
    shorthand: {
      occupancy: "Pu.",
      fixtureType: "Auto",
      name: "WM (8lb)"
    }
  },
  {
    name: "Washing Machine (15 lb)",
    occupancy: "Public",
    fixtureType: 'Automatic',
    loadValues: {
      cold: 3.0,
      hot: 3.0,
      total: 4.0
    },
    shorthand: {
      occupancy: "Pu.",
      fixtureType: "Auto",
      name: "WM (15lb)"
    }
  },
  {
    name: "Water Closet",
    occupancy: "Private",
    fixtureType: 'Flushometer Valve',
    loadValues: {
      cold: 6.0,
      hot: 0,
      total: 6.0
    },
    shorthand: {
      name: "WC",
      occupancy: "Pr.",
      fixtureType: "FV"
    }
  },
  {
    name: "Water Closet",
    occupancy: "Private",
    fixtureType: 'Flush Tank',
    loadValues: {
      cold: 2.2,
      hot: 0,
      total: 6.0
    },
    shorthand: {
      name: "WC",
      occupancy: "Pr.",
      fixtureType: "FT"
    }
  },
  {
    name: "Water Closet",
    occupancy: "Public",
    fixtureType: 'Flushometer Valve',
    loadValues: {
      cold: 10.0,
      hot: 0,
      total: 10.0
    },
    shorthand: {
      name: "WC",
      occupancy: "Pu.",
      fixtureType: "FV"
    }
  },
  {
    name: "Water Closet",
    occupancy: "Public",
    fixtureType: 'Flushometer Tank',
    loadValues: {
      cold: 5.0,
      hot: 0,
      total: 5.0
    },
    shorthand: {
      name: "WC",
      occupancy: "Pu.",
      fixtureType: "FT"
    }
  },
  {
    name: "Water Closet",
    occupancy: "Public or Private",
    fixtureType: 'Flushometer Tank',
    loadValues: {
      cold: 2.0,
      hot: 0,
      total: .20
    },
    shorthand: {
      name: "WC",
      occupancy: "Pu./Pr.",
      fixtureType: "FT"
    }
  }
]

export {fixtures};