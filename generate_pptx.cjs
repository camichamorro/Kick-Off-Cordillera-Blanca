const pptxgen = require('pptxgenjs');
const path = require('path');

async function createPresentation() {
  const pres = new pptxgen();
  // Standard 16:9 widescreen layout (13.33 x 7.5 inches)
  pres.layout = 'LAYOUT_WIDE';
  pres.author = 'Explora Expeditions Team';
  pres.company = 'Explora Lodges and Expeditions';
  pres.subject = 'Cordillera Blanca Expedition - Peru';
  pres.title = 'Explora Cordillera Blanca Expedition';

  // Palette definition (Explora Minimalist Luxury Style)
  const C_DARK = '111111';
  const C_LIGHT = 'F5F2ED';
  const C_CARD = '1C1C1E';
  const C_WHITE = 'FFFFFF';
  const C_MUTED = '8E8E93';
  const C_GOLD = 'C69255'; // Andean ochre
  const C_CYAN = '3A7D8C'; // Glacial turquoise
  const FONT_SANS = 'Arial';
  const FONT_SERIF = 'Georgia';

  function addHeader(slide, title, category, lightMode = false) {
    const textColor = lightMode ? C_DARK : C_WHITE;
    const catColor = lightMode ? '666666' : C_GOLD;

    slide.addText(category.toUpperCase(), {
      x: 0.8,
      y: 0.5,
      w: 8.0,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT_SANS,
      color: catColor,
      charSpacing: 3,
      bold: true
    });

    slide.addText(title, {
      x: 0.8,
      y: 0.85,
      w: 11.5,
      h: 0.8,
      fontSize: 26,
      fontFace: FONT_SERIF,
      color: textColor,
      bold: true
    });
  }

  // ----------------------------------------------------
  // SLIDE 1: Cover
  // ----------------------------------------------------
  const s1 = pres.addSlide();
  s1.background = { color: C_DARK };

  s1.addText('E X\nP L O\nR A', {
    x: 0.8,
    y: 1.2,
    w: 2.0,
    h: 1.2,
    fontSize: 14,
    fontFace: FONT_SANS,
    color: C_WHITE,
    charSpacing: 6,
    bold: true,
    lineSpacing: 18
  });

  s1.addText('Cordillera Blanca\nExpedition', {
    x: 0.8,
    y: 2.9,
    w: 11.5,
    h: 2.2,
    fontSize: 48,
    fontFace: FONT_SERIF,
    color: C_WHITE,
    bold: true,
    lineSpacing: 54
  });

  s1.addText('From Glacial Source to Fertile Valley: Ancient Ice, Arid Oases, and Living Andean Heritage', {
    x: 0.8,
    y: 5.2,
    w: 11.0,
    h: 0.6,
    fontSize: 15,
    fontFace: FONT_SANS,
    color: C_GOLD,
    italic: true
  });

  s1.addText('PRESENTED BY THE EXPLORA EXPEDITIONS TEAM  •  6 DAYS / 5 NIGHTS  •  OPTIONAL 8-DAY GLACIAL SUMMIT EXTENSION', {
    x: 0.8,
    y: 6.3,
    w: 11.5,
    h: 0.4,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: C_MUTED,
    charSpacing: 2
  });

  // ----------------------------------------------------
  // SLIDE 2: Manifesto Quote
  // ----------------------------------------------------
  const s2 = pres.addSlide();
  s2.background = { color: C_DARK };

  s2.addText('“In the high Andes, water is not merely scenery;\nit is ancient ice descending to animate an arid wilderness into life.”', {
    x: 1.2,
    y: 2.2,
    w: 10.8,
    h: 2.2,
    fontSize: 28,
    fontFace: FONT_SERIF,
    color: C_WHITE,
    italic: true,
    lineSpacing: 42
  });

  s2.addText('True exploration is never about admiring peaks from afar,\nbut about traversing the living corridor where glacial source, ancestral canals, and community thrive.\n— Explora Expeditions', {
    x: 1.2,
    y: 4.6,
    w: 9.8,
    h: 1.2,
    fontSize: 14,
    fontFace: FONT_SANS,
    color: C_GOLD,
    lineSpacing: 22
  });

  // ----------------------------------------------------
  // SLIDE 3: The High-Andean Paradox
  // ----------------------------------------------------
  const s3 = pres.addSlide();
  s3.background = { color: C_LIGHT };
  addHeader(s3, 'The High-Andean Paradox: Where Glacial Melt Feeds an Arid Oasis', 'Destination Overview', true);

  s3.addText('At 10,000 feet above sea level, in an alpine landscape that feels deceptively arid and sun-scorched, Peru’s Cordillera Blanca holds an astonishing secret: Earth’s highest concentration of tropical glaciers, sustaining an uninterrupted corridor of fertility.', {
    x: 0.8,
    y: 1.8,
    w: 7.2,
    h: 1.6,
    fontSize: 14,
    fontFace: FONT_SANS,
    color: C_DARK,
    lineSpacing: 22
  });

  s3.addText('Millennia-old meltwater feeds luminous turquoise moraine tarns, gravity-fed pre-Inca aqueducts, and terraced orchards cultivating export blueberries, strawberries, cut roses, and heritage potatoes.\n\nThis expedition invites travelers to follow the glacial lifeline: from 20,000-foot summits down through cloud-forest slopes to the Quechua families who have mastered life with the runoff for centuries.', {
    x: 0.8,
    y: 3.5,
    w: 7.2,
    h: 2.8,
    fontSize: 13,
    fontFace: FONT_SANS,
    color: '444444',
    lineSpacing: 21
  });

  // Callout Card
  s3.addShape(pres.shapes.RECTANGLE, {
    x: 8.4,
    y: 1.8,
    w: 4.1,
    h: 4.7,
    fill: { color: C_WHITE },
    line: { color: 'E0DDD5', pt: 1 }
  });

  s3.addText('THE UNRIVALED SCALE', {
    x: 8.8,
    y: 2.1,
    w: 3.3,
    h: 0.3,
    fontSize: 9,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 2
  });

  s3.addText('71% of Earth’s tropical glaciers are located in Peru.', {
    x: 8.8,
    y: 2.5,
    w: 3.3,
    h: 0.9,
    fontSize: 16,
    fontFace: FONT_SERIF,
    color: C_DARK,
    bold: true
  });

  s3.addText('• UNESCO Biosphere Reserve & World Heritage\n• 30+ peaks soaring above 20,000 ft (6,000 m)\n• Microclimates sustaining commercial fruit & flower farming\n• Native paper-bark Queñual (Polylepis) cloud woodlands\n• Living renaissance of master artisans in Chacas', {
    x: 8.8,
    y: 3.5,
    w: 3.3,
    h: 2.8,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: '555555',
    lineSpacing: 18
  });

  // ----------------------------------------------------
  // SLIDE 4: Value Proposition
  // ----------------------------------------------------
  const s4 = pres.addSlide();
  s4.background = { color: C_DARK };
  addHeader(s4, 'Why Cordillera Blanca with Explora?', 'Our Value Proposition');

  const pillars = [
    {
      num: '01',
      title: 'Monumental Alpine Scale',
      desc: 'Sheer granite massifs above 20,000 ft (Huascarán, Artesonraju, Huandoy). Glacial recessions and high-Andean geology unraveled alongside expert resident naturalist guides.'
    },
    {
      num: '02',
      title: 'Living Mountain Culture',
      desc: 'Active immersion: harvesting alongside Quechua growers in lodge orchards, studying ancestral aqueducts, and discovering the Renaissance ateliers of Chacas.'
    },
    {
      num: '03',
      title: 'Far Beyond Mass Tourism',
      desc: 'Bypassing crowded lakefront viewpoints via remote high-moraine traverses at Laguna Parón, and entering pristine wilderness basins like Laguna 513 in complete silence.'
    },
    {
      num: '04',
      title: 'Adaptive Trail Design',
      desc: 'Daily tiered options—from high-altitude moraine pushes and valley gravel cycling to quiet botanical walks—anchored in medical-grade acclimatization.'
    }
  ];

  pillars.forEach((p, idx) => {
    const xPos = 0.8 + idx * 2.95;
    s4.addShape(pres.shapes.RECTANGLE, {
      x: xPos,
      y: 1.8,
      w: 2.75,
      h: 4.8,
      fill: { color: C_CARD },
      line: { color: '2C2C2E', pt: 1 }
    });

    s4.addText(p.num, {
      x: xPos + 0.25,
      y: 2.1,
      w: 2.2,
      h: 0.6,
      fontSize: 24,
      fontFace: FONT_SERIF,
      color: C_GOLD,
      bold: true
    });

    s4.addText(p.title, {
      x: xPos + 0.25,
      y: 2.8,
      w: 2.2,
      h: 0.9,
      fontSize: 14,
      fontFace: FONT_SANS,
      color: C_WHITE,
      bold: true
    });

    s4.addText(p.desc, {
      x: xPos + 0.25,
      y: 3.8,
      w: 2.2,
      h: 2.6,
      fontSize: 11,
      fontFace: FONT_SANS,
      color: C_MUTED,
      lineSpacing: 16
    });
  });

  // ----------------------------------------------------
  // SLIDE 5: Four Connected Ecological Zones
  // ----------------------------------------------------
  const s5 = pres.addSlide();
  s5.background = { color: C_LIGHT };
  addHeader(s5, 'Four Distinct Ecological Zones Across One Continental Divide', 'Expedition Geography', true);

  const zones = [
    {
      name: 'Callejón de Huaylas',
      alt: '7,200 – 9,200 ft / 2,200 – 2,800 m',
      desc: 'Temperate inter-Andean valley shaped by the Santa River. Farmlands producing strawberries, blueberries, and export roses. Low-altitude base camps for restorative rest.'
    },
    {
      name: 'Cordillera Negra',
      alt: '11,800 – 13,800 ft / 3,600 – 4,200 m',
      desc: 'Snow-free volcanic mountain spine serving as a panoramic natural grandstand across from the white glaciers. Sanctuary of the colossal Puya raimondii plant.'
    },
    {
      name: 'Cordillera Blanca',
      alt: '12,500 – 22,200 ft / 3,800 – 6,768 m',
      desc: 'Vertical granite walls, hanging glaciers, paper-bark Polylepis woodlands, and milk-turquoise moraine tarns (Parón, Llanganuco, 513).'
    },
    {
      name: 'Eastern Cloud Forests & Chacas',
      alt: '10,200 – 15,500 ft / 3,100 – 4,736 m',
      desc: 'Trans-Andean pass through Punta Olímpica into the Amazonian watershed. Mist-shrouded slopes (ceja de selva), colonial cobblestones, and Don Bosco master workshops.'
    }
  ];

  zones.forEach((z, i) => {
    const yPos = 1.8 + i * 1.25;
    s5.addShape(pres.shapes.RECTANGLE, {
      x: 0.8,
      y: yPos,
      w: 11.7,
      h: 1.1,
      fill: { color: C_WHITE },
      line: { color: 'E2DFD7', pt: 1 }
    });

    s5.addText(z.name, {
      x: 1.1,
      y: yPos + 0.15,
      w: 3.8,
      h: 0.4,
      fontSize: 14,
      fontFace: FONT_SERIF,
      color: C_DARK,
      bold: true
    });

    s5.addText(z.alt, {
      x: 1.1,
      y: yPos + 0.6,
      w: 3.8,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT_SANS,
      color: C_GOLD,
      bold: true
    });

    s5.addText(z.desc, {
      x: 5.1,
      y: yPos + 0.15,
      w: 7.1,
      h: 0.8,
      fontSize: 11,
      fontFace: FONT_SANS,
      color: '444444',
      lineSpacing: 16
    });
  });

  // ----------------------------------------------------
  // SLIDE 6: Science of Acclimatization
  // ----------------------------------------------------
  const s6 = pres.addSlide();
  s6.background = { color: C_DARK };
  addHeader(s6, 'The Science of Progressive Acclimatization', 'Safety & Wilderness Medicine');

  s6.addText('We apply the mountain medicine rule of "Climb high, sleep low"—gaining elevation during daytime trail hours and descending to rest in oxygen-dense valley outposts.', {
    x: 0.8,
    y: 1.8,
    w: 11.7,
    h: 0.7,
    fontSize: 13,
    fontFace: FONT_SANS,
    color: C_MUTED
  });

  const altRows = [
    [
      { text: 'Day', options: { bold: true, color: C_GOLD, fill: '252528' } },
      { text: 'Destination / Exploration', options: { bold: true, color: C_GOLD, fill: '252528' } },
      { text: 'Peak Daytime Elevation', options: { bold: true, color: C_GOLD, fill: '252528' } },
      { text: 'Overnight Sleep Elevation', options: { bold: true, color: C_GOLD, fill: '252528' } },
      { text: 'Physiological Strategy', options: { bold: true, color: C_GOLD, fill: '252528' } }
    ],
    [
      { text: 'Day 1', options: { color: C_WHITE } },
      { text: 'Anta Arrival / Santa Cruz Lodge', options: { color: C_WHITE } },
      { text: '8,950 ft / 2,730 m (Airport)', options: { color: C_WHITE } },
      { text: '7,380 ft / 2,250 m (Lodge)', options: { color: C_WHITE } },
      { text: 'Low-elevation landing and gentle rest', options: { color: C_MUTED } }
    ],
    [
      { text: 'Day 2', options: { color: C_WHITE } },
      { text: 'Cordillera Negra & Puya Sanctuaries', options: { color: C_WHITE } },
      { text: '12,950 ft / 3,950 m', options: { color: C_WHITE } },
      { text: '7,380 ft / 2,250 m (Lodge)', options: { color: C_WHITE } },
      { text: 'Daytime hypoxic stimulus, valley sleep', options: { color: C_MUTED } }
    ],
    [
      { text: 'Day 3', options: { color: C_WHITE } },
      { text: 'Laguna Parón High Moraine / Llanganuco', options: { color: C_WHITE } },
      { text: '13,730 ft / 4,185 m (Parón)', options: { color: C_WHITE } },
      { text: '8,200 ft / 2,500 m (Wayarumi)', options: { color: C_WHITE } },
      { text: 'Adapting to high moraine breathing', options: { color: C_MUTED } }
    ],
    [
      { text: 'Day 4', options: { color: C_WHITE } },
      { text: 'Laguna 513 Basin / Yungay Cycling', options: { color: C_WHITE } },
      { text: '14,530 ft / 4,431 m (Laguna 513)', options: { color: C_WHITE } },
      { text: '8,200 ft / 2,500 m (Wayarumi)', options: { color: C_WHITE } },
      { text: 'Peak physical endurance in solitude', options: { color: C_MUTED } }
    ],
    [
      { text: 'Day 5', options: { color: C_WHITE } },
      { text: 'Punta Olímpica Pass & Chacas', options: { color: C_WHITE } },
      { text: '15,530 ft / 4,736 m (Tunnel)', options: { color: C_WHITE } },
      { text: '9,180 ft / 2,800 m (Cuesta Serena)', options: { color: C_WHITE } },
      { text: 'Trans-Andean pass & cultural immersion', options: { color: C_MUTED } }
    ],
    [
      { text: 'Ext.', options: { color: C_GOLD } },
      { text: 'Llaca Alpine Refuge & Vallunaraju', options: { color: C_GOLD } },
      { text: '18,655 ft / 5,686 m (Summit)', options: { color: C_GOLD } },
      { text: '14,665 ft / 4,470 m (Refuge)', options: { color: C_GOLD } },
      { text: 'Optional: technical glacier summit', options: { color: C_GOLD } }
    ]
  ];

  s6.addTable(altRows, {
    x: 0.8,
    y: 2.7,
    w: 11.7,
    colW: [1.0, 3.2, 2.3, 2.2, 3.0],
    fontSize: 10,
    fontFace: FONT_SANS,
    border: { pt: 1, color: '333333' },
    autoPage: false
  });

  // ----------------------------------------------------
  // SLIDE 7: Itinerary Flow
  // ----------------------------------------------------
  const s7 = pres.addSlide();
  s7.background = { color: C_DARK };
  addHeader(s7, 'Itinerary Overview: 6 Days / 5 Nights', 'The Expedition Flow');

  const daysOverview = [
    { d: 'Day 1', name: 'Arrival & Living Earth', loc: 'Anta / Santa Cruz Lodge', sub: 'Orchard harvest & rural village walk' },
    { d: 'Day 2', name: 'The Great Amphitheater', loc: 'Cordillera Negra & Puyas', sub: 'Puya Raimondii & evening fire circle' },
    { d: 'Day 3', name: 'Glacial Mirrors', loc: 'Laguna Parón / Llanganuco', sub: 'Upper moraine traverse or Queñual woods' },
    { d: 'Day 4', name: 'Untouched Moraine Tarns', loc: 'Laguna 513 / Yungay Biking', sub: 'Crowd-free waters & Inca star night' },
    { d: 'Day 5', name: 'The Continental Divide', loc: 'Punta Olímpica & Chacas', sub: 'Don Bosco ateliers & Huascarán' },
    { d: 'Day 6', name: 'Farewell or Summit Leap', loc: 'Anta Out / Optional Summit', sub: 'Flight to Lima or Alpine Extension' }
  ];

  daysOverview.forEach((item, i) => {
    const x = 0.8 + (i % 3) * 3.95;
    const y = 2.0 + Math.floor(i / 3) * 2.3;

    s7.addShape(pres.shapes.RECTANGLE, {
      x: x,
      y: y,
      w: 3.75,
      h: 2.1,
      fill: { color: C_CARD },
      line: { color: '2A2A2D', pt: 1 }
    });

    s7.addText(item.d.toUpperCase(), {
      x: x + 0.3,
      y: y + 0.2,
      w: 3.0,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT_SANS,
      color: C_GOLD,
      bold: true,
      charSpacing: 2
    });

    s7.addText(item.name, {
      x: x + 0.3,
      y: y + 0.5,
      w: 3.1,
      h: 0.5,
      fontSize: 15,
      fontFace: FONT_SERIF,
      color: C_WHITE,
      bold: true
    });

    s7.addText(item.loc, {
      x: x + 0.3,
      y: y + 1.1,
      w: 3.1,
      h: 0.35,
      fontSize: 10,
      fontFace: FONT_SANS,
      color: C_CYAN,
      bold: true
    });

    s7.addText(item.sub, {
      x: x + 0.3,
      y: y + 1.45,
      w: 3.1,
      h: 0.5,
      fontSize: 10,
      fontFace: FONT_SANS,
      color: C_MUTED
    });
  });

  // ----------------------------------------------------
  // SLIDE 8: Day 1 Detail
  // ----------------------------------------------------
  const s8 = pres.addSlide();
  s8.background = { color: C_LIGHT };
  addHeader(s8, 'Day 1: Welcome to the Huaylas Valley & Orchard Harvest', 'Detailed Itinerary', true);

  s8.addText('Exploration Context', {
    x: 0.8,
    y: 1.8,
    w: 5.5,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 1
  });

  s8.addText('Touching down at Anta Airport framed by 20,000-foot peaks. The expedition begins gently in the sheltered microclimate of Caraz. At Santa Cruz Lodge, we immediately touch the soil: harvesting directly in the lodge’s organic orchards (Andean herbs, heirloom tubers, and berries) before taking a quiet acclimatization stroll through village paths to converse with Quechua families about ancestral irrigation canals and mountain agriculture.', {
    x: 0.8,
    y: 2.2,
    w: 5.8,
    h: 3.2,
    fontSize: 12,
    fontFace: FONT_SANS,
    color: '333333',
    lineSpacing: 19
  });

  s8.addShape(pres.shapes.RECTANGLE, {
    x: 7.0,
    y: 1.8,
    w: 5.5,
    h: 4.8,
    fill: { color: C_WHITE },
    line: { color: 'DDD9CF', pt: 1 }
  });

  s8.addText('EXPEDITION BRIEF', {
    x: 7.4,
    y: 2.1,
    w: 4.7,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true
  });

  s8.addText('• Arrival: Anta Airport (Comandante FAP Germán Arias Graziani)\n• Signature Experience: Organic orchard harvest & unhurried local dialogue\n• Gentle Acclimatization Walk: 2 hours along flat rural stone tracks\n• Lodge Outpost: Santa Cruz Lodge (Caraz)\n• Sleep Elevation: 7,380 ft / 2,250 m (protected low-altitude rest)\n• Dining: Garden-to-table welcome dinner & comprehensive expedition orientation', {
    x: 7.4,
    y: 2.6,
    w: 4.7,
    h: 3.7,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: '444444',
    lineSpacing: 20
  });

  // ----------------------------------------------------
  // SLIDE 9: Day 2 Detail
  // ----------------------------------------------------
  const s9 = pres.addSlide();
  s9.background = { color: C_LIGHT };
  addHeader(s9, 'Day 2: The Mineral Watchtower & Puya Raimondii Sanctuaries', 'Detailed Itinerary', true);

  s9.addText('Exploration Context', {
    x: 0.8,
    y: 1.8,
    w: 5.5,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 1
  });

  s9.addText('To truly grasp the scale of the Cordillera Blanca, one must first look at it from across the valley. We ascend into the mineral highlands of the Cordillera Negra, a snowless range acting as an elevated natural grandstand across from 110 miles of uninterrupted glaciers. We walk through high-altitude sanctuaries of Puya raimondii, the prehistoric Queen of the Andes that lives up to a century and produces towering 30-foot flower spikes.\n\nIn the evening, we gather around a ceremonial hearth at the lodge to set intentions and honor the mountain Apus before entering the snowline.', {
    x: 0.8,
    y: 2.2,
    w: 5.8,
    h: 3.4,
    fontSize: 12,
    fontFace: FONT_SANS,
    color: '333333',
    lineSpacing: 19
  });

  s9.addShape(pres.shapes.RECTANGLE, {
    x: 7.0,
    y: 1.8,
    w: 5.5,
    h: 4.8,
    fill: { color: C_WHITE },
    line: { color: 'DDD9CF', pt: 1 }
  });

  s9.addText('EXPEDITION BRIEF', {
    x: 7.4,
    y: 2.1,
    w: 4.7,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true
  });

  s9.addText('• Trail Experience: Panoramic highland trek across Cordillera Negra among giant Puyas\n• Vista Highlight: 360° unobstructed amphitheater of Huascarán, Huandoy, and Santa Cruz\n• Evening Gathering: Fireside ritual and mountain orientation at Santa Cruz Lodge\n• Trail Distance: 4.5 miles / 4 - 5 hrs steady cadence\n• Peak Elevation: 12,950 ft | Sleep Elevation: 7,380 ft (Santa Cruz Lodge)\n• Physiological Value: Optimal daytime hypoxic stimulus with low-altitude sleep recovery', {
    x: 7.4,
    y: 2.6,
    w: 4.7,
    h: 3.7,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: '444444',
    lineSpacing: 20
  });

  // ----------------------------------------------------
  // SLIDE 10: Day 3 Detail
  // ----------------------------------------------------
  const s10 = pres.addSlide();
  s10.background = { color: C_LIGHT };
  addHeader(s10, 'Day 3: Parón Upper Moraine Traverse or Llanganuco Paper-Bark Forests', 'Detailed Itinerary', true);

  s10.addText('Two Distinct Paths, Equal Wilderness Depth', {
    x: 0.8,
    y: 1.8,
    w: 5.5,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 1
  });

  s10.addText('We enter Huascarán National Park. Travelers choose their trail rhythm:\n\n• High Mountain Traverse (Laguna Parón, 13,730 ft):\nLeaving the crowded day-tourist viewpoint far behind, we follow an off-the-beaten-path high traverse along the northern moraine toward the upper glacial tarns beneath the sheer pyramid of Mount Artesonraju.\n\n• Contemplative Botanical Path (Llanganuco Valley, 12,630 ft):\nThe María Josefa trail between Chinancocha and Orconcocha tarns: an ancient sanctuary of paper-bark Queñual (Polylepis) trees draped in bromeliads, orchids, and crystal glacial brooks.', {
    x: 0.8,
    y: 2.2,
    w: 5.8,
    h: 3.6,
    fontSize: 11.5,
    fontFace: FONT_SANS,
    color: '333333',
    lineSpacing: 18
  });

  s10.addShape(pres.shapes.RECTANGLE, {
    x: 7.0,
    y: 1.8,
    w: 5.5,
    h: 4.8,
    fill: { color: C_WHITE },
    line: { color: 'DDD9CF', pt: 1 }
  });

  s10.addText('LOGISTICS & LODGING', {
    x: 7.4,
    y: 2.1,
    w: 4.7,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true
  });

  s10.addText('• Base Camp: Wayarumi Eco-Lodge (Yungay / Mancos sector)\n• Sleep Elevation: 8,200 ft / 2,500 m\n• Peak Elevation: 13,730 ft (Parón High Route) / 12,630 ft (Llanganuco)\n• Crowd Mitigation: Remote upper moraine trail bypassing crowded parking lots\n• Mountain Dining: Wholesome trail pack-lunch crafted for endurance, followed by fireside dinner at Wayarumi\n• Sunset: Direct front-row views of Mount Huascarán’s western face', {
    x: 7.4,
    y: 2.6,
    w: 4.7,
    h: 3.7,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: '444444',
    lineSpacing: 20
  });

  // ----------------------------------------------------
  // SLIDE 11: Day 4 Detail
  // ----------------------------------------------------
  const s11 = pres.addSlide();
  s11.background = { color: C_LIGHT };
  addHeader(s11, 'Day 4: Laguna 513 Basin, Valley Gravel Biking & Pre-Inca Astronomy', 'Detailed Itinerary', true);

  s11.addText('True Wilderness Off the Tourist Map', {
    x: 0.8,
    y: 1.8,
    w: 5.5,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 1
  });

  s11.addText('Far from commercial tourist herds, we hike into the untouched basin of Laguna 513 (14,530 ft), cupped directly under the hanging icefalls of Mount Hualcán. Cascading waterfalls, jade-tinted tarns, and pristine moraines unfold in total silence.\n\n• Adventure Alternative: Guided 15-mile gravel bike descent through Yungay’s agricultural foothills.\n• Relaxed Alternative: Gentle walk in Quebrada Rocotuyoc exploring community water preservation.\n\nNightfall: Archaeo-astronomy session at the lodge, decoding Quechua dark-cloud constellations (Yacana, the cosmic water llama).', {
    x: 0.8,
    y: 2.2,
    w: 5.8,
    h: 3.7,
    fontSize: 11.5,
    fontFace: FONT_SANS,
    color: '333333',
    lineSpacing: 18
  });

  s11.addShape(pres.shapes.RECTANGLE, {
    x: 7.0,
    y: 1.8,
    w: 5.5,
    h: 4.8,
    fill: { color: C_WHITE },
    line: { color: 'DDD9CF', pt: 1 }
  });

  s11.addText('EXPEDITION BRIEF', {
    x: 7.4,
    y: 2.1,
    w: 4.7,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true
  });

  s11.addText('• Key Highlight: Laguna 513 (14,530 ft) & Mount Hualcán hanging glacier\n• Biking Option: 15-mile gravel route descending through rural Huaylas farmland\n• Night Experience: Andean ethno-astronomy under clear high-altitude skies\n• Laguna 513 Difficulty: Challenging / 6 hrs / 2,130 ft positive elevation gain\n• Lodging: Wayarumi Eco-Lodge (8,200 ft)\n• Atmosphere: The authentic silence of the high Andes', {
    x: 7.4,
    y: 2.6,
    w: 4.7,
    h: 3.7,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: '444444',
    lineSpacing: 20
  });

  // ----------------------------------------------------
  // SLIDE 12: Day 5 Detail
  // ----------------------------------------------------
  const s12 = pres.addSlide();
  s12.background = { color: C_LIGHT };
  addHeader(s12, 'Day 5: Punta Olímpica Pass & the Master Artisans of Chacas', 'Detailed Itinerary', true);

  s12.addText('Crossing the Continental Divide to the Amazon Slope', {
    x: 0.8,
    y: 1.8,
    w: 5.5,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 1
  });

  s12.addText('A colossal overland journey climbing between the eastern walls of Mount Huascarán and Chopicalqui to cross Punta Olímpica Tunnel (15,530 ft), the highest vehicular tunnel in the world.\n\nWe descend into the lush eastern valleys toward Chacas, a colonial town frozen in time with hand-carved balconies and cobblestones. Here we encounter the moving legacy of Father Ugo de Censi and the Don Bosco Artisans: local Quechua youths trained in Renaissance Italian wood carving, stone sculpture, and stained glass whose works grace the Vatican.\n\nWe complete the day at Cuesta Serena Lodge with a celebratory dinner facing Mount Huascarán.', {
    x: 0.8,
    y: 2.2,
    w: 5.8,
    h: 3.7,
    fontSize: 11.5,
    fontFace: FONT_SANS,
    color: '333333',
    lineSpacing: 18
  });

  s12.addShape(pres.shapes.RECTANGLE, {
    x: 7.0,
    y: 1.8,
    w: 5.5,
    h: 4.8,
    fill: { color: C_WHITE },
    line: { color: 'DDD9CF', pt: 1 }
  });

  s12.addText('EXPEDITION BRIEF', {
    x: 7.4,
    y: 2.1,
    w: 4.7,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true
  });

  s12.addText('• Continental Pass: Punta Olímpica Tunnel at 15,530 ft (views of five 20,000 ft massifs)\n• Cultural Milestone: Private atelier visits with Don Bosco artisans & Chacas Sanctuary\n• Base Camp: Cuesta Serena Lodge (boutique luxury retreat in Anta/Marcará)\n• Sleep Elevation: 9,180 ft / 2,800 m\n• Gastronomy: Multi-course celebration dinner paired with Andean spirits at Cuesta Serena\n• Heritage: Hand-carved cedar and walnut balconies unique in South America', {
    x: 7.4,
    y: 2.6,
    w: 4.7,
    h: 3.7,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: '444444',
    lineSpacing: 20
  });

  // ----------------------------------------------------
  // SLIDE 13: Cultural Focus - Chacas & Don Bosco
  // ----------------------------------------------------
  const s13 = pres.addSlide();
  s13.background = { color: C_DARK };
  addHeader(s13, 'The Andean Renaissance: Don Bosco Artisans in Chacas', 'Living Mountain Heritage');

  s13.addText('Why is Chacas an essential cornerstone of this Explora expedition?', {
    x: 0.8,
    y: 1.8,
    w: 11.7,
    h: 0.5,
    fontSize: 16,
    fontFace: FONT_SERIF,
    color: C_GOLD,
    italic: true
  });

  const dbCards = [
    {
      title: 'Father Ugo’s Vision',
      text: 'In 1976, Italian Salesian priest Ugo de Censi arrived in isolated Chacas. Rejecting passive charity, he founded a tuition-free vocational school teaching Renaissance woodworking, stone carving, and glasscraft to young Quechua farmers.'
    },
    {
      title: 'Renaissance Mastery',
      text: 'Generations of indigenous artisans mastered fine joinery, stone sculpting, bronze casting, and stained-glass assembly. Their sacred art now adorns European cathedrals and private international collections.'
    },
    {
      title: 'Solidarity Economy',
      text: 'The workshops operate as worker cooperatives. 100% of revenue directly funds Mama Ashu Hospital (free medical care for peasants), elderly care, and technical schools throughout the region.'
    }
  ];

  dbCards.forEach((c, idx) => {
    const x = 0.8 + idx * 3.95;
    s13.addShape(pres.shapes.RECTANGLE, {
      x: x,
      y: 2.6,
      w: 3.75,
      h: 3.8,
      fill: { color: C_CARD },
      line: { color: '2E2E32', pt: 1 }
    });

    s13.addText(c.title, {
      x: x + 0.3,
      y: 2.9,
      w: 3.15,
      h: 0.6,
      fontSize: 15,
      fontFace: FONT_SERIF,
      color: C_WHITE,
      bold: true
    });

    s13.addText(c.text, {
      x: x + 0.3,
      y: 3.7,
      w: 3.15,
      h: 2.4,
      fontSize: 11,
      fontFace: FONT_SANS,
      color: C_MUTED,
      lineSpacing: 18
    });
  });

  // ----------------------------------------------------
  // SLIDE 14: Day 6 / Out & Full Circle
  // ----------------------------------------------------
  const s14 = pres.addSlide();
  s14.background = { color: C_LIGHT };
  addHeader(s14, 'Day 6: Expedition Farewell or Leap to the High Summit', 'Detailed Itinerary', true);

  s14.addText('For Standard Program Travelers (6 Days / 5 Nights):', {
    x: 0.8,
    y: 1.8,
    w: 5.5,
    h: 0.4,
    fontSize: 13,
    fontFace: FONT_SERIF,
    color: C_DARK,
    bold: true
  });

  s14.addText('A leisurely morning in Cuesta Serena’s gardens with the Cordillera Blanca glowing under golden dawn light. Time to reflect on the lived journey. Private 25-minute transfer to Anta Airport for the direct morning flight to Lima, connecting with international departures.', {
    x: 0.8,
    y: 2.3,
    w: 5.5,
    h: 3.5,
    fontSize: 12,
    fontFace: FONT_SANS,
    color: '444444',
    lineSpacing: 19
  });

  s14.addShape(pres.shapes.RECTANGLE, {
    x: 6.8,
    y: 1.8,
    w: 5.7,
    h: 4.8,
    fill: { color: '18181A' },
    line: { color: C_GOLD, pt: 1.5 }
  });

  s14.addText('OPTIONAL HIGH MOUNTAIN EXTENSION', {
    x: 7.2,
    y: 2.1,
    w: 4.9,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 2
  });

  s14.addText('Aspiring to summit an 18,600-foot glacial peak?', {
    x: 7.2,
    y: 2.5,
    w: 4.9,
    h: 0.7,
    fontSize: 16,
    fontFace: FONT_SERIF,
    color: C_WHITE,
    bold: true
  });

  s14.addText('Cordillera Blanca is South America’s premier alpine mountaineering mecca. For travelers wishing to elevate their expedition into a glacial summit experience, we offer an exclusive 2-night private extension (Days 6 to 8):\n\n• Day 6: Transfer to Quebrada Llaca & Llaca Refuge (14,665 ft). Ice school with crampons and ice axes.\n• Day 7: Alpine summit push on Mount Vallunaraju (18,655 ft / 5,686 m). Return to Huaraz / Cuesta Serena.\n• Day 8: Transfer to Anta Airport and flight to Lima.', {
    x: 7.2,
    y: 3.3,
    w: 4.9,
    h: 3.0,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: 'CCCCCC',
    lineSpacing: 18
  });

  // ----------------------------------------------------
  // SLIDE 15: High Mountain Extension Detail
  // ----------------------------------------------------
  const s15 = pres.addSlide();
  s15.background = { color: C_DARK };
  addHeader(s15, 'High Mountain Extension: Mount Vallunaraju (18,655 ft / 5,686 m)', 'Optional Program (8 Days / 7 Nights)');

  const extCards = [
    {
      day: 'DAY 6 (EXTENSION)',
      title: 'Quebrada Llaca & Ice School',
      alt: 'Llaca Refuge (14,665 ft / 4,470 m)',
      desc: '4x4 transfer into rugged Quebrada Llaca. Afternoon technical glacier instruction with UIAGM mountain guides: crampon footwork, ice-axe self-arrest, rope teams, and fine acclimatization. Dinner and early alpine rest.'
    },
    {
      day: 'DAY 7 (EXTENSION)',
      title: 'Summit Push: Mount Vallunaraju',
      alt: 'Summit at 18,655 ft / 5,686 m',
      desc: 'Alpine start at 02:00 AM under star-studded skies. Continuous ascent along snow slopes and seracs (35°-45°) to gain the razor-sharp South Summit. Sweeping vistas of Huascarán, Ranrapalca, and Ocshapalca. Descent to Huaraz.'
    },
    {
      day: 'DAY 8 (EXTENSION)',
      title: 'Summit Celebration & Flight Out',
      alt: 'Anta -> Lima',
      desc: 'Mountain celebratory breakfast. Transfer to Anta Airport and panoramic flight across the Andes back to Lima, carrying the indelible memory of touching the tropical alpine sky.'
    }
  ];

  extCards.forEach((c, i) => {
    const x = 0.8 + i * 3.95;
    s15.addShape(pres.shapes.RECTANGLE, {
      x: x,
      y: 1.8,
      w: 3.75,
      h: 4.8,
      fill: { color: C_CARD },
      line: { color: '2F2F33', pt: 1 }
    });

    s15.addText(c.day, {
      x: x + 0.3,
      y: 2.1,
      w: 3.15,
      h: 0.3,
      fontSize: 9,
      fontFace: FONT_SANS,
      color: C_GOLD,
      bold: true,
      charSpacing: 2
    });

    s15.addText(c.title, {
      x: x + 0.3,
      y: 2.5,
      w: 3.15,
      h: 0.6,
      fontSize: 15,
      fontFace: FONT_SERIF,
      color: C_WHITE,
      bold: true
    });

    s15.addText(c.alt, {
      x: x + 0.3,
      y: 3.1,
      w: 3.15,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT_SANS,
      color: C_CYAN,
      bold: true
    });

    s15.addText(c.desc, {
      x: x + 0.3,
      y: 3.5,
      w: 3.15,
      h: 2.8,
      fontSize: 11,
      fontFace: FONT_SANS,
      color: C_MUTED,
      lineSpacing: 17
    });
  });

  // ----------------------------------------------------
  // SLIDE 16: Base Camps
  // ----------------------------------------------------
  const s16 = pres.addSlide();
  s16.background = { color: C_LIGHT };
  addHeader(s16, 'Base Camps: The Luxury of the Essential', 'Curated Mountain Outposts', true);

  const lodges = [
    {
      name: 'Santa Cruz Lodge',
      loc: 'Caraz • 7,380 ft / 2,250 m',
      desc: 'Traditional Andean hacienda set amidst fruit orchards and gardens. The ideal base to gently acclimatize at low elevation, enjoying organic garden-to-table cuisine.'
    },
    {
      name: 'Wayarumi Eco-Lodge',
      loc: 'Yungay / Mancos • 8,200 ft / 2,500 m',
      desc: 'Strategically positioned facing the colossal western face of Mount Huascarán. Adobe and native wood architecture, wood-burning fireplaces, and direct glacier views.'
    },
    {
      name: 'Cuesta Serena Lodge',
      loc: 'Anta / Marcará • 9,180 ft / 2,800 m',
      desc: 'Boutique luxury lodge with an Andean spa, heated pool, and tranquil gardens gazing upon the central massif. The refined finale of comfort and wellness.'
    }
  ];

  lodges.forEach((l, i) => {
    const x = 0.8 + i * 3.95;
    s16.addShape(pres.shapes.RECTANGLE, {
      x: x,
      y: 1.8,
      w: 3.75,
      h: 4.8,
      fill: { color: C_WHITE },
      line: { color: 'DDD9CF', pt: 1 }
    });

    s16.addText(l.name, {
      x: x + 0.3,
      y: 2.2,
      w: 3.15,
      h: 0.5,
      fontSize: 16,
      fontFace: FONT_SERIF,
      color: C_DARK,
      bold: true
    });

    s16.addText(l.loc, {
      x: x + 0.3,
      y: 2.7,
      w: 3.15,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT_SANS,
      color: C_GOLD,
      bold: true
    });

    s16.addText(l.desc, {
      x: x + 0.3,
      y: 3.2,
      w: 3.15,
      h: 3.0,
      fontSize: 11.5,
      fontFace: FONT_SANS,
      color: '444444',
      lineSpacing: 18
    });
  });

  // ----------------------------------------------------
  // SLIDE 17: Climate & Layering
  // ----------------------------------------------------
  const s17 = pres.addSlide();
  s17.background = { color: C_DARK };
  addHeader(s17, 'Andean Climate & Recommended Three-Layer System', 'Expedition Preparation & Gear');

  s17.addText('The tropical high Andes feature intense daytime solar radiation and crisp, cold nights.', {
    x: 0.8,
    y: 1.8,
    w: 11.7,
    h: 0.4,
    fontSize: 13,
    fontFace: FONT_SANS,
    color: C_MUTED
  });

  const climateRows = [
    [
      { text: 'Zone / Elevation', options: { bold: true, color: C_GOLD, fill: '252528' } },
      { text: 'Daytime Temperature', options: { bold: true, color: C_GOLD, fill: '252528' } },
      { text: 'Nighttime Temperature', options: { bold: true, color: C_GOLD, fill: '252528' } },
      { text: 'Wind & Solar Conditions', options: { bold: true, color: C_GOLD, fill: '252528' } }
    ],
    [
      { text: 'Valleys (Huaylas / 7,200 - 9,200 ft)', options: { color: C_WHITE } },
      { text: '64°F to 75°F / 18°C to 24°C (Warm)', options: { color: C_WHITE } },
      { text: '46°F to 54°F / 8°C to 12°C (Cool)', options: { color: C_WHITE } },
      { text: 'Gentle valley breeze, high UV index', options: { color: C_MUTED } }
    ],
    [
      { text: 'Tarns & Passes (12,500 - 15,500 ft)', options: { color: C_WHITE } },
      { text: '46°F to 59°F / 8°C to 15°C (Brisk)', options: { color: C_WHITE } },
      { text: '28°F to 39°F / -2°C to 4°C (Freezing)', options: { color: C_WHITE } },
      { text: 'Katabatic glacial winds, rapid shifts', options: { color: C_MUTED } }
    ],
    [
      { text: 'High Mountain (> 16,400 ft)', options: { color: C_WHITE } },
      { text: '32°F to 43°F / 0°C to 6°C', options: { color: C_WHITE } },
      { text: '14°F to 23°F / -10°C to -5°C', options: { color: C_WHITE } },
      { text: 'Polar alpine chill on predawn summit push', options: { color: C_MUTED } }
    ]
  ];

  s17.addTable(climateRows, {
    x: 0.8,
    y: 2.4,
    w: 11.7,
    colW: [3.5, 2.7, 2.7, 2.8],
    fontSize: 10,
    fontFace: FONT_SANS,
    border: { pt: 1, color: '333333' },
    autoPage: false
  });

  s17.addShape(pres.shapes.RECTANGLE, {
    x: 0.8,
    y: 4.7,
    w: 11.7,
    h: 1.8,
    fill: { color: C_CARD },
    line: { color: '2F2F33', pt: 1 }
  });

  s17.addText('RECOMMENDED THREE-LAYER SYSTEM', {
    x: 1.1,
    y: 4.9,
    w: 5.0,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true
  });

  s17.addText('• Base Layer: Moisture-wicking breathable thermal base (merino wool or high-end synthetic)\n• Mid Layer: Insulating fleece or lightweight down jacket\n• Outer Shell: Windproof and waterproof breathable shell (Gore-Tex or equivalent)\n• Essential Accessories: Category 3 or 4 UV sunglasses, mineral sunscreen, trekking poles (provided by Explora), and ankle-support trekking boots.', {
    x: 1.1,
    y: 5.25,
    w: 11.1,
    h: 1.1,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: C_MUTED,
    lineSpacing: 16
  });

  // ----------------------------------------------------
  // SLIDE 18: Fleet & Operations
  // ----------------------------------------------------
  const s18 = pres.addSlide();
  s18.background = { color: C_LIGHT };
  addHeader(s18, 'Our Expedition Fleet & Field Operations', 'Logistics Infrastructure', true);

  s18.addText('Vehicles purpose-built for the Andean terrain, ensuring interior comfort and 4WD access to remote tracks beyond commercial bus access.', {
    x: 0.8,
    y: 1.8,
    w: 11.7,
    h: 0.5,
    fontSize: 13,
    fontFace: FONT_SANS,
    color: '444444'
  });

  const fleet = [
    {
      title: 'Mercedes-Benz Sprinter 4x4',
      sub: 'Overland Highway Comfort',
      features: '• Reclining leather seating\n• Thermal panoramic windows\n• Heavy-duty unpaved road suspension\n• Medical-grade oxygen system onboard\n• USB charging ports and travel amenities'
    },
    {
      title: 'Jeep Rubicon / Toyota Prado 4WD',
      sub: 'Access to Remote Moraine Tracks',
      features: '• Low-range 4WD transfer case\n• Access to roadless glacial valleys\n• Small, intimate group configurations\n• High-end bike carrier mounts\n• Garmin InReach satellite communications'
    },
    {
      title: 'Gravel & Mountain Bike Fleet',
      sub: 'Active Valley Exploration',
      features: '• Specialized bicycles for dirt and gravel roads\n• Electric pedal-assist available for altitude climbs\n• Homologated safety helmets and gear\n• Permanent chase vehicle support on trail'
    }
  ];

  fleet.forEach((f, idx) => {
    const x = 0.8 + idx * 3.95;
    s18.addShape(pres.shapes.RECTANGLE, {
      x: x,
      y: 2.5,
      w: 3.75,
      h: 4.1,
      fill: { color: C_WHITE },
      line: { color: 'DDD9CF', pt: 1 }
    });

    s18.addText(f.title, {
      x: x + 0.3,
      y: 2.8,
      w: 3.15,
      h: 0.5,
      fontSize: 14,
      fontFace: FONT_SERIF,
      color: C_DARK,
      bold: true
    });

    s18.addText(f.sub, {
      x: x + 0.3,
      y: 3.3,
      w: 3.15,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT_SANS,
      color: C_GOLD,
      bold: true
    });

    s18.addText(f.features, {
      x: x + 0.3,
      y: 3.8,
      w: 3.15,
      h: 2.5,
      fontSize: 10.5,
      fontFace: FONT_SANS,
      color: '555555',
      lineSpacing: 18
    });
  });

  // ----------------------------------------------------
  // SLIDE 19: Seasonality
  // ----------------------------------------------------
  const s19 = pres.addSlide();
  s19.background = { color: C_DARK };
  addHeader(s19, 'Seasonality & Confirmed Departures 2027', 'Expedition Calendar');

  s19.addText('The optimal window for Cordillera Blanca is the "Andean Dry Season" (May to October), featuring deep cobalt skies, pristine mountain visibility, and crystal-clear star-filled nights.', {
    x: 0.8,
    y: 1.8,
    w: 11.7,
    h: 0.8,
    fontSize: 13,
    fontFace: FONT_SANS,
    color: C_MUTED,
    lineSpacing: 20
  });

  const seasons = [
    {
      title: 'Optimal Dry Season',
      period: 'May to October',
      status: 'Cobalt skies, maximum peak clarity, pristine glacial tarn conditions, and stable trail footing.'
    },
    {
      title: 'Green Transition Season',
      period: 'November & April',
      status: 'Lush blooming valleys, roaring waterfalls at peak flow, and quieter off-peak trails.'
    }
  ];

  seasons.forEach((sea, i) => {
    const x = 0.8 + i * 5.95;
    s19.addShape(pres.shapes.RECTANGLE, {
      x: x,
      y: 2.8,
      w: 5.75,
      h: 1.8,
      fill: { color: C_CARD },
      line: { color: '2E2E32', pt: 1 }
    });

    s19.addText(sea.title, {
      x: x + 0.3,
      y: 3.0,
      w: 5.0,
      h: 0.3,
      fontSize: 14,
      fontFace: FONT_SERIF,
      color: C_WHITE,
      bold: true
    });

    s19.addText(sea.period, {
      x: x + 0.3,
      y: 3.35,
      w: 5.0,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT_SANS,
      color: C_GOLD,
      bold: true
    });

    s19.addText(sea.status, {
      x: x + 0.3,
      y: 3.7,
      w: 5.0,
      h: 0.7,
      fontSize: 11,
      fontFace: FONT_SANS,
      color: C_MUTED
    });
  });

  s19.addShape(pres.shapes.RECTANGLE, {
    x: 0.8,
    y: 4.9,
    w: 11.7,
    h: 1.6,
    fill: { color: '18181A' },
    line: { color: C_GOLD, pt: 1 }
  });

  s19.addText('CONFIRMED EXCLUSIVE DEPARTURES (MAXIMUM 8 TRAVELERS PER EXPEDITION)', {
    x: 1.1,
    y: 5.1,
    w: 11.0,
    h: 0.3,
    fontSize: 9,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 2
  });

  s19.addText('• Departure 1: June 14 - 19, 2027  (Summit Extension through June 21)\n• Departure 2: July 12 - 17, 2027   (Summit Extension through July 19)\n• Departure 3: August 09 - 14, 2027 (Summit Extension through August 16)\n• Departure 4: September 06 - 11, 2027 (Summit Extension through September 13)', {
    x: 1.1,
    y: 5.4,
    w: 11.0,
    h: 0.9,
    fontSize: 10.5,
    fontFace: FONT_SANS,
    color: C_WHITE,
    lineSpacing: 16
  });

  // ----------------------------------------------------
  // SLIDE 20: Pricing & Inclusions
  // ----------------------------------------------------
  const s20 = pres.addSlide();
  s20.background = { color: C_LIGHT };
  addHeader(s20, 'Investment & Expedition Inclusions', 'Pricing & Terms', true);

  s20.addShape(pres.shapes.RECTANGLE, {
    x: 0.8,
    y: 1.8,
    w: 4.8,
    h: 4.8,
    fill: { color: C_WHITE },
    line: { color: 'DDD9CF', pt: 1 }
  });

  s20.addText('OFFICIAL RATE', {
    x: 1.2,
    y: 2.1,
    w: 4.0,
    h: 0.3,
    fontSize: 9,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 2
  });

  s20.addText('USD 8,900', {
    x: 1.2,
    y: 2.45,
    w: 4.0,
    h: 0.8,
    fontSize: 34,
    fontFace: FONT_SERIF,
    color: C_DARK,
    bold: true
  });

  s20.addText('Per person based on double occupancy\n6 Days / 5 Nights Program', {
    x: 1.2,
    y: 3.25,
    w: 4.0,
    h: 0.6,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: '666666'
  });

  s20.addShape(pres.shapes.RECTANGLE, {
    x: 1.2,
    y: 4.0,
    w: 4.0,
    h: 0.02,
    fill: { color: 'E5E2DA' },
    line: { color: 'E5E2DA', pt: 0.5 }
  });

  s20.addText('OPTIONAL HIGH MOUNTAIN EXTENSION:', {
    x: 1.2,
    y: 4.2,
    w: 4.0,
    h: 0.3,
    fontSize: 9,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true
  });

  s20.addText('USD 2,850 additional per person\nIncludes 2 nights, refuge stay, summit gear, and UIAGM 1:2 guide ratio', {
    x: 1.2,
    y: 4.5,
    w: 4.0,
    h: 0.8,
    fontSize: 10.5,
    fontFace: FONT_SANS,
    color: '444444',
    lineSpacing: 16
  });

  // Inclusions box right
  s20.addShape(pres.shapes.RECTANGLE, {
    x: 6.0,
    y: 1.8,
    w: 6.5,
    h: 4.8,
    fill: { color: C_WHITE },
    line: { color: 'DDD9CF', pt: 1 }
  });

  s20.addText('SERVICES BREAKDOWN', {
    x: 6.4,
    y: 2.1,
    w: 5.7,
    h: 0.3,
    fontSize: 9,
    fontFace: FONT_SANS,
    color: C_GOLD,
    bold: true,
    charSpacing: 2
  });

  s20.addText('INCLUDED:', {
    x: 6.4,
    y: 2.5,
    w: 5.7,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: C_DARK,
    bold: true
  });

  s20.addText('• All private 4WD ground transfers to/from Anta Airport\n• 5 nights accommodation in curated boutique mountain lodges\n• Full board: daily breakfasts, trail box lunches, and curated multi-course lodge dinners\n• Daily exploration menu (active alpine hikes, botanical walks, gravel bike routes, cultural visits)\n• Bilingual Explora expedition guides and certified local specialists\n• Full exploration gear: trekking poles, bikes, helmets, medical oxygen, and first aid\n• National park entrance fees and community conservation permits\n• Direct social contribution to the Don Bosco Artisans Foundation in Chacas', {
    x: 6.4,
    y: 2.85,
    w: 5.7,
    h: 2.3,
    fontSize: 10,
    fontFace: FONT_SANS,
    color: '444444',
    lineSpacing: 15
  });

  s20.addText('NOT INCLUDED:', {
    x: 6.4,
    y: 5.25,
    w: 5.7,
    h: 0.25,
    fontSize: 10.5,
    fontFace: FONT_SANS,
    color: C_DARK,
    bold: true
  });

  s20.addText('• Commercial flights Lima - Anta - Lima\n• Travel insurance with high-altitude medical evacuation coverage (mandatory)\n• Discretionary gratuities and personal lodge extras', {
    x: 6.4,
    y: 5.5,
    w: 5.7,
    h: 0.9,
    fontSize: 9.5,
    fontFace: FONT_SANS,
    color: '666666',
    lineSpacing: 14
  });

  // ----------------------------------------------------
  // SLIDE 21: Closing
  // ----------------------------------------------------
  const s21 = pres.addSlide();
  s21.background = { color: C_DARK };

  s21.addText('E X\nP L O\nR A', {
    x: 0.8,
    y: 1.5,
    w: 2.0,
    h: 1.2,
    fontSize: 14,
    fontFace: FONT_SANS,
    color: C_WHITE,
    charSpacing: 6,
    bold: true,
    lineSpacing: 18
  });

  s21.addText('Allian shamushqa kapay.', {
    x: 0.8,
    y: 3.0,
    w: 11.5,
    h: 1.2,
    fontSize: 44,
    fontFace: FONT_SERIF,
    color: C_WHITE,
    italic: true
  });

  s21.addText('("Welcome with an open heart" — Ancash Quechua greeting)', {
    x: 0.8,
    y: 4.3,
    w: 10.0,
    h: 0.4,
    fontSize: 14,
    fontFace: FONT_SANS,
    color: C_GOLD
  });

  s21.addText('Explora Lodges and Expeditions  •  www.explora.com  •  expeditions@explora.com', {
    x: 0.8,
    y: 5.8,
    w: 11.0,
    h: 0.4,
    fontSize: 11,
    fontFace: FONT_SANS,
    color: C_MUTED,
    charSpacing: 2
  });

  const outputPath = path.join(__dirname, 'public', 'Explora_Cordillera_Blanca_Expedition.pptx');
  await pres.writeFile({ fileName: outputPath });
  console.log(`Presentation generated successfully at: ${outputPath}`);
}

createPresentation().catch(err => {
  console.error('Error generating presentation:', err);
  process.exit(1);
});
