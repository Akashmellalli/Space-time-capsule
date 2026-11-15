const equipment = [
  {
    id: "apollo11",
    name: "Apollo 11 Lunar Module Descent Stage",
    world: "Moon",
    year: "1969",
    mission: "Apollo 11",
    type: "Landing hardware",
    imageQuery: "Apollo 11 Eagle Lunar Module",
    matchAny: ["apollo 11", "eagle"],
    titleMatchAny: ["lunar module", "eagle"],
    fallbackQuery: "Apollo 11 Lunar Module Eagle NASA",
    short: "The lower half of the Lunar Module that delivered the first humans to the lunar surface.",
    purpose: "The descent stage slowed the Lunar Module and carried astronauts safely to the lunar surface. It also served as the launch platform for the ascent stage.",
    science: "Apollo 11 enabled the first crewed lunar landing and supported the collection of lunar samples and surface observations.",
    left: "The descent stage was intentionally left on the Moon. The ascent stage carried Neil Armstrong and Buzz Aldrin back to lunar orbit.",
    status: "Inactive landing hardware; remains on the lunar surface.",
    launch: "July 16, 1969",
    landing: "July 20, 1969",
    end: "Descent stage remained on the Moon",
    finalCommunication: "Not applicable; this stage was not a separately communicating mission.",
    story: "I was the sturdy lower half of Eagle, the Apollo 11 Lunar Module. In July 1969, I helped carry two astronauts down to the Moon. When it was time to return to orbit, the upper stage lifted off and I stayed behind. I became part of the landscape where humans first walked on another world.",
    source: "https://www.nasa.gov/mission/apollo-11/"
  },
  {
    id: "lrv",
    name: "Apollo Lunar Roving Vehicle",
    world: "Moon",
    year: "1971–1972",
    mission: "Apollo 15, 16 and 17",
    type: "Crewed electric rover",
    imageQuery: "Apollo Lunar Rover",
    matchAny: ["lunar roving vehicle", "lunar rover", "apollo lunar rover"],
    titleMatchAny: ["lunar roving vehicle", "lunar rover"],
    fallbackQuery: "Apollo 15 Lunar Roving Vehicle on the Moon",
    excludeAny: ["sojourner", "spirit rover", "opportunity rover", "curiosity", "perseverance"],
    short: "A battery-powered vehicle that helped Apollo astronauts travel farther across the Moon.",
    purpose: "The Lunar Roving Vehicle carried astronauts, tools and lunar samples across the lunar surface, extending the distance crews could explore from their landing sites.",
    science: "It allowed astronauts to visit more geological locations and return a larger variety of lunar samples.",
    left: "Each rover was left at its final parking location so astronauts could launch from the lunar surface without carrying the vehicle back.",
    status: "Inactive; three Apollo Lunar Roving Vehicles remain on the Moon.",
    launch: "Apollo 15: July 26, 1971",
    landing: "Used on Apollo 15, 16 and 17",
    end: "Parked at each mission's final site",
    finalCommunication: "Not applicable; the rovers were crewed vehicles, not independent radio missions.",
    story: "I was built to drive where no car had driven before. With four wheels and electric power, I carried astronauts across the Moon, helping them reach distant craters and collect rocks. At the end of each mission, my crew left me behind. I am still parked on the Moon, a reminder of humanity's first driving adventures beyond Earth.",
    source: "https://science.nasa.gov/moon/"
  },
  {
    id: "alsep",
    name: "Apollo Lunar Surface Experiments Package",
    world: "Moon",
    year: "1969–1972",
    mission: "Apollo 12, 14, 15, 16 and 17",
    type: "Scientific instruments",
    imageQuery: "Apollo Lunar Surface Experiments ALSEP",
    matchAny: ["alsep", "apollo lunar surface experiments", "lunar surface experiments package"],
    titleMatchAny: ["alsep", "lunar surface experiment"],
    fallbackQuery: "Apollo ALSEP lunar surface experiment",
    short: "A collection of scientific instruments deployed by Apollo crews to study the Moon.",
    purpose: "ALSEP stations included instruments that measured moonquakes, heat flow, magnetic fields and other properties of the lunar environment.",
    science: "The instruments returned valuable lunar geophysical data to Earth for years after the astronauts departed.",
    left: "The instruments were designed to operate remotely on the surface. NASA ended experiment operations in 1977.",
    status: "No longer operating; the experiment packages remain at their deployment sites.",
    launch: "Carried on Apollo 12, 14, 15, 16 and 17",
    landing: "Deployed on the Moon, 1969–1972",
    end: "Operations ended in September 1977",
    finalCommunication: "Not applicable; the stations sent science data rather than a documented personal final message.",
    story: "I was not just one machine. I was a team of scientific instruments placed on the Moon by Apollo astronauts. While the crews returned to Earth, I stayed behind and listened to the Moon: measuring tremors, heat and the space environment. My work helped scientists understand what lies beneath the lunar surface.",
    source: "https://science.nasa.gov/moon/"
  },
  {
    id: "retro",
    name: "Lunar Laser Retroreflectors",
    world: "Moon",
    year: "1969–1971",
    mission: "Apollo 11, 14 and 15; Soviet Lunokhod missions",
    type: "Passive scientific instrument",
    imageQuery: "Apollo Lunar Laser Retroreflector",
    matchAny: ["retroreflector", "retro-reflector", "laser ranging reflector", "lunar laser"],
    titleMatchAny: ["retroreflector", "retro-reflector", "laser ranging reflector"],
    fallbackQuery: "Apollo lunar laser ranging retroreflector",
    short: "Special mirrors that let scientists measure the Earth–Moon distance with laser pulses.",
    purpose: "The arrays reflect laser pulses sent from Earth back toward their source, allowing scientists to measure the distance to the Moon with great precision.",
    science: "Laser ranging helps scientists study the Moon's orbit, rotation and internal structure, and test aspects of gravitational physics.",
    left: "They were deliberately deployed as long-lived passive scientific instruments requiring no power or active communication.",
    status: "The Apollo arrays remain passive targets for lunar laser ranging.",
    launch: "Carried on Apollo and Lunokhod missions",
    landing: "Placed on the lunar surface, 1969–1973",
    end: "Passive reflectors; no powered mission end",
    finalCommunication: "Not applicable; these passive instruments do not transmit communications.",
    story: "I have no batteries, no wheels and no radio. I simply wait. Scientists on Earth send laser pulses toward my tiny corner of the Moon. My mirrors send some light back, helping researchers measure the distance between our worlds with remarkable precision. I am quiet, but my scientific role continues.",
    source: "https://science.nasa.gov/moon/"
  },
  {
    id: "sojourner",
    name: "Sojourner Rover",
    world: "Mars",
    year: "1997",
    mission: "Mars Pathfinder",
    type: "Robotic rover",
    imageQuery: "Mars Pathfinder Sojourner Rover",
    matchAny: ["sojourner"],
    titleMatchAny: ["sojourner"],
    fallbackQuery: "Mars Sojourner Rover Pathfinder",
    excludeAny: ["spirit rover", "opportunity rover", "curiosity", "perseverance", "twin rovers", "flight spare", "comparison"],
    short: "NASA's first successful Mars rover, demonstrating a new way to explore the Red Planet.",
    purpose: "Sojourner investigated nearby rocks and soil, tested rover mobility and demonstrated technologies for future robotic exploration.",
    science: "It analysed rocks and soil and showed that a small rover could operate on Mars with a lander serving as a communications base.",
    left: "The Pathfinder lander and rover stopped communicating after the mission. The rover remained on the Martian surface.",
    status: "Mission ended; no longer communicating.",
    launch: "December 4, 1996",
    landing: "July 4, 1997 · Ares Vallis",
    end: "Pathfinder's last reported data transmission: September 27, 1997",
    finalCommunication: "September 27, 1997 was the last reported Pathfinder data transmission; no verified final message from Sojourner is known.",
    story: "I was built to explore a world humanity had never driven across before. Every movement brought new discoveries. I examined Martian rocks, studied the surrounding terrain and helped humanity understand another planet. My transmissions eventually stopped, but my journey became the foundation for the rovers that followed.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/"
  },
  {
    id: "spirit",
    name: "Spirit Rover",
    world: "Mars",
    year: "2004",
    mission: "Mars Exploration Rover",
    type: "Robotic rover",
    imageQuery: "Mars Exploration Rover Spirit",
    matchAny: ["spirit rover", "mer-a", "spirit"],
    titleMatchAny: ["spirit", "mer-a"],
    fallbackQuery: "Mars rover Spirit MER-A",
    excludeAny: ["opportunity rover", "mer-b", "sojourner", "curiosity", "perseverance"],
    short: "One of NASA's twin rovers that found evidence of ancient water on Mars.",
    purpose: "Spirit explored rocks, soil and terrain in Gusev Crater to investigate the history of water on Mars.",
    science: "It found evidence that water altered rocks at its landing site and made discoveries about ancient Martian environments.",
    left: "Spirit became stuck in soft soil and could no longer reposition itself to optimise solar power. NASA ended attempts to contact it in 2011.",
    status: "Mission ended; last communication was in 2010.",
    launch: "June 10, 2003",
    landing: "January 4, 2004 · Gusev Crater",
    end: "Last communication: March 22, 2010; mission declared over in 2011",
    finalCommunication: "March 22, 2010 was Spirit's last communication. NASA declared the mission over in 2011; no final spoken message was received.",
    story: "I arrived at Mars with my twin, Opportunity. My planned journey was only 90 Martian days, but I explored for years. I climbed hills, studied unusual rocks and found clues that water had changed the Martian landscape. Eventually, soft soil trapped my wheels. I could no longer move into a good position for sunlight, and my messages home stopped.",
    source: "https://science.nasa.gov/mission/mer-spirit/"
  },
  {
    id: "opportunity",
    name: "Opportunity Rover",
    world: "Mars",
    year: "2004",
    mission: "Mars Exploration Rover",
    type: "Robotic rover",
    imageQuery: "Mars Exploration Rover Opportunity",
    matchAny: ["opportunity rover", "mer-b", "opportunity"],
    titleMatchAny: ["opportunity", "mer-b"],
    fallbackQuery: "Mars rover Opportunity MER-B",
    excludeAny: ["spirit rover", "mer-a", "sojourner", "curiosity", "perseverance"],
    short: "A rover designed for 90 sols that continued exploring Mars for almost 15 Earth years.",
    purpose: "Opportunity studied Martian rocks and soil, especially evidence of past water and the planet's geological history.",
    science: "It found strong evidence that liquid water once flowed on Mars, explored multiple craters and travelled about 45 kilometres.",
    left: "A planet-encircling dust storm in 2018 covered its solar panels and prevented sufficient power generation. NASA declared the mission complete in 2019.",
    status: "Mission ended; final communication was received in June 2018.",
    launch: "July 7, 2003",
    landing: "January 25, 2004 · Meridiani Planum",
    end: "Last communication: June 10, 2018; mission declared complete February 13, 2019",
    finalCommunication: "June 10, 2018 was Opportunity's last communication. NASA declared the mission complete in 2019; no verified final spoken message is known.",
    story: "I was designed to work for just 90 Martian days. But I kept going for almost 15 Earth years. I crossed plains, explored craters and found evidence that water once flowed on Mars. Then a huge dust storm darkened the sky and covered my solar panels. My last communication reached Earth in 2018. My mission ended, but the discoveries I sent home remain.",
    source: "https://science.nasa.gov/mission/mer-opportunity/"
  },
  {
    id: "skycrane",
    name: "Mars Sky Crane Landing System",
    world: "Mars",
    year: "2012 / 2021",
    mission: "Curiosity and Perseverance",
    type: "Landing hardware",
    imageQuery: "Mars Curiosity Sky Crane",
    matchAny: ["sky crane", "skycrane"],
    titleMatchAny: ["sky crane", "skycrane"],
    fallbackQuery: "Curiosity Mars sky crane landing",
    excludeAny: ["perseverance", "sojourner", "spirit rover", "opportunity rover"],
    short: "A rocket-powered descent system that lowered large rovers gently onto the Martian surface.",
    purpose: "The sky crane used nylon bridles to lower a rover from a hovering descent stage during the final moments of landing.",
    science: "The landing system enabled delivery of large, sophisticated rovers to challenging Martian terrain.",
    left: "After lowering the rover, the descent stage flew away and crashed at a safe distance. Other landing components also remained on Mars.",
    status: "Discarded landing hardware; not designed for continued operation after landing.",
    launch: "Curiosity: November 26, 2011",
    landing: "Curiosity: August 6, 2012",
    end: "Descent stage flew away after rover touchdown",
    finalCommunication: "Not applicable; the descent stage was discarded during landing, not a separately operating mission.",
    story: "I was the final delivery vehicle. As Mars rushed closer, I fired my rockets, hovered above the ground and gently lowered a rover on cables. Once the rover touched down, I flew away to crash far from the science laboratory I had delivered. My job lasted only minutes, but those minutes made a new era of Mars exploration possible.",
    source: "https://mars.nasa.gov/mars2020/mission/overview/landing/"
  },
  {
    id: "heatshield",
    name: "Perseverance Heat Shield & Parachute",
    world: "Mars",
    year: "2021",
    mission: "Mars 2020",
    type: "Landing hardware",
    imageQuery: "Mars Perseverance Landing System Heat Shield",
    matchAny: ["perseverance heat shield", "perseverance landing system", "heat shield", "parachute"],
    titleMatchAny: ["heat shield", "parachute"],
    fallbackQuery: "Perseverance Mars heat shield parachute landing",
    excludeAny: ["curiosity", "spirit rover", "opportunity rover", "sojourner"],
    short: "Protective hardware that helped Perseverance survive atmospheric entry and slow down before landing.",
    purpose: "The heat shield protected the spacecraft during atmospheric entry, while the parachute slowed the vehicle during descent.",
    science: "These components were essential to delivering Perseverance safely to Jezero Crater, where it searches for signs of ancient microbial life and collects samples.",
    left: "The heat shield and parachute were released during the landing sequence and remained on the Martian surface.",
    status: "Discarded landing hardware; no longer operational after landing.",
    launch: "July 30, 2020",
    landing: "February 18, 2021 · Jezero Crater",
    end: "Released during the landing sequence",
    finalCommunication: "Not applicable; these components were discarded during landing and did not operate as independent missions.",
    story: "I faced the fiery rush of the Martian atmosphere. First I helped shield the spacecraft from extreme heat. Later, a parachute opened and slowed the descent. Then I was released so Perseverance could complete its landing. I was never meant to explore Mars myself. My purpose was to make sure the rover arrived safely.",
    source: "https://mars.nasa.gov/mars2020/mission/overview/landing/"
  }
];

const timeline = [
  ["1969", "Apollo 11 lands on the Moon", "The Lunar Module delivers the first humans to the lunar surface."],
  ["1969–1972", "Apollo science stations deployed", "Apollo crews leave experiments and retroreflectors that expand lunar science."],
  ["1971–1972", "Lunar Roving Vehicles", "Astronauts drive battery-powered rovers across the Moon."],
  ["1997", "Sojourner explores Mars", "Mars Pathfinder demonstrates mobile robotic exploration on Mars."],
  ["2004", "Spirit and Opportunity arrive", "Twin rovers begin exploring the geology and water history of Mars."],
  ["2012", "Curiosity lands using sky crane", "A rocket-powered descent stage lowers a large rover onto Mars."],
  ["2018–2019", "Opportunity's mission ends", "A global dust storm ends contact after nearly 15 years of exploration."],
  ["2021", "Perseverance lands at Jezero", "New landing hardware delivers a rover to Mars."]
];

const glossary = [
  ["Rover", "A robotic vehicle designed to move across the surface of another world."],
  ["Lander", "A spacecraft designed to touch down and operate on a planet or moon."],
  ["Retroreflector", "A special mirror that reflects light back toward the direction it came from."],
  ["Solar panel", "A device that converts sunlight into electrical energy."],
  ["Spectrometer", "An instrument that studies light to learn what materials are made of."],
  ["Regolith", "Loose dust, soil and broken rock covering the surface of a world."],
  ["Martian sol", "One solar day on Mars, lasting about 24 hours and 39 minutes."],
  ["Payload", "Scientific instruments or equipment a spacecraft carries to perform its mission."],
  ["Descent stage", "The part of a landing system that helps a spacecraft slow down and reach the surface."]
];

const questions = [
  ["What was Opportunity originally designed to operate for?", ["30 sols", "90 sols", "One Martian year", "10 Earth years"], 1, "Opportunity's original primary mission was planned for 90 Martian days, but it operated for almost 15 Earth years."],
  ["What do lunar laser retroreflectors help scientists measure?", ["Moonquakes only", "The Moon's colour", "The Earth–Moon distance", "Solar wind speed"], 2, "Laser pulses reflected from the arrays let scientists measure the distance between Earth and the Moon."],
  ["Which was NASA's first successful Mars rover?", ["Curiosity", "Perseverance", "Sojourner", "Spirit"], 2, "Sojourner explored Mars in 1997 as part of the Mars Pathfinder mission."],
  ["Why did Opportunity stop communicating?", ["It ran out of fuel", "A dust storm blocked sunlight", "It drove into a crater", "It was brought back to Earth"], 1, "A major dust storm covered its solar panels, and NASA could not re-establish communication."],
  ["What is a rover?", ["A space telescope", "A robotic surface vehicle", "A rocket engine", "A type of spacesuit"], 1, "A rover is a robotic vehicle that travels across the surface of a world to investigate it."]
];

const NASA_SEARCH_URL = "https://images-api.nasa.gov/search";
const NASA_ASSETS_URL = "https://images-api.nasa.gov/asset";
const NASA_CACHE_KEY = "stc-nasa-image-cache-v2";
const NASA_CACHE_TTL = 7 * 24 * 60 * 60 * 1000;
const IMAGE_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23102b4c'/%3E%3Ccircle cx='610' cy='120' r='54' fill='%23d8322f' opacity='.72'/%3E%3Cpath d='M0 360 170 260l125 85 155-150 350 165v90H0z' fill='%23091b32'/%3E%3Ctext x='40' y='410' fill='%23d5deeb' font-family='Arial' font-size='22'%3ESPACE TIME CAPSULE%3C/text%3E%3C/svg%3E";
const imageCache = new Map();
const requestCache = new Map();
const assetRequestCache = new Map();

let world = "all";
let qIndex = 0;
let score = 0;
let answered = false;
let activeProfileId = null;
let currentGalleryImages = [];
let currentGalleryIndex = 0;
let galleryCategory = "all";
let nasaErrorReported = false;

const grid = document.getElementById("equipmentGrid");
const backdrop = document.getElementById("modalBackdrop");
const modal = document.getElementById("modalContent");

function escapeHTML(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value == null ? fallback : JSON.parse(value);
  } catch (error) {
    console.warn(`Unable to read local storage key "${key}".`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Unable to save local storage key "${key}".`, error);
    return false;
  }
}

function saved() {
  const ids = readStorage("stc-favourites", []);
  return Array.isArray(ids) ? ids.filter(id => equipment.some(item => item.id === id)) : [];
}

function toast(message) {
  const element = document.getElementById("toast");
  element.textContent = message;
  element.classList.add("show");
  window.setTimeout(() => element.classList.remove("show"), 1900);
}

function reportNASAError(error) {
  if (!nasaErrorReported) {
    console.warn("NASA Image and Video Library images could not be loaded.", error);
    nasaErrorReported = true;
  }
}

function safeNASAUrl(value) {
  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol) || !["images-assets.nasa.gov", "images.nasa.gov"].includes(url.hostname)) return "";
    url.protocol = "https:";
    return url.href;
  } catch (error) {
    return "";
  }
}

async function fetchJSON(url) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 9000);
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`NASA image request failed (${response.status}).`);
    return await response.json();
  } finally {
    window.clearTimeout(timeout);
  }
}

function loadNASAStorageCache() {
  const cache = readStorage(NASA_CACHE_KEY, {});
  if (!cache || typeof cache !== "object" || Array.isArray(cache)) return {};
  const now = Date.now();
  return Object.fromEntries(Object.entries(cache).filter(([, entry]) =>
    entry && Number.isFinite(entry.savedAt) && now - entry.savedAt < NASA_CACHE_TTL && Array.isArray(entry.images)
  ));
}

function getImageMetadata(item) {
  if (!item || !Array.isArray(item.data) || !item.data[0] || item.data[0].media_type !== "image") return null;
  const data = item.data[0];
  const preview = Array.isArray(item.links)
    ? item.links.find(link => link && link.rel === "preview" && link.href)
    : null;
  const previewUrl = safeNASAUrl(preview && preview.href);
  const nasaId = typeof data.nasa_id === "string" ? data.nasa_id : "";
  if (!previewUrl || !nasaId) return null;

  const center = typeof data.center === "string" ? data.center.trim() : "";
  const photographer = typeof data.photographer === "string" ? data.photographer.trim() : "";
  const credit = photographer
    ? `${photographer}${center ? ` / ${center}` : ""}`
    : (center ? `NASA / ${center}` : "NASA");

  return {
    nasaId,
    title: typeof data.title === "string" && data.title.trim() ? data.title.trim() : "NASA image",
    description: typeof data.description === "string" ? data.description.trim() : "",
    credit,
    date: typeof data.date_created === "string" ? data.date_created : "",
    previewUrl,
    imageUrl: previewUrl,
    assetUrl: "",
    sourceUrl: previewUrl
  };
}

function isRelevantImage(image, config) {
  const title = image.title.toLowerCase();
  const text = `${title} ${image.description}`.toLowerCase();
  if (Array.isArray(config.excludeAny) && config.excludeAny.some(term => text.includes(term))) return false;
  if (Array.isArray(config.titleMatchAny) && config.titleMatchAny.length && !config.titleMatchAny.some(term => title.includes(term))) return false;
  return !Array.isArray(config.matchAny) || config.matchAny.length === 0 || config.matchAny.some(term => text.includes(term));
}

function imageRelevance(image, query) {
  const text = `${image.title} ${image.description}`.toLowerCase();
  return query.toLowerCase().split(/\s+/).filter(word => word.length > 3 && text.includes(word)).length;
}

async function resolveImageAsset(image) {
  if (image.assetUrl) return image.assetUrl;
  if (assetRequestCache.has(image.nasaId)) return assetRequestCache.get(image.nasaId);
  const request = (async () => {
    try {
      const payload = await fetchJSON(`${NASA_ASSETS_URL}/${encodeURIComponent(image.nasaId)}`);
      const items = payload && payload.collection && Array.isArray(payload.collection.items)
        ? payload.collection.items
        : [];
      const candidates = items.map(entry => safeNASAUrl(entry && entry.href)).filter(url => /\.(jpe?g|png|webp)(?:$|[?#])/i.test(url));
      candidates.sort((a, b) => {
        const rank = url => /~orig\./i.test(url) ? 3 : /~large\./i.test(url) ? 2 : /~medium\./i.test(url) ? 1 : 0;
        return rank(b) - rank(a);
      });
      image.assetUrl = candidates[0] || image.previewUrl;
      image.imageUrl = image.assetUrl;
      image.sourceUrl = image.assetUrl;
      return image.assetUrl;
    } catch (error) {
      console.warn(`Unable to retrieve a high-resolution asset for NASA image ${image.nasaId}.`, error);
      return image.previewUrl;
    }
  })();
  assetRequestCache.set(image.nasaId, request);
  return request;
}

async function searchNASAImages(query, options = {}) {
  const config = options.profileId
    ? equipment.find(item => item.id === options.profileId) || {}
    : options;
  const limit = Number.isInteger(options.limit) ? options.limit : 12;
  const key = `${query.trim().toLowerCase()}::${options.profileId || "general"}`;
  if (imageCache.has(key)) return imageCache.get(key);
  const stored = loadNASAStorageCache()[key];
  if (stored) {
    const cachedImages = stored.images.filter(image => safeNASAUrl(image.previewUrl) && isRelevantImage(image, config));
    imageCache.set(key, cachedImages);
    return cachedImages;
  }
  if (requestCache.has(key)) return requestCache.get(key);

  const request = (async () => {
    try {
      const requestImages = async searchTerm => {
        const url = new URL(NASA_SEARCH_URL);
        url.searchParams.set("q", searchTerm);
        url.searchParams.set("media_type", "image");
        url.searchParams.set("page_size", "40");
        const payload = await fetchJSON(url.href);
        const items = payload && payload.collection && Array.isArray(payload.collection.items)
          ? payload.collection.items
          : null;
        if (!items) throw new Error("NASA image search returned an invalid collection.");
        return items
          .map(getImageMetadata)
          .filter(image => image && isRelevantImage(image, config))
          .sort((a, b) => imageRelevance(b, searchTerm) - imageRelevance(a, searchTerm));
      };

      let matches = await requestImages(query);
      if (!matches.length && config.fallbackQuery && config.fallbackQuery !== query) {
        matches = await requestImages(config.fallbackQuery);
      }
      const images = matches.slice(0, limit);

      await Promise.all(images.slice(0, 2).map(resolveImageAsset));
      imageCache.set(key, images);
      if (images.length) {
        const cache = loadNASAStorageCache();
        cache[key] = { savedAt: Date.now(), images };
        const entries = Object.entries(cache).slice(-24);
        writeStorage(NASA_CACHE_KEY, Object.fromEntries(entries));
      }
      return images;
    } catch (error) {
      reportNASAError(error);
      return [];
    } finally {
      requestCache.delete(key);
    }
  })();
  requestCache.set(key, request);
  return request;
}

function setImage(element, image, altText) {
  if (!element) return;
  const media = element.parentElement;
  element.alt = altText;
  element.src = IMAGE_PLACEHOLDER;
  element.classList.remove("is-loading");
  if (media) media.classList.remove("is-loading");
  if (!image) return;
  const preferred = safeNASAUrl(image.imageUrl || image.assetUrl || image.previewUrl);
  const preview = safeNASAUrl(image.previewUrl);
  if (!preferred) return;

  element.classList.add("is-loading");
  if (media) media.classList.add("is-loading");
  element.onload = () => {
    element.classList.remove("is-loading");
    if (media) media.classList.remove("is-loading");
  };
  element.onerror = () => {
    element.classList.remove("is-loading");
    if (media) media.classList.remove("is-loading");
    if (preview && element.src !== preview) {
      element.src = preview;
      return;
    }
    element.onerror = null;
    element.src = IMAGE_PLACEHOLDER;
  };
  element.src = preferred;
}

function render() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const list = equipment.filter(item =>
    (world === "all" || item.world === world) &&
    [item.name, item.mission, item.world, item.type].join(" ").toLowerCase().includes(search)
  );
  grid.innerHTML = list.length ? list.map(item => `
    <article class="card" data-id="${item.id}">
      <div class="card-media is-loading">
        <img class="card-img is-loading" data-equipment-image="${item.id}" alt="${escapeHTML(`${item.name} NASA photograph`)}" src="${IMAGE_PLACEHOLDER}">
        <span class="pill">${escapeHTML(item.world.toUpperCase())} · ${escapeHTML(item.year)}</span>
      </div>
      <div class="card-body">
        <div class="cat">${escapeHTML(item.type.toUpperCase())}</div>
        <h3>${escapeHTML(item.name)}</h3>
        <p>${escapeHTML(item.short)}</p>
        <div class="card-foot"><span>${escapeHTML(item.mission)}</span><button data-fav="${item.id}" aria-label="${saved().includes(item.id) ? "Remove saved discovery" : "Save discovery"}">${saved().includes(item.id) ? "♥" : "♡"}</button><b>VIEW ↗</b></div>
      </div>
    </article>`).join("") : '<div class="empty">No equipment found. Try another search.</div>';

  for (const item of list) {
    const image = (imageCache.get(`${item.imageQuery.toLowerCase()}::${item.id}`) || [])[0];
    if (image) setImage(grid.querySelector(`[data-equipment-image="${item.id}"]`), image, `${item.name}: ${image.title}`);
  }
}

function renderFacts(item) {
  const facts = [
    ["MISSION", item.mission],
    ["LAUNCH", item.launch],
    ["LANDING / DEPLOYMENT", item.landing],
    ["FINAL COMMUNICATION", item.finalCommunication],
    ["MISSION END / STATUS", item.end]
  ];
  return facts.map(([label, value]) => `
    <div class="fact"><span>${escapeHTML(label)}</span><b>${escapeHTML(value)}</b></div>
  `).join("");
}

function profile(id) {
  const item = equipment.find(entry => entry.id === id);
  if (!item) return;
  activeProfileId = id;
  galleryCategory = "all";
  currentGalleryImages = [];
  const initialImage = (imageCache.get(`${item.imageQuery.toLowerCase()}::${id}`) || [])[0];

  modal.innerHTML = `
    <div class="modal-hero"><img data-profile-image alt="${escapeHTML(`${item.name} NASA photograph`)}" src="${IMAGE_PLACEHOLDER}"></div>
    <div class="modal-inner">
      <div class="modal-kicker">${escapeHTML(item.world.toUpperCase())} · ${escapeHTML(item.type.toUpperCase())}</div>
      <h2 id="modalTitle">${escapeHTML(item.name)}</h2>
      <p class="lead">${escapeHTML(item.short)}</p>
      <div class="facts">${renderFacts(item)}</div>
      <section class="modal-section"><h3>Mission overview</h3><p>${escapeHTML(item.purpose)}</p></section>
      <section class="modal-section"><h3>Scientific discoveries</h3><p>${escapeHTML(item.science)}</p></section>
      <section class="modal-section"><h3>Why was it left behind?</h3><p>${escapeHTML(item.left)}</p></section>
      <section class="modal-section"><h3>Current status</h3><p>${escapeHTML(item.status)}</p></section>
      <section class="modal-section gallery-section">
        <h3>NASA image gallery</h3>
        <p class="gallery-intro">Photographs are retrieved from the NASA Image and Video Library and checked against this equipment's mission.</p>
        <div id="galleryContent" class="gallery-content" aria-live="polite"><div class="gallery-loading"><span class="spinner"></span>Loading relevant NASA photographs…</div></div>
      </section>
      <section class="modal-section">
        <h3>A machine's last message</h3>
        <p class="story-note">The story below is a creative, educational retelling based on mission history. It is not an actual transmission or quotation.</p>
        <div class="story"><p>${escapeHTML(item.story)}</p>
          <div class="story-controls">
            <button id="speak">▶ HEAR THE STORY</button>
            <button class="secondary" id="stop">■ STOP</button>
            <button class="secondary" id="save">${saved().includes(id) ? "♥ SAVED" : "♡ SAVE DISCOVERY"}</button>
          </div>
        </div>
      </section>
      <a class="source" href="${escapeHTML(item.source)}" target="_blank" rel="noopener noreferrer">VIEW OFFICIAL NASA MISSION REFERENCE ↗</a>
    </div>
    <div id="galleryViewer" class="gallery-viewer" aria-hidden="true"></div>`;

  setImage(modal.querySelector("[data-profile-image]"), initialImage, `${item.name}: ${initialImage ? initialImage.title : "NASA mission photograph"}`);
  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");

  document.getElementById("speak").onclick = () => {
    if (!("speechSynthesis" in window)) {
      toast("Voice narration unavailable in this browser.");
      return;
    }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.story);
    utterance.rate = 0.92;
    speechSynthesis.speak(utterance);
  };
  document.getElementById("stop").onclick = () => {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  };
  document.getElementById("save").onclick = () => toggleSave(id);
  loadProfileGallery(item);
}

async function loadProfileGallery(item) {
  let images = imageCache.get(`${item.imageQuery.toLowerCase()}::${item.id}`);
  if (!images) images = await searchNASAImages(item.imageQuery, { profileId: item.id, limit: 12 });
  if (activeProfileId !== item.id || !backdrop.classList.contains("open")) return;
  currentGalleryImages = images;
  renderGallery();
}

function galleryImageCategory(image, item) {
  const text = `${image.title} ${image.description}`.toLowerCase();
  if (/(experiment|seism|spectrometer|retroreflect|instrument|sample|laser|magnetometer|heat flow)/.test(text)) return "scientific";
  if (/(surface|crater|soil|rock|panorama|landscape|terrain)/.test(text)) return "surface";
  if (/(rover|lander|lunar module|sojourner|spirit|opportunity|heat shield|sky crane|alsep)/.test(text)) return "equipment";
  return item.world === "Mars" || item.world === "Moon" ? "mission" : "equipment";
}

function renderGallery() {
  const item = equipment.find(entry => entry.id === activeProfileId);
  const target = document.getElementById("galleryContent");
  if (!target || !item) return;
  if (!currentGalleryImages.length) {
    target.innerHTML = `<p class="gallery-message">No matching NASA photographs are available right now. The rest of the profile remains available; please try again later.</p>`;
    return;
  }

  const categories = [
    ["all", "ALL PHOTOGRAPHS"],
    ["equipment", "EQUIPMENT"],
    ["mission", "MISSION"],
    ["surface", "SURFACE"],
    ["scientific", "SCIENTIFIC"]
  ];
  const visibleImages = currentGalleryImages
    .map((image, index) => ({ image, index, category: galleryImageCategory(image, item) }))
    .filter(entry => galleryCategory === "all" || entry.category === galleryCategory);

  target.innerHTML = `
    <div class="gallery-categories" role="group" aria-label="Filter NASA gallery images">
      ${categories.map(([id, label]) => `<button class="gallery-filter${galleryCategory === id ? " active" : ""}" data-gallery-category="${id}" aria-pressed="${galleryCategory === id}">${label}</button>`).join("")}
    </div>
    <div class="gallery-grid">
      ${visibleImages.map(({ image, index }) => `
        <button class="gallery-thumb" data-gallery-index="${index}" aria-label="View ${escapeHTML(image.title)}">
          <img src="${escapeHTML(safeNASAUrl(image.previewUrl) || IMAGE_PLACEHOLDER)}" alt="${escapeHTML(image.title)}" loading="lazy">
          <span>${escapeHTML(image.title)}</span>
        </button>`).join("")}
    </div>
    <p class="gallery-count">${currentGalleryImages.length} relevant NASA image${currentGalleryImages.length === 1 ? "" : "s"} found. Categories with no matching metadata may be empty.</p>`;

  target.querySelectorAll("[data-gallery-category]").forEach(button => {
    button.onclick = () => {
      galleryCategory = button.dataset.galleryCategory;
      renderGallery();
    };
  });
  target.querySelectorAll("[data-gallery-index]").forEach(button => {
    button.onclick = () => openGalleryViewer(Number(button.dataset.galleryIndex));
  });
}

function openGalleryViewer(index) {
  if (!currentGalleryImages.length) return;
  currentGalleryIndex = (index + currentGalleryImages.length) % currentGalleryImages.length;
  const image = currentGalleryImages[currentGalleryIndex];
  const viewer = document.getElementById("galleryViewer");
  if (!viewer) return;
  viewer.innerHTML = `
    <div class="viewer-panel" role="dialog" aria-modal="true" aria-label="NASA image viewer">
      <button class="viewer-close" aria-label="Close image viewer">×</button>
      <button class="viewer-nav previous" aria-label="Previous image">‹</button>
      <figure>
        <img class="viewer-image" src="${escapeHTML(safeNASAUrl(image.imageUrl || image.previewUrl) || IMAGE_PLACEHOLDER)}" alt="${escapeHTML(image.title)}">
        <figcaption>
          <h3>${escapeHTML(image.title)}</h3>
          <p>${escapeHTML(image.description || "No additional description was provided in the NASA image record.")}</p>
          <p class="viewer-credit">Image credit: ${escapeHTML(image.credit)}${image.date ? ` · ${escapeHTML(image.date.slice(0, 10))}` : ""}</p>
          <a href="${escapeHTML(safeNASAUrl(image.sourceUrl || image.previewUrl) || "#")}" target="_blank" rel="noopener noreferrer">OPEN NASA IMAGE SOURCE ↗</a>
        </figcaption>
      </figure>
      <button class="viewer-nav next" aria-label="Next image">›</button>
    </div>`;
  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden", "false");

  const showAdjacent = direction => {
    openGalleryViewer(currentGalleryIndex + direction);
  };
  viewer.querySelector(".viewer-close").onclick = closeGalleryViewer;
  viewer.querySelector(".previous").onclick = () => showAdjacent(-1);
  viewer.querySelector(".next").onclick = () => showAdjacent(1);
  viewer.onclick = event => {
    if (event.target === viewer) closeGalleryViewer();
  };

  resolveImageAsset(image).then(url => {
    const currentViewer = document.getElementById("galleryViewer");
    const displayedImage = currentViewer && currentViewer.querySelector(".viewer-image");
    if (displayedImage && currentGalleryImages[currentGalleryIndex] === image) displayedImage.src = safeNASAUrl(url) || image.previewUrl;
  });
}

function closeGalleryViewer() {
  const viewer = document.getElementById("galleryViewer");
  if (!viewer) return;
  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
  viewer.innerHTML = "";
}

function close() {
  closeGalleryViewer();
  backdrop.classList.remove("open");
  backdrop.setAttribute("aria-hidden", "true");
  activeProfileId = null;
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}

function toggleSave(id) {
  const current = saved();
  const updated = current.includes(id) ? current.filter(value => value !== id) : [...current, id];
  writeStorage("stc-favourites", updated);
  render();
  const button = document.getElementById("save");
  if (button) button.textContent = updated.includes(id) ? "♥ SAVED" : "♡ SAVE DISCOVERY";
  toast(updated.includes(id) ? "Discovery saved" : "Discovery removed");
}

async function loadEquipmentImages() {
  await Promise.all(equipment.map(async item => {
    const images = await searchNASAImages(item.imageQuery, { profileId: item.id, limit: 12 });
    if (images.length) imageCache.set(`${item.imageQuery.toLowerCase()}::${item.id}`, images);
    const card = grid.querySelector(`[data-equipment-image="${item.id}"]`);
    if (card && images[0]) setImage(card, images[0], `${item.name}: ${images[0].title}`);
    else if (card && card.parentElement) card.parentElement.classList.remove("is-loading");
  }));
}

async function loadHomepageImages() {
  const [heroImages, featureImages] = await Promise.all([
    searchNASAImages("Apollo 11 Moon surface", { matchAny: ["apollo 11", "moon", "lunar"], titleMatchAny: ["moon", "lunar"], limit: 8 }),
    searchNASAImages("NASA Mars rover surface landscape", { matchAny: ["mars"], titleMatchAny: ["mars", "martian"], limit: 8 })
  ]);
  const heroImage = heroImages[0];
  const featureImage = featureImages[0];
  if (heroImage) {
    const url = safeNASAUrl(heroImage.imageUrl || heroImage.previewUrl);
    if (url) document.querySelector(".hero-bg").style.backgroundImage = `url("${url}")`;
  }
  if (featureImage) {
    const url = safeNASAUrl(featureImage.imageUrl || featureImage.previewUrl);
    if (url) document.querySelector(".feature-img").style.backgroundImage = `url("${url}")`;
  }
}

document.querySelectorAll(".tabs button").forEach(button => {
  button.onclick = () => {
    document.querySelectorAll(".tabs button").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    world = button.dataset.world;
    render();
  };
});

document.getElementById("searchInput").oninput = render;
grid.onclick = event => {
  const favoriteButton = event.target.closest("[data-fav]");
  if (favoriteButton) {
    event.stopPropagation();
    toggleSave(favoriteButton.dataset.fav);
    return;
  }
  const card = event.target.closest("[data-id]");
  if (card) profile(card.dataset.id);
};

document.getElementById("modalClose").onclick = close;
backdrop.onclick = event => {
  if (event.target === backdrop) close();
};
document.onkeydown = event => {
  if (event.key === "Escape") {
    const viewer = document.getElementById("galleryViewer");
    if (viewer && viewer.classList.contains("open")) closeGalleryViewer();
    else close();
  }
  if (document.getElementById("galleryViewer") && document.getElementById("galleryViewer").classList.contains("open")) {
    if (event.key === "ArrowLeft") openGalleryViewer(currentGalleryIndex - 1);
    if (event.key === "ArrowRight") openGalleryViewer(currentGalleryIndex + 1);
  }
};

document.getElementById("savedNav").onclick = () => {
  const ids = saved();
  world = "all";
  document.querySelector('[data-world="all"]').click();
  grid.innerHTML = ids.length ? equipment.filter(item => ids.includes(item.id)).map(item => `
    <article class="card" data-id="${item.id}">
      <div class="card-media is-loading"><img class="card-img" data-equipment-image="${item.id}" alt="${escapeHTML(`${item.name} NASA photograph`)}" src="${IMAGE_PLACEHOLDER}"></div>
      <div class="card-body"><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.short)}</p></div>
    </article>`).join("") : '<div class="empty">No saved discoveries yet. Open a profile and select Save Discovery.</div>';
  for (const item of equipment.filter(entry => ids.includes(entry.id))) {
    const image = (imageCache.get(`${item.imageQuery.toLowerCase()}::${item.id}`) || [])[0];
    if (image) setImage(grid.querySelector(`[data-equipment-image="${item.id}"]`), image, `${item.name}: ${image.title}`);
  }
  document.getElementById("explore").scrollIntoView();
};

document.getElementById("timelineList").innerHTML = timeline.map(event => `
  <article class="event"><div class="year">${escapeHTML(event[0])}</div><h3>${escapeHTML(event[1])}</h3><p>${escapeHTML(event[2])}</p></article>
`).join("");
document.getElementById("glossaryGrid").innerHTML = glossary.map(term => `
  <article class="term"><h3>${escapeHTML(term[0])}</h3><p>${escapeHTML(term[1])}</p></article>
`).join("");

document.getElementById("menuToggle").onclick = () => {
  const nav = document.getElementById("mainNav");
  const isOpen = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(isOpen));
};
document.querySelectorAll("nav a").forEach(link => link.onclick = () => {
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
});

function showQuestion() {
  const question = questions[qIndex];
  const area = document.getElementById("quizArea");
  area.innerHTML = `
    <div class="quiz-question">
      <div class="quiz-meta">QUESTION ${qIndex + 1} OF ${questions.length} · SCORE ${score}</div>
      <h3>${escapeHTML(question[0])}</h3>
      <div class="answers">${question[1].map((answer, index) => `<button class="answer" data-answer="${index}">${String.fromCharCode(65 + index)}. ${escapeHTML(answer)}</button>`).join("")}</div>
      <p class="feedback" id="feedback"></p>
      <button class="red-btn" id="next" style="display:none">CONTINUE →</button>
    </div>`;

  area.querySelectorAll("[data-answer]").forEach(button => {
    button.onclick = () => {
      if (answered) return;
      answered = true;
      const selected = Number(button.dataset.answer);
      area.querySelectorAll(".answer").forEach((answerButton, index) => {
        answerButton.disabled = true;
        if (index === question[2]) answerButton.classList.add("correct");
        else if (index === selected) answerButton.classList.add("wrong");
      });
      if (selected === question[2]) score++;
      document.getElementById("feedback").textContent = `${selected === question[2] ? "Correct! " : "Not quite. "}${question[3]}`;
      document.getElementById("next").style.display = "inline-block";
    };
  });
  document.getElementById("next").onclick = () => {
    qIndex++;
    answered = false;
    qIndex < questions.length ? showQuestion() : showResult();
  };
}

function showResult() {
  document.getElementById("quizArea").innerHTML = `
    <div class="quiz-question"><div class="quiz-meta">MISSION COMPLETE</div>
      <h3>You scored ${score} out of ${questions.length}!</h3>
      <p class="feedback">${score === questions.length ? "Outstanding, space explorer!" : "Good effort. Explore the archive and try again."}</p>
      <button class="red-btn" id="retry">TRY AGAIN ↻</button>
    </div>`;
  document.getElementById("retry").onclick = () => {
    qIndex = 0;
    score = 0;
    answered = false;
    showQuestion();
  };
}

document.getElementById("startQuiz").onclick = () => {
  qIndex = 0;
  score = 0;
  answered = false;
  showQuestion();
};

render();
loadEquipmentImages();
loadHomepageImages();
