/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  MapPin,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Mountain,
  Waves,
  Thermometer,
  ArrowRight,
  Download,
  Layers,
  Sparkles,
  Shield,
  Activity,
  Heart,
  BookOpen,
  CheckCircle2,
  Copy,
  Check,
  Bike,
  Flame,
  Sun,
  Eye,
  Utensils
} from "lucide-react";

interface Experience {
  title: string;
  description: string;
  type: "Active" | "Contemplative" | "Cultural" | "Bike" | "Culinary";
  altitude?: string;
  duration?: string;
}

interface DayData {
  id: number;
  dayNumber: string;
  title: string;
  subtitle: string;
  location: string;
  maxAlt: string;
  sleepAlt: string;
  zones: string[];
  lodging: string;
  summary: string;
  whyUnique: string;
  experiences: Experience[];
  image: string;
  highlight: string;
}

const ITINERARY_DAYS: DayData[] = [
  {
    id: 1,
    dayNumber: "Day 1",
    title: "Welcome to the Huaylas Valley & Orchard Harvest",
    subtitle: "Ethnobotanical immersion and low-elevation acclimatization",
    location: "Anta → Caraz (Santa Cruz Lodge)",
    maxAlt: "8,950 ft / 2,730 m (Anta Airport)",
    sleepAlt: "7,380 ft / 2,250 m (Santa Cruz Lodge)",
    zones: ["Callejón de Huaylas"],
    lodging: "Santa Cruz Lodge (Caraz)",
    summary:
      "Touching down beneath the imposing 20,000-foot summits of the central Andes. Travelers are welcomed at Anta Airport before transferring into the sheltered, temperate microclimate of Caraz. The afternoon is dedicated to connecting with the soil: harvesting directly in the lodge’s organic orchards (Andean herbs, heirloom tubers, and berries) and embarking on an unhurried walk along rural stone paths, conversing with local Quechua families about ancestral gravity canals and mountain farming.",
    whyUnique:
      "A physiologically sound start: we touch down at 8,950 ft and immediately descend to sleep at 7,380 ft, easing into the Andes through living agricultural roots without initial altitude shock.",
    highlight: "Harvesting in the organic lodge garden and quiet dialogue with local farmers",
    experiences: [
      {
        title: "Lodge Orchard Harvest",
        description: "Hands-on harvesting of Andean herbs, vegetables, and berries in the lodge orchard, incorporated into tonight's welcome dinner.",
        type: "Cultural",
        duration: "1.5 hours",
        altitude: "7,380 ft"
      },
      {
        title: "Gentle Village Acclimatization Walk",
        description: "A relaxed stroll through traditional stone and earthen trails, observing centuries-old irrigation canals with Quechua families.",
        type: "Contemplative",
        duration: "2 hours",
        altitude: "7,700 ft"
      },
      {
        title: "Welcome Dinner & Expedition Orientation",
        description: "A curated dinner at Santa Cruz Lodge featuring freshly harvested ingredients and an in-depth orientation on safety and territory.",
        type: "Culinary",
        duration: "2 hours"
      }
    ],
    image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    dayNumber: "Day 2",
    title: "The Mineral Watchtower & Puya Raimondii Sanctuaries",
    subtitle: "360° panoramic amphitheater from Cordillera Negra & evening fire ritual",
    location: "Cordillera Negra",
    maxAlt: "12,950 ft / 3,950 m (Puya Highland)",
    sleepAlt: "7,380 ft / 2,250 m (Santa Cruz Lodge)",
    zones: ["Cordillera Negra", "Callejón de Huaylas"],
    lodging: "Santa Cruz Lodge (Caraz)",
    summary:
      "To truly understand the monumental scale of the Cordillera Blanca, one must first look at it from across the valley. We ascend into the mineral highlands of the Cordillera Negra, a snowless range acting as an elevated natural grandstand across from 110 miles of uninterrupted glaciers. We walk through high-altitude sanctuaries of Puya raimondii, the prehistoric Queen of the Andes that lives up to a century and produces towering 30-foot flower spikes. In the evening, we gather around a ceremonial fire at the lodge to set our intentions before venturing into the snowline.",
    whyUnique:
      "The 'Climb high, sleep low' principle: we stimulate red blood cell production by hiking up to 12,950 ft during the day and return to sleep at 7,380 ft, while enjoying an unobstructed view of the white cordillera rarely seen on conventional tours.",
    highlight: "Gazing upon the complete ice wall from among the giant Puya raimondii plants",
    experiences: [
      {
        title: "Cordillera Negra Panoramic Trek",
        description: "A steady, gentle-gradient hike across the mineral highlands contrasting the dark volcanic range with the white glacial horizon.",
        type: "Active",
        duration: "4.5 hours",
        altitude: "12,950 ft"
      },
      {
        title: "Botanical Encounter with Puya Raimondii",
        description: "In-depth botanical interpretation of this living fossil bromeliad, capable of displaying up to 20,000 blooms on a single flower spike.",
        type: "Contemplative",
        duration: "1 hour",
        altitude: "12,800 ft"
      },
      {
        title: "Andean Fire Circle & Expedition Initiation",
        description: "Evening gathering by the hearth at Santa Cruz Lodge: mountain storytelling, honoring the Apus, and an artisanal dinner.",
        type: "Cultural",
        duration: "2 hours"
      }
    ],
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    dayNumber: "Day 3",
    title: "Parón Upper Moraine Traverse or Llanganuco Paper-Bark Forests",
    subtitle: "High glacial traverse away from crowds or a botanical walk in Llanganuco",
    location: "Huascarán National Park (Parón / Llanganuco)",
    maxAlt: "13,730 ft / 4,185 m (Parón High Route) / 12,630 ft (Llanganuco)",
    sleepAlt: "8,200 ft / 2,500 m (Wayarumi Eco-Lodge)",
    zones: ["Cordillera Blanca"],
    lodging: "Wayarumi Eco-Lodge (Yungay / Mancos)",
    summary:
      "We enter the glacial valleys of Huascarán National Park. Travelers choose their trail: an active high traverse along the northern moraine of Laguna Parón toward the upper glacial tarns far beyond the crowded parking lot viewpoints, beneath the iconic pyramid of Mount Artesonraju; or a contemplative botanical exploration through Llanganuco Valley along the María Josefa trail, walking beneath ancient Queñual (Polylepis) paper-bark trees draped in bromeliads and orchids.",
    whyUnique:
      "We avoid the mass-tourism bottleneck at Parón's lakefront by ascending directly to the remote upper moraine, while offering a gentle, enchanting high-altitude forest walk for those seeking botanical depth.",
    highlight: "Turquoise glacial meltwaters and the twisting red trunks of Polylepis forests",
    experiences: [
      {
        title: "Active Challenge: Upper Moraine Traverse at Parón",
        description: "Ascending beyond the standard tourist trail along the high moraine ridge toward upper glacial tarns directly beneath Artesonraju.",
        type: "Active",
        duration: "5 hours",
        altitude: "13,730 ft"
      },
      {
        title: "Contemplative Walk: Queñual Forest in Llanganuco",
        description: "The María Josefa trail between Chinancocha and Orconcocha tarns: paper-bark trees, high-altitude epiphytes, and crystal creeks.",
        type: "Contemplative",
        duration: "3.5 hours",
        altitude: "12,630 ft"
      },
      {
        title: "Trail Sustenance & Lodge Dinner",
        description: "Nutritious trail box lunch packed for high-mountain energy, followed by a warm multi-course dinner at Wayarumi Eco-Lodge.",
        type: "Culinary",
        duration: "Evening"
      }
    ],
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    dayNumber: "Day 4",
    title: "Laguna 513 Basin, Valley Gravel Biking & Pre-Inca Astronomy",
    subtitle: "Glacial silence beneath Hualcán, rural valley trails, and Andean astronomy",
    location: "Quebrada Chuchún (Carhuaz) / Yungay Valleys",
    maxAlt: "14,530 ft / 4,431 m (Laguna 513)",
    sleepAlt: "8,200 ft / 2,500 m (Wayarumi Eco-Lodge)",
    zones: ["Cordillera Blanca", "Callejón de Huaylas"],
    lodging: "Wayarumi Eco-Lodge (Yungay / Mancos)",
    summary:
      "The definitive hallmark of Explora wilderness. Leaving commercial routes behind, we hike into the untouched basin of Laguna 513, cupped directly under the hanging ice of Mount Hualcán. Cascading waterfalls, jade-colored tarns, and pristine moraines unfold in true solitude. For those seeking adrenaline in the valley, we provide a guided 15-mile gravel bike descent through the agricultural foothills of Yungay. At dusk, we gather for an archaeo-astronomy session to decode the dark-cloud constellations of the Quechua universe.",
    whyUnique:
      "Laguna 513 retains the pure wilderness atmosphere that over-visited lakes have lost. We walk in undisturbed silence alongside glacial streams and ancient moraines.",
    highlight: "The raw solitude of Laguna 513 and the Milky Way with Yacana, the cosmic water llama",
    experiences: [
      {
        title: "Pristine Wilderness Trek: Laguna 513",
        description: "Hike up Quebrada Chuchún past Lake Rajupaquinan to the high glacial bowl of 513 at the foot of Mount Hualcán.",
        type: "Active",
        duration: "6 hours",
        altitude: "14,530 ft"
      },
      {
        title: "Adventure Alternative: Gravel Biking in Yungay",
        description: "A scenic 15-mile descent along quiet rural dirt roads through cornfields and agricultural terraces with dedicated support vehicle.",
        type: "Bike",
        duration: "3.5 hours",
        altitude: "9,180 ft"
      },
      {
        title: "Gentle Alternative: Rocotuyoc & Vicos Community",
        description: "A peaceful walk along lower lakes and Quechua villages learning about communal watershed management.",
        type: "Contemplative",
        duration: "3 hours",
        altitude: "11,640 ft"
      },
      {
        title: "Andean Archaeo-Astronomy Night",
        description: "Stargazing at Wayarumi: identifying the dark-cloud constellations (the llama, fox, and partridge) central to Andean agricultural cycles.",
        type: "Cultural",
        duration: "1.5 hours"
      }
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    dayNumber: "Day 5",
    title: "Punta Olímpica Pass & the Master Artisans of Chacas",
    subtitle: "Trans-Andean pass at 15,530 ft and the inspiring social renaissance of Don Bosco",
    location: "Punta Olímpica → Callejón de Conchucos (Chacas)",
    maxAlt: "15,530 ft / 4,736 m (Punta Olímpica Tunnel)",
    sleepAlt: "9,180 ft / 2,800 m (Cuesta Serena Lodge)",
    zones: ["Cordillera Blanca", "Cloud Forest & Eastern Valleys (Chacas)"],
    lodging: "Cuesta Serena Lodge (Anta / Marcará)",
    summary:
      "A grand trans-Andean overland traverse. We climb between the eastern walls of Mount Huascarán and Chopicalqui, passing through Punta Olímpica Tunnel (15,530 ft)—the highest vehicular tunnel in the world. We descend into the lush eastern valleys toward Chacas, a colonial town preserved in time with hand-carved balconies. Here we discover the moving work of Father Ugo de Censi and the Don Bosco Artisans: local Quechua youths trained in Renaissance Italian joinery, masonry, and stained glass whose sacred art graces the Vatican. We conclude at Cuesta Serena Lodge with a celebration dinner facing Mount Huascarán.",
    whyUnique:
      "The rare synthesis of monumental alpine geography and profound human dignity. While conventional tours bypass the eastern slope, we make Chacas the emotional apex of the journey.",
    highlight: "Examining hand-carved altarpieces and stained glass crafted by master Andean artisans",
    experiences: [
      {
        title: "Punta Olímpica High Overland Crossing",
        description: "Spectacular road journey through the granite pass between Huascarán and Chopicalqui with panoramic photo stops at high alpine tarns.",
        type: "Active",
        duration: "3 hours",
        altitude: "15,530 ft"
      },
      {
        title: "Don Bosco Workshops Immersion in Chacas",
        description: "Private visit to the fine woodworking, stone sculpture, and stained-glass ateliers, meeting the master artisans and understanding their social model.",
        type: "Cultural",
        duration: "3 hours",
        altitude: "10,990 ft"
      },
      {
        title: "Celebration Dinner at Cuesta Serena Lodge",
        description: "A refined culinary evening in one of Peru's finest mountain lodges, featuring paired Andean spirits with nighttime views of Huascarán.",
        type: "Culinary",
        duration: "2.5 hours"
      }
    ],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 6,
    dayNumber: "Day 6",
    title: "Expedition Farewell or High Mountain Summit Leap",
    subtitle: "Flight back to Lima or initiation of the alpine summit program (8-Day Extension)",
    location: "Anta → Lima (or Llaca Refuge for Extension)",
    maxAlt: "9,180 ft / 2,800 m (Lodge)",
    sleepAlt: "Sea Level (Lima) or 14,665 ft (Llaca Refuge)",
    zones: ["Callejón de Huaylas"],
    lodging: "Flight to Lima (or Llaca Refuge for Extension)",
    summary:
      "Golden dawn light bathes Cuesta Serena’s gardens. A relaxed breakfast allows travelers to integrate the experiences of the week. Standard program travelers transfer privately to Anta Airport (25 minutes away) for their direct flight to Lima. Those enrolled in the High Mountain Extension depart toward Quebrada Llaca and its alpine refuge at 14,665 ft for technical glacier training.",
    whyUnique:
      "Complete flexibility: a restorative closing for cultural travelers, and a seamless technical transition for mountaineers seeking a glaciated summit.",
    highlight: "Contemplating the entire white range from the gardens before heading home",
    experiences: [
      {
        title: "Morning Garden Farewell at Cuesta Serena",
        description: "Leisurely breakfast with specialty cloud-forest coffee, freshly baked bread, and views of the snow-clad peaks.",
        type: "Contemplative",
        duration: "2 hours"
      },
      {
        title: "Private Transfer to Anta Airport",
        description: "A short 25-minute transfer with complete luggage assistance to board the direct flight back to Lima.",
        type: "Cultural",
        duration: "1 hour"
      }
    ],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200"
  }
];

const EXTENSION_DAYS = [
  {
    dayNumber: "Day 6 (Extension)",
    title: "Quebrada Llaca & Alpine Ice School",
    lodging: "Llaca Mountain Refuge (14,665 ft / 4,470 m)",
    maxAlt: "14,930 ft",
    summary:
      "4WD ascent into the rugged Llaca Valley. Afternoon technical instruction with certified UIAGM mountain guides: crampon techniques, ice-axe self-arrest, and roped glacier safety.",
    highlight: "Technical glacier acclimatization at the tongue of Llaca Glacier"
  },
  {
    dayNumber: "Day 7 (Extension)",
    title: "Summit Push: Mount Vallunaraju (18,655 ft / 5,686 m)",
    lodging: "Hotel El Abuelo (Huaraz) / Cuesta Serena Lodge",
    maxAlt: "18,655 ft (South Summit)",
    summary:
      "Predawn start at 02:00 AM under vast Andean stars. Ascending snow slopes and seracs (35°-45°) to gain the razor-sharp South Summit. Unrivaled panoramic vistas of Ranrapalca, Huascarán, and Ocshapalca.",
    highlight: "Standing upon an glaciated Andean summit above 18,600 feet"
  },
  {
    dayNumber: "Day 8 (Extension)",
    title: "Summit Celebration & Flight to Lima",
    lodging: "Flight Out to Lima",
    maxAlt: "8,950 ft (Anta Airport)",
    summary:
      "Celebratory mountaineers' breakfast. Transfer to Anta Airport and scenic flight back across the Andes to Lima.",
    highlight: "The enduring memory of touching the tropical alpine sky"
  }
];

const ECOLOGICAL_ZONES = [
  {
    name: "Callejón de Huaylas",
    alt: "7,200 – 9,200 ft / 2,200 – 2,800 m",
    role: "The Fertile Valley & Living Harvests",
    description:
      "A mild inter-Andean corridor shaped by the Santa River. A thriving agricultural landscape defying high-altitude dryness: modern fields of blueberries, export roses, and strawberries alongside family terraces of native potatoes and corn.",
    badge: "Agricultural Zone"
  },
  {
    name: "Cordillera Negra",
    alt: "11,800 – 13,800 ft / 3,600 – 4,200 m",
    role: "The Mineral Watchtower & Ancient Highlands",
    description:
      "A snowless volcanic mountain chain acting as a panoramic front-row grandstand looking directly across at the Cordillera Blanca. Home to the sanctuary of the colossal Puya raimondii.",
    badge: "Panoramic Highlands"
  },
  {
    name: "Cordillera Blanca",
    alt: "12,500 – 22,200 ft / 3,800 – 6,768 m",
    role: "The Realm of Tropical Ice",
    description:
      "Huascarán Biosphere Reserve and National Park (UNESCO). The largest density of tropical glaciers on Earth, vertical granite faces, ancient Polylepis forests, and milk-turquoise moraine tarns.",
    badge: "Alpine Wilderness"
  },
  {
    name: "Cloud Forest & Eastern Valleys (Chacas)",
    alt: "10,200 – 15,500 ft / 3,100 – 4,736 m",
    role: "Amazonian Transition & Don Bosco Artistry",
    description:
      "Crossing Punta Olímpica Tunnel into the Amazon watershed. Moisture rising from the eastern lowlands creates cloud-forest microclimates (ceja de selva). Preserves colonial tiled architecture and world-class wood carving.",
    badge: "Heritage & Craftsmanship"
  }
];

const PRESENTATION_SLIDES = [
  {
    num: 1,
    tag: "COVER",
    title: "Explora Cordillera Blanca Expedition",
    subtitle: "From Glacial Source to Fertile Valley: Ancient Ice, Arid Oases, and Living Andean Heritage",
    type: "dark",
    bullets: [
      "Presented by the Explora Expeditions & Territory Team",
      "6 Days / 5 Nights • Designed for active travelers with progressive acclimatization",
      "Optional High Mountain Extension (8 Days / Mount Vallunaraju 18,655 ft summit)"
    ]
  },
  {
    num: 2,
    tag: "MANIFESTO",
    title: "“In the high Andes, water is not merely scenery; it is ancient ice descending to animate an arid wilderness into life.”",
    subtitle: "True exploration is never about admiring peaks from afar, but about traversing the living corridor where glacial source, ancestral canals, and community thrive.",
    type: "quote",
    bullets: ["Explora Expeditions — Territory Philosophy"]
  },
  {
    num: 3,
    tag: "THE DESTINATION",
    title: "The High-Andean Paradox: Where Glacial Melt Feeds an Arid Oasis",
    subtitle: "A territory that feels dry and mineral at high elevation, yet cradles the planet's largest tropical freshwater reserve.",
    type: "light",
    bullets: [
      "71% of the world's tropical glaciers are located in Peru; the majority along the Cordillera Blanca.",
      "Centuries-old meltwaters descend to irrigate fertile valleys: crops of blueberries, export roses, and strawberries.",
      "Huascarán Biosphere Reserve (UNESCO) with more than thirty peaks soaring above 20,000 ft (6,000 m).",
      "A journey structured along the glacial lifeline: from perpetual ice to the hands of Quechua farming communities."
    ]
  },
  {
    num: 4,
    tag: "VALUE PROPOSITION",
    title: "Why Cordillera Blanca with Explora?",
    subtitle: "Our distinction from traditional mountain tourism",
    type: "dark",
    bullets: [
      "1. Monumental Alpine Scale: 20,000-ft massifs and receding tropical glaciers interpreted with scientific depth.",
      "2. Living Mountain Culture: Organic orchard harvests, ancestral irrigation canals, and the profound legacy of Don Bosco in Chacas.",
      "3. Far Beyond Mass Tourism: Exploring Laguna Parón via high remote moraine traverses, and complete wilderness solitude at Laguna 513.",
      "4. Adaptive Trail Design: Daily choices between active alpine hikes, contemplative botanical walks, or gravel biking."
    ]
  },
  {
    num: 5,
    tag: "GEOGRAPHY",
    title: "Four Connected Ecological Zones",
    subtitle: "Crossing the spine of the Andes rather than lingering in a single valley",
    type: "light",
    bullets: [
      "• Callejón de Huaylas (7,200 – 9,200 ft): Mild Santa River valley, fertile crops, and gentle acclimatization.",
      "• Cordillera Negra (11,800 – 13,800 ft): 360° mineral watchtower and Puya raimondii sanctuaries.",
      "• Cordillera Blanca (12,500 – 22,200 ft): Vertical granite massifs, tropical glaciers, and turquoise tarns.",
      "• Cloud Forest & Eastern Valleys (10,200 – 15,500 ft): Trans-Andean crossing to Chacas and the Amazonian watershed."
    ]
  },
  {
    num: 6,
    tag: "SAFETY & MEDICINE",
    title: "The Science of Progressive Acclimatization",
    subtitle: "Climb High, Sleep Low: our physiological protocol for effortless enjoyment",
    type: "dark",
    bullets: [
      "• Day 1: Touchdown at Anta (8,950 ft) and immediate descent to Santa Cruz Lodge (7,380 ft).",
      "• Day 2: Daytime ascent to Cordillera Negra (12,950 ft) with valley sleep at 7,380 ft.",
      "• Day 3: High moraine at Laguna Parón (13,730 ft) or Llanganuco (12,630 ft), sleeping at Wayarumi (8,200 ft).",
      "• Day 4: Pristine Laguna 513 (14,530 ft) or valley gravel biking (~9,180 ft).",
      "• Day 5: High-altitude vehicular crossing at Punta Olímpica (15,530 ft) and resting at Cuesta Serena (9,180 ft).",
      "• Expedition fleet outfitted with clinical pulse oximetry, medical-grade oxygen, and WFR-certified guides."
    ]
  },
  {
    num: 7,
    tag: "ITINERARY OVERVIEW",
    title: "Itinerary Overview: 6 Days / 5 Nights",
    subtitle: "The rhythm of the expedition",
    type: "dark",
    bullets: [
      "Day 1: Anta Arrival • Santa Cruz Lodge Orchard Harvest • Rural Ethnobotanical Stroll",
      "Day 2: Cordillera Negra • Puya Raimondii Forest • Evening Fire Initiation Circle",
      "Day 3: Laguna Parón Upper Moraine (Artesonraju) or Llanganuco Queñual Forest",
      "Day 4: Laguna 513 Solitude • Yungay Gravel Biking • Archaeo-Astronomy Night",
      "Day 5: Punta Olímpica Pass (15,530 ft) • Chacas & Don Bosco Master Artisans • Cuesta Serena",
      "Day 6: Garden Farewell & Flight to Lima (or start of High Mountain Summit Extension)"
    ]
  },
  {
    num: 8,
    tag: "DAY 1",
    title: "Day 1: Welcome to the Huaylas Valley & Orchard Harvest",
    subtitle: "Landing at Anta and gentle transition into the microclimate of Caraz",
    type: "light",
    bullets: [
      "• Direct harvesting in the organic garden of Santa Cruz Lodge (vegetables and berries).",
      "• Gentle village acclimatization walk observing traditional gravity irrigation canals.",
      "• Respectful and unhurried dialogue with local Quechua families.",
      "• Overnight: Santa Cruz Lodge (7,380 ft) — low elevation for deep, restorative sleep."
    ]
  },
  {
    num: 9,
    tag: "DAY 2",
    title: "Day 2: The Great Amphitheater & Puya Raimondii Sanctuaries",
    subtitle: "Using Cordillera Negra as a private grandstand looking upon 110 miles of glaciers",
    type: "light",
    bullets: [
      "• Panoramic hike among the towering Puya raimondii (flowering spikes reaching up to 30 feet).",
      "• South America's cleanest panorama: Huascarán, Huandoy, Chopicalqui, and Santa Cruz.",
      "• Evening hearth gathering at the lodge: orientation and honoring the mountain Apus.",
      "• Overnight: Santa Cruz Lodge (7,380 ft)."
    ]
  },
  {
    num: 10,
    tag: "DAY 3",
    title: "Day 3: Parón Upper Moraine Traverse or Llanganuco Paper-Bark Forests",
    subtitle: "Dual path: remote high glacial traverse or peaceful paper-bark forest",
    type: "light",
    bullets: [
      "• Active Path: Laguna Parón (13,730 ft) high traverse along the northern moraine toward upper tarns.",
      "• Crowd Mitigation: We leave the crowded tourist viewpoint behind to explore the wilderness basin.",
      "• Contemplative Path: María Josefa trail in Llanganuco (12,630 ft) through ancient Polylepis woodlands.",
      "• Overnight: Wayarumi Eco-Lodge (8,200 ft) facing Mount Huascarán."
    ]
  },
  {
    num: 11,
    tag: "DAY 4",
    title: "Day 4: Laguna 513 Basin, Valley Gravel Biking & Pre-Inca Astronomy",
    subtitle: "Glacial silence beneath Hualcán, rural valley trails, and Andean astronomy",
    type: "light",
    bullets: [
      "• Wilderness Exploration: Laguna 513 (14,530 ft), a crowd-free sanctuary of hanging ice and waterfalls.",
      "• Biking Option: 15-mile gravel bike descent through farmland and eucalyptus groves in Yungay.",
      "• Relaxed Option: Quebrada Rocotuyoc and community water conservation in Vicos.",
      "• Nightfall: Ethno-astronomy under crystal skies, decoding Yacana and Quechua dark constellations.",
      "• Overnight: Wayarumi Eco-Lodge (8,200 ft)."
    ]
  },
  {
    num: 12,
    tag: "DAY 5",
    title: "Day 5: Punta Olímpica Pass & the Master Artisans of Chacas",
    subtitle: "Crossing at 15,530 ft and the inspiring social renaissance of Don Bosco",
    type: "light",
    bullets: [
      "• Trans-Andean crossing through Punta Olímpica Tunnel (15,530 ft), the world's highest vehicular tunnel.",
      "• 360° views of five 20,000-foot giants: Huascarán, Chopicalqui, Ulta, and Contrahierbas.",
      "• Chacas: Private immersion into Father Ugo de Censi's Don Bosco ateliers (fine joinery and stained glass).",
      "• Overnight: Cuesta Serena Lodge (9,180 ft) with celebration dinner facing illuminated Mount Huascarán."
    ]
  },
  {
    num: 13,
    tag: "LIVING CULTURE",
    title: "The Andean Renaissance: Don Bosco Artisans in Chacas",
    subtitle: "Why this human story is central to Explora's vision",
    type: "dark",
    bullets: [
      "• In 1976, Father Ugo de Censi founded a free trade school in isolated Chacas for Quechua youths.",
      "• Farmers learned Renaissance cabinetmaking, stone masonry, and church stained-glass crafting.",
      "• Their sacred masterworks are now exhibited in the Vatican and European cathedrals.",
      "• A true solidarity economy: 100% of atelier revenue finances free hospitals and local schooling."
    ]
  },
  {
    num: 14,
    tag: "DAY 6",
    title: "Day 6: Expedition Farewell or High Mountain Summit",
    subtitle: "Flight back to Lima or initiation of the mountaineering program",
    type: "light",
    bullets: [
      "• Leisurely breakfast in Cuesta Serena's gardens overlooking the glacier.",
      "• Private 25-minute transfer to Anta Airport for connecting flights to Lima.",
      "• For mountaineers: Departure to Quebrada Llaca for the summit extension program."
    ]
  },
  {
    num: 15,
    tag: "EXTENSION",
    title: "Optional High Mountain Extension: Mount Vallunaraju (18,655 ft / 5,686 m)",
    subtitle: "For travelers dreaming of standing atop an Andean glacial peak",
    type: "dark",
    bullets: [
      "• Day 6 (Ext): Transfer to Quebrada Llaca (14,665 ft), Llaca Refuge overnight, and glacier ice school.",
      "• Day 7 (Ext): Midnight alpine push to the South Summit of Mount Vallunaraju (18,655 ft) with UIAGM guides.",
      "• Day 8 (Ext): Celebratory mountain breakfast in Huaraz, transfer to Anta, and flight to Lima.",
      "• Strict safety ratio: 1 UIAGM mountain guide per 2 travelers."
    ]
  },
  {
    num: 16,
    tag: "BASE CAMPS",
    title: "Our Base Camps: The Luxury of the Essential",
    subtitle: "Boutique lodges rooted in their respective mountain landscapes",
    type: "light",
    bullets: [
      "• Santa Cruz Lodge (Caraz • 7,380 ft): Historic hacienda surrounded by fruit orchards for low acclimatization.",
      "• Wayarumi Eco-Lodge (Yungay • 8,200 ft): Earthen adobe and native timber with direct Huascarán views.",
      "• Cuesta Serena Lodge (Anta • 9,180 ft): Luxury retreat with Andean spa, heated pool, and signature cuisine.",
      "• Llaca Mountain Refuge (14,665 ft): Authentic alpine base camp for the technical summit extension."
    ]
  },
  {
    num: 17,
    tag: "CLIMATE & GEAR",
    title: "Andean Climate & Recommended Three-Layer System",
    subtitle: "Intense daytime sun and crisp sub-zero high-altitude nights",
    type: "dark",
    bullets: [
      "• Valleys (7,200 – 9,200 ft): 64°F to 75°F (18°C to 24°C) daytime / 46°F to 54°F (8°C to 12°C) night.",
      "• Tarns & Passes (12,500 – 15,500 ft): 46°F to 59°F (8°C to 15°C) daytime / 28°F to 39°F (-2°C to 4°C) night.",
      "• High Mountain (> 16,400 ft): 32°F to 43°F daytime / 14°F (-10°C) predawn summit push.",
      "• Provided by Explora: Trekking poles, mountain bikes, helmets, pulse oximetry, and medical oxygen.",
      "• Required: Three-layer system (thermal base layer, mid insulating layer, and waterproof breathable shell)."
    ]
  },
  {
    num: 18,
    tag: "EXPEDITION FLEET",
    title: "Expedition Fleet: Accessing Remote Terrain",
    subtitle: "Vehicles custom-prepared for rugged Andean mountain roads",
    type: "light",
    bullets: [
      "• Mercedes-Benz Sprinter 4x4: Overland comfort with leather seats, reinforced suspension, and oxygen onboard.",
      "• Jeep Rubicon / Toyota Prado 4WD: Navigating high moraine tracks inaccessible to commercial tour buses.",
      "• Gravel & Mountain Bike Fleet: Purpose-built bikes for exhilarating dirt road descents through the valley.",
      "• Garmin InReach satellite communication units assigned to every expedition team."
    ]
  },
  {
    num: 19,
    tag: "DEPARTURES 2027",
    title: "Seasonality & Confirmed 2027 Departures",
    subtitle: "The Andean Summer: the premier window of deep blue skies and stable weather",
    type: "dark",
    bullets: [
      "• Optimal Dry Season: May to October (unbroken skies, maximum peak clarity, and stable footing).",
      "• Departure 1: June 14 - 19, 2027 (Summit Extension through June 21)",
      "• Departure 2: July 12 - 17, 2027 (Summit Extension through July 19)",
      "• Departure 3: August 09 - 14, 2027 (Summit Extension through August 16)",
      "• Departure 4: September 06 - 11, 2027 (Summit Extension through September 13)",
      "• Intimate groups capped at a maximum of 8 travelers to preserve silence and wilderness exclusivity."
    ]
  },
  {
    num: 20,
    tag: "PRICING & TERMS",
    title: "Expedition Rates & Inclusions",
    subtitle: "Seamless all-inclusive mountain exploration",
    type: "light",
    bullets: [
      "• 6 Days / 5 Nights Program: USD 8,900 per person (double occupancy)",
      "• High Mountain Extension (8 Days / Summit Vallunaraju): USD 2,850 additional per person",
      "• Includes: All private 4WD ground transfers from Anta Airport, 5 nights boutique lodging, full board with trail lunches and curated lodge dinners, daily exploration menu, bilingual guides, and equipment.",
      "• Direct Social Contribution: Mandatory donation included for the Don Bosco Artisans Foundation in Chacas.",
      "• Excludes: Commercial Lima-Anta flights and high-altitude medical travel insurance."
    ]
  },
  {
    num: 21,
    tag: "FAREWELL",
    title: "Allian shamushqa kapay.",
    subtitle: "“Welcome with an open heart” — Ancash Quechua greeting",
    type: "quote",
    bullets: [
      "Explora Lodges and Expeditions",
      "www.explora.com • expeditions@explora.com"
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<"explorer" | "deck" | "altitudes" | "zones" | "chacas" | "pitch">("explorer");
  const [selectedDay, setSelectedDay] = useState<DayData>(ITINERARY_DAYS[0]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [selectedZone, setSelectedZone] = useState(ECOLOGICAL_ZONES[0]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== "deck") return;
      if (e.key === "ArrowRight" || e.key === "Space") {
        setCurrentSlideIndex((prev) => Math.min(prev + 1, PRESENTATION_SLIDES.length - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab]);

  const copyPitchText = () => {
    const text = `EXPLORA CORDILLERA BLANCA EXPEDITION (PERU) — EXECUTIVE VALUE PROPOSITION:
From Glacial Source to Fertile Valley: Ancient Ice, Arid Oases, and Living Mountain Heritage.

WHAT MAKES THIS EXPEDITION UNIQUE:
1. THE HIGH-ANDEAN PARADOX: High in Peru's northern Andes lies Earth's highest concentration of tropical glaciers (71% of the global total). In an alpine landscape that feels deceptively arid, millennia-old glacial meltwaters feed gravity-fed pre-Inca aqueducts and fertile valley terraces cultivating export blueberries, strawberries, and cut roses.
2. FAR BEYOND MASS TOURISM: We bypass crowded tourist viewpoints, exploring Laguna Parón via an off-the-beaten-path upper moraine traverse beneath Mount Artesonraju, and delving into untouched sanctuaries like Laguna 513 in complete wilderness silence.
3. LIVING MOUNTAIN CRAFTSMANSHIP: Hands-on orchard harvests with local Quechua families, crossing the continental divide at Punta Olímpica Tunnel (15,530 ft), and an exclusive private immersion into the world-renowned Renaissance woodworking and masonry ateliers of Chacas.
4. ADAPTIVE EXPLORATION DESIGN: Daily tiered options tailored to every guest profile (active alpine moraine hikes, contemplative Queñual cloud-forest walks, valley gravel cycling, plus an optional 18,655-ft glaciated summit).
5. PROGRESSIVE ACCLIMATIZATION: Our "Climb high, sleep low" medical protocol ensures deep physical well-being and effortless enjoyment without altitude exhaustion.`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];

  return (
    <div className="min-h-screen bg-[#0e0e10] text-[#f5f2ed] font-sans selection:bg-[#c69255] selection:text-black">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0e0e10]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#c69255]/20 border border-[#c69255]/40 flex items-center justify-center text-[#c69255]">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium block text-white/90">
                Explora Expeditions
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#c69255]">
                Cordillera Blanca • Peru
              </span>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab("explorer")}
              className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all ${
                activeTab === "explorer"
                  ? "bg-[#c69255] text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Day-by-Day Journey
            </button>
            <button
              onClick={() => setActiveTab("deck")}
              className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === "deck"
                  ? "bg-[#c69255] text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Presentation Deck (Slides)
            </button>
            <button
              onClick={() => setActiveTab("altitudes")}
              className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all ${
                activeTab === "altitudes"
                  ? "bg-[#c69255] text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Altitudes & Acclimatization
            </button>
            <button
              onClick={() => setActiveTab("zones")}
              className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all ${
                activeTab === "zones"
                  ? "bg-[#c69255] text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              4 Ecological Zones
            </button>
            <button
              onClick={() => setActiveTab("chacas")}
              className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all ${
                activeTab === "chacas"
                  ? "bg-[#c69255] text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Chacas & Don Bosco
            </button>
            <button
              onClick={() => setActiveTab("pitch")}
              className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all ${
                activeTab === "pitch"
                  ? "bg-[#c69255] text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Commercial Pitch
            </button>
          </div>

          {/* Download PPTX Button */}
          <div className="flex items-center gap-3">
            <a
              href="/Explora_Cordillera_Blanca_Expedition.pptx"
              download="Explora_Cordillera_Blanca_Expedition.pptx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c69255] to-[#d8a86c] text-black rounded-full text-[11px] uppercase tracking-widest font-semibold hover:brightness-110 transition-all shadow-lg shadow-[#c69255]/20"
              title="Download official PowerPoint presentation"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span> PPTX
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* ========================================================
            TAB 1: ITINERARY EXPLORER
            ======================================================== */}
        {activeTab === "explorer" && (
          <div>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=2000"
                  alt="Cordillera Blanca Glacier"
                  className="w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e10]/80 via-[#0e0e10]/40 to-[#0e0e10]" />
              </div>

              <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c69255]/40 bg-[#c69255]/10 text-[#c69255] text-[10px] uppercase tracking-[0.3em] mb-6"
                >
                  <Sparkles className="w-3 h-3" />
                  New Expedition • 6 Days / 5 Nights (Optional 8-Day Summit Extension)
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-serif font-light tracking-tight leading-[1.1] mb-6"
                >
                  From Glacial Source <br />
                  <span className="italic font-normal text-[#c69255]">
                    to Fertile Valley
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed mb-10"
                >
                  High in Peru's northern Andes lies Earth's highest concentration of tropical
                  glaciers—a realm of stark granite and arid plateaus brought vibrantly to life by glacial runoff.
                  Here, ancestral gravity canals channel meltwater from 20,000-foot summits into fertile valleys
                  cultivating export blueberries, strawberries, and cut roses. An expedition tracing the vital pulse of water.
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                    <Mountain className="w-4 h-4 text-[#c69255]" />
                    <span className="text-white/80">30+ peaks over 20,000 ft</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                    <Waves className="w-4 h-4 text-[#3a7d8c]" />
                    <span className="text-white/80">Pristine Moraine Tarns (Parón & 513)</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                    <Heart className="w-4 h-4 text-[#c69255]" />
                    <span className="text-white/80">Renaissance Ateliers of Chacas</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                    <Bike className="w-4 h-4 text-[#3a7d8c]" />
                    <span className="text-white/80">Valley Gravel Cycling</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Team Manifesto */}
            <section className="py-20 px-6 max-w-7xl mx-auto border-b border-white/10">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3 text-[#c69255]">
                    <div className="w-8 h-[1px] bg-[#c69255]" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
                      Explora Expeditions & Territory Team Manifesto
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-light leading-snug">
                    “Cordillera Blanca is not about 'looking at mountains.' It is about
                    advancing through a territory where glaciers, ancestral canals, communities, and
                    craftsmanship are deeply bound together.”
                  </h2>
                  <p className="text-white/70 font-light leading-relaxed text-sm md:text-base">
                    As a multidisciplinary team of guides, territory specialists, and
                    expedition architects, we designed this journey to dismantle
                    conventional tourist patterns. We unite{" "}
                    <strong className="text-white font-medium">four distinct ecological zones</strong>{" "}
                    (Callejón de Huaylas, Cordillera Negra, Cordillera Blanca, and the
                    Cloud Forest transition into Chacas), offering a daily menu of active
                    mountain hikes, contemplative botanical walks, and gravel cycling.
                    No traveler is rushed, and everyone connects with the Andes at their
                    own rhythm.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-serif text-[#c69255]">71%</div>
                      <div className="text-[11px] text-white/60">
                        of Earth's tropical glaciers in Peru
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif text-[#c69255]">15,530 ft</div>
                      <div className="text-[11px] text-white/60">
                        world's highest tunnel at Punta Olímpica
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif text-[#c69255]">18,655 ft</div>
                      <div className="text-[11px] text-white/60">
                        optional summit of Mount Vallunaraju
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 p-6 shadow-2xl">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#c69255] font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4" /> The Explora Commitment
                    </h3>
                    <ul className="space-y-3.5 text-xs text-white/80">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#c69255] shrink-0 mt-0.5" />
                        <span>
                          <strong>Progressive Physiology:</strong> We always sleep lower
                          than the peak altitude reached during daytime exploration.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#c69255] shrink-0 mt-0.5" />
                        <span>
                          <strong>Far Beyond the Crowds:</strong> Remote upper moraine routes at
                          Parón and undisturbed wilderness at Laguna 513.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#c69255] shrink-0 mt-0.5" />
                        <span>
                          <strong>Living Craftsmanship:</strong> Intimate immersion into
                          the Renaissance wood ateliers of Don Bosco in Chacas.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#c69255] shrink-0 mt-0.5" />
                        <span>
                          <strong>Valley Gastronomy:</strong> Organic lodge orchard harvests,
                          wholesome mountain trail lunches, and paired lodge dinners.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Day-by-Day Selector */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#c69255] block mb-2 font-medium">
                    Official 6-Day / 5-Night Expedition
                  </span>
                  <h2 className="text-4xl font-serif font-light">
                    Day-by-Day Journey
                  </h2>
                </div>
                <p className="text-xs text-white/50 max-w-md mt-4 md:mt-0">
                  Select any day to inspect ecological context, altitude profile,
                  exploration options, and base camp details.
                </p>
              </div>

              {/* Day Pills Bar */}
              <div className="flex overflow-x-auto gap-3 pb-4 mb-10 no-scrollbar">
                {ITINERARY_DAYS.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setSelectedDay(day)}
                    className={`flex-shrink-0 px-5 py-3 rounded-2xl border transition-all text-left ${
                      selectedDay.id === day.id
                        ? "bg-[#c69255] text-black border-[#c69255] shadow-lg shadow-[#c69255]/20 font-medium"
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wider opacity-70">
                      {day.dayNumber}
                    </div>
                    <div className="text-xs font-semibold whitespace-nowrap">
                      {day.title.split(":")[0]}
                    </div>
                    <div className="text-[10px] opacity-75 mt-0.5">
                      Max: {day.maxAlt.split(" / ")[0]}
                    </div>
                  </button>
                ))}
              </div>

              {/* Day Detail Card */}
              <motion.div
                key={selectedDay.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 bg-white/[0.03] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl"
              >
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#c69255]/20 border border-[#c69255]/40 text-[#c69255] text-[10px] uppercase tracking-widest font-semibold">
                      {selectedDay.dayNumber}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-white/60">
                      <MapPin className="w-3.5 h-3.5 text-[#3a7d8c]" />
                      {selectedDay.location}
                    </span>
                    {selectedDay.zones.map((z, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] uppercase tracking-wider text-white/70"
                      >
                        {z}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-serif font-light leading-tight">
                    {selectedDay.title}
                  </h3>
                  <p className="text-sm text-[#c69255] italic font-serif">
                    {selectedDay.subtitle}
                  </p>

                  <p className="text-white/80 font-light text-sm leading-relaxed">
                    {selectedDay.summary}
                  </p>

                  {/* Why Unique Badge */}
                  <div className="p-4 rounded-2xl bg-[#c69255]/10 border border-[#c69255]/20 space-y-1">
                    <div className="text-[10px] uppercase tracking-widest text-[#c69255] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Explora Perspective
                    </div>
                    <div className="text-xs text-white/80 leading-relaxed">
                      {selectedDay.whyUnique}
                    </div>
                  </div>

                  {/* Exploration Menu */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white/50 mb-3 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" /> Exploration Menu of the Day
                    </h4>
                    <div className="space-y-3">
                      {selectedDay.experiences.map((exp, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-xs font-semibold text-white">
                              {exp.title}
                            </span>
                            <div className="flex items-center gap-2">
                              {exp.duration && (
                                <span className="text-[10px] text-white/50">
                                  {exp.duration}
                                </span>
                              )}
                              <span
                                className={`text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-medium ${
                                  exp.type === "Active"
                                    ? "bg-red-500/20 text-red-300 border border-red-500/30"
                                    : exp.type === "Contemplative"
                                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                    : exp.type === "Bike"
                                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                    : exp.type === "Cultural"
                                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                    : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                }`}
                              >
                                {exp.type}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-white/60 font-light leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
                    <img
                      src={selectedDay.image}
                      alt={selectedDay.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] uppercase tracking-widest text-[#c69255] font-semibold block mb-0.5">
                        Visual Highlight
                      </span>
                      <p className="text-xs text-white font-medium line-clamp-2">
                        {selectedDay.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Altitude Profile Card */}
                  <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-white/50 block">
                          Daytime Peak Elevation
                        </span>
                        <span className="text-lg font-serif text-[#c69255] font-medium">
                          {selectedDay.maxAlt}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] uppercase tracking-widest text-white/50 block">
                          Sleep Elevation
                        </span>
                        <span className="text-lg font-serif text-white font-medium">
                          {selectedDay.sleepAlt}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/50 block mb-1">
                        Base Camp / Lodging
                      </span>
                      <span className="text-sm font-medium text-white block">
                        {selectedDay.lodging}
                      </span>
                    </div>

                    <div className="text-[11px] text-white/50 leading-relaxed pt-2 border-t border-white/5">
                      <strong className="text-white/80">Physiological Protocol:</strong> Daily pulse oximetry monitoring, restorative Andean herb infusions (muña & coca), and gradual altitude progression.
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* High Mountain Extension Card */}
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#18181a] via-[#202024] to-[#18181a] border border-[#c69255]/40 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#c69255]/20 text-[#c69255] text-[10px] uppercase tracking-widest font-bold">
                      Optional Extension • 8 Days / 7 Nights
                    </span>
                    <h3 className="text-2xl font-serif mt-2">
                      Aspiring to summit a glaciated peak? Mount Vallunaraju (18,655 ft / 5,686 m)
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/60 block">Additional Investment</span>
                    <span className="text-xl font-serif text-[#c69255]">USD 2,850 / person</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {EXTENSION_DAYS.map((ext, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-[#c69255] font-semibold mb-1">
                        {ext.dayNumber} • Max {ext.maxAlt}
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1.5">
                        {ext.title}
                      </h4>
                      <p className="text-xs text-white/60 font-light mb-2">
                        {ext.summary}
                      </p>
                      <div className="text-[10px] text-white/40">
                        Lodging: {ext.lodging}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================
            TAB 2: PRESENTATION DECK (SLIDES MODE)
            ======================================================== */}
        {activeTab === "deck" && (
          <section className="py-12 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c69255] font-medium block">
                  Official Launch Deck • Explora Style
                </span>
                <h2 className="text-3xl font-serif">
                  Slide {currentSlideIndex + 1} of {PRESENTATION_SLIDES.length}: {currentSlide.tag}
                </h2>
              </div>

              {/* Slide Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCurrentSlideIndex((p) => Math.max(p - 1, 0))}
                  disabled={currentSlideIndex === 0}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all"
                  title="Previous slide (Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-white/60 font-mono">
                  {currentSlideIndex + 1} / {PRESENTATION_SLIDES.length}
                </span>
                <button
                  onClick={() =>
                    setCurrentSlideIndex((p) =>
                      Math.min(p + 1, PRESENTATION_SLIDES.length - 1)
                    )
                  }
                  disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all"
                  title="Next slide (Right Arrow or Space)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <a
                  href="/Explora_Cordillera_Blanca_Expedition.pptx"
                  download="Explora_Cordillera_Blanca_Expedition.pptx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-xs text-white hover:bg-white/20 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-[#c69255]" /> Download .PPTX
                </a>
              </div>
            </div>

            {/* Slide Frame (16:9) */}
            <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-all">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.num}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className={`absolute inset-0 p-8 md:p-16 flex flex-col justify-between ${
                    currentSlide.type === "dark"
                      ? "bg-[#111113] text-[#f5f2ed]"
                      : currentSlide.type === "quote"
                      ? "bg-[#0a0a0c] text-white justify-center items-center text-center"
                      : "bg-[#f5f2ed] text-[#141416]"
                  }`}
                >
                  {/* Slide Header */}
                  {currentSlide.type !== "quote" && (
                    <div className="flex items-center justify-between border-b pb-4 border-current/15">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c69255]">
                          E X P L O R A
                        </span>
                        <span className="text-current/30">•</span>
                        <span className="text-[10px] uppercase tracking-widest opacity-60">
                          {currentSlide.tag}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono opacity-50">
                        SLIDE {currentSlide.num.toString().padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  {/* Slide Body */}
                  {currentSlide.type === "quote" ? (
                    <div className="max-w-3xl space-y-8">
                      <div className="text-[11px] uppercase tracking-[0.4em] text-[#c69255] font-semibold">
                        E X P L O R A   E X P E D I T I O N S
                      </div>
                      <h3 className="text-2xl md:text-4xl font-serif italic leading-relaxed text-white/95">
                        {currentSlide.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#c69255] font-sans">
                        {currentSlide.subtitle}
                      </p>
                    </div>
                  ) : (
                    <div className="my-auto space-y-6">
                      <h3
                        className={`text-2xl md:text-4xl font-serif font-light leading-snug ${
                          currentSlide.type === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {currentSlide.title}
                      </h3>
                      {currentSlide.subtitle && (
                        <p className="text-sm md:text-base text-[#c69255] font-serif italic">
                          {currentSlide.subtitle}
                        </p>
                      )}

                      <div className="grid gap-3 pt-4">
                        {currentSlide.bullets.map((b, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-3 text-xs md:text-sm font-light leading-relaxed p-3 rounded-xl ${
                              currentSlide.type === "dark"
                                ? "bg-white/[0.04] text-white/80"
                                : "bg-black/[0.04] text-black/85"
                            }`}
                          >
                            <span className="text-[#c69255] font-bold">•</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Slide Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-current/15 text-[10px] uppercase tracking-widest opacity-60">
                    <span>Cordillera Blanca Expedition • Peru</span>
                    <span>Explora Expeditions Team</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-8 overflow-x-auto pb-4 no-scrollbar">
              <div className="flex gap-2 min-w-max">
                {PRESENTATION_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.num}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`px-3 py-2 rounded-xl text-left border transition-all text-[10px] ${
                      currentSlideIndex === idx
                        ? "bg-[#c69255] text-black border-[#c69255] font-bold shadow-md"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    <div className="font-mono">#{slide.num}</div>
                    <div className="whitespace-nowrap font-medium">{slide.tag}</div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            TAB 3: ALTITUDES & ACCLIMATIZATION SCIENCE
            ======================================================== */}
        {activeTab === "altitudes" && (
          <section className="py-20 px-6 max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#c69255] font-bold block mb-2">
                Altitude Medicine & Well-being
              </span>
              <h2 className="text-4xl font-serif font-light mb-4">
                The Science of Progressive Acclimatization
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                In the Cordillera Blanca, altitude is not fought; it is navigated with
                physiological foresight. We adhere to the mountain medicine standard{" "}
                <strong className="text-white font-medium">“Climb high, sleep low”</strong>:
                stimulating oxygen transport during daytime hikes and descending to sleep
                in protected, lower valleys.
              </p>
            </div>

            {/* Daily Profile Cards */}
            <div className="grid md:grid-cols-6 gap-3">
              {ITINERARY_DAYS.map((d) => (
                <div
                  key={d.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c69255]/50 transition-all"
                >
                  <div>
                    <div className="text-[10px] font-mono text-[#c69255] uppercase font-bold">
                      {d.dayNumber}
                    </div>
                    <h4 className="text-xs font-semibold text-white mt-1 line-clamp-1">
                      {d.location.split("→")[0]}
                    </h4>
                  </div>

                  <div className="my-6 space-y-3">
                    <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                      <div className="text-[9px] uppercase tracking-wider text-red-300">
                        Day Peak
                      </div>
                      <div className="text-sm font-serif font-bold text-white">
                        {d.maxAlt.split(" / ")[0]}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                      <div className="text-[9px] uppercase tracking-wider text-emerald-300">
                        Sleep
                      </div>
                      <div className="text-sm font-serif font-bold text-white">
                        {d.sleepAlt.split(" / ")[0]}
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-white/50 text-center leading-tight">
                    {d.lodging.split("(")[0]}
                  </div>
                </div>
              ))}
            </div>

            {/* Medical Pillars */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-[#c69255] font-semibold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Pulse Oximetry & Vitals
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Daily resting biometric checks (SpO2 pulse oximetry and heart rate) at
                  breakfast and dinner to assess individual acclimatization before every trek.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[#c69255] font-semibold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Flame className="w-4 h-4" /> Medical-Grade Oxygen
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  All 4WD support vehicles and base camps are equipped with continuous-flow
                  oxygen cylinders and Gamow portable hyperbaric bags for emergency readiness.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[#c69255] font-semibold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4" /> WFR-Certified Mountain Guides
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  All Explora expedition guides are certified Wilderness First Responders (WFR)
                  with specialized training in high-altitude medicine and mountain safety.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            TAB 4: 4 ECOLOGICAL ZONES
            ======================================================== */}
        {activeTab === "zones" && (
          <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#c69255] font-bold block mb-2">
                Expedition Geography
              </span>
              <h2 className="text-4xl font-serif font-light mb-4">
                Four Distinct Ecological Zones
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Rather than confining the journey to a single valley, our expedition
                intertwines the four defining ecological zones of Áncash across the continental divide.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {ECOLOGICAL_ZONES.map((zone, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedZone(zone)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                    selectedZone.name === zone.name
                      ? "bg-[#c69255]/15 border-[#c69255] shadow-xl"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-[9px] uppercase tracking-wider text-[#c69255] font-bold">
                    {zone.badge}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-white mt-4 mb-1">
                    {zone.name}
                  </h3>
                  <div className="text-xs font-mono text-[#c69255] mb-3">
                    {zone.alt}
                  </div>
                  <div className="text-xs font-medium text-white/90 mb-3">
                    {zone.role}
                  </div>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {zone.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Botany Deep Dive */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#3a7d8c] font-bold">
                  High-Altitude Ecosystem 01
                </span>
                <h4 className="text-2xl font-serif">
                  The Ancient Queñual Forests (Polylepis)
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Often mistakenly referred to as 'tropical rainforest,' the Queñuals are
                  actually among the highest arboreal forests on Earth (thriving up to 14,500 ft).
                  Their gnarled red trunks feature peeling paper-thin bark that insulates the
                  tree against freezing nights. The understory harbors high-altitude bromeliads,
                  orchids, and mosses that filter pure glacial runoff.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#c69255] font-bold">
                  High-Altitude Ecosystem 02
                </span>
                <h4 className="text-2xl font-serif">
                  Puya Raimondii: The Queen of the Andes
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Found exclusively in the cold paramo highlands of the Cordillera Negra. This
                  colossal bromeliad can live up to a century before producing a single
                  monumental flowering spike over 30 feet tall with up to 20,000 blooms,
                  drawing giant hummingbirds before setting seed and completing its life cycle.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            TAB 5: CHACAS & DON BOSCO ARTISANS
            ======================================================== */}
        {activeTab === "chacas" && (
          <section className="py-20 px-6 max-w-7xl mx-auto space-y-16">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-6 space-y-6">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#c69255] font-bold block">
                  Living Mountain Heritage
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight">
                  Chacas and the Renaissance of the Don Bosco Artisans
                </h2>
                <p className="text-white/80 font-light text-sm md:text-base leading-relaxed">
                  Why is Chacas the emotional peak of the expedition? Because it embodies
                  the deepest union between Andean resilience and master craftsmanship.
                  Isolated for generations behind the mountain wall, this colonial town on
                  the eastern slope was the cradle of one of South America's most inspiring
                  social transformations.
                </p>
                <div className="p-6 rounded-2xl bg-[#c69255]/10 border border-[#c69255]/30 space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-[#c69255] font-bold">
                    Father Ugo de Censi (1924 - 2018)
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Italian Salesian priest of Operation Mato Grosso. Arriving in Chacas in
                    1976, he rejected passive charity. Instead, he founded a tuition-free
                    trade school where Italian masters taught Renaissance joinery, granite
                    masonry, and stained-glass artistry to young Quechua farmers.
                  </p>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200"
                    alt="Chacas craft"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs text-[#c69255] uppercase tracking-widest font-semibold block">
                      Renaissance Wood & Stone Sculpture
                    </span>
                    <p className="text-sm text-white font-serif">
                      Masterpieces born at 11,000 feet now gracing European cathedrals and the Vatican.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-2xl font-serif text-[#c69255]">01</div>
                <h4 className="text-lg font-serif font-semibold text-white">
                  Fine Renaissance Joinery
                </h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Working in fine cedar, walnut, and mahogany. Seamless mortise-and-tenon
                  joints without nails, baroque relief carvings, and contemporary designs
                  sought after by international collectors.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-2xl font-serif text-[#c69255]">02</div>
                <h4 className="text-lg font-serif font-semibold text-white">
                  Stained Glass & Granite Masonry
                </h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Blown glass hand-soldered with traditional European lead techniques,
                  alongside monumental granite sculptures chiseled from Andean bedrock.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-2xl font-serif text-[#c69255]">03</div>
                <h4 className="text-lg font-serif font-semibold text-white">
                  100% Solidarity Economy
                </h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Workshops operate as worker cooperatives. All proceeds directly fund
                  Mama Ashu Hospital (offering free healthcare to peasants), elderly care,
                  and regional vocational education.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            TAB 6: COMMERCIAL PITCH & MARKETING TOOLKIT
            ======================================================== */}
        {activeTab === "pitch" && (
          <section className="py-20 px-6 max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#c69255] font-bold block mb-2">
                Sales & Marketing Toolkit
              </span>
              <h2 className="text-4xl font-serif font-light mb-4">
                Executive Value Proposition & Pitch
              </h2>
              <p className="text-white/70 text-sm max-w-2xl mx-auto">
                Editorial copy crafted for North American luxury travel advisors,
                client-facing briefings, newsletters, and trade sales presentations.
              </p>
            </div>

            {/* Pitch Script Box */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/15 space-y-6 relative shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#c69255] font-semibold flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Official Sales Script (Copy-Ready)
                </span>
                <button
                  onClick={copyPitchText}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-all"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Script
                    </>
                  )}
                </button>
              </div>

              <div className="bg-black/60 p-6 rounded-2xl font-mono text-xs text-white/80 leading-relaxed space-y-4 border border-white/5 overflow-x-auto">
                <p className="text-[#c69255] font-bold">
                  EXPLORA CORDILLERA BLANCA EXPEDITION (PERU) — EXECUTIVE VALUE PROPOSITION:
                </p>
                <p>
                  1. THE HIGH-ANDEAN PARADOX: High in Peru's northern Andes lies Earth's highest concentration
                  of tropical glaciers (71% of the global total). In an alpine landscape that feels deceptively arid,
                  millennia-old glacial meltwaters feed gravity-fed pre-Inca aqueducts and fertile valley terraces cultivating
                  export blueberries, strawberries, and cut roses.
                </p>
                <p>
                  2. FAR BEYOND MASS TOURISM: We bypass crowded tourist viewpoints, exploring Laguna Parón via an
                  off-the-beaten-path upper moraine traverse beneath Mount Artesonraju, and delving into untouched
                  sanctuaries like Laguna 513 in complete wilderness silence.
                </p>
                <p>
                  3. LIVING MOUNTAIN CRAFTSMANSHIP: Hands-on orchard harvests with local Quechua families, crossing the
                  continental divide at Punta Olímpica Tunnel (15,530 ft), and an exclusive private immersion into the
                  world-renowned Renaissance woodworking and masonry ateliers of Chacas.
                </p>
                <p>
                  4. ADAPTIVE EXPLORATION DESIGN: Daily tiered options tailored to every guest profile (active alpine moraine
                  hikes, contemplative Queñual cloud-forest walks, valley gravel cycling, plus an optional 18,655-ft glaciated summit).
                </p>
                <p>
                  5. PROGRESSIVE ACCLIMATIZATION: Our "Climb high, sleep low" medical protocol ensures deep physical well-being
                  and effortless enjoyment without altitude exhaustion.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-white/50 block">Target Audience:</span>
                  <span className="text-white font-medium">
                    Discerning active travelers, collectors of wilderness, and cultural connoisseurs seeking alpine depth without sacrificing boutique comfort.
                  </span>
                </div>
                <div>
                  <span className="text-white/50 block">Key Sales Drivers:</span>
                  <span className="text-white font-medium">
                    Small groups of 8, direct flights to Anta, progressive altitude management, and genuine community reinvestment in Chacas.
                  </span>
                </div>
              </div>
            </div>

            {/* PPTX Download Banner */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#c69255]/20 via-white/5 to-[#c69255]/10 border border-[#c69255]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c69255] font-bold block mb-1">
                  Official PowerPoint Deck Ready
                </span>
                <h4 className="text-xl font-serif text-white">
                  Explora_Cordillera_Blanca_Expedition.pptx
                </h4>
                <p className="text-xs text-white/60">
                  21 widescreen slides in US luxury travel English with typography, tables, and notes.
                </p>
              </div>
              <a
                href="/Explora_Cordillera_Blanca_Expedition.pptx"
                download="Explora_Cordillera_Blanca_Expedition.pptx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#c69255] text-black rounded-full text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all shadow-xl"
              >
                <Download className="w-4 h-4" /> Download PowerPoint (.PPTX)
              </a>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6 bg-[#08080a] text-white/60 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#c69255]" />
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-white font-medium block">
                Explora Lodges and Expeditions
              </span>
              <span className="text-[10px] text-white/40">
                Cordillera Blanca Expeditions Team
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("explorer")}
              className="hover:text-white transition-colors"
            >
              Itinerary
            </button>
            <button
              onClick={() => setActiveTab("deck")}
              className="hover:text-white transition-colors"
            >
              Slide Deck
            </button>
            <button
              onClick={() => setActiveTab("altitudes")}
              className="hover:text-white transition-colors"
            >
              Acclimatization
            </button>
            <button
              onClick={() => setActiveTab("chacas")}
              className="hover:text-white transition-colors"
            >
              Chacas
            </button>
          </div>

          <div className="text-[10px] text-white/40">
            © 2026-2027 Explora Expeditions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
