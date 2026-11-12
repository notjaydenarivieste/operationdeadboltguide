/**
 * data.js — all site content.
 * Source: Call of Duty Wiki (Operation Deadbolt) + official Call of Duty blog.
 * Item shape: { id, name, tag?, tagType?, text, facts?[] }
 *   tagType: "good" | "bad" | "neutral"
 */

const SITE = {
  title: "Operation Deadbolt",
  subtitle: "Modern Warfare III Zombies — Field Guide",
};

/* ---------- Home ---------- */
const HOME = {
  summary: [
    "Operation Deadbolt is the large-scale, extraction-style Zombies experience in Call of Duty: Modern Warfare III (2023). Set more than 35 years after the events of Forsaken, it drops a strike team into Zaravan, Urzikstan, where the Dark Aether is leaking through the Exclusion Zone and the mercenary army Terminus Outcomes is racing to weaponize it.",
    "Instead of fighting round after round in a small map, you roam an open world, take on contracts and activities, loot weapons and schematics, and then escape alive with your haul before the Aether Storm swallows everything.",
  ],
  steps: [
    { title: "Deploy", text: "Choose your Operator, Rucksack and Loadout in the lobby, then insert at the outer edge of the map in a safe Tier I area." },
    { title: "Explore & Earn", text: "Complete contracts and activities to earn Essence and loot. Spend Essence at Wall Buys, the Mystery Box, Pack-a-Punch and perk machines." },
    { title: "Push Deeper", text: "Move into Tier II and Tier III for tougher enemies and bigger rewards, such as Sigils and High Value Items." },
    { title: "Watch the Clock", text: "After roughly 45 minutes the Aether Storm expands. You then have about 15 minutes to reach an exfil point. Bring a Gas Mask." },
    { title: "Exfil", text: "Escape successfully to keep your Acquisitions and raise your Containment Level. Fail, and you lose the gear you carried in." },
  ],
  stats: [
    { value: "3", label: "Threat tiers" },
    { value: "8", label: "Contract types" },
    { value: "4", label: "Dark Aether rifts" },
    { value: "~60", label: "Minutes per deployment" },
  ],
  credits: [
    { name: "Treyarch", role: "Lead Zombies studio", text: "The creators of Call of Duty Zombies and the Dark Aether Saga, responsible for Modern Warfare III's Zombies mode." },
    { name: "Sledgehammer Games", role: "Lead developer — Modern Warfare III", text: "Primary developer of Call of Duty: Modern Warfare III and co-developer of the Zombies experience." },
    { name: "Activision", role: "Publisher", text: "Published Modern Warfare III on 10 November 2023, along with its Zombies mode." },
  ],
  creditsNote: "Modern Warfare III is a collaboration across Activision's studio network. Content on this fan guide is based on the Call of Duty Wiki and community footage. Call of Duty is a trademark of Activision Publishing, Inc.; this site is unofficial.",
};

/* ---------- Sections ---------- */
const SECTIONS = [
  /* =============== LORE =============== */
  {
    id: "lore",
    title: "Lore",
    blurb: "The story of Operation Deadbolt, told act by act.",
    intro: "Deadbolt's story is delivered through four Mission Acts, each made up of numbered tiers of story missions. Between missions you will hear radio chatter, cutscenes and audio logs revealing how Dr. Ava Jansen, the Dark Aether and Terminus Outcomes are tied together. Acts I–III were available at launch; Act IV arrived with Season One.",
    layout: "wide",
        groups: [
      {
        title: "Mission Acts",
        layout: "story",
        items: [
          {
            id: "act-1", name: "Act I — Welcome to Operation Deadbolt", tag: "Launch", tagType: "neutral",
            tagline: "A new strike team arrives in the Exclusion Zone, and the hunt for Dr. Ava Jansen begins.",
            story: [
              "The story opens in Urzikstan, where Victor Zakhaev and Jack Fletcher raid a basement and find vials of Aetherium, the Dark Aether's volatile energy source. A police sniper hits their LTV, one vial shatters, and the mist that escapes turns the nearby police and mercenaries into zombies. Zakhaev immediately sees the vial's potential as a weapon. Soap, Ravenov and Laswell respond by sending in the Operation Deadbolt strike team, which is you, to contain the outbreak.",
              "Act I is the training ground. New recruits learn how to survive inside the Exclusion Zone (EZ) while the motives of Zakhaev and his mercenary company, Terminus Outcomes, slowly come into focus. Along the way, radio briefings introduce Deadbolt's staff: Kapoor keeps the vehicles running, Miller runs the quartermaster's stores, Barrera studies Dark Aether tissue, Fang flies the exfil, and Commander Selma Greene runs the whole operation while openly distrusting the CIA's Sergei Ravenov.",
              "The act ends with the capture of Dr. Ava Jansen, a physicist whose research Zakhaev used for weapons. Brought to Deadbolt HQ and interrogated, she claims she never knew Zakhaev was a terrorist and says she can neutralize the Aetherium. Greene frees her, and Zakhaev orders her death.",
            ],
            moments: [
              "Opening cutscene: the Aetherium vial shatters and the outbreak begins.",
              "Early audio logs: Greene distrusts Ravenov, whose file is heavily redacted, while Laswell insists he is essential.",
              "Welcome to Operation Deadbolt cutscene: Jansen is interrogated, then freed by Greene.",
            ],
            mission: { name: "Extraction", text: "Unlocked by finishing the Tier 6 mission, with a 45-minute timer. Deploy to Dr. Jansen's coordinates and bring her in for questioning." },
            tiersNote: "Every tier mission awards a random Perk Power-Up, plus the extras listed.",
            tiers: [
              { title: "Tier 1", missions: [
                { name: "Direct Line", text: "Ping a contract on the Tac Map, complete it, then exfil." },
                { name: "Treasure Hunter", text: "Open 25 Loot Caches." },
                { name: "Road Rage", text: "Run over 30 zombies with a vehicle and repair one vehicle tire." },
                { name: "Wall Power", text: "Buy a Wall Buy weapon and kill 50 zombies with it." },
                { name: "Firepower", text: "Pack-a-Punch a weapon to Level I and kill 50 zombies with it." },
                { name: "Take Up Arms", text: "Buy a primary weapon from a Mystery Box and kill 50 zombies with it." },
              ] },
              { title: "Tier 2", missions: [
                { name: "Interceptor", text: "Destroy a Terminus convoy and collect the Stronghold Keycard it drops. Reward: DG-56 “Bone Rattle” blueprint and 3,000 XP." },
              ] },
              { title: "Tier 3", missions: [
                { name: "Freezer Burn", text: "Kill 50 zombies and slow 10 Hellhounds with Cryo Freeze." },
                { name: "Minelayer", text: "Kill 25 zombies and 15 mercenaries with the Energy Mine." },
                { name: "Pit Stop", text: "Fully refuel 3 vehicles at gas stations. Reward: Double XP token and 1,500 XP." },
                { name: "Saboteur", text: "Complete an Aether Extractor contract, kill 15 guards, shoot down a reinforcement helicopter and exfil with Uncommon Aether Tool plans." },
                { name: "Automated Backup", text: "Activate 3 Deadbolt Turrets using Ammo Mod circuit boards." },
              ] },
              { title: "Tier 4", missions: [
                { name: "Infiltrator", text: "Obtain a Stronghold Keycard, clear a Terminus Stronghold and retrieve the Terminus record from its safe." },
              ] },
              { title: "Tier 5", missions: [
                { name: "Hands Off", text: "Kill 20 zombies and 10 mercenaries with Sentry Guns, then acquire a Cyphered Tablet." },
                { name: "Blasted", text: "Destroy armor on 25 zombies with Shatter Blast, then acquire a Cyphered Tablet." },
                { name: "Bring 'Em On", text: "Kill 50 zombies and a Special or Elite while Frenzied Guard is active, then acquire a Cyphered Tablet. Reward: Double Weapon XP token and 1,500 XP." },
                { name: "Hostile Takeover", text: "Loot 3 safes and kill 50 enemies while drilling." },
                { name: "Chaperone", text: "Complete an Escort contract, kill 75 zombies during it, keep the ACV above 50% health and exfil with the Quick Revive recipe." },
                { name: "Nest Wrecker", text: "Obtain a Gas Mask, destroy an Aether Nest, then acquire a Cyphered Tablet." },
              ] },
              { title: "Tier 6", missions: [
                { name: "Where's Dr. Jansen?", text: "Complete an Outlast contract, obtain Dr. Jansen's Tablet and exfil." },
              ] },
            ],
          },
          {
            id: "act-2", name: "Act II — Mother of Invention", tag: "Launch", tagType: "neutral",
            tagline: "Jansen builds a weapon against the Dark Aether, and her own past starts to surface.",
            story: [
              "With Jansen in custody, Deadbolt takes a gamble. She defected from Zakhaev's service, and although Greene remains distrustful, Jansen may hold the key to shutting down the Incursion. She begins work on the Aetherium Neutralizer, a device designed to destabilize Aetherium, and Deadbolt's strike teams gather what she needs: test materials, essence samples, formulas and field data.",
              "Her work does not go smoothly. At the Mother of Invention briefing she presents her results: the prototype can destabilize Aetherium, but it cannot handle the enriched material in Zakhaev's vial. The team also learns about Dr. Oskar Strauss's research and Fletcher's full name, and Jansen suffers a migraine mid-briefing, a first hint that she is more closely tied to the Dark Aether than she admits.",
              "Audio logs add more depth. The Mark Two Neutralizer is only a partial success, and Jansen's private journal reveals she was adopted and that her birth mother, Elizabeth Grey, worked with Strauss on Dark Aether research. Meanwhile Ravenov quietly watches over her, afraid she is fading into the Rift and hiding it. The act builds toward a field test of the finished prototype.",
            ],
            moments: [
              "Mother of Invention cutscene: the prototype works on regular Aetherium but not the enriched kind.",
              "Strauss's research and Fletcher's full name are revealed.",
              "Jansen's journal and Ravenov's logs hint at her origins.",
            ],
            mission: { name: "Shephard", text: "Deploy to the Neutralizer Test Site and successfully test the device. Reward: “Warmageddon” LTV skin and 5,000 XP." },
            tiersNote: "Every tier mission awards a random Perk Power-Up, plus the extras listed.",
            tiers: [
              { title: "Tier 1", missions: [
                { name: "Same Day Delivery", text: "Complete a Deliver Cargo contract, destroy the helicopter chasing the vehicle, then destroy the vehicle after completion." },
              ] },
              { title: "Tier 2", missions: [
                { name: "Safe Cracker", text: "Complete a Raid Weapon Stash contract, kill 30 zombies attracted by the drill, keep the drill running and exfil with the Cryo Freeze formula." },
                { name: "Ascension", text: "Use a Redeploy Drone to free fall or parachute to another Threat Zone. Reward: “Pistol Partner” emblem and 2,000 XP." },
                { name: "Merc Cleanup", text: "Kill 20 mercenaries in Mercenary Camps and loot 3 camp caches." },
                { name: "Reaper", text: "Collect 15 items from Harvester Orbs and destroy 3 orbs." },
                { name: "Guardian Angel", text: "Aid endangered teammates." },
                { name: "Shocked", text: "Stun 25 zombies and 5 Specials with Dead Wire." },
              ] },
              { title: "Tier 3", missions: [
                { name: "More Firepower", text: "Pack-a-Punch a weapon to Level II, then kill 75 zombies and a Special with it." },
                { name: "Bounty Hunter", text: "Complete Eliminate the Bounty contracts for a Mangler, a Disciple and a Mimic." },
                { name: "Essence of Aether", text: "Collect Essence Samples from containers at Hamza Bazaar, Rostova Shops and Quadri Shopping Center." },
              ] },
              { title: "Tier 4", missions: [
                { name: "Heist", text: "Complete an Aether Extractor contract and collect a filled Essence Container." },
              ] },
              { title: "Tier 5", missions: [
                { name: "Mind Control", text: "Turn 20 zombies with Brain Rot and let them kill 25 others." },
                { name: "Frost Bite", text: "Freeze 50 zombies and 5 Mimics with Frost Blast. Reward: Double XP token and 2,500 XP." },
                { name: "Exterminator", text: "Complete a Spore Control contract in under 2 minutes 30 seconds." },
              ] },
            ],
          },
          {
            id: "act-3", name: "Act III — Confrontation", tag: "Launch", tagType: "neutral",
            tagline: "Deadbolt tests its weapon against the Dark Aether, then takes the fight to Zakhaev.",
            story: [
              "Zakhaev and Fletcher learn that Deadbolt's technology threatens their plans. Deadbolt races to perfect Jansen's device and to find Strauss's research, which Zakhaev has hidden with one of Fletcher's lieutenants. Terminus audio logs show Zakhaev's ambitions growing: he plans to use enriched Aetherium to secure his father's legacy, names London, Paris and Washington, D.C. as targets, and vows revenge on Captain Price by going after Soap.",
              "The Confrontation cutscene is the act's turning point. The Orcus attacks as the Neutralizer is activated, and the device destroys the creature. But a Dark Aether portal opens, pulling in debris and soldiers. Jansen is almost dragged through too, and glimpses the Entity, which says, “Let us in.” Afterwards, Dobbs reports that Dark Aether contacts are returning.",
              "Terminus then fractures. Fletcher announces that Zakhaev is out of the equation and refocuses the company on mining and selling Aetherium, while Greene's voicemail notes that Zakhaev has left and Fletcher has stayed behind to mine. The act ends with the assault on Zakhaev's stronghold to cleanse the Exclusion Zone.",
            ],
            moments: [
              "Confrontation cutscene: the Orcus is destroyed, a portal opens and Jansen hears the Entity say “Let us in.”",
              "Terminus logs: Zakhaev's plans for London, Paris and Washington, D.C.",
              "Fletcher declares Zakhaev out of the equation.",
            ],
            mission: { name: "Defeat Zakhaev", text: "Deploy to Zakhaev's Stronghold and cleanse the Exclusion Zone. Reward: “The Bone Collector” Ripper Operator skin and 10,000 XP." },
            tiersNote: "Every tier mission awards a random Perk Power-Up, plus the extras listed.",
            tiers: [
              { title: "Tier 1", missions: [
                { name: "Two Factor Authentication", text: "Complete a Defend Ground Station contract, kill 20 mercenaries during it, keep the computer above 60% health and exfil with the Death Perception recipe." },
              ] },
              { title: "Tier 2", missions: [
                { name: "Firestarter", text: "Ignite 50 zombies and 5 Specials with Napalm Burst." },
                { name: "Ghosted", text: "Kill 100 zombies and 20 mercenaries with Aether Shroud." },
                { name: "Alternate Current", text: "Hit 10 mercenaries with Tesla Storm and kill 50 zombies affected by it." },
                { name: "Most Firepower", text: "Pack-a-Punch a weapon to Level III, then kill 100 zombies and a Mega Abomination with it." },
                { name: "Paint the Target", text: "Kill 20 mercenaries with a Precision Airstrike and hit a convoy and a Mercenary Camp." },
                { name: "Crash and Burn", text: "Shoot down 3 enemy helicopters. Reward: Double Weapon XP token and 2,500 XP." },
              ] },
              { title: "Tier 3", missions: [
                { name: "Storm the Castle", text: "Complete a Mercenary Camp, clear a Mercenary Stronghold, defeat the Warlord and collect Strauss's Research." },
              ] },
              { title: "Tier 4", missions: [
                { name: "Closing Time", text: "Enter the Aether Storm, kill 50 zombies inside it and defeat the Stormcaller." },
                { name: "Spring Cleaning", text: "Clear an Infested Stronghold in the High Threat Zone." },
                { name: "Holdout", text: "Complete an Outlast contract, kill 50 zombies in the corrupted space and exfil with the Wunderwaffe DG-2 plans." },
              ] },
            ],
          },
          {
            id: "act-4", name: "Act IV — Contact", tag: "Season One", tagType: "good",
            tagline: "A new anomaly opens, Jansen vanishes, and the truth about her origins comes out.",
            story: [
              "The Exclusion Zone grows more dangerous as a new anomaly opens a portal to the Dark Aether. Jansen goes missing from her lab, and Greene and Soap order teams to find her and bring her back. Act IV arrived with Season One, and at that time it contained only one story mission.",
              "Inside the rift, the strike team investigates the anomaly in the “Bad Signal” and “Countermeasures” missions, and each time returns reporting contact with an entity. Jansen's own hallucinations, in which the Entity appears alongside the zombified corpses of Weaver, Strauss, Grey and Carver, show how deeply it has reached into her mind. In one vision Ravenov is killed.",
              "The act then turns personal. Jansen stitches up a wounded Ravenov and learns about Requiem's history and Samantha Maxis's sacrifice, but Ravenov refuses to share everything he knows and his file is classified. In the “Union” scene, Jansen watches a 1996 video from Elizabeth Grey. It reveals that Grey and Samantha Maxis are both her biological mothers and that Ravenov was chosen to watch over her. Angry at the lies, Jansen leaves. Completing Act IV also unlocks the Dark Aether Rifts.",
            ],
            moments: [
              "Bad Signal: Jansen hallucinates the Entity and the dead; Ravenov is killed in the vision.",
              "Countermeasures: Ravenov refuses to share the full truth about Requiem.",
              "Union: Jansen learns her origins from a 1996 video by Elizabeth Grey and walks out.",
            ],
            mission: { name: "Union", text: "Investigate the anomaly and extract from the Dark Aether." },
            tiers: [
              { title: "Tier 1", missions: [
                { name: "Bad Signal", text: "Investigate the anomaly and leave the Dark Aether. Boss: Gorm'gant." },
              ] },
              { title: "Tier 2", missions: [
                { name: "Countermeasures", text: "Investigate the anomaly and escape the rift. Boss: Krawvir." },
              ] },
            ],
          },
        ],
      },
    ],
  },

  /* =============== CHARACTERS =============== */
  {
    id: "characters",
    title: "Characters",
    blurb: "Who's who in the Dark Aether Saga's newest chapter.",
    intro: "Characters are classified by their role in the story. Note that some, like Ava Jansen, are allies whose loyalties are tested over the acts.",
    groups: [
      {
        title: "Operation Deadbolt — Protagonists",
        items: [
          { id: "soap", name: "Johnny “Soap” MacTavish", tag: "Protagonist", tagType: "good", text: "Leads field operations and commands the strike teams you deploy with. A veteran of the Modern Warfare storyline, he is the steady hand on the ground." },
          { id: "greene", name: "Selma Greene", tag: "Protagonist", tagType: "good", text: "Special Services Officer and commander of Operation Deadbolt. She runs the program and is openly distrustful of Dr. Jansen." },
          { id: "jansen", name: "Dr. Ava Jansen", tag: "Protagonist (conflicted)", tagType: "good", text: "A physicist who defected from Zakhaev's service and builds the Aether Neutralizer for Deadbolt. She is bonded to the Dark Aether, and her origins (her biological mother is Samantha Maxis) drive the story." },
          { id: "ravenov", name: "Sergei Ravenov", tag: "Protagonist", tagType: "good", text: "A former Requiem member and Jansen's guardian. He withholds the truth about her origins, which strains his relationship with Deadbolt." },
          { id: "dobbs", name: "Lucas “Luke” Dobbs", tag: "Protagonist", tagType: "good", text: "Drone pilot who gives the team aerial support and recon over the Exclusion Zone." },
          { id: "barrera", name: "Dr. Hugo Barrera", tag: "Protagonist", tagType: "good", text: "Scientist who conducts seismic scans and studies the High Value Targets you bring down." },
          { id: "kapoor", name: "Rupinder Kapoor", tag: "Protagonist", tagType: "good", text: "Chief Mechanic who keeps Deadbolt's vehicles and equipment running." },
          { id: "miller", name: "Corporal Krystal Miller", tag: "Protagonist", tagType: "good", text: "Quartermaster Corporal who manages Deadbolt's supplies and Acquisitions." },
          { id: "laswell", name: "Kate Laswell", tag: "Protagonist", tagType: "good", text: "Briefs the strike team on the larger picture and the stakes of the mission." },
          { id: "fang", name: "Amy Fang", tag: "Protagonist", tagType: "good", text: "Pilot responsible for evacuation, flying you out when you reach the exfil." },
        ],
      },
      {
        title: "Terminus Outcomes & Dark Aether — Antagonists",
        items: [
          { id: "zakhaev", name: "Victor Zakhaev", tag: "Antagonist", tagType: "bad", text: "Leader of Terminus Outcomes and the main antagonist. He holds the weapons-grade Aetherium and intends to weaponize it." },
          { id: "fletcher", name: "Jack Fletcher", tag: "Antagonist", tagType: "bad", text: "James Tobias Fletcher, Zakhaev's lieutenant. He appears beside Zakhaev in the opening cutscene when the Aetherium vial is broken." },
          { id: "entity", name: "The Entity", tag: "Antagonist", tagType: "bad", text: "A shadowy Dark Aether presence connected to Jansen. It is the central supernatural threat in Act IV." },
        ],
      },
      {
        title: "Requiem & Projekt Endstation — Past figures",
        note: "These characters appear through audio logs, documents and Jansen's backstory.",
        items: [
          { id: "strauss", name: "Dr. Oskar Strauss", tag: "Protagonist (Requiem)", tagType: "good", text: "A former Projekt Endstation scientist who defected to Requiem. Deadbolt hunts for his research in Act III. He is deceased." },
          { id: "grey", name: "Elizabeth Grey", tag: "Protagonist (Requiem)", tagType: "good", text: "Requiem scientist. Listed as one of Jansen's biological mothers. Deceased." },
          { id: "maxis", name: "Samantha Maxis", tag: "Protagonist (Requiem)", tagType: "good", text: "Requiem member and Jansen's biological mother, a key link to the wider Dark Aether Saga." },
          { id: "carver", name: "Mackenzie Carver", tag: "Protagonist (Requiem)", tagType: "good", text: "Requiem member from earlier in the saga. Deceased." },
          { id: "weaver", name: "Grigori Weaver", tag: "Protagonist (Requiem)", tagType: "good", text: "Killed at the start of the outbreak. Deceased." },
        ],
      },
    ],
  },

  /* =============== MAP =============== */
  {
    id: "map",
    title: "Map",
    blurb: "Zaravan, Urzikstan — and the three threat tiers inside it.",
    intro: "The Exclusion Zone is split into three threat tiers. You always start at the outer edge in Tier I and work inward. The deeper you go, the tougher the enemies, the better the rewards, and the more Containment Level points you earn.",
    groups: [
      {
        title: "Threat Tiers",
        layout: "atlas",
        image: "https://static.wikia.nocookie.net/callofduty/images/7/78/OperationDeadbolt_TacMap_Season3_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20240518103947",
        items: [
          {
            id: "tier-1", name: "Tier I — Low Threat", tag: "Starting area", tagType: "good",
            text: "The outer edges of the map where every deployment begins. Enemies are weakest here, making it the best place to learn how zombies and mercenaries behave, gather early gear and build Essence.",
            facts: ["Contracts here are the easiest and award 1 Containment Level point.", "Great for collecting Wall Buy weapons and warming up.", "Aether Extractor contracts here use three rockets."],
          },
          {
            id: "tier-2", name: "Tier II — Medium Threat", tag: "Mid-map", tagType: "neutral",
            text: "The middle band of the map. Tougher zombies, tougher mercenaries and more dangerous High Value Targets. Rewards are noticeably better.",
            facts: ["Contracts award 2 Containment Level points.", "Disciples can appear as Eliminate the Bounty targets from this tier onward.", "Aether Extractor contracts here use five rockets."],
          },
          {
            id: "tier-3", name: "Tier III — High Threat", tag: "Endgame", tagType: "bad",
            text: "The deepest and most dangerous zone. Expect Mega Abomination bounties, heavy resistance and the best loot. This is where you earn the Sigils needed to open a Dark Aether Rift.",
            facts: ["Contracts award 3 Containment Level points.", "Mega Abominations appear as bounty targets.", "Completing Tier III contracts rewards Sigils."],
          },
        ],
      },
      {
        title: "Aether Storm & Containment Levels",
        layout: "text",
        items: [
          { id: "storm", name: "The Aether Storm", tag: "Hazard", tagType: "bad", text: "Every deployment is a race against the Aether Storm. It begins at a random point on the map and starts expanding after about 45 minutes, leaving you roughly 15 minutes to reach an exfil.", facts: ["A Gas Mask protects you from Aether Storm and Aether Nest damage."] },
          { id: "containment", name: "Containment Levels", tag: "Progression", tagType: "good", text: "A 10-tier exfil streak system. Contract completions earn points (1, 2 or 3 depending on tier). A successful exfil advances you; failure drops you one level.", facts: ["Benefits: extra Essence, Armor Plates, and discounts such as cheaper Perk-a-Colas."] },
        ],
      },
    ],
  },

  /* =============== UTILITIES =============== */
  {
    id: "utilities",
    title: "Utilities",
    blurb: "Machines, stations and gear scattered across the map.",
    intro: "Essence is the currency of Deadbolt, and these utilities are where you spend it. Learn where they are and what they do, because they decide how long you will survive.",
    groups: [
      {
        title: "Machines & Stations",
        items: [
          { id: "wallbuy", name: "Wall Buy", tag: "Weapons", tagType: "neutral", text: "Weapons mounted on walls that you purchase with Essence. Reliable and peredicatble, and their cost scales with their rarity, noted by the collor of their chalk outlines.", facts: ["Weapon rarities come in five tiers. Common (Grey), Uncommon (Green), Rare (Blue), Epic (Purple), and Legendary (Orange).", "Weapon rarity significantly affects the weapon's damage and the amount of attachments it comes with (if obtained randomly or a wallbuy)."], },
          { id: "mystery-box", name: "Mystery Box", tag: "Weapons", tagType: "neutral", text: "A gamble that gives you a randomly generated prize, usually a primary weapon of varying rarity, and occasionally a Wonder Weapon.", facts: ["Contrary to popular belief, your 'Raygun everytime' tricks won't work here."] },
          { id: "pap", name: "Pack-a-Punch", tag: "Upgrade", tagType: "good", text: "Upgrades the weapon you hold to Level I, II or III for a price, usually improving ammo and damage.", facts: ["Alternatively, you can use Aetherium Crystals (obtained randomly or from the acquisitons staff) to pack-a-punch your weapon without the need for the machine. The rarer, the better!", "Melee the machine to disable the pack-a-punch camo. This even works if using the Aetherium Crystals. Hit it again to re-enable the camos!"] },
          { id: "turrets", name: "Deadbolt Turrets", tag: "Defense", tagType: "good", text: "Automated turrets activated with Ammo Mod Circuit Boards. They restrict enemy movement and help hold a position." },
          { id: "buy-station", name: "Buy Stations", tag: "Shop", tagType: "neutral", text: "Stations that sells various equipment. Alternatively, you can also sell your loot here." },
          { id: "gas-station", name: "Gas Stations", tag: "Vehicles", tagType: "neutral", text: "These stations are marked in the map, use them to repair and refuel your vehicles!" },
          { id: "stash", name: "Acquisitions Stash", tag: "Storage", tagType: "good", text: "Stores up to 11 High Value Items such as Aether Tools and Perk Cans. Items you successfully exfil with are kept for later." },
        ],
      },
      {
        title: "Field Upgrades",
        note: "Powerful, rechargeable abilities you bring into the field.",
        items: [
          { id: "energy-mine", name: "Energy Mine", tag: "Field Upgrade", tagType: "neutral", text: "A deployable mine that damages enemies that walk into it." },
          { id: "frenzied-guard", name: "Frenzied Guard", tag: "Field Upgrade", tagType: "neutral", text: "A defensive burst that protects you while you fight." },
          { id: "frost-blast", name: "Frost Blast", tag: "Field Upgrade", tagType: "neutral", text: "A freezing shockwave that slows and damages nearby enemies." },
          { id: "aether-shroud", name: "Aether Shroud", tag: "Field Upgrade", tagType: "neutral", text: "Cloaks you in Aether energy so zombies lose track of you." },
          { id: "tesla-storm", name: "Tesla Storm", tag: "Field Upgrade", tagType: "neutral", text: "Calls down a storm of electricity that strikes enemies around you." },
                    { id: "healing-aura", name: "Healing Aura", tag: "Field Upgrade", tagType: "neutral", text: "Creates a pulse of restorative energy around you that heals you and nearby teammates, making it a strong pick when your squad is under pressure." },
        ],
      },
      {
        title: "Ammo Mods & Equipment",
        items: [
          { id: "ammo-mods", name: "Ammo Mods", tag: "Weapon effect", tagType: "good", text: "Special rounds that add elemental effects to a weapon.", facts: ["Cryo Freeze, Shatter Blast, Dead Wire, Napalm Burst, and Brain Rot. Effective when paired with Elemental Pop!", "Specific ammo mods are needed to destroy the three obelisks that open the Unstable Rift."] },
          { id: "aether-tools", name: "Aether Tools", tag: "Upgrade item", tagType: "good", text: "Uncommon, Rare and Epic tools that upgrade your held weapon to a rarer form. Rarer forms deal more damage." },
          { id: "gas-mask", name: "Gas Mask", tag: "Essential", tagType: "bad", text: "Required to avoid damage in Aether Nests and the Aether Storm." },
          { id: "drones", name: "Redeploy Drones", tag: "Support", tagType: "neutral", text: "Drones used to redeploy to another part of the zone." },
          { id: "sentry", name: "Support Streaks", tag: "Support", tagType: "neutral", text: "Call-in support that provides firepower and clears hordes." },
        ],
      },
    ],
  },

  /* =============== ENEMIES =============== */
  {
    id: "enemies",
    title: "Enemies",
    blurb: "Everything hostile in the Exclusion Zone, split into two threats.",
    intro: "You face two very different enemy groups: creatures born from the Dark Aether, and the human mercenary army Terminus Outcomes. Learn which is which and you can pick the right weapon and tactic.",
    groups: [
      {
        title: "Part 1 — The Dark Aether",
        note: "Undead and Aether-born creatures. Bosses are covered in the Bosses tab.",
        items: [
          { id: "zombies", name: "Zombies", tag: "Common", tagType: "neutral", text: "The standard undead, with Special and Elite variants that are tougher. Glowing zombies appear in several contract and rift objectives." },
          { id: "nest-crawlers", name: "Nest Crawlers", tag: "Aether Nest", tagType: "neutral", text: "Native to Aether Nests, where they thrive in the gas. Bring a Gas Mask." },
          { id: "hellhounds", name: "Hellhounds", tag: "Special", tagType: "bad", text: "Spawn from Dog Houses. Cryo ammo slows them, and a Molotov can recruit them as friendly dogs." },
          { id: "mimic", name: "Mimic", tag: "High Value Target", tagType: "bad", text: "A bounty target in Eliminate the Bounty contracts. A special Mimic guards the Nahr Bathhouse rift and uses EMP waves." },
          { id: "mangler", name: "Mangler", tag: "High Value Target", tagType: "bad", text: "A heavy bruiser and bounty target. Hunting one is part of the Legendary Dog Collar relic bounty for the Opal Palace rift." },
          { id: "disciple", name: "Disciple", tag: "High Value Target", tagType: "bad", text: "Appears as a bounty target in Tier II and III. An Elite Disciple guards the Old Town rift." },
          { id: "mega-abom", name: "Mega Abomination", tag: "Tier III Target", tagType: "bad", text: "A towering Tier III High Value Target. It guards the Opal Palace rift and drops a Sigil." },
          { id: "orcus", name: "Orcus", tag: "Story enemy", tagType: "bad", text: "Appears in the Confrontation mission and is killed with the Aetherium Neutralizer." },
        ],
      },
            {
        title: "Part 2A — Terminus Outcomes: Normal Mercenaries",
        note: "The human mercenary faction led by Victor Zakhaev. Normal mercenaries come in three strength tiers, from weakest to strongest.",
        items: [
          { id: "grunts", name: "Grunts", tag: "Normal · No armor", tagType: "bad", text: "The weakest and most common mercenaries, with no armor at all.", facts: ["Found near the LTV storage in Deliver Cargo, and in Mercenary Camps, Strongholds and Armored Convoys."] },
          { id: "soldiers", name: "Soldiers", tag: "Normal · Light armor", tagType: "bad", text: "The second tier of normal mercenaries, equipped with light armor.", facts: ["Found at Aether Extraction sites, the garage housing the Deliver Cargo LTV, Armored Convoys, and Mercenary Camps and Strongholds."] },
          { id: "elites", name: "Elites", tag: "Normal · Well armored", tagType: "bad", text: "The strongest normal mercenaries, well armored and often sent in as reinforcements.", facts: ["Found in Armored Convoys, inside Mercenary Strongholds and at Warlord's Strongholds.", "They try to stop the strike team from uploading data (Defend Ground Station), drilling safes, and attacking Warlords."] },
        ],
      },
      {
        title: "Part 2B — Terminus Outcomes: Specialist Mercenaries",
        note: "Specialists have unique roles and weapons, so each one calls for a different response.",
        items: [
          { id: "sergeant", name: "Sergeants", tag: "Specialist · Commander", tagType: "bad", text: "Officers who give orders to small groups of mercenaries in the field.", facts: ["Found in Mercenary Strongholds and Armored Convoys, and as part of Stronghold raid reinforcements.", "Armed with either the Cronen Squall or the BAS-B.", "Killing a Sergeant can spawn a Reward Rift for the Old Town rift's Laptop with Stickers relic."] },
          { id: "shock-troops", name: "Shock Troops", tag: "Specialist · Heavy armor", tagType: "bad", text: "Heavily armored but not very mobile, so keep your distance and keep moving.", facts: ["Found in Tier II Mercenary Camps and Strongholds, and around Aether Extraction sites.", "Carry a light machine gun and a handgun, and only switch to the handgun when the machine gun is empty and enemies are close.", "Killing one while it uses the handgun makes it drop the light machine gun instead."] },
          { id: "recon-merc", name: "Recon", tag: "Specialist · Fast", tagType: "bad", text: "Lightly armored and very mobile. They rush the strike team to deliver a stab, so watch your flanks.", facts: ["Often arrive as reinforcements when a Stronghold safe is being drilled.", "A Recon Soldier can also be found riding Armored Trucks.", "Recon mercenaries carry phones needed for the Shahin Manor Easter Egg."] },
          { id: "sniper-merc", name: "Snipers", tag: "Specialist · Stationary", tagType: "bad", text: "Lightly armored and stationary. They pick off the strike team and zombies from range.", facts: ["Appear only in Mercenary Camps.", "Killing Snipers yields phones used in the Shahin Manor Easter Egg."] },
          { id: "shield-soldiers", name: "Shield Soldiers", tag: "Specialist · Shielded", tagType: "bad", text: "Mercenaries who advance behind a shield, armed with a handgun.", facts: ["Found in Strongholds, and as reinforcements that attack the upload station in Defend Ground Station."] },
          { id: "anti-tanks", name: "Anti-Tanks", tag: "Specialist · Explosive", tagType: "bad", text: "Rocket specialists armed with an RPG-7 and a handgun. They only draw the handgun once they run out of rockets.", facts: ["Found in Mercenary Camps, and as reinforcements at upload stations.", "Killing one while it uses the handgun makes it drop the RPG-7 instead."] },
        ],
      },
      {
        title: "Part 2C — Terminus Outcomes: Air Support",
        items: [
          { id: "helis", name: "Helicopters", tag: "Air", tagType: "bad", text: "Reinforcement and patrol helicopters that can be shot down." },
        ],
      },
    ],
  },

  /* =============== WONDER WEAPONS =============== */
  {
    id: "wonder-weapons",
    title: "Wonder Weapons",
    blurb: "The rare, devastating weapons of the zone.",
    intro: "Wonder Weapons are crafted from hard-to-find Schematics at the lobby's Schematic Crafting location. Alternatively, with a little bit of dumb luck, the Mystery Box, or random reward rifts, may be able to give one for you and your squad!",
    groups: [
      {
        title: "Wonder Weapons",
        items: [
          {
            id: "wunderwaffe", name: "Wunderwaffe DG-2", tag: "Ultra rarity", tagType: "good",
            text: "A returning classic. Historically it fires a bolt of lightning that kills its target and chains to nearby zombies, with up to 10 kills per shot. This chain lightning works through walls, so it can be useful in close-quarter encounters!",
            facts: [
              "Mystery Box: Roll it for 950 Essence.",
              "Schematic: can be built from the Schematics menu with a hefty 48-hour cooldown.",
              "Wunderwaffe DG-2 Plans can be found on reward rifts, or a guaranteed reward from the Act III Holdout contract.",
              "Has the Wonder Weapon-exclusive Ultra rarity.",
            ],
          },
          {
            id: "raygun", name: "Ray Gun", tag: "Ultra rarity", tagType: "good",
            text: "One of the best-known weapons in all of Call of Duty Zombies. Its first shot guarantees that 90% of an enemy's health (specials and bosses excluded) will be wiped, essentially making it a two shot weapon. This thing has a small splash radius so use that to your advantage!",
            facts: [
              "Mystery Box: Roll it for 950 Essence.",
              "Schematic: can be built from the Schematics menu with a hefty 48 hour cooldown.",
              "Has the Wonder Weapon-exclusive Ultra rarity.",
              "Can be quickdrawed when you are in a pinch. That is pretty cool!",
            ],
          },
          {
            id: "scorcher", name: "Scorcher", tag: "Wonder Weapon", tagType: "good",
            text: "A powerful, charged wonder weapon. Its primary fire shoots a beam of plasma that damages anything that it touches. If uncharged, the beam dissipates instantly. If fully charged, it will leave a trail of plasma that dissipates slowly over a short period of time.",
            facts: [
              "Obtain: craft from a Schematic, or roll it from the Mystery Box.",
              "Its alt-fire is able to launch you vertically over the map, covering great distances. If fully charged, it can hop you a great 30-40 meters from the ground. If uncharged... im pretty sure you can jump higher than that."
            ],
          },
          {
            id: "vr11", name: "V-R11", tag: "Wonder Weapon", tagType: "good",
            text: "A weapon that turns zombies into friendly mercenaries (and vice versa) with a short timed lifespan. When upgraded, your friends explode on death and can hit multiple targets on a signle shot. ",
            facts: [
              "Obtain: the V-R11 Case is a Rift #2 reward.",
              "It can be used to fully repair and refuel your vehicle in a couple of shots. This repair mechanic also works on the ACV Contract!",
              "Mind the ABYSMALLY slow firing speed."
            ],
          },
          {
            id: "aether-blade", name: "Aether Blade", tag: "Lethal equipment", tagType: "good",
            text: "A lethal equipment item rather than a firearm. Once thrown, it can chain to multiple zombies before disappearing. After a 4 second cooldown, it then returns to your lethal slot, ready to be thrown again.",
            facts: [
              "Obtain: the Aether Blade Case is a Rift #1 (Opal Palace) reward.",
              "If acquired, it replaces your gun-but melee, requiring only two hits to kill a regular enemy of any tiers."
            ],
          },
          {
            id: "monkey", name: "Monkey Bomb", tag: "Tactical Equipment", tagType: "neutral",
            text: "An equipment that can be bought on Buy Stations or found randomly across the map. Throw it into a horde to draw zombies toward it before it detonates, giving you space to reposition or fight.",
            facts: ["If held, it will take your hand out of the camera, leaving only the hud. This can be used to make cinematic shots, if thats what you like!"],
          },
          {
            id: "kazimir", name: "LT53 Kazimir", tag: "Tactical Equipment", tagType: "neutral",
            text: "An equipment that can be bought on Buy Stations or found randomly across the map. It creates a singularity that sucks in all enemies (specials and bosses excluded) into itself, essentially instakilling them. For specials, they get stunned and damaged throughout the duration.",
            facts: ["If one shall enter the singularity, they will be transported to a random area on the map, essentially acting like a mini get out of jail card."],
          },
        ],
      },
    ],
  },

  /* =============== PERKS =============== */
  {
    id: "perks",
    title: "Perks",
    blurb: "Perk-a-Cola machines and what each one does.",
    intro: "Perk-a-Colas are bought from machines or crafted from Perk Cans, and they last for the mission unless you fully die. Perk-a-Cola costs are discounted as your Containment Level rises. Perk Cans can also be exfilled as High Value Items.",
    groups: [
      {
        title: "Perk-a-Colas",
        items: [
          { id: "juggernog", name: "Jugger-Nog", tag: "Health", tagType: "good", text: "Increases your maximum health. Sounds simple but extremely essential for every run. Be mindful that you AREN'T invincible and will go down." },
          { id: "speedcola", name: "Speed Cola", tag: "Reload", tagType: "good", text: "Speeds up reloading and armor plate replacement. Valuable for guns with abysmally slow reload speeds." },
          { id: "stamin-up", name: "Stamin-Up", tag: "Movement", tagType: "good", text: "Increases your run and sprint speed. Crucuial when navigating in this continent-sized map (Overexaggeration needed!)" },
          { id: "quick-revive", name: "Quick Revive", tag: "Support", tagType: "good", text: "Halves health regeneration delay, increases regernation speed, and halves revive time for allies. Unlike previous entries, this does NOT grant you a self-revive, so be mindful of your health! " },
          { id: "phd", name: "PHD Flopper", tag: "Explosive", tagType: "good", text: "Diving to prone causes an explosion that scales with fall height. Grants fall-damage immunity while diving and immunity to area damage from your own weapons. Extremely useful for explosive-type weapons, and just a generally fun perk to flop from high buildings!" },
          { id: "deadshot", name: "Deadshot Daiquiri", tag: "Accuracy", tagType: "good", text: "Aiming down sights moves to enemy critical spots and increases critical damage. Also reduces hipfire spread across all weapons." },
          { id: "death-perception", name: "Death Perception", tag: "Awareness", tagType: "good", text: "Nicknamed 'Wallhack Soda', this perks makes enemies, chests, resources and drops easier to spot by highlighting them through walls! Now you know where it got its nickname..." },
          { id: "elemental-pop", name: "Elemental Pop", tag: "Ammo Mod", tagType: "good", text: "Each bullet has a small chance to apply a random Ammo Mod effect. Do mind that it wont activate on equipment or streaks." },
          { id: "tombstone", name: "Tombstone Soda", tag: "Insurance", tagType: "good", text: "On death, creates a tombstone stash with your backpack inventory for your next game. Your inventory will be marked as a tombstone in the map. If you shall fall in the Dark Aether, your items will be safely placed on one of the various cemeteries on the map, just look for the icon and you'll be good to go!" },
        ],
      },
      {
        title: "How to get perks",
        items: [
          { id: "perk-machine", name: "Perk Machines", tag: "Buy", tagType: "neutral", text: "Spend Essence at a machine in the world. Costs drop as your Containment Level increases. Image above is the Der Wunderfizz Machine, where you can gain a variety or perks, but each perk has their own machines scattered around the map for you to consume!" },
          { id: "perk-can", name: "Perk Cans", tag: "Exfil item", tagType: "neutral", text: "High Value Items you can find, exfil with and store in the Acquisitions Stash, then use to gain a perk." },
          { id: "unstable-perks", name: "Unstable Rift", tag: "Bonus", tagType: "good", text: "Entering the Unstable Rift grants every perk except Tombstone Soda. Aside, from perks, the Unstable Rift can also give you various goodies like weapons, equipment, or even Aether Tools!" },
        ],
      },
    ],
  },

  /* =============== CONTRACTS =============== */
  {
    id: "contracts",
    title: "Contracts",
    blurb: "Jobs that pay out Essence, loot and Reward Rifts.",
    intro: "Contracts are found across the map. Completing one rewards Essence and a Reward Rift. Difficulty and reward size scale with the tier. Activities give random loot but no Reward Rifts.",
    groups: [
      {
        title: "Contracts",
        items: [
          { id: "aether-extractor", name: "Aether Extractor", tag: "Defend / Rush", tagType: "neutral", text: "Rush rockets to overload them while fighting Terminus mercenaries.", facts: ["Tier I: three rockets.", "Tier II: five rockets."] },
          { id: "deliver-cargo", name: "Deliver Cargo", tag: "Vehicle", tagType: "neutral", text: "Steal a Terminus LTV from a garage, drive it to a marker while avoiding a helicopter, then hook the cargo." },
          { id: "defend-ground", name: "Defend Ground Station", tag: "Defend", tagType: "neutral", text: "Collect data from three seismic refractors, activate a server, and hold it for about 2 minutes 40 seconds." },
          { id: "bounty", name: "Eliminate the Bounty", tag: "Hunt", tagType: "neutral", text: "Find and kill a High Value Target.", facts: ["Targets: Mimic, Mangler, Disciple (Tier II and III) or Mega Abomination (Tier III)."] },
          { id: "escort", name: "Escort (ACV)", tag: "Escort", tagType: "neutral", text: "Guide an Aether Containment Vehicle through the Exclusion Zone, then defend it while it launches a container." },
          { id: "outlast", name: "Phase Neutralization (Outlast)", tag: "Survive", tagType: "neutral", text: "Reactivate the Phase Neutralization Device and survive a zombie horde until its analysis destroys the Aetherium crystals." },
          { id: "raid-stash", name: "Raid Weapon Stash", tag: "Heist", tagType: "neutral", text: "Break into Terminus safes while surviving zombies. The opened safe becomes lootable." },
          { id: "spore-control", name: "Spore Control", tag: "Precision", tagType: "neutral", text: "Break six Spore shells with Inhibitors from nearby toolboxes, then shoot each Spore." },
        ],
      },
      {
        title: "Activities",
        note: "Optional encounters that drop random loot but no Reward Rift.",
        items: [
          { id: "aether-nests", name: "Aether Nests", tag: "Activity", tagType: "good", text: "Gas-filled nests full of Nest Crawlers. A Gas Mask is required." },
          { id: "harvester-orbs", name: "Harvester Orbs", tag: "Activity", tagType: "good", text: "Aether orbs that fly around erratically once shot. Once damaged, it will drop loot to throw you off, but once destroyed, it will drop a plethera of loot for you to collect!" },
          { id: "infested-strongholds", name: "Infested Strongholds", tag: "Activity", tagType: "good", text: "Fortified locations infested with zombies." },
          { id: "merc-camps", name: "Mercenary Camps", tag: "Activity", tagType: "good", text: "Small Terminus camps that you can raid." },
          { id: "armored-convoys", name: "Armored Convoys", tag: "Activity", tagType: "good", text: "Terminus convoys protected by Recon Soldiers that you can take down." },
          { id: "merc-strongholds", name: "Mercenary Strongholds", tag: "Activity", tagType: "good", text: "Heavily guarded strongholds, entered with a keycard from a Buy Station." },
        ],
      },
    ],
  },

  /* =============== RIFTS =============== */
  {
    id: "rifts",
    title: "Dark Aether Rift",
    blurb: "Four rifts, three contracts each, and a boss at the end.",
    intro: "Once you finish the Act IV story mission and a short quest, you can open a Dark Aether Rift. Completing Tier III contracts earns Sigils, which activate a rift. Your squad then votes whether to enter. You get 30 minutes to finish three contracts and exfil through the rifts. The Hardcore version uses Elder Sigils and a 15-minute timer.",
    groups: [
      {
        title: "How to open a rift",
        layout: "feature",
        items: [
          {
            id: "rift-open", name: "Opening a Rift", tag: "Guide", tagType: "good",
            text: "Each rift requires collecting four relics, placing them on altars, and activating the rift.",
            facts: [
              "Finish the Act IV story mission and the small quest.",
              "Complete Tier III contracts to earn Sigils.",
              "Collect the four relics for the rift you want and place them on the altars.",
              "Vote with your squad to enter.",
              "The rift should roughly look like the image shown. Regular rifts (opened by using a Rift Sigil) glow yellow, while Unstable Rifts or Elder Rifts (opened by using and Elder Sigil) glow red, the only difference is its difficulty.",
              "The quest of finding four relics must be done on each rift found in the map. Each rift requires a different set of relics to be accepted.",
              "Once the main quest of collecting four relics to open a rift has been completed, you do not need to do this again. You will only need to find a Rift Sigil to open it."            
            ],
          },
        ],
      },
      {
        title: "The Rifts",
        layout: "atlas-spots",
        image: "https://static.wikia.nocookie.net/callofduty/images/7/78/OperationDeadbolt_TacMap_Season3_MWIII.jpg/revision/latest/scale-to-width-down/1000?cb=20240518103947",
        items: [
          {
            id: "rift-1", pin: "1", spot: { x: 30, y: 22, r: 11 }, name: "Rift #1 — Opal Palace", tag: "Season One Reloaded", tagType: "neutral",
            text: "Boss: a Mega Abomination, which drops a Sigil.",
            facts: ["Relics: Locked Diary, Pill Bottle, Surveillance Camera, Dog Collar.", "Contracts: Aether Extractor, Outlast, Escort.", "Rewards: Aether Blade Case, Dog Bone, Golden Armor Plates. Hardcore drops schematics."],
          },
          {
            id: "rift-2", pin: "2", spot: { x: 70, y: 30, r: 11 }, name: "Rift #2 — Nahr Bathhouse", tag: "Season Two Reloaded", tagType: "neutral",
            text: "Boss: a special Mimic that uses EMP waves, and drops a Sigil.",
            facts: ["Relics: Drums, Tattered MMA Gloves, Perforated Target, Pristine Mirror.", "Contracts: Aether Extractor, Outlast, Bounty.", "Rewards: Mag of Holding, Blood Burner Key, V-R11 Case."],
          },
          {
            id: "rift-3", pin: "3", spot: { x: 45, y: 52, r: 11 }, name: "Rift #3 — Old Town", tag: "Season Three Reloaded", tagType: "neutral",
            text: "Boss: an Elite Disciple, which drops a Sigil.",
            facts: ["Relics: Giraffe Toy, Laptop with Stickers, Imaginary Friend Drawing, Science Journal.", "Contracts: Bounty, Outlast, Escort.", "Rewards: Dead Wire Detonators, Golden Mask Filter, Sergeant's Beret."],
          },
          {
            id: "rift-unstable", pin: "U", spot: { x: 78, y: 58, r: 11 }, name: "Unstable Rift — Al Bagra Fortress", tag: "Season Four Reloaded", tagType: "bad",
            text: "Opened by destroying three obelisks with specific ammo mods. Only the first team to vote in can enter. You survive five phases of zombie attacks, each ending with a boss.",
            facts: ["You receive all perks except Tombstone Soda, Tier III Pack-a-Punch on weapons and Legendary rarity.", "Each phase grants four random rewards.", "Beating the fifth boss awards the “Mark of The Survivor” camouflage and resets cooldowns."],
          },
        ],
      },
    ],
  },

  /* =============== BOSSES =============== */
  {
    id: "bosses",
    title: "Bosses",
    blurb: "Warlords, rift guardians and the monsters behind them.",
    intro: "Bosses are tougher than any enemy on the Enemies tab. Most are met in story missions and drop a Reward Rift with a rare relic, while others guard the Dark Aether Rifts.",
    groups: [
      {
        title: "Story Mission Bosses",
        items: [
          { id: "gormgant", name: "Gorm'gant", tag: "Act IV — Bad Signal", tagType: "bad", text: "Defeated in the Bad Signal mission.", facts: ["Reward Rift grants the Locked Diary relic."] },
          { id: "krawvir", name: "Krawvir", tag: "Act IV — Countermeasures", tagType: "bad", text: "Defeated in the Countermeasures mission.", facts: ["Reward Rift grants the Drums relic."] },
          { id: "taoxia", name: "Taoxia", tag: "Act IV — Union", tagType: "bad", text: "Defeated in the Union mission.", facts: ["Reward Rift grants the Giraffe Toy relic."] },
          { id: "orcus-boss", name: "Orcus", tag: "Act III — Confrontation", tagType: "bad", text: "Killed with the Aetherium Neutralizer in the Confrontation mission." },
          { id: "stormcaller", name: "Stormcaller", tag: "Act III — Closing Time", tagType: "bad", text: "The boss waiting inside the Aether Storm during Closing Time." },
        ],
      },
      {
        title: "Terminus Warlords",
        note: "Warlords are Terminus Outcomes' field commanders. They give orders and direct the mercenaries in Zaravan, and are usually found in fortresses packed with Elite mercenaries and traps. When a fortress is attacked, more Elites reinforce it. There are four active Warlords.",
        items: [
          {
            id: "baranov", name: "“Legacy” Baranov", tag: "Warlord · Deputy leader", tagType: "bad",
            text: "Baranov is the second-in-command of Terminus Outcomes and oversees a fortress of his own in Zaravan, Urzikstan.",
            facts: ["Reward: a custom Haymaker blueprint called “Tactical Negotiator”, obtainable as a contraband weapon from a Reward Rift after he is defeated."],
          },
          {
            id: "dokkaebi", name: "Ari “Dokkaebi” Jo", tag: "Warlord · Zaravan City", tagType: "bad",
            text: "Dokkaebi runs a fortress in downtown Zaravan City and harasses Operation Deadbolt's convoys passing through the area. She was added with the Season One Reloaded update on 17 January 2024.",
            facts: [
              "Her Warlord uniform is grey and black, with a Terminus Outcomes badge on her right arm.",
              "Background: she once shot down Luke Dobbs' recon drone and hijacked Deadbolt's comms to mock him, before a strike team assaulted her fortress.",
              "Reward: a unique KVD Enforcer blueprint called “Mediator”, which can be extracted as a contraband weapon (Zombies only).",
            ],
          },
          {
            id: "keres", name: "Sona “Keres” Mirzoyan", tag: "Warlord · Orlov Military Base", tagType: "bad",
            text: "A doctor with a deep interest in chemical research and little regard for morality. Her base is guarded by Elite mercenaries and filled with poison gas.",
            facts: [
              "Bring a Gas Mask: the poison gas periodically harms you and your squadmates.",
              "Attacking the base brings Terminus reinforcements by helicopter until she is defeated or your squad retreats.",
              "Reward: the MCW “Callous” blueprint, which can be extracted as a contraband weapon.",
            ],
          },
          {
            id: "rainmaker", name: "Rainmaker", tag: "Warlord · Shahin Manor", tagType: "bad",
            text: "A Cuban Warlord with a liking for explosives and traps, who holds Shahin Manor.",
            facts: ["Expect a heavily trapped fortress defended by Elite mercenaries."],
          },
        ],
      },
      {
        title: "Dark Aether Rift Bosses",
        items: [
          { id: "boss-mega-abom", name: "Mega Abomination", tag: "Opal Palace", tagType: "bad", text: "Summoned at the end of Rift #1. Drops a Sigil." },
          { id: "boss-mimic", name: "Special Mimic", tag: "Nahr Bathhouse", tagType: "bad", text: "Summoned at the end of Rift #2. Uses EMP waves. Drops a Sigil." },
          { id: "boss-disciple", name: "Elite Disciple", tag: "Old Town", tagType: "bad", text: "Summoned at the end of Rift #3. Drops a Sigil." },
        ],
      },
    ],
  },
];
