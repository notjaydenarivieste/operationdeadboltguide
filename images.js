/**
 * images.js — wiki image registry
 * --------------------------------------------------------------
 * For each item below, paste EITHER a full image link:
 *
 *   "wunderwaffe": "https://static.wikia.nocookie.net/.../image.png",
 *
 * OR the wiki file name (the text after "File:" on its file page):
 *
 *   "wunderwaffe": "Wunderwaffe DG-2 MWIII.png",
 *
 * Leave a value as "" and that item shows a placeholder tile.
 * Images load from callofduty.fandom.com only.
 */

const WIKI_BASE = "https://callofduty.fandom.com/wiki/Special:FilePath/";

/** item id -> wiki file name  (item name is in the comment) */
const WIKI_FILES = {
  // ---------- Characters ----------
  // Operation Deadbolt — Protagonists
  "soap"                : "https://static.wikia.nocookie.net/callofduty/images/a/a5/Soap_MacTavish_Zombies_HUD_MWIII.png/revision/latest?cb=20240117035101",   // Johnny “Soap” MacTavish
  "greene"              : "https://static.wikia.nocookie.net/callofduty/images/a/aa/Selma_Greene_Zombies_HUD_MWIII.png/revision/latest?cb=20240117034046",   // Selma Greene
  "jansen"              : "https://static.wikia.nocookie.net/callofduty/images/c/ca/Ava_Jansen_Zombies_HUD_MWIII.png/revision/latest?cb=20240117034454",   // Dr. Ava Jansen
  "ravenov"             : "https://static.wikia.nocookie.net/callofduty/images/6/67/Sergei_Ravenov_Zombies_HUD_MWIII.png/revision/latest?cb=20240116181044",   // Sergei Ravenov
  "dobbs"               : "https://static.wikia.nocookie.net/callofduty/images/8/8a/Lucas_Dobbs_Zombies_HUD_MWIII.png/revision/latest?cb=20240117032944",   // Lucas “Luke” Dobbs
  "barrera"             : "https://static.wikia.nocookie.net/callofduty/images/a/a2/Hugo_Barrera_Zombies_HUD_MWIII.png/revision/latest?cb=20240117032110",   // Dr. Hugo Barrera
  "kapoor"              : "https://static.wikia.nocookie.net/callofduty/images/6/6e/Rupinder_Kapoor_Zombies_HUD_MWIII.png/revision/latest?cb=20240117033000",   // Rupinder Kapoor
  "miller"              : "https://static.wikia.nocookie.net/callofduty/images/5/50/Krystal_Miller_Zombies_HUD_MWIII.png/revision/latest?cb=20240117032137",   // Corporal Krystal Miller
  "laswell"             : "https://static.wikia.nocookie.net/callofduty/images/a/a2/Kate_Laswell_Infobox_MWIII.png/revision/latest?cb=20231110195053",   // Kate Laswell
  "fang"                : "https://static.wikia.nocookie.net/callofduty/images/e/e4/Amy_Fang_Zombies_HUD_MWIII.png/revision/latest?cb=20240117033400",   // Amy Fang
  // Terminus Outcomes & Dark Aether — Antagonists
  "zakhaev"             : "https://static.wikia.nocookie.net/callofduty/images/2/2f/Victor_Zakhaev_Zombies_HUD_MWIII.png/revision/latest?cb=20240117040452",   // Victor Zakhaev
  "fletcher"            : "https://static.wikia.nocookie.net/callofduty/images/5/53/Jack_Fletcher_Zombies_HUD_MWIII.png/revision/latest?cb=20240117040508",   // Jack Fletcher
  "entity"              : "https://static.wikia.nocookie.net/callofduty/images/4/46/The_Entity_Zombies_HUD_MWIII.png/revision/latest?cb=20240822024003",   // The Entity
  // Requiem & Projekt Endstation — Past figures
  "strauss"             : "https://static.wikia.nocookie.net/callofduty/images/e/ee/Oskar_Strauss_TopView_Zombies_Cinematic_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20231115200248",   // Dr. Oskar Strauss
  "grey"                : "https://static.wikia.nocookie.net/callofduty/images/e/e7/Elizabeth_Grey_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20240502171504",   // Elizabeth Grey
  "maxis"               : "https://static.wikia.nocookie.net/callofduty/images/c/c4/SAM_Inhabits_Maxis_Body_Reckoning_BO6.jpeg/revision/latest/scale-to-width-down/1000?cb=20250808222212",   // Samantha Maxis
  "carver"              : "https://static.wikia.nocookie.net/callofduty/images/3/3c/Carver_arrested_Forsaken_BOCW.png/revision/latest/scale-to-width-down/1000?cb=20211008102452",   // Mackenzie Carver
  "weaver"              : "https://static.wikia.nocookie.net/callofduty/images/e/e1/Weaver_staring_at_footage_BOCW.png/revision/latest/scale-to-width-down/1000?cb=20210912150558",   // Grigori Weaver

  // ---------- Utilities ----------
  // Machines & Stations
  "wallbuy"             : "https://static.wikia.nocookie.net/callofduty/images/e/ea/LW3_-_Tundra_Wall_Buy_BOCW.png/revision/latest/scale-to-width-down/1000?cb=20210723002017",   // Wall Buy
  "mystery-box"         : "https://static.wikia.nocookie.net/callofduty/images/4/41/Mystery_Box_BO6.png/revision/latest?cb=20250526085808",   // Mystery Box
  "pap"                 : "https://static.wikia.nocookie.net/callofduty/images/f/f6/Pack-a-Punch_Machine_MWIII.png/revision/latest?cb=20231116021900",   // Pack-a-Punch
  "turrets"             : "https://attackofthefanboy.com/wp-content/uploads/2023/11/Modern-Warfare-3-Zombies-Deadbolt-Turrets-Featured-Image.jpg?w=1200",   // Deadbolt Turrets
  "buy-station"         : "https://static.wikia.nocookie.net/callofduty/images/2/25/Zombies_Promo18_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20231108174514",   // Buy Stations
  "gas-station"         : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOseeIAUAsIuFjGwqCdl7zstzFiprKPWEr2C-xB8Nux5IlXp6joQvurIP16Ak4lTd3bLcBsZG-iBeSWOW3GYI41dAX0LiAcvwTqgNNFNiDhrYKORD9RIjaQhyphenhyphenwKustFVs8Rv3A11BKqHC2_2LIOnRmcm8OjS0M4Nj2zEuV2cduZyQWMiNKtpQ6-GqGZL8/s1321/gas%20station%20icon%202.JPG",   // Gas Stations
  "stash"               : "https://preview.redd.it/increase-your-acquisition-stash-v0-u5rjwzq7bg4c1.jpg?width=1080&crop=smart&auto=webp&s=3526ba1191e79a1219ca54a72c6673a24654f327",   // Acquisitions Stash
  // Field Upgrades
  "energy-mine"         : "https://static.wikia.nocookie.net/callofduty/images/d/d0/Energy_Mine_Field_Upgrade_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711032959",   // Energy Mine
  "frenzied-guard"      : "https://static.wikia.nocookie.net/callofduty/images/2/25/Frenzied_Guard_Field_Upgrade_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711033018",   // Frenzied Guard
  "frost-blast"         : "https://static.wikia.nocookie.net/callofduty/images/1/15/Frost_Blast_Field_Upgrade_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711040021",   // Frost Blast
  "aether-shroud"       : "https://static.wikia.nocookie.net/callofduty/images/e/e2/Aether_Shroud_Field_Upgrade_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711032942",   // Aether Shroud
  "tesla-storm"         : "https://static.wikia.nocookie.net/callofduty/images/7/76/Tesla_Storm_Field_Upgrade_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711033229",   // Tesla Storm
  "healing-aura"        : "https://static.wikia.nocookie.net/callofduty/images/7/7e/Healing_Aura_Field_Upgrade_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711040034",   // Healing Aura
  // Ammo Mods & Equipment
  "ammo-mods"           : "https://static.wikia.nocookie.net/callofduty/images/c/c1/Dead_Wire_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040042",   // Ammo Mods
  "aether-tools"        : "https://static.wikia.nocookie.net/callofduty/images/d/df/Legendary_Aether_Tool_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720035433",   // Aether Tools
  "gas-mask"            : "https://static.wikia.nocookie.net/callofduty/images/7/72/DurableGasMask_Icon_WZ.png/revision/latest?cb=20250610040902",   // Gas Mask
  "drones"              : "https://static.wikia.nocookie.net/callofduty/images/d/d0/RedeployDrone_MWII_WZ2.png/revision/latest?cb=20230815124536",   // Redeploy Drones
  "sentry"              : "https://static.wikia.nocookie.net/callofduty/images/8/81/PrecisionAirstrike_Streak_HUD_Icon_MWII.png/revision/latest?cb=20240604192626",   // Sentry Guns & Precision Airstrikes

  // ---------- Enemies ----------
  // Part 1 — The Dark Aether
  "zombies"             : "https://static.wikia.nocookie.net/callofduty/images/5/57/Zombies_Promo14_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20231108174504",   // Zombies
  "nest-crawlers"       : "https://static.wikia.nocookie.net/callofduty/images/7/73/Nest_Crawler_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240330041024",   // Nest Crawlers
  "hellhounds"          : "https://static.wikia.nocookie.net/callofduty/images/3/3f/Hellhounds_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20231117191924",   // Hellhounds
  "mimic"               : "https://static.wikia.nocookie.net/callofduty/images/d/d3/Zombies_Promo_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20230817183217",   // Mimic
  "mangler"             : "https://static.wikia.nocookie.net/callofduty/images/6/66/Mangler_Promo_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20231202023101",   // Mangler
  "disciple"            : "https://static.wikia.nocookie.net/callofduty/images/9/9e/Disciple_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20231122155440",   // Disciple
  "mega-abom"           : "https://static.wikia.nocookie.net/callofduty/images/f/f0/MegaAbomination_LaunchTrailer_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240825140622",   // Mega Abomination
  "orcus"               : "https://static.wikia.nocookie.net/callofduty/images/0/0c/OneAgainstAll_Achievement_Image_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20231102192039",   // Orcus
  // Part 2 — Terminus Outcomes
    // Part 2A — Normal Mercenaries
  "grunts"              : "https://static.wikia.nocookie.net/callofduty/images/8/85/Terminus_Outcomes_Grunt_MWIII.jpeg/revision/latest?cb=20240823024714",   // Grunts
  "soldiers"            : "https://static.wikia.nocookie.net/callofduty/images/f/f8/Terminus_Outcomes_Soldier_3_MWIII.png/revision/latest?cb=20260215230728",   // Soldiers
  "elites"              : "https://static.wikia.nocookie.net/callofduty/images/4/48/Terminus_Outcomes_Elite_MWIII.jpeg/revision/latest?cb=20240811221021",   // Elites
  // Part 2B — Specialist Mercenaries
  "sergeant"            : "https://static.wikia.nocookie.net/callofduty/images/4/4c/Terminus_Outcome_Sergeant_MWIII.jpeg/revision/latest?cb=20240810045852",   // Sergeants
  "shock-troops"        : "https://static.wikia.nocookie.net/callofduty/images/6/60/Terminus_Outcomes_Shock_Troop_MWIII.jpeg/revision/latest/scale-to-width-down/1000?cb=20241109035441",   // Shock Troops
  "recon-merc"          : "https://static.wikia.nocookie.net/callofduty/images/1/1d/Terminus_Outcomes_Recon_MWIII.jpeg/revision/latest?cb=20240806043724",   // Recon
  "sniper-merc"         : "https://static.wikia.nocookie.net/callofduty/images/7/70/Terminus_Outcomes_Sniper_MWIII.jpeg/revision/latest?cb=20240811015834",   // Snipers
  "shield-soldiers"     : "https://static.wikia.nocookie.net/callofduty/images/f/f3/Terminus_Outcomes_Shield_Soldier_MWIII.jpeg/revision/latest?cb=20240810045940",   // Shield Soldiers
  "anti-tanks"          : "https://static.wikia.nocookie.net/callofduty/images/5/5e/Terminus_Outcomes_Anti_Tank_MWIII.jpeg/revision/latest/scale-to-width-down/1000?cb=20240729010423",   // Anti-Tanks
  // Part 2C — Air Support
  "helis"               : "https://static.wikia.nocookie.net/callofduty/images/e/e3/ChopperGunner_Streak_Background_Menu_MWII.jpg/revision/latest/scale-to-width-down/1000?cb=20220916181446",   // Helicopters

  // ---------- Wonder Weapons ----------
  // Wonder Weapons
  "wunderwaffe"         : "https://static.wikia.nocookie.net/callofduty/images/5/5b/Wunderwaffe_DG-2_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711031425",   // Wunderwaffe DG-2
  "raygun"              : "https://static.wikia.nocookie.net/callofduty/images/1/17/Ray_Gun_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711031340", //Ray Gun
  "scorcher"            : "https://static.wikia.nocookie.net/callofduty/images/5/5e/Scorcher_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711031356",   // Scorcher
  "vr11"                : "https://static.wikia.nocookie.net/callofduty/images/4/48/V-R11_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240711031444",   // V-R11
  "aether-blade"        : "https://static.wikia.nocookie.net/callofduty/images/2/2e/Aether_Blade_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240505134939",   // Aether Blade
  "monkey"              : "https://static.wikia.nocookie.net/callofduty/images/4/47/Cymbal_Monkey_Icon_MWIII.png/revision/latest?cb=20231116033327",   // Monkey Bomb
  "kazimir"             : "https://static.wikia.nocookie.net/callofduty/images/f/f4/LT53_Kazimir_Icon_MWIII.png/revision/latest?cb=20231116025621",   // LT53 Kazimir

  // ---------- Perks ----------
  // Perk-a-Colas
  "juggernog"           : "https://static.wikia.nocookie.net/callofduty/images/2/27/Juggernog_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040746",   // Jugger-Nog
  "speedcola"           : "https://static.wikia.nocookie.net/callofduty/images/f/f3/Speed_Cola_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040836",   // Speed Cola
  "stamin-up"           : "https://static.wikia.nocookie.net/callofduty/images/e/ee/Stamin-Up_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040855",   // Stamin-Up
  "quick-revive"        : "https://static.wikia.nocookie.net/callofduty/images/1/13/Quick_Revive_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040820",   // Quick Revive
  "phd"                 : "https://static.wikia.nocookie.net/callofduty/images/4/44/PHD_Flopper_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040803",   // PHD Flopper
  "deadshot"            : "https://static.wikia.nocookie.net/callofduty/images/7/71/Deadshot_Daiquiri_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040636",   // Deadshot Daiquiri
  "death-perception"    : "https://static.wikia.nocookie.net/callofduty/images/b/b8/Death_Perception_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040648",   // Death Perception
  "elemental-pop"       : "https://static.wikia.nocookie.net/callofduty/images/e/e9/Elemental_Pop_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040730",   // Elemental Pop
  "tombstone"           : "https://static.wikia.nocookie.net/callofduty/images/d/da/Tombstone_Soda_Acquisition_Background_Menu_Zombies_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240720040916",   // Tombstone Soda
  // How to get perks
  "perk-machine"        : "https://static.wikia.nocookie.net/callofduty/images/8/88/DerWunderfizz_Transparent_BOCW.png/revision/latest/scale-to-width-down/268?cb=20211016020336",   // Perk Machines
  "perk-can"            : "https://www.charlieintel.com/cdn-image/wp-content/uploads/2023/11/07/Jugger-Nog-MW3-Zombies-Perk-1024x576.jpg?width=1200&quality=75&format=auto",   // Perk Cans
  "unstable-perks"      : "https://cdn.oneesports.gg/wp-content/uploads/2024/07/ModernWarfare3_Zombies_UnstableRift_Portal-1024x576.jpg",   // Unstable Rift

  // ---------- Contracts ----------
  // Contracts
  "aether-extractor"    : "https://static.wikia.nocookie.net/callofduty/images/1/1d/Aethor_Extractor_Phone_Contract_Icon_MWIII.png/revision/latest?cb=20260310212149",   // Aether Extractor
  "deliver-cargo"       : "https://static.wikia.nocookie.net/callofduty/images/5/5c/Cargo_Delivery_Phone_Contract_Icon_MWIII.png/revision/latest?cb=20260310212148",   // Deliver Cargo
  "defend-ground"       : "https://static.wikia.nocookie.net/callofduty/images/3/3d/Defend_Ground_Station_Phone_Contract_Icon_MWIII.png/revision/latest?cb=20260310212150",   // Defend Ground Station
  "bounty"              : "https://static.wikia.nocookie.net/callofduty/images/4/41/Bounty_Phone_Contract_Icon_MWIII.png/revision/latest?cb=20260310212147",   // Eliminate the Bounty
  "escort"              : "https://static.wikia.nocookie.net/callofduty/images/b/b9/Escort_Phone_Contract_Icon_MWIII.png/revision/latest?cb=20260310212150",   // Escort (ACV)
  "outlast"             : "https://static.wikia.nocookie.net/callofduty/images/e/ee/Outlast_Phone_Contract_Icon_MWIII.png/revision/latest?cb=20260310212145",   // Phase Neutralization (Outlast)
  "raid-stash"          : "https://static.wikia.nocookie.net/callofduty/images/2/2c/Raid_Weapon_Stash_Contract_Icon_MWIII.png/revision/latest?cb=20260310212148",   // Raid Weapon Stash
  "spore-control"       : "https://static.wikia.nocookie.net/callofduty/images/b/b7/Spore_Control_Phone_Contract_Icon_MWIII.png/revision/latest?cb=20260310212146",   // Spore Control
  // Activities
  "aether-nests"        : "https://primagames.com/wp-content/uploads/2023/11/mw3-zombies-cyst.jpg?resize=1024,576",   // Aether Nests
  "harvester-orbs"      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUPKG_uNjYVH7W54COjjE1mZCKCxelT43jsWdt-8RSOQmDSFOcYF5Gm0&s=10",   // Harvester Orbs
  "infested-strongholds": "https://www.charlieintel.com/cdn-image/wp-content/uploads/2023/11/28/how-to-get-cyphered-tablet-mw3-zombies.jpg",   // Infested Strongholds
  "merc-camps"          : "https://static.wikia.nocookie.net/callofduty/images/d/dd/Terminus_Outcomes_Promo_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20231122155220",   // Mercenary Camps
  "armored-convoys"     : "https://attackofthefanboy.com/wp-content/uploads/2023/11/Modern-Warfare-3-MW3-MWZ-Mercenary-Convoy-Locations.jpg?w=1200",   // Armored Convoys
  "merc-strongholds"    : "https://static.wikia.nocookie.net/callofduty/images/f/fc/Zombies_Season_Three_Promo7_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20240424172228",   // Mercenary Strongholds

  // ---------- Dark Aether Rift ----------
  // How to open a rift
  "rift-open"           : "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-mw3/d/de/Dark_Aether_Challenges.jpg?width=1920",   // Opening a Rift

  // ---------- Bosses ----------
  // Story Mission Bosses
  "gormgant"            : "https://static.wikia.nocookie.net/callofduty/images/c/c8/Gorm%27gant_Infobox_MWIII.jpg/revision/latest?cb=20231130213145",   // Gorm'gant
  "krawvir"             : "https://static.wikia.nocookie.net/callofduty/images/9/94/Krawvir_MWIII.png/revision/latest?cb=20240325213002",   // Krawvir
  "taoxia"              : "https://static.wikia.nocookie.net/callofduty/images/8/86/Taoxia_MWIII.png/revision/latest?cb=20240731111813",   // Taoxia
  "orcus-boss"          : "https://static.wikia.nocookie.net/callofduty/images/7/79/TheEnd_Achievement_Image_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20231102192156",   // Orcus
  "stormcaller"         : "https://static.wikia.nocookie.net/callofduty/images/5/57/Stormcaller_Disciple_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20240617234054",   // Stormcaller
  // Terminus Warlords
  "baranov"             : "https://static.wikia.nocookie.net/callofduty/images/d/da/Baranov_Zombies_HUD_MWIII.png/revision/latest?cb=20240117041109",   // “Legacy” Baranov
  "dokkaebi"            : "https://static.wikia.nocookie.net/callofduty/images/2/25/Dokkaebi_Zombies_HUD_MWIII.png/revision/latest?cb=20240504022356",   // Ari “Dokkaebi” Jo
  "keres"               : "https://static.wikia.nocookie.net/callofduty/images/9/99/Keres_Zombies_HUD_MWIII.png/revision/latest?cb=20240309030521",   // Sona “Keres” Mirzoyan
  "rainmaker"           : "https://static.wikia.nocookie.net/callofduty/images/c/c6/Rainmaker_Zombies_HUD_MWIII.png/revision/latest?cb=20240503163622",   // Rainmaker
  // Dark Aether Rift Bosses
  "boss-mega-abom"      : "https://static.wikia.nocookie.net/callofduty/images/f/f0/MegaAbomination_LaunchTrailer_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20240825140622",   // Mega Abomination
  "boss-mimic"          : "https://static.wikia.nocookie.net/callofduty/images/2/24/Zombies_Season_Six_Promo_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20240911030043",   // Special Mimic
  "boss-disciple"       : "https://static.wikia.nocookie.net/callofduty/images/9/9e/Disciple_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20231122155440",   // Elite Disciple
};

/** page -> wiki file name used as a faded page background (optional) */
const WIKI_BACKGROUNDS = {
  "home"          : "",
  "lore"          : "",
  "characters"    : "",
  "map"           : "",
  "utilities"     : "",
  "enemies"       : "",
  "wonder-weapons": "",
  "perks"         : "",
  "contracts"     : "",
  "rifts"         : "",
  "bosses"        : "",
};

/** item id -> which part of the image to keep in view: "x% y%"
 *  y: 0% = show the top, 50% = centre (default), 100% = show the bottom
 *  x: 0% = show the left, 50% = centre, 100% = show the right */
const IMAGE_FOCUS = {
  "krawvir": "50% 0%",
  "taoxia": "50% 0%",
  "gormgant": "50% 0%",
  "boss-disciple": "50% 0%",
  "disciple": "50% 0%",
  "grunts": "50% 20%",
  "soldiers": "50% 20%",
  "elites": "50% 20%",
  "sergeant": "50% 20%",
  "shock-troops": "50% 20%",
  "recon-merc": "50% 20%",
  "sniper-merc": "50% 20%",
  "shield-soldiers": "50% 20%",
  "anti-tanks": "50% 20%",
  "laswell": "50% 20%",
};

const IMAGE_FIT = {
  "perk-machine": "contain",
};

/** Accepts a full image link (https://...) or a wiki file name. */
const wikiUrl = (value) => {
  const v = value.trim();
  return /^https?:\/\//i.test(v) ? v : WIKI_BASE + encodeURIComponent(v.replace(/ /g, "_"));
};
