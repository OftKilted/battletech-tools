export enum ESpecialAbilityType {
    Standard = 1,
    Optional = 1,
}
export function getSpecialAbilityTypeName( type: ESpecialAbilityType ): string {
    switch( type ) {
        case ESpecialAbilityType.Standard:
            return "Standard Special Ability";
        case ESpecialAbilityType.Optional:
            return "Optional Special Ability";
    }
}
export const CONST_AS_SPECIAL_ABILITIES: IASSpecialAbility[] = [
    /* ***************************
      Standard Special Abilities
    ***************************** */
    {
        tag: "AFC",
        name: "Advanced Fire Control",
        summary: ["IndustrialMechs and support vehicles equipped with Advanced Fire Control do not suffer Target Number modifiers for their unit type."],
        asce_page: 76,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "AMP",
        name: "Amphibious",
        summary: ["This ability makes a non-naval unit capable of water movement. Amphibious units pay a total of 4” per inch of water traversed and move as a surface naval unit in water, except that they freely move in and out of water areas."],
        asce_page: 76,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "AECM",
        name: "Angel ECM",
        summary: ["An Angel ECM suite has the effects of standard ECM (see p. 77), but is treated as two standard ECM suites if using the ECM/ECCM optional rule (see p. 161)."],
        asce_page: 76,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "AM",
        name: "Anti-'Mech",
        summary: ["Infantry units with the Anti-’Mech (AM) special ability can make a special attack against any ground units, landed VTOLs and WiGEs, or grounded aerospace units with which they are in base-to-base contact. Anti-’Mech Infantry attacks are treated as a physical attack (see p. 45)."],
        asce_page: 76,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "AMS",
        name: "Anti-Missile System",
        summary: [" A unit with an AMS reduces the damage by 1 point (to a minimum of 1) from any of the following attacks: standard weapon attack from a unit with the IF, SRM, or LRM special abilities, Indirect Fire attack using the IF special ability, or special weapon attack made using the SRM or LRM special abilities. AMS only works on attacks coming in the front arc, unless mounted in a turret (TUR)."],
        asce_page: 76,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "ARM",
        name: "Armored Components",
        summary: ["A unit with this ability ignores the first critical hit chance rolled against it during a single Alpha Strike scenario. The first time circumstances arise that would normally generate an opportunity for a critical hit (such as structure damage), the unit’s controlling player must strike off this ability as “spent” for the remainder of the scenario, and the attacker loses his first opportunity to roll for a critical hit."],
        asce_page: 76,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "ARS",
        name: "Armored Motive System",
        summary: ["A unit with this special ability applies a -1 modifier on the Determining Motive Systems Damage roll (see Motive Systems Damage Table, p. 50)."],
        asce_page: 76,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "BAR",
        name: "Barrier Armor Rating",
        summary: ["The BAR special indicates a unit that is protected by substandard armor (or commercial-grade armor). Successful attacks against such units always trigger a roll for critical hits, regardless of whether or not the structure is damaged."],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "BFC",
        name: "Basic Fire Control",
        summary: ["A support vehicle or IndustrialMech with this ability has an inferior targeting and tracking system, which adds a Target Number modifier of +1 for its attack. (This modifier is listed in the Attack Modifiers Table, see p. 44.)"],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "BHJ",
        name: "BattleMech Harjel",
        summary: ["A ’Mech protected by HarJel ignores the additional “hull breach” critical hit checks required for being attacked while underwater or in a vacuum. All other causes for critical hit rolls still apply as normal."],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "SHLD",
        name: "BattleMech Shield",
        summary: ["Shield-bearing ’Mechs gain some protection against weapon and physical attacks at the expense of their own attack accuracy. To reflect this, shield-equipped units reduce the damage from most weapons and physical attacks by 1 point (to a minimum of 0). Indirect attacks, heat-causing attacks, and area-effect attacks (such as artillery and bombs) are not dampened by the shield and thus deliver full damage. All weapon attacks made by a ’Mech with this ability incur an additional +1 Target Number modifier."],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "BOMB#",
        name: "Bomb",
        summary: [
            "Conventional and aerospace fighters, fixed-wing support vehicles, and some battle armor can carry bombs. The number of bombs these units can carry are equal to the number in the ability’s notation (so a unit with BOMB4 carries up to 4 bombs). For most units, these bombs may be of any type, though battle armor units with this ability may only use cluster bombs (see p. 183). (As a special exception, Arrow IV missiles of all types may be carried as bombs, but a unit that uses Arrow IV bombs must count the first Arrow IV missile carried this way as 2 bombs. All remaining bombs are then counted normally.) Each bomb a unit carries reduces its Thrust value by 1. (Battle armor units with bombs suffer no effects on their Move ratings.)",
            "A bomb-carrying unit’s card should list how many bombs the unit is carrying in the scenario, which must be equal to or less than the number this ability enables it to carry."],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "CAR#",
        name: "Cargo",
        summary: [
            "An infantry unit with the Cargo special ability can be carried by a unit with infantry transport space (noted by the IT# special ability). For these units, the number in the ability notation indicates the amount of cargo space it needs to be transported. For example, a squad of Elemental battle armor has a CAR5 special ability, and so would need a unit with IT5 (or higher) to transport it."
        ],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "CASE",
        name: "Cellular Ammunition Storage Equipment",
        summary: [
            "Units with this ability can minimize the catastrophic effects of an ammunition explosion and thus can survive Ammo Hit critical hits (see Ammo Hit, p. 50), but will suffer additional damage."
        ],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "CASEII",
        name: "Cellular Ammunition Storage Equipment II",
        summary: [
            "Units with this ability have superior protection against ammunition explosions and can ignore Ammo Hit critical hits (see Ammo Hit, p. 50)."
        ],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "ECM",
        name: "Electronic Countermeasures",
        summary: [
            "In Alpha Strike, an ECM suite’s area of effect covers a 12-inch radius from the unit that has this special ability. Electronics (including active probes and C³ computers) used by units friendly to the ECM-equipped unit will not be affected by this item, nor will an ECM suite affect other scanning and targeting devices (such as basic or advanced fire control, or TAG).",
            "Against hostile electronics, ECM has the following effects:",
            "ECM vs. Active Probes, Drones, Narc, and iNarc Systems:",
            "Active probes, drones, and the Narc/iNarc systems are all covered in the Optional Rules chapter (see p. 136), and will detail the effects of ECM against those systems.",
            "ECM vs. C³ Networks: ECM disrupts most enemy C³ networks, preventing their function depending upon the type of C³ network. If a C³ master unit is isolated from the network because it ventures inside the ECM bubble, the C³ master’s entire network is effectively shut off and loses C³ abilities. If the LOS between the C³ master unit and one or more of the units in its network passes through a hostile ECM radius, only those networked units “cut off ” from the C³ master will lose the benefits of C³. (See C³ Networks, p. 80).",
            "If a C³i-equipped unit is caught within the ECM bubble, or draws its LOS to all partner C³i units through an ECM bubble, only that unit is isolated from the network and loses all C³i abilities.",
        ],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "EE",
        name: "Elementary Engine",
        summary: [
            "Units with EE or FC specials use non-fusion engines for power and must have the SEAL special to operate underwater. Units with elementary engines (EE) may not operate in a vacuum, but units that have both fuel cell engines (FC) and the SEAL special may operate normally in a vacuum.",
            "Heat-tracking units that use either of these engine types will suffer no heat buildup from an Engine Hit critical effect. Instead, for every turn after receiving an Engine Hit critical, if the unit makes a weapon attack, its controlling player must roll 2D6 in the End Phase of that game turn. On a roll of 12, the unit explodes and is destroyed.",
        ],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "FC",
        name: "Fuel Cell Engine",
        summary: [
            "Units with EE or FC specials use non-fusion engines for power and must have the SEAL special to operate underwater. Units with elementary engines (EE) may not operate in a vacuum, but units that have both fuel cell engines (FC) and the SEAL special may operate normally in a vacuum.",
            "Heat-tracking units that use either of these engine types will suffer no heat buildup from an Engine Hit critical effect. Instead, for every turn after receiving an Engine Hit critical, if the unit makes a weapon attack, its controlling player must roll 2D6 in the End Phase of that game turn. On a roll of 12, the unit explodes and is destroyed.",
        ],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "ENE",
        name: "Energy",
        summary: [
            "A unit with this ability has little to no ammo to explode, and ignores Ammo Hit critical hits (see Ammo Hit, p. 50).",
        ],
        asce_page: 77,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "XMEC",
        name: "Extended Mechanized",
        summary: [
            "Battle armor with this special ability may function as mechanized battle armor, and can ride on any type of ground unit (see Transporting Infantry, p. 38).",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "FR",
        name: "Fire Resistant",
        summary: [
            "Units with this ability are not affected by infernos or other weapons that generate heat (HT#/#/#). If the heat-causing weapon deals damage in addition to causing heat, that damage still applies.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "FLK#/#/#/#",
        name: "Flack",
        summary: [
            "If a unit with this ability misses its Attack Roll by 2 points or less when attacking an airborne aerospace unit, VTOL, or WiGE target, the unit will deal damage to its target equal to its FLK rating at the appropriate range bracket.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "HT#/#/#",
        name: "Heat",
        summary: [
            "Units with this ability apply heat to the target’s Heat scale during the End Phase of the turn in which they deliver a successful weapon attack. If the target is a unit type that does not use a Heat Scale, the heat this ability would normally produce is added to the normal attack damage instead (see Applying Damage, p. 49).",
            "A unit with a Heat value at a range it does not normally deal damage at may make a special weapon attack in place of its standard weapon attack. This only deals the effects of the Heat special ability.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "IF#",
        name: "Indirect Fire",
        summary: [
            "The Indirect Fire special ability allows a unit to attack a target without having a valid LOS to it via arcing missiles over the intervening obstacles, similar to how mortars and artillery work. This attack requires a friendly unit with a valid LOS to act as a spotter. The numerical rating for this ability indicates the amount of damage a successful indirect attack will deliver. Because they attack when other weapons cannot, damage from an indirect attack applies in place of the unit’s normal weapon attack (see Indirect Fire, p. 41).",
            "Units with the IF# and LRM #/#/# specials may make use of all alternate munitions (see p. 143) and Special Pilot Abilities (see pp. 92-101) available to the LRM#/#/# special when making indirect fire attacks, but are limited to using the LRM special ability’s long range value if it is lower than the IF special ability value.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "I-TSM",
        name: "Industrial Triple Strength Myomers",
        summary: [
            "’Mechs with Industrial TSM have enhanced musculature that delivers 1 point of additional damage on a successful standard- or melee-type physical attack, but these units also suffer a +2 Target Number modifier for all physical attacks due to the loss of fine motor control. (Industrial TSM also provides a movement boost, but this is already calculated in the unit’s Alpha Strike stats.)",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "IT#",
        name: "Infantry Transport",
        summary: [
            "The numerical rating associated with this special ability indicates the amount of infantry transport space available. The unit may carry any number of infantry or battle armor units as long as these units’ total cargo requirement does not exceed the transporting unit’s infantry transport rating.",
            "Infantry Transport can be reduced and the same amount of Cargo Transport, Tons (CT#, see p. 84) added to a unit prior to the start of a game.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "JMPW#",
        name: "Weak Jump Jets",
        summary: [
            "This unit has particularly underpowered, weak jump jets. Weak Jump Jets subtract the # from their TMM when using Jumping movement.",
            "Jeff’s Tools integrates this rule into your unit card in the form of TMM: # / #J",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "JMPS#",
        name: "Strong Jump Jets",
        summary: [
            "This unit has particularly overpowered, strong jump jets compared to their non-jump movement. Strong Jump Jets add the # to their TMM when using Jumping movement.",
            "Jeff’s Tools integrates this rule into your unit card in the form of TMM: # / #J",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "LECM",
        name: "Light ECM",
        summary: [
            "Light ECM functions identically to ECM (see p. 77), but with a reduced radius. Light ECM only creates an ECM bubble with a 2” radius.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "MEC",
        name: "Mechanized",
        summary: [
            "Battle armor with this special ability may function as mechanized battle armor, and can ride on any ground unit type that has the Omni special ability (see Transporting Infantry, p. 38).",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "MEL",
        name: "Melee",
        summary: [
            "This special ability indicates that the ’Mech is equipped with a physical attack weapon, and adds 1 additional point of physical attack damage on a successful Melee-type physical attack (see Resolving Physical Attacks, p. 45).",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "MAS",
        name: "Mimetic Armor System",
        summary: [
            "Mimetic armors are similar to Stealth systems (see p. 79) in that they make a target more difficult to hit with weapon attacks (but not physical attacks). Unlike Stealth, to be effective mimetic armor requires its bearer to remain stationary. If a unit with the MAS special ability is immobile or remained at a standstill during the this turn’s Movement Phase, all non-physical attacks against that unit receive a +3 Target Number modifier for the remainder of the turn. LMAS functions the same way, but provides only a +2 modifier.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "LMAS",
        name: "Light Mimetic Armor System",
        summary: [
            "Mimetic armors are similar to Stealth systems (see p. 79) in that they make a target more difficult to hit with weapon attacks (but not physical attacks). Unlike Stealth, to be effective mimetic armor requires its bearer to remain stationary. If a unit with the MAS special ability is immobile or remained at a standstill during the this turn’s Movement Phase, all non-physical attacks against that unit receive a +3 Target Number modifier for the remainder of the turn. LMAS functions the same way, but provides only a +2 modifier.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "ORO",
        name: "Off-Road",
        summary: [
            "Lacking the rugged suspension of combat vehicles, ground- based support vehicles that use the wheeled (w) movement type must pay 2 inches of additional Move for every non-paved inch they move unless they possess the Off-Road special. This ability is not required for any other unit types, including support vehicles, that use movement modes other than wheeled.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "OMNI",
        name: "Omni",
        summary: [
            "Ground-based Omni units (’Mechs or vehicles) may transport a single battle armor unit using the mechanized battle armor rules (see Transporting Infantry, p. 38).",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "OVL",
        name: "Overheat Long",
        summary: [
            "A unit with this special ability may overheat up to its OV value and apply that value to its Long range damage value as well as the unit’s Short and Medium range damage values. (A unit without this special ability may only apply the damage benefits of its Overheat capabilities to damage delivered in the Short and Medium range brackets.)",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "REAR#/#/#/#",
        name: "Rear Firing Weapons",
        summary: [
            "Although rear-facing weapons are common enough on larger and less flexible units like mobile structures and DropShips, several smaller units also feature secondary weapons mounted in their rear fields of fire. ’Mechs, vehicles, and fighters that possess such weaponry feature the REAR (#/#/#/#) special unit ability to reflect this. As with most other special weapon abilities, the numbers associated with this ability indicate the damage that the unit can inflict at each range bracket.",
            "Ground Units: Any ground unit with rear-facing weapons may decide to use them against any targets that begin the Combat Phase outside of the unit’s normal firing arc. This rear attack is resolved using all of the same rules as a normal weapon attack, but applies an additional +1 Target Number modifier.",
            "Airborne Units: The same rules apply for fighter units as for ground units. However, a fighter may only use its rear-facing weapons against units that are tailing them (see p. 185) and are in range of its rear weapons. Thus, if a fighter has rear-firing weapons that only deliver damage to the Short range bracket, it may only use these weapons against tailing enemies at Short range.",
            "Combining Forward (or Turret) and Rearward Attacks: A unit attempting a REAR attack may still deliver normal forward- firing attacks in the same turn, but its ability to do so is reduced. To reflect this, if a unit makes an attack using the REAR special ability, for every point of REAR damage it can inflict, its forward-arc (or turret-based) damage for that turn must be reduced by the same amount. This damage reduction is applied before the use of any additional damage made possible by overheating.",
            "Additional Restrictions: Overheat damage cannot be applied to REAR attacks, nor can a REAR attack deliberately reduce its damage values to improve forward-firing (or turret-based) weapon attacks. Finally, REAR attacks cannot make use of other special attack abilities, such as heat, indirect fire, flak, or artillery.",
        ],
        asce_page: 78,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "STL",
        name: "Stealth",
        summary: [
            "Though various stealth systems exist in the BattleTech universe, the majority are similar enough in function that Alpha Strike does not distinguish between them. These systems make a target more difficult to hit with weapon attacks (but not physical attacks), based on the range and unit type being targeted.",
            "For attacks made against non-infantry targets with the STL special, apply a +1 Target Number modifier to attacks at Medium range, and an additional +2 modifier at Long range (or greater).",
            "For attacks made against battle armor targets with the STL special, apply a +1 Target Number modifier at Short and Medium range, and an additional +2 modifier at Long range (or greater).",
            "A non-infantry unit with STL is (intentionally) blocking its own emissions with its ECM. Any non-infantry Stealth unit is affected as if in an enemy ECM field (see ECM, p. 77), and cannot affect other units with its own ECM. However, if using the ECM/ECCM optional rules (see p. 161), a unit with AECM may still generate a single field (ECCM only) while the Stealth is on.",
            "Toggling Stealth: To avoid being affected by its own ECM, a non-infantry unit with STL may toggle off its Stealth special ability in the End Phase. Place a mark above or through the Stealth special ability to note that it is off. It may be toggled back on in any subsequent End Phase.",
        ],
        asce_page: 79,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "SUBS#",
        name: "Strong Submersible Movement",
        summary: [
            "This unit has particularly overpowered, strong submersible movement compared to their non-submersible movement. Strong submersible movement adds the # to their TMM when using submersible movement.",
        ],
        asce_page: 79,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "SUBW#",
        name: "Weak Submersible Movement",
        summary: [
            "This unit has particularly underpowered, weak submersible movement compared to their non-submersible movement. Weak submersible movement subtracts the # from their TMM when using submersible movement.",
        ],
        asce_page: 79,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "TOR#",
        name: "Torpedo",
        summary: [
            "Torpedo launchers may only be launched by units in water (or on the surface of a water feature), against targets that are also on or in water (this includes units like hovercraft and airborne WiGEs operating just above the surface of water). Torpedo special ability damage is given in range brackets like a standard weapon attack, and may be fired separately or combined with the standard weapon damage that a submerged unit may deliver in combat.",
            "Torpedo attacks ignore underwater range and damage modifiers that affect other weapons. For example, if a submerged unit, with damage values of 2/2/2 and a TOR 3/3 special, fires at a target that is in its underwater Short range bracket, it will deliver 4 points of total damage on a successful attack. (The base damage of 2 for its normal weapons is halved to 1, but the full TOR damage of 3 applies without reduction.)",
        ],
        asce_page: 79,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "TSM",
        name: "Triple Strength Myomer",
        summary: [
            "’Mechs with the Triple-Strength Myomer special ability can move faster and deliver additional damage in standard- and melee- type physical attacks, but only when running hot. Once a unit with TSM overheats, the following rules apply only to its movement and physical attack capabilities. All other rules for overheating and gameplay apply normally.",
            "Movement: When a ’Mech with TSM has a heat scale level of 1 or higher, it gains 2 inches of additional ground Move. If the heat scale is 1, the unit also ignores the loss of 2 inches from overheating, but the overheating effects on Move for heat levels of 2+ remain in effect. (Unlike units with Industrial TSM, units with this ability do not include its movement effects in their normal stats, because the ability is activated only by overheating.)",
            "Physical Attacks: When an overheating unit delivers a successful standard- or melee-type physical attack, it adds 1 point to the damage delivered by the attack. Unlike Industrial TSM, this heat- activated version imposes no additional Target Number modifiers.",
        ],
        asce_page: 79,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "TUR#",
        name: "Turret",
        summary: [
            "A unit with a turret has some (or all) of its weapons mounted with a 360-degree field of fire. Damage for all turret-mounted weapons are included in the base damage values for the unit, and then separately for the TUR special ability. Thus, when a unit with a turret wishes to make an attack outside of its normal forward field of fire, it must use the damage values for its TUR special ability in place of the unit’s standard damage values.",
            "Attacks made using the turret cannot be combined with any special attack ability not included in the unit’s TUR special ability.",
            "Some particularly large units—such as mobile structures and very large or super large vehicles—may feature multiple turrets. A unit with multiple turrets may use each turret individually to deliver its attacks (see Exceptionally Large Units, p. 64)."
        ],
        asce_page: 79,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "UMU",
        name: "Underwater Maneuvering Units",
        summary: [
            "A unit with the UMU special ability uses the submersible movement rules when it is submerged in water instead of the normal underwater movement rules (see Submersible Movement, p 36)"
        ],
        asce_page: 80,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "WAT",
        name: "Watchdog",
        summary: [
            "A unit with this special ability possesses the Watchdog Composite Electronic Warfare System For purposes of Alpha Strike, it is treated as if it has both the Light Active Probe (LPRB; see p 82) and ECM special abilities."
        ],
        asce_page: 80,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "C3BSS",
        name: "C³ Boosted System",
        summary: [
            "The C³ boosted system works identically to a standard C³ system, and links one master unit (noted by C3BSM) with up to three slaves (noted by C3BSS). These boosted C³ units are unaffected by most ECM effects. Only a hostile Angel ECM will affect a boosted C³ network in the same way as other ECMs affect standard C³ systems."
        ],
        asce_page: 80,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "C3BSM#",
        name: "C³ Boosted System",
        summary: [
            "The C³ boosted system works identically to a standard C³ system, and links one master unit (noted by C3BSM) with up to three slaves (noted by C3BSS). These boosted C³ units are unaffected by most ECM effects. Only a hostile Angel ECM will affect a boosted C³ network in the same way as other ECMs affect standard C³ systems."
        ],
        asce_page: 80,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "C3EM#",
        name: "C³ Emergency Master Computer",
        summary: [
            "A C³EM system is an emergency backup for a standard C³ Master system, and activates only during the End Phase of any turn in which the network’s normal C³ master cannot be contacted (either due to destruction or ECM interference). The emergency master runs for 2 consecutive turns (not counting the turn in which it activates), shutting down in the End Phase of the second turn. "
        ],
        asce_page: 82,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "C3M#",
        name: "C³ Master Computer",
        summary: [
            "The C³ master computer enables up to four units to share targeting information and receive the benefits of the C³ network. One unit in a four-member C³ network must have the C³M system to act as the “master”. The other three units in the network must have C³ equipment of their own to be part of that “master’s” network. These member units can use either their own master computers, or C³ slaves to accomplish this."
        ],
        asce_page: 82,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "C3RS",
        name: "C³ Remote Sensor",
        summary: [
            "A unit with this ability can deploy up to 4 remote sensors per game that will act as a stationary C³ Slave Computer (C³S) for one turn. Deploying the remote sensor requires a successful “attack” against a point on the map within the deploying unit’s Short range bracket (this attack receives a –4 Target Number modifier, cannot be made against another unit, and delivers no damage; if the attack misses, the remote sensor will fail to activate)."
        ],
        asce_page: 82,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "C3S",
        name: "C³ Slave Computer",
        summary: [
            "A unit equipped with a C³ slave can link into a C³ network as described under the C³ Master Computer rules (see above). To be part of a network, C³ slaves must connect to a “master” unit (either a C³M or C³BSM)."
        ],
        asce_page: 82,
        type: ESpecialAbilityType.Standard,
    },
    {
        tag: "C3I",
        name: "C³ Improved Computer",
        summary: [
            "The C³i computer enables up to six units to be part of a C³ network, rather than 4, and requires no C³ master computer to function. Because they have no master, C³i networks cannot be shut down by the loss or ECM interference over one network member. This also means the C³i network cannot branch off to other networks, and works more like a closed system unto itself."
        ],
        asce_page: 82,
        type: ESpecialAbilityType.Standard,
    },
    /* ***************************
      Optional Special Abilities
    ***************************** */
    {
        tag: "PRB",
        name: "Active Probe",
        summary: [
            "Units equipped with active probes have an extended view of the battlefield, enabling them to provide information about targets without moving into the target’s Short range bracket. The active probe’s effective range is 18”, automatically confers the Recon (RCN) special ability upon its user, and enables it to detect hidden units (see Hidden Units, p. 168), identify incoming sensor blips, or even discover the capabilities of unknown hostile units that fall within this range (see Concealing Unit Data, p. 157).",
            "Hostile ECM systems, including Angel ECM (AECM) and standard ECM (ECM) will overwhelm the active probe’s abilities."
        ],
        asce_page: 82,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "ATAC#",
        name: "Advanced Tactical Analysis Computer",
        summary: [
            "A unit with this special is able to feed improved tactical input to robotic units. This ability provides a –1 Target Number modifier to a number of SDCS or RBT units equal to this ability’s numerical value (so a unit with an ATAC3 special may provide this modifier to up to 3 robotic units)."
        ],
        asce_page: 82,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "AT#",
        name: "Aerospace Transport",
        summary: [
            "A unit with this special ability can transport, launch and recover the indicated number of aerospace or conventional fighters (see Aerospace Unit Transports, p. 142)."
        ],
        asce_page: 82,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "ART%-#",
        name: "Artillery",
        summary: [
            "This special ability lets a unit make an artillery attack, with an abbreviation for each type of artillery replacing the “X” in the ability’s acronym."
        ],
        asce_page: 82,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "ABA",
        name: "Anti-Penatrative Abalation Armor",
        summary: [
            "A unit protected by anti-penetrative ablation armor—often simply called ablative armor—is resistant to specialty munitions designed to pierce most other armor types. A unit with this special ignores attacks by taser weapons (MTAS# and BTAS# specials), and negates the bonus critical hit check made for attacks that use armor-penetrating ammunition and tandem-charge missile munitions (see p. 143)."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "AC#/#/#/#",
        name: "Autocannon",
        summary: [
            "This unit mounts a significant number of autocannons and may fire them together as an alternative weapon attack instead of a standard weapon attack. This ability enables the unit to use alternate autocannon ammo for modified effects (see Alternate Munitions, p. 143)."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "BRA",
        name: "Ballistic Reinforced Armor",
        summary: [
            "A specialty armor developed to counter projectile weapons and missiles, ballistic-reinforced armor reduces all damage delivered by attackers that make use of the AC, IATM, IF, LRM, or SRM specials, by half (rounding up). This reduction is applied whether the attack is delivered using the unit’s normal damage values, or by just the listed special abilities.",
            "Thus, if a unit with normal attack values of 5/4/2 and an AC2/2/0 special delivers a successful normal attack against a unit with the BRA special at Short range, the attack will be reduced by 3 points (half the damage value at Short range, rounded up), dropping the normal total of 5 points to 2. If the same unit makes a special AC weapon attack against a unit with the BRA special at Medium range, the attack will be reduced by 1 point (half the AC special ability’s Medium range), dropping the AC total of 2 points to 1.",
            "Though similar to reactive armor in many ways, ballistic- reinforced armor will not reduce damage from attacks made using the ART, BOMB, MSL, or FLK specials."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "BHJ",
        name: "BattleMech HarJel",
        summary: [
            "A ’Mech protected by HarJel ignores the additional critical hit chance incurred by suffering damage while operating underwater or in a vacuum. Critical hit chances from normal structure damage (and other sources) still apply.",
            "Improved versions of the hull-sealing technology appeared in the mid-thirty-second century. In addition to providing the same hull breach resistance of standard HarJel, units protected by HarJel II or HarJel III will recover armor points lost to damage as long as they begin the End Phase with at least 1 point of armor remaining. The amount of armor recovered at this point is 1 point for units that have the BHJ2 special, or 2 points for units with the BHJ3 special.",
            "The maximum armor points a unit may recover with BattleMech HarJel II or III may never exceed the unit’s original armor value. BHJ2 and BHJ3 special abilities will not recover structure points or critical damage, and these abilities will cease to function entirely if the unit is reduced to 0 armor points before its End Phase."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "BHJ2",
        name: "BattleMech HarJel II",
        summary: [
            "A ’Mech protected by HarJel ignores the additional critical hit chance incurred by suffering damage while operating underwater or in a vacuum. Critical hit chances from normal structure damage (and other sources) still apply.",
            "Improved versions of the hull-sealing technology appeared in the mid-thirty-second century. In addition to providing the same hull breach resistance of standard HarJel, units protected by HarJel II or HarJel III will recover armor points lost to damage as long as they begin the End Phase with at least 1 point of armor remaining. The amount of armor recovered at this point is 1 point for units that have the BHJ2 special, or 2 points for units with the BHJ3 special.",
            "The maximum armor points a unit may recover with BattleMech HarJel II or III may never exceed the unit’s original armor value. BHJ2 and BHJ3 special abilities will not recover structure points or critical damage, and these abilities will cease to function entirely if the unit is reduced to 0 armor points before its End Phase."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "BHJ3",
        name: "BattleMech HarJel III",
        summary: [
            "A ’Mech protected by HarJel ignores the additional critical hit chance incurred by suffering damage while operating underwater or in a vacuum. Critical hit chances from normal structure damage (and other sources) still apply.",
            "Improved versions of the hull-sealing technology appeared in the mid-thirty-second century. In addition to providing the same hull breach resistance of standard HarJel, units protected by HarJel II or HarJel III will recover armor points lost to damage as long as they begin the End Phase with at least 1 point of armor remaining. The amount of armor recovered at this point is 1 point for units that have the BHJ2 special, or 2 points for units with the BHJ3 special.",
            "The maximum armor points a unit may recover with BattleMech HarJel II or III may never exceed the unit’s original armor value. BHJ2 and BHJ3 special abilities will not recover structure points or critical damage, and these abilities will cease to function entirely if the unit is reduced to 0 armor points before its End Phase."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "BIM (#A)",
        name: "Bimodal Land-Air BattleMech",
        summary: [
            "A BattleMech with this special has been built to convert between BattleMech and aerospace fighter modes of operation. The rules for Land-Air BattleMechs (LAMs), may be found on page 177."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "BH",
        name: "Bloodhound Active Probe",
        summary: [
            "An enhanced version of the standard active probe (PRB), the Bloodhound probe offers all the same features, but with an effective range of 26”. Bloodhound probes automatically confer the Recon (RCN) special ability upon their users, and enable them to detect hidden units (see Hidden Units, p. 168), identify incoming sensor blips, or discover the capabilities of unknown hostile units that fall within this range (see Concealing Unit Data, p. 157).",
            "In addition to these standard features, the Bloodhound is also unaffected by standard and light ECM specials (ECM and LECM). Presently, only the Angel ECM (AECM) can overwhelm the sensing abilities of the Bloodhound."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "BT",
        name: "Booby Trap",
        summary: [
            "The booby trap is a last-ditch weapon. A unit with this ability has devoted considerable mass toward a devastating self-destruct mechanism designed inflict damage on nearby units as well. The booby trap may be activated during the Combat Phase, in place of a weapon or physical attack. Once activated, the system automatically destroys the unit and delivers an area-effect attack to all units within an area covered by a 2” AoE template. Activated on the ground, all units in the area of effect suffer damage equal to the booby-trapped unit’s weight/size class times half its Move. For example, a booby-trapped assault ’Mech with a Move of 6” would deliver 12 points of damage (Size 4 x [Move 6” ÷ 2] = 12) to all units in its area of effect.",
            "Airborne Booby Traps: Airborne units that activate a booby trap inflict damage in a 2” AoE template centered on a point, as chosen by the player. All units on the ground within that area of effect suffer damage equal to the booby-trapped unit’s weight/size class. Thus, if a heavy aerospace fighter were flying over the ground map and chose to self destruct, its damage to all units within the area covered by the 2” AoE template centered on a point on its flight path would be 3 points."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "BRID",
        name: "Bridgelayer",
        summary: [
            "A unit with this special ability may deploy a temporary bridge capable of spanning gaps up to 2 inches in width. Multiple bridges may be linked together to extend the reach of an existing bridge. Deploying or extending a bridge takes one turn, during which the bridgelayer unit cannot move. After the bridge is deployed, the bridgelaying unit may move normally. A bridge does not need to be deployed such that each side of the bridge rests on solid ground; it may be deployed as a makeshift dock extending into water.",
            "Bridges placed by bridgelayer units are temporary in nature. Once a bridgelayer unit places a bridge, it may not place another for the remainder of the scenario unless it removes the original. Removing one of these temporary bridges may only be done by non-infantry bridgelayer units, and requires the unit to remain in base-contact with the bridge being removed for the entire turn, with no other units passing over the bridge in that same turn.",
            "All bridgelayer bridges automatically float on water, as they contain integral flotation devices by design. Bridges placed by a non-infantry unit with this ability have a CF of 18 and may support units of Size class 3. The bridge may be targeted as a building and will be destroyed once its CF is reduced to 0. A bridge reduced to 10 points or less may only support units up to Size 2. Bridges reduced to 5 or fewer points it may only support Size 1 units.",
            "If a unit that exceeds a bridge’s Size limit attempts to use it, the bridge immediately collapses once the unit moves onto it. All units on a bridge when it collapses will fall and suffer 1 point of damage per 3 inches (or fraction thereof ) of difference between the starting level and destination level, rolling for critical hits as normal. If the unit falls into prohibited terrain as a result of a bridge collapse, it is destroyed.",
            "Infantry Bridgelayers: Infantry with this ability may erect a bridge using gear and parts carried with them for the task, but may only do so once per scenario. Infantry bridgelayers require 2 turns to complete their bridges, which possess a starting CF of 8, and can support units up to Size 2."
        ],
        asce_page: 83,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "CAP",
        name: "Capital Weapons",
        summary: [
            "Capital weapons are large weapons that are seen only on truly massive installations, mobile structures, and WarShips. Because their use is almost exclusively limited to combat between units in orbital space and beyond, their use is beyond the general scope of the ground war game presented in this book.",
            "Nevertheless, in certain limited instances where they may be used, consult the Capital and Sub-Capital Weapons rules (see p. 156)."
        ],
        asce_page: 84,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "CK#",
        name: "Cargo Transport, Kilotons",
        summary: [
            "This ability is identical to the Cargo Transport–Tons ability, except that the numerical designation for this special ability represents cargo capacity in 1,000-ton lots . This may be a decimal value, so a unit with CK3 .57 would have a cargo capacity of 3,570 tons (1,000 tons x 3 .57 = 3,570 tons) ."
        ],
        asce_page: 84,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "CT#",
        name: "Cargo Transport, Tons",
        summary: [
            "Units with this special ability have bays or other internal space set aside for carrying bulk cargo such as munitions, supplies, and the like . This space is not generally suited for transporting battle-ready units like vehicles, ’Mechs, or infantry, and such units may not be dropped or deployed from cargo bays as a result—though they can be carried as cargo (see Units as Cargo, p . 39) .",
            "This ability usually applies to DropShips, and is always used in conjunction with the Door (D#) special ability . The numerical value in this ability indicates how many tons of cargo the unit may transport .",
            "This ability can be reduced in value and the same amount of Infantry Transport (IT#, see p . 78) added to a unit prior to the start of a game ."
        ],
        asce_page: 84,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "CRW#",
        name: "Crew",
        summary: [
            "Non-DropShip units with this ability can temporarily inflict a Crew Stunned critical hit on themselves, while DropShip units can temporarily inflict a Crew Hit critical on themselves instead . Doing so enables these units to deploy a number of infantry units—equal to the number rating of this ability—as additional marines to aid in repelling enemy boarding parties . These foot infantry units have a Move of 2”f, 2 Armor points, 1 Structure point, and Damage Values of 1 at Short and Medium range (see Boarding Actions, p . 67) ."
        ],
        asce_page: 84,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "CR",
        name: "Critical Resistant",
        summary: [
            "A unit with this special ability features special armor or other protective features that reduces the chance and severity of a critical hit (including damage to structure, damage effects from armor-penetrating weapons, and hull breaches while in vacuum or underwater) . Any time an attack on this unit prompts a roll on its Critical Hits Table, apply a –2 modifier to the Critical Hit roll . Modified critical results of 1 or less are treated as No Critical Hit results ."
        ],
        asce_page: 84,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "DN",
        name: "Direct Neural Control System",
        summary: [
            "A unit controlled with a direct neural control system is designed to be piloted by warriors fitted with an advanced cybernetic brain implant, enabling more enhanced control . This technology is exceedingly rare and dangerous in the BattleTech setting, with its use invariably leading to madness and death in less than a decade or so . Developed only in the wake of the Clan Invasion, it was almost exclusively limited to the fanatics of the Word of Blake faction, even though other groups researched their own versions .",
            "If a warrior or crew controlling a unit with this special ability is not fitted with a DNI implant—including the prototype DNI, vehicular DNI, or buffered VDNI implants (see Augmented Warriors, p . 140)—the control system provides no benefits or drawbacks at all . Otherwise, the use of this feature applies a –1 modifier to the pilot’s Skill Rating, so a unit with a Skill Rating of 2 will drop to 1 . However, any Fire Control critical hit the unit receives during a scenario will result in a Crew Stunned effect to the unit (regardless of the unit’s type) . If this happens to an aerospace unit treat the stunned unit as if it has shut down ."
        ],
        asce_page: 84,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "D#",
        name: "Door",
        summary: [
            "This ability indicates the number of ingress/egress doors available on a DropShip, small craft, or support vehicles’ transport bays . Each door a unit has is tied to a particular bay, and can accommodate a limited number of units per turn (see Transporting Non-Infantry Units, p . 39) ."
        ],
        asce_page: 84,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "DRO",
        name: "Drone",
        summary: [
            "Units with this special ability are unmanned units capable of movement and (occasionally) combat . Ground drones must stay within 900” of their control vehicle, unless the control vehicle is airborne or in orbit, in which case range is functionally limitless for a ground game . In space, drones need only remain within LOS to their controller, as the actual range limit is more than 100,000” .",
            "Drones enveloped in a hostile ECM field shut down during the End Phase of the turn in which they were trapped by the field . They remain shut down until the ECM field is no longer present . Drones restart automatically in the End Phase of the turn in which the ECM field is removed . If the drone control unit is caught by a hostile ECM field, all of its drones shut down until the ECM field is no longer present . In addition, if the LOS from a drone control unit to its drone passes through an ECM bubble, the drone will shut down . This is frequently avoided by the use of Satellite uplinks for drone control . If the drone control unit is eliminated, the drones shut down for the rest of the game .",
            "When not affected by hostile ECM, and as long as their control units (see below) are operational, drone units may Move, attack, spot for indirect fire, and use special abilities as an equivalent unit of the same motive type and capabilities . The Skill Rating of a drone is equal to that of its controller’s Skill, plus 1 .",
            "Drones use the Skill of their remote operator to determine any PV modifiers for Skill . Remember, however, that such drones always receive a +1 Skill Rating due to their nature, so a drone operated by a Skill 4 operator must be valued as if the drone unit has a Skill of 5 ."
        ],
        asce_page: 84,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "DCC#",
        name: "Drone Carrier Control System",
        summary: [
            "Units with the drone carrier control system (DCC) special ability may control units with the drone (DRO) special . The numerical value of this ability indicates the number of drones the unit can control . All drones controlled by this unit will shut down if the control unit is destroyed, disabled, or enveloped in hostile ECM fields ."
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "DUN",
        name: "Dune Buggy",
        summary: [
            "A unit with this special ability can move more easily over Sand (see Advanced Terrain, p . 136) ."
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "ES",
        name: "Ejection Seat",
        summary: [
            "The pilot of a unit with an ejection seat may abandon his unit at any time using the unit’s on-board ejection system . The pilot with an ejection seat is also automatically ejected if his unit suffers an Ammo Hit critical and does not feature a CASE or CASEII special (see Ejection/Abandoning Units, p . 161) ."
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "ENG",
        name: "Engineering",
        summary: [
            "A unit with this special ability can clear woods just like a unit with the Saw special ability (see Saw, p . 89) . In addition, a unit with this ability can clear a path through rubble . It takes 1 turn for a group of 4 or more units with the Engineering special to clear a 2” long path of rubble, 2 turns for 3 units, 3 turns for 2 units and 4 turns for 1 unit .",
            "An area cleared by engineering units does not actually change its terrain type; the clearing action simply creates a narrow, clear path through it that units may use to pass through the terrain as if it is clear . (For further explanation, see Terrain Conversion, p . 173 .)"
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    }
    ,
    {
        tag: "SEAL",
        name: "Environmental Sealing",
        summary: [
            "A unit with this special ability may operate in hostile environments (including underwater, vacuum, and so forth) . Aerospace units, ProtoMechs, combat vehicles, and support vehicles built as submarines are automatically treated as if they have this ability ."
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "FF",
        name: "Firefighter",
        summary: [
            "Firefighter units may put out fires within 2” of their position . This action requires a 2D6 roll of 8+, made in place of a weapon attack . Reduce this target number by 1 for each turn the unit spends fighting a fire, and for each additional unit engaged in fighting the same fire (to a maximum target number modifier of –3) ."
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "FD",
        name: "Flight Deck",
        summary: [
            "A unit with this special ability can be used as a landing area by an aerospace fighter, conventional fighter, small craft, fixed-wing support vehicle, airship support vehicle, or VTOL unit ."
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "GLD",
        name: "Glider Protomech",
        summary: [
            "A ProtoMech unit with this special ability has been built with a special low-level flight capability similar to a Wing-in-Ground Effect vehicle . Rules for using Glider ProtoMechs in game play may be found on page 177 ."
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "HELI",
        name: "Helipad",
        summary: [
            "A unit with this special ability can be used as a landing area by a unit with VTOL movement ."
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "HPG",
        name: "Hyperpulse Generator",
        summary: [
            "The hyperpulse generator is a transmission device used to send communications signals through hyperspace Rare and expensive in the extreme, it is almost never seen on the battlefield, and many factions in the BattleTech universe consider attacking or willfully endangering such devices a crime against humanity Nevertheless, some mobile versions of the HPG do exist, and thus can make an appearance in battle under extreme circumstances.",
            "If a unit equipped with a mobile HPG (noted by the HPG special) is operating inside an atmosphere, it may use the device to send a signal once every 6 turns Doing so, however, draws incredible amounts of power and produces an immense electromagnetic pulse that affects all units in the general vicinity—including the HPG-carrying unit itself These effects can vary with the operating unit.",
            "Aerospace units operating in space may use an HPG in any turn they wish, but will generate no significant game effects when doing so.",
            "Charging and Firing: Charging and firing an HPG requires two full, consecutive Combat Phases to perform, during which time the HPG unit cannot move or use any weaponry If the unit is an extremely large unit in the process of being boarded or repelling a boarding action, its marines and other infantry defenses may continue to function normally, but all mounted weaponry is inert At the end of the second Combat Phase, the HPG fires, instantly shutting down the firing unit for 1 turn (The unit reactivates in the End Phase of the following turn )",
            "HPG Effects Radius: As long as there is an atmosphere (or, if the Atmospheric Density rules are in effect per page 61, an atmosphere of Thin or greater density), the HPG pulse will affect all units within a radius of 16 inches if the firing unit is not a Mobile Structure, a DropShip, a building, or a Support Vehicle of Size Class 3+ If the firing unit is a Mobile Structure, a DropShip, a building, or a Support Vehicle of Size Class 3+, the pulse will affect all units on or above the play area.",
            "HPG Effects: The HPG pulse inflicts a +4 Target Number modifier on all non-conventional infantry units within the area of effect for a period of 6 Combat Phases after the firing takes place This effect persists even if an affected unit subsequently moves outside of the initial effect radius This modifier will apply only to weapon attacks and most special ability attacks during this time, however; physical attacks (including those using the MEL special) will remain unaffected, as will any special Control Roll target numbers",
            "Receiving HPG Signals: Technically, the receiving of an HPG signal is far beyond the scope of these rules, but should an event happen within an atmosphere, there will be no significant game effects in Alpha Strike play\n",
            "Note: Where the signal from an HPG goes is irrelevant to Alpha Strike game play As an HPG is a hyperspace-capable communications system intended to send signals up to 50 light years at a shot, anywhere the message is sent will simply be too far beyond the scope of the game at hand to have any relevance An HPG cannot be used to directly attack a target unit; the pulse is merely a secondary effect."
        ],
        asce_page: 85,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "IRA",
        name: "Impact Resistant Armor",
        summary: [
            "Originally developed for use in dueling arenas, where melee attacks are often as common as weapons fire, impact-resistant armor provides increased protection in physical combat . When a unit with this special sustains damage as a result of a physical attack (including those delivered using a MEL special, or self-inflicted damage from a Death from Above attack), the damage sustained by the unit is reduced by 1 point, to a minimum of 1 point .",
            "In addition to this, all critical hit rolls and hull breach checks made against this unit apply a +1 modifier to the roll result . For critical hits, treat any modified result over 12 as an Engine Hit critical ."
        ],
        asce_page: 86,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "IATM#/#/#",
        name: "Improved ATM",
        summary: [
            "Units with the IATM#/#/# special may conduct missile attacks using Improved ATM munitions . These alternate munitions are:",
            "Indirect Fire: This represents an IATM firing standard long- range missiles, which enables the unit to execute an attack as if it has an IF value equivalent to its IATM Long-range value (i .e ., an IATM2/2/2 special can also act as an IF2 special) .",
            "Magnetic Pulse: Using this alternate munition attack, the unit’s normal attack is reduced by 1 point at Short range . But if this attack hits a target in the Short range bracket, the target suffers a loss of 2 inches of Move, as well as a –1 Target Number modifier for all weapon attacks, throughout the following turn . (Multiple magnetic pulse hits will not stack these modifiers .)",
            "Improved Inferno: Using this alternate munition attack, the unit’s normal attack is reduced by 1 point at both Short and Medium range . But if this attack hits a target in those range brackets, the target also suffers the effects of a HT#/#/# special attack equal to the numerical value of the unit’s IATM#/#/# special at those ranges, to a maximum of 2 points at any range bracket (i .e ., IATM3/1/- will transate to a HT2/1/- effect) ."
        ],
        asce_page: 86,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "INARC#",
        name: "Improved NARC Missile Beacon",
        summary: [
            "A unit with the INARC# special ability may make an extra weapon attack using its iNarc missile beacon device . A unit hit by an iNarc beacon will not suffer damage from the iNarc itself, but will suffer 1 additional point of damage from any Indirect Fire (IF), LRM, or SRM attacks for the rest of the game—unless the unit is within a friendly ECM bubble . The iNarc beacon launcher is usable up to the Medium range bracket .",
            "Instead of their normal attack, iNarc launchers may fire specialty ammo (see Alternate Munitions, p . 142) .",
            "The numerical value of this ability indicates the number of extra iNarc beacon attacks the unit can deliver in a single turn ."
        ],
        asce_page: 86,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "LAM (#\"g/#a)",
        name: "Land-Air BattleMech",
        summary: [
            "A BattleMech with this special has been built to convert between BattleMech, AirMech, and aerospace fighter modes of operation . The rules for Land-Air BattleMechs (LAMs), may be found on page 177 ."
        ],
        asce_page: 86,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "LG",
        name: "Large",
        summary: [
            "Large units cover a 2” AoE template area . Large units block LOS ."
        ],
        asce_page: 86,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "LTAG",
        name: "Light Target Acquisition Gear",
        summary: [
            "A unit with Light TAG can “paint” targets for artillery homing rounds (see Artillery Attacks, p . 47) in the same way as a unit with standard target acquisition gear (TAG) . Light TAG may only be used in the Short range bracket ."
        ],
        asce_page: 86,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "LRM#/#/#/#",
        name: "Long Range Missiles",
        summary: [
            "This unit mounts a significant number of long-range missile launchers and may fire them together as an alternative weapon attack instead of a standard weapon attack . This ability enables the unit to use alternate LRM ammo for modified effects (see Alternate Munitions, p . 143) ."
        ],
        asce_page: 86,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "MAG",
        name: "MagLev",
        summary: [
            "A variation of the Rail (RAIL) special ability (see Rail, p . 88), units with magnetic levitation (maglev) systems may only travel along rail terrain designated for maglev units ."
        ],
        asce_page: 86,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "MCS",
        name: "Magnetic Clamp System",
        summary: [
            "ProtoMechs with magnetic clamps may ride on a BattleMech as if they were a battle armor infantry unit with the XMEC special (see p . 78) . No more than 2 ProtoMechs with the MCS special (or 1 with the UCS special) may ride on a single transporting ’Mech at the same time .",
            "When transporting ProtoMechs via the MCS or UCS special, the transport ’Mech will lose 2 inches of Move, per ProtoMech, so long as the ProtoMechs remain attached to it ."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "UCS",
        name: "Magnetic Clamp System",
        summary: [
            "ProtoMechs with magnetic clamps may ride on a BattleMech as if they were a battle armor infantry unit with the XMEC special (see p . 78) . No more than 2 ProtoMechs with the MCS special (or 1 with the UCS special) may ride on a single transporting ’Mech at the same time .",
            "When transporting ProtoMechs via the MCS or UCS special, the transport ’Mech will lose 2 inches of Move, per ProtoMech, so long as the ProtoMechs remain attached to it ."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "MT#",
        name: "’Mech Transport",
        summary: [
            "A unit with this special ability can transport, deploy, and drop the indicated number of ’Mechs This ability usually applies to DropShips, and is always used in conjunction with the Door special ability (see Transporting Non-Infantry Units, and Dropping Troops, pp.39 and 160, respectively)."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "MDS#",
        name: "Mine Dispenser",
        summary: [
            "This ability allows a unit to create minefields in areas through which it travels (see Minefields, p 168) Record this ability as MDS# where # is the number of mine dispensers mounted on the unit Each mine dispenser deploys a density 1 minefield once per scenario Multiple deployments in the same location increase the density of the minefield by 1 each, to a maximum density of 5."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "MSW",
        name: "Minesweeper",
        summary: [
            "A unit with minesweeper automatically clears any minefields it is in base contact with at the end of the Movement Phase (see Minefields, p. 168). During the minesweeper's Combat Phase, it may not execute any attacks, but must roll 2D6 to clear the minefield, applying a +4 modifier to the result if the minesweeping unit is not infantry. If the result is 10 or better, the minefield is cleared and removed from the map. If the result is 5 or less, the minefield detonates for its full effects. Any other roll result means the minefield is not cleared."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional,
    },
    {
        tag: "MASH#",
        name: "Mobile Army Surgical Hospital",
        summary: [
            "A unit with MASH equipment can tend to wounded warriors, and helps to recover their enjuries between battle. During game play, a unit with MASH equipment can accommodate infantry units as if it has an Infantry Transport (IT#) special equal to half its MASH# value, rounded up. (For example, a unit with a MASH6 special can act as a unit with the IT3 special.)",
            "Between battles, MASH-equipped units provide a bonus to \"repairing\" infantry units."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "MFB",
        name: "Mobile Field Base",
        summary: [
            "A unit with a mobile field base is one that is equipped to handle technical servicing, maintenance, and even battlefield repairs on other units. During game play, a mobile field base has no direct effect, but between battles, its presence enables bonuses to repairing other combat units."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "MHQ#",
        name: "Mobile Headquarters",
        summary: [
            "The standard MHQ is equipped with a wide array of special equipment to coordinate engagements over a large area. This ability provides different bonuses depending on the numerical rating (see Battlefield Intelligence, p. 154)."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "MTN",
        name: "Mountain Troops",
        summary: [
            "Infantry units with this special ability may climb 2 inches per 2 inches moved forward in a turn."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "CNARC#",
        name: "NARC Missile Beacon",
        summary: [
            "A unit with the CNARC# or SNARC# special ability may make an extra weapon attack using its Narc missile beacon device. A unit hit by a Narc beacon will not suffer damage from the Narc itself, but will suffer 1 additional point of damage from any Indirect Fire (IF), LRM, or SRM attacks for the rest of the game—unless the unit is within a friendly ECM bubble. Standard Narc beacon launchers (indicated by SNARC) have a maximum range of Medium, while Compact Narc beacon launchers (CNARC) have a maximum range of Short.",
            "Instead of their normal attack, Narc launchers may fire specialty ammo (see Alternate Munitions, p. 143).",
            "The numerical value of this ability indicates the number of extra Narc beacon attacks the unit can deliver in a single turn."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SNARC#",
        name: "NARC Missile Beacon",
        summary: [
            "A unit with the CNARC# or SNARC# special ability may make an extra weapon attack using its Narc missile beacon device. A unit hit by a Narc beacon will not suffer damage from the Narc itself, but will suffer 1 additional point of damage from any Indirect Fire (IF), LRM, or SRM attacks for the rest of the game—unless the unit is within a friendly ECM bubble. Standard Narc beacon launchers (indicated by SNARC) have a maximum range of Medium, while Compact Narc beacon launchers (CNARC) have a maximum range of Short.",
            "Instead of their normal attack, Narc launchers may fire specialty ammo (see Alternate Munitions, p. 143).",
            "The numerical value of this ability indicates the number of extra Narc beacon attacks the unit can deliver in a single turn."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "NC3",
        name: "Naval C³",
        summary: [
            "This special represents an advanced large-scale version of the C³ network system, developed for spacecraft. Up to 6 large craft units may link into a single NC³ network. In aerospace combat (including capital-scale combat), all units in a NC³ network receive a –1 Target Number modifier. Naval C³ networks are immune to ECM, but not to the SDS Jammer (JAM) system."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "NOVA",
        name: "NOVA Composite EW System",
        summary: [
            "A unit with the NOVA special mounts a special electronics warfare system that not only provides the abilities of the ECM and PRB specials, but also acts as a C³i network that can link up to 3 units (see p. 80). Unlike a normal C³i system, the Nova cannot be disrupted by ECM, LECM, and WAT specials; it can only be disrupted by a hostile unit with the NOVA special."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "PAR",
        name: "Paratroops",
        summary: [
            "These units may dismount from airborne transport units (including aerospace units) just like jump infantry."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "PNT#",
        name: "Point Defense",
        summary: [
            "Unless it is shut down, a unit protected by a point defense system automatically engages any missiles that attack it. Unlike an anti-missile system (AMS), the point defense system may engage Arrow IV, capital, or sub-capital missiles as well as missile attacks delivered using the IF, SRM, and LRM specials.",
            "Point defense has a 360-degree arc of fire, and is always successful, so no Attack Roll is required. Point defense generates a number of “defensive damage points” equal to the ability’s numerical rating. Thus, a unit with a PNT6 special would generate 6 points of “defensive damage” per turn. This damage is distributed among incoming missiles at the controlling player’s discretion.",
            "If an incoming missile delivers no damage to begin with, any amount of defensive damage from a point defense ability will destroy the incoming missile before it can attack.",
            "For all other incoming missiles, 1 point of defensive damage will apply a +1 Target Number modifier to the missile’s attack roll, and reduce the incoming attack’s damage value by half (rounded down, to a minimum of 0 points). If 2 or more points of defensive damage are assigned to an incoming missile attack, the attack is eliminated entirely."
        ],
        asce_page: 87,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "PT#",
        name: "ProtoMech Transport",
        summary: [
            "A unit with this special ability can transport, deploy, and drop the indicated number of ProtoMechs. This ability usually applies to DropShips, and is always used in conjunction with the Door special ability (see Transporting Non-Infantry Units and Dropping Troops, pp. 39, 160, respectively)."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "CASEP",
        name: "Prototype CASE",
        summary: [
            "When a unit with prototype CASE (CASEP) suffers an Ammo Explosion critical hit, the attacker rolls 1D6. On a 3 or higher, the critical hit is ignored. On a result of 2 or less, the unit suffers an explosion and is destroyed."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "TSMX",
        name: "Prototype Triple-Strength Myomer",
        summary: [
            "Units with the prototype form of triple-strength myomer TSMX deliver 1 additional point of damage to all successful physical attacks they execute, regardless of the unit’s current heat level. If the External Cargo rules are in play (see p. 163), a unit with TSMX also doubles its lifting capacity.",
            "Unlike standard and industrial TSM, prototype TSM does not provide a movement boost. More importantly, prototype TSM is susceptible to Anti-TSM Warheads alternate munitions (see p. 143)."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "QV",
        name: "QuadVee",
        summary: [
            "A ’Mech unit with this special ability has been constructed as a QuadVee. The rules for these units may be found on page 178."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "RHS",
        name: "Radical Heat Sink System",
        summary: [
            "A unit with the radical heat sink system (RHS) can perform a special coolant flush action in any End Phase where its Heat Scale is 1 point or higher. This coolant flush will reduce the unit’s heat level by 1 point (to a minimum of 0), but the controlling player must then roll 1D6. If the roll result is 1, the RHS special must be marked off, and the unit fails to reduce its heat level for that turn. A radical heat sink system that has been marked off in this fashion is no longer usable for the remainder of the scenario."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "RAIL",
        name: "Rail",
        summary: [
            "A unit with the Rail special can only move along rails."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "RCA",
        name: "Reactive Armor",
        summary: [
            "A unit with reactive armor is resistant to damage from explosive ordnance, particularly those delivered by artillery and missile weaponry. If a unit with this special is struck by damage from any area-effect attack, or by any attacking using the ART, BOMB, MSL, or FLK specials, reduce the damage from these attacks by half before applying it (rounding down). For any attack against a unit with reactive armor by a unit with the IF, LRM, or SRM specials, reduce the amount of attack’s damage by half of the LRM or SRM special’s value at the appropriate range (rounding up). If reactive armor reduces damage below 1 point, treat the attack as delivering 1 point.",
            "Note that this damage reducing effect even covers general attacks by units that possess such abilities, so if a unit that can deliver 4 points of damage at Short range attacks a target with reactive armor, and the attacker has the SRM 2/2 special, the damage delivered is 3 points (4 points total – (2 ÷ 2) = 3)."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "RCN",
        name: "Recon",
        summary: [
            "The recon ability works in conjunction with the Mobile Headquarters (MHQ#) ability (see Battlefield Intelligence, p. 154)."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "REL",
        name: "Re-engineered Lasers",
        summary: [
            "A unit that carries re-engineered lasers is able to offset many of the benefits presented by several types of specialty armors, such as reflective. When a unit with this ability successfully attacks a unit featuring reflective armor (RFA special), ignore that armor’s damage-reducing effects. Furthermore, if a unit with this ability successfully attacks a unit that features the critical-resistant (CR) special, replace the target’s normal –2 modifier for any critical hit rolls with –1."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "RFA",
        name: "Reflective Armor",
        summary: [
            "A unit with reflective armor is resistant to damage from energy weapons, including flamers, but is much more susceptible to physical attacks, area-effect weapons, and armor-penetrating hits. If a unit with this special is struck by an air-to-ground strafing attack, or by a weapon attack by a unit with the ENE special, or by an attack using the HT special, reduce this damage (or heat) by half before applying it. (Round this damage down, to a minimum of 1 point of damage or heat applied from that attack type.)",
            "If, on the other hand, a unit with this ability suffers damage from any physical attack, an area-effect attack, or by any attack using the ART, BOMB, or MSL specials, double the damage applied by that attack.",
            "For all other attacks against a unit with reflective armor, reduce the total damage applied by 1 point (to a minimum of 1 point).",
            "Note that this damage reducing (and increasing) effect even covers general attacks by such units that possess such abilities, so if a unit that can deliver 4 points of damage at Short range attacks a target ’Mech with reflective armor, and the attacker also has the HT2 special, the attack will deliver 3 points of damage (4 – 1 = 3), plus 1 point of heat (HT2 ÷ 2 = 1)."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "RSD#",
        name: "Remote Sensor Dispenser",
        summary: [
            "A unit with this ability may deploy 1 remote sensor per turn per Remote Sensor Dispenser. (The number of dispensers the unit is carrying is indicated in the special ability’s abbreviation.) When deployed, sensors are stationary and rest on the surface of the underlying terrain. A remote sensor has no armor to speak of, and is automatically destroyed in the End Phase of any turn that ends with an opposing unit in base-to-base contact with them.",
            "Alternatively, the sensor may be destroyed if it takes 1 point of damage. Attacks against a sensor apply a –2 Target Number modifier. Each type of sensor may also be carried as a bomb (taking 1 bomb slot) by any unit that possesses the BOMB# special ability. Once deployed, remote sensors may be used to spot for indirect or artillery attacks, as if they were a friendly unit, but they apply an additional +3 Target Number modifier.",
            "Remote Sensors can also reveal units (see Hidden Units, p. 168), unless they are affected by hostile ECM systems, including Angel ECM (AECM) and standard ECM (ECM), which will overwhelm their abilities."
        ],
        asce_page: 88,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "RAMS",
        name: "RISC Advanced Point Defense System",
        summary: [
            "A unit equipped with a RISC advanced point defense system may use this special ability to reduce incoming missile fire against itself as a standard anti-missile system (see Anti-Missile System, p. 76), or it may use the system to reduce the missile damage to any other friendly unit within 2 inches of its position by 1 point.",
            "The use of the RAMS special to defend its own unit or a friendly unit must be made when the missile attack is resolved; a RAMS ability used to defend its own unit cannot be used to defend a friendly unit (and vice versa) in the same turn."
        ],
        asce_page: 89,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "ECS",
        name: "RISC Emergency Coolant System",
        summary: [
            "The RISC emergency coolant system is a more powerful variation on the radical heat sink system (RHS special), but its effects in the event of a system failure can be much more dire. Like the RHS special, this system is activated in the End Phase of the turn, but will only do so if the unit has reached a Heat Scale of 4 (Shutdown). Also like the RHS, the system requires a 1D6 check to determine if it suffers a failure when attempting to flush coolant through its unit.",
            "If the 1D6 roll result is 2 or higher, the ECS reduces the unit’s Heat Scale by 2 points. If the result of the 1D6 roll is 1, the ECS special must be marked off and, just like the RHS, it will fail to reduce the unit’s heat level. In addition to this, the ECS’s failure will also inflict one Engine Hit critical on the unit itself. The ECS remains inoperable for the remainder of the scenario once it is marked off."
        ],
        asce_page: 89,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "DJ",
        name: "RISC Viral Jammers - Decoy Jammers",
        summary: [
            "RISC Viral Jammers are active electronic warfare systems designed to counter opposing electronics within the user’s general vicinity. Available in two forms—the anti-ECM decoy jammer (DJ) or the communications-disrupting homing jammer (HJ)—a viral jammer may be activated at the start of the unit’s Movement Phase, and will have the effects outlined below for its jammer type against all units that are within 34 inches of the jamming unit and have an LOS to it at the end of their Movement Phase. Note that this jamming will affect friendly and opposing units alike.",
            "Once engaged, a RISC viral jammer remains active for 5 turns and cannot be shut off before then except through the destruction or shutdown of the operating unit. Once a jammer is disabled in any way (or its 5 turns of operation elapse), its negative effects on opposing electronics will dissipate, and the jammer’s special ability is marked off the unit’s stat card.",
            "Decoy Jammers (DJ): Once a decoy jammer is activated, all units within LOS of the jamming unit and a range of 34 inches or less must roll 2D6. If this roll result is 9 or higher, the unit is unaffected by the jammer. Otherwise, any AECM, ECM, LECM, STL, or WAT specials the unit possesses will be rendered inoperative for the duration of the jammer’s effect."
        ],
        asce_page: 89,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "HJ",
        name: "RISC Viral Jammers - Homing Jammer",
        summary: [
            "RISC Viral Jammers are active electronic warfare systems designed to counter opposing electronics within the user’s general vicinity. Available in two forms—the anti-ECM decoy jammer (DJ) or the communications-disrupting homing jammer (HJ)—a viral jammer may be activated at the start of the unit’s Movement Phase, and will have the effects outlined below for its jammer type against all units that are within 34 inches of the jamming unit and have an LOS to it at the end of their Movement Phase. Note that this jamming will affect friendly and opposing units alike.",
            "Once engaged, a RISC viral jammer remains active for 5 turns and cannot be shut off before then except through the destruction or shutdown of the operating unit. Once a jammer is disabled in any way (or its 5 turns of operation elapse), its negative effects on opposing electronics will dissipate, and the jammer’s special ability is marked off the unit’s stat card.",
            "Homing Jammer (HJ): Once a homing jammer is activated, all units within LOS of the jamming unit and a range of 34 inches or less must roll 2D6. On a result of 9 or more, the units will function normally. Otherwise, the affected unit may not use any TAG, C³ systems of any kind (including C³BSM, C³BSS, C³EM, C³I, C³M, C³RS, or C³S), or the NOVA special for the duration of the jammer’s effect. In addition, if the unit features an IATM, LRM, CNARC, SNARC, or SRM special, all attacks made that include these weapons’ damage or effects will suffer a +1 Target Number modifier."
        ],
        asce_page: 89,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "RBT",
        name: "Robotic Drone",
        summary: [
            "Units with this special are driven by autonomous programming that enables them to function as a drone that does not require remote human direction. The rules covering how robotic units work may be found on page 175."
        ],
        asce_page: 89,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SAW",
        name: "Saw",
        summary: [
            "A unit with this special ability may forego its attack to clear an area of woods (see Terrain Conversion, p. 173)."
        ],
        asce_page: 89,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SDCS",
        name: "SDS Drone Control System",
        summary: [
            "Units with this special have an extremely sophisticated and highly adaptive robotic control system not seen since the fall of the original Star League. This enables the unit to operate as a superior form of robotic drone, per the rules found on page 175."
        ],
        asce_page: 89,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "JAM",
        name: "SDS Jammer",
        summary: [
            "A unit with this special cancels the –1 Target Number modifier provided by an opposing unit with the ATAC or Naval C³ specials. This effect only works when the unit that would benefit from the enemy ATAC or NC³ is within the jamming unit’s Extreme range weapon bracket (or closer)."
        ],
        asce_page: 89,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SRCH",
        name: "Searchlight",
        summary: [
            "Units equipped with a searchlight ignore the Target Number modifiers for combat in darkness (see Darkness, p. 62)."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SRM#/#",
        name: "Short Range Missiles",
        summary: [
            "This unit mounts a significant number of short-range missile launchers and may fire them together as an alternative weapon attack instead of a standard weapon attack. This ability enables the unit to use alternate SRM ammo for modified effects (see Alternate Munitions, p. 143)."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "ST#",
        name: "Small Craft Transport",
        summary: [
            "A unit with this special ability can transport/launch, and recover the indicated number of Small Craft. This ability usually applies to DropShips, and is always used in conjunction with the Door special ability (see Transporting Non-Infantry Units, p. 39)."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SDS-C #/#/#/#",
        name: "Space Defense System",
        summary: [
            "Any non-DropShip unit or installation with SDS weapons is a unit that carries large weapons designed almost exclusively for use against WarShips. These capital or sub-capital weapons are generally too large to use effectively in ground combat, and are generally reserved to target incoming DropShips and WarShips, though SDS missiles (SDS-CM) may also be employed as artillery.",
            "In the limited instances where these weapons may be used, consult the Capital and Sub-Capital Weapons rules (see p. 156)."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SDS-CM #/#/#/#",
        name: "Space Defense System",
        summary: [
            "Any non-DropShip unit or installation with SDS weapons is a unit that carries large weapons designed almost exclusively for use against WarShips. These capital or sub-capital weapons are generally too large to use effectively in ground combat, and are generally reserved to target incoming DropShips and WarShips, though SDS missiles (SDS-CM) may also be employed as artillery.",
            "In the limited instances where these weapons may be used, consult the Capital and Sub-Capital Weapons rules (see p. 156)."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SDS-SC #/#/#/#",
        name: "Space Defense System",
        summary: [
            "Any non-DropShip unit or installation with SDS weapons is a unit that carries large weapons designed almost exclusively for use against WarShips. These capital or sub-capital weapons are generally too large to use effectively in ground combat, and are generally reserved to target incoming DropShips and WarShips, though SDS missiles (SDS-CM) may also be employed as artillery.",
            "In the limited instances where these weapons may be used, consult the Capital and Sub-Capital Weapons rules (see p. 156)."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SOA",
        name: "Space Operations Adaptation",
        summary: [
            "A unit with this special ability can operate in vacuum (see p. 61), but is not capable of spaceflight on its own."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SCAP",
        name: "Sub-capital",
        summary: [
            "Sub-capital weapons are smaller-scale versions of the capital weapons used on WarShips and SDS batteries. Their use is still almost exclusively limited to combat between units in orbital space and beyond, and so is beyond the general scope of the ground war game presented in this book.",
            "Nevertheless, in certain limited instances where they may be used, consult the Capital and Sub-Capital Weapons rules (see p. 156)."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "SLG",
        name: "Super Large",
        summary: [
            "Super Large units occupy a 6” AoE template sized area or larger. Super Large units block LOS."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "TAG",
        name: "Target Acquisition Gear",
        summary: [
            "TAG is used to designate targets for homing artillery attacks. A unit with this ability may designate targets in the Short and Medium range brackets (see Artillery Attacks, p. 47)."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "MTAS#",
        name: "’Mech Taser",
        summary: [
            "A unit with the MTAS# special is carrying a ’Mech Taser; a unit with the BTAS# special carries a battle armor Taser.",
            "For MTAS special abilities, the # in this special indicates the quantity of Taser weapons mounted by the unit in question, each of which may attempt one attack per turn against any targets that lie in the unit’s firing arc and within its Short range bracket.",
            "For BTAS special abilities, the # in this special represents the maximum number of Taser attacks the unit can make for the entire scenario.",
            "All Taser attacks are resolved separately, and may be made in addition to the unit’s normal weapon or physical attacks.",
            "The Taser attack itself delivers no damage, but a successful hit will cause either interference or shutdown any target that is not conventional infantry, a DropShip, or possesses the LG, VLG, or SLG ability. Conventional infantry, DropShips, and units with the LG, VLG, or SLG abilities ignore the Taser effects entirely.",
            "When a Taser attack hits a target that can be affected by it, the attacker rolls 2D6, applying a –2 if using a BTAS special, a –2 if the target is a BattleMech, and a +2 modifier if the target is battle armor infantry. On an 8+, the target is shut down for 1 turn. On a 7 or less, the target suffers interference effects that apply a +1 Target Number modifier to all of its attack and Control rolls the unit makes for 1 turn (additional Taser hits do not add to this effect). Taser effects wear off in the End Phase of the turn after a Taser’s successful attack."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "BTAS#",
        name: "Battle Armor Taser",
        summary: [
            "A unit with the MTAS# special is carrying a ’Mech Taser; a unit with the BTAS# special carries a battle armor Taser.",
            "For MTAS special abilities, the # in this special indicates the quantity of Taser weapons mounted by the unit in question, each of which may attempt one attack per turn against any targets that lie in the unit’s firing arc and within its Short range bracket.",
            "For BTAS special abilities, the # in this special represents the maximum number of Taser attacks the unit can make for the entire scenario.",
            "All Taser attacks are resolved separately, and may be made in addition to the unit’s normal weapon or physical attacks.",
            "The Taser attack itself delivers no damage, but a successful hit will cause either interference or shutdown any target that is not conventional infantry, a DropShip, or possesses the LG, VLG, or SLG ability. Conventional infantry, DropShips, and units with the LG, VLG, or SLG abilities ignore the Taser effects entirely.",
            "When a Taser attack hits a target that can be affected by it, the attacker rolls 2D6, applying a –2 if using a BTAS special, a –2 if the target is a BattleMech, and a +2 modifier if the target is battle armor infantry. On an 8+, the target is shut down for 1 turn. On a 7 or less, the target suffers interference effects that apply a +1 Target Number modifier to all of its attack and Control rolls the unit makes for 1 turn (additional Taser hits do not add to this effect). Taser effects wear off in the End Phase of the turn after a Taser’s successful attack."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "TSEMP#",
        name: "Tight-stream Electromagnetic Pulse Weapons",
        summary: [
            "A unit with this special ability carries tight-stream EMP weapons (TSEMPs), which function much like an energy-based version of the taser (see above).",
            "As with taser weapons, the numerical value for this special ability indicates the number of TSEMP weapon attacks the unit may attempt per turn. If this numerical value is preceded by a “-O”, then the unit is only carrying one-shot TSEMPs, and the number instead indicates how many TSEMP attacks it may attempt for the entire scenario.",
            "TSEMP attacks may only be attempted in the unit’s Combat Phase, and may only be directed against targets within the unit’s Short or Medium range brackets on the ground map.",
            "A successful TSEMP attack will have no effect against conventional infantry unit, DropShips, or any other units that possess the VLG or SLG specials. For all other unit types, a successful TSEMP attack must be followed by a second 2D6 roll, applying a –1 roll modifier if the target is a BattleMech or aerospace unit, a –2 if the target has the LG special, and a +2 if the target is a support vehicle unit.",
            "If the modified roll result is 8 or higher, the target shuts down for 1 turn. On a 7 or less, the target instead suffers a +1 target modifier for all attacks and Control Rolls required of it for 1 turn. Multiple TSEMP attacks against the same target will not increase these modifiers, but each attack each should make its effects roll as long as the target has not been shut down. TSEMP effects against a target automatically wear off in the End Phase of the following turn."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "HTC",
        name: "Trailer Hitch",
        summary: [
            "A vehicle unit with this special has the ability to tow other wheeled or tracked units and trailers. The rules for towing may be found under External Cargo, page 163."
        ],
        asce_page: 90,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "TRN",
        name: "Trenchworks/Fieldworks Engineers",
        summary: [
            "Each turn these infantry units may convert an area under a 2” AoE template into a fortified area. Attacks against infantry units in a fortified area suffer an additional +2 Target Number modifier. Heat, Inferno, and area effect weapons ignore this modifier."
        ],
        asce_page: 91,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "TSI",
        name: "Triple-strength Implants",
        summary: [
            "Infantry with this special have been augmented with triple-strength myomer implants. While most gameplay effects are covered under Augmented Warriors (see p. 140), these units are also susceptible to the effects of anti-TSM munitions (see p. 143)."
        ],
        asce_page: 91,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "VRT",
        name: "Variable-range Targeting",
        summary: [
            "Units equipped with variable-range targeting may switch between short-range, long-range or standard targeting during the End Phase of any turn (see Targeting and Tracking Systems, p. 173)."
        ],
        asce_page: 91,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "VTM#",
        name: "Medium Vehicle Transport",
        summary: [
            "Vehicles differ from other units in that the type of bay necessary for transport differs by vehicle weight. The Vehicle Transport special ability also indicates the maximum weight class of vehicle a given bay can accommodate, as defined below:",
            "Medium Vehicle Transport (VTM#) bays can handle units of Size class 1 and 2 that do not have the Large (LG), Very Large (VLG), or Super Large (SLG) specials.",
            "Heavy Vehicle Transport (VTH) bays can hold units of Size class 1 through 4 that do not have the Large (LG), Very Large (VLG) or Super Large (SLG) specials.",
            "Super-Heavy Vehicle Transport (VTS) bays can accommodate units of Size class 1 through 4, including those that have the Large (LG) special, but not the Very Large (VLG) or Super Large (SLG) specials.",
            "Full rules regarding how to drop and deploy non-infantry units from a transport are presented elsewhere in this chapter. For air vehicles (including VTOLs and airship units), see Aerospace Unit Transports, page 142. For other non-infantry transports, see Transporting Non-Infantry Units, page 39. The Dropping Troops rules (see p. 160) may also be used for some vehicle units."
        ],
        asce_page: 91,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "VTH#",
        name: "Heavy Vehicle Transport",
        summary: [
            "Vehicles differ from other units in that the type of bay necessary for transport differs by vehicle weight. The Vehicle Transport special ability also indicates the maximum weight class of vehicle a given bay can accommodate, as defined below:",
            "Medium Vehicle Transport (VTM#) bays can handle units of Size class 1 and 2 that do not have the Large (LG), Very Large (VLG), or Super Large (SLG) specials.",
            "Heavy Vehicle Transport (VTH) bays can hold units of Size class 1 through 4 that do not have the Large (LG), Very Large (VLG) or Super Large (SLG) specials.",
            "Super-Heavy Vehicle Transport (VTS) bays can accommodate units of Size class 1 through 4, including those that have the Large (LG) special, but not the Very Large (VLG) or Super Large (SLG) specials.",
            "Full rules regarding how to drop and deploy non-infantry units from a transport are presented elsewhere in this chapter. For air vehicles (including VTOLs and airship units), see Aerospace Unit Transports, page 142. For other non-infantry transports, see Transporting Non-Infantry Units, page 39. The Dropping Troops rules (see p. 160) may also be used for some vehicle units."
        ],
        asce_page: 91,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "VTS#",
        name: "Super-Heavy Vehicle Transport",
        summary: [
            "Vehicles differ from other units in that the type of bay necessary for transport differs by vehicle weight. The Vehicle Transport special ability also indicates the maximum weight class of vehicle a given bay can accommodate, as defined below:",
            "Medium Vehicle Transport (VTM#) bays can handle units of Size class 1 and 2 that do not have the Large (LG), Very Large (VLG), or Super Large (SLG) specials.",
            "Heavy Vehicle Transport (VTH) bays can hold units of Size class 1 through 4 that do not have the Large (LG), Very Large (VLG) or Super Large (SLG) specials.",
            "Super-Heavy Vehicle Transport (VTS) bays can accommodate units of Size class 1 through 4, including those that have the Large (LG) special, but not the Very Large (VLG) or Super Large (SLG) specials.",
            "Full rules regarding how to drop and deploy non-infantry units from a transport are presented elsewhere in this chapter. For air vehicles (including VTOLs and airship units), see Aerospace Unit Transports, page 142. For other non-infantry transports, see Transporting Non-Infantry Units, page 39. The Dropping Troops rules (see p. 160) may also be used for some vehicle units."
        ],
        asce_page: 91,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "VLG",
        name: "Very Large",
        summary: [
            "A unit with this ability fully occupies a 4” diameter area. Very Large units block LOS."
        ],
        asce_page: 91,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "VSTOL",
        name: "Very-short Takeoff and Landing",
        summary: [
            "This ability allows a unit to lift off and land in a shorter amount of space than regular aerodyne units (see Aerospace Units on the Ground Map, pp. 141-142)."
        ],
        asce_page: 91,
        type: ESpecialAbilityType.Optional
    },
    {
        tag: "VR",
        name: "Virtual Reality Piloting Pod",
        summary: [
            "A unit controlled with a virtual reality piloting pod has replaced its normal cockpit with an internalized bay sealed deep inside its chassis. Though this early-Clan Invasion experiment promised to better safeguard MechWarriors from harm, it proved dangerously susceptible to electronic interference and made safe egress from a doomed machine nearly impossible.",
            "A unit with this special applies a –1 target modifier to any special Control Rolls required of the unit (such as those to avoid skidding or becoming stuck in bog-down terrain, but the unit becomes unable to use the Ejection rules (see p. 161). Furthermore, if the unit begins its Combat Phase within an area affected by hostile ECM of any type (such as those generated by LECM, ECM, and WAT specials), the unit may not attempt any ranged weapon attacks, and suffers a +2 Target Number modifier for any physical attacks it attempts."
        ],
        asce_page: 91,
        type: ESpecialAbilityType.Optional
    }

]
export interface IASSpecialAbility {
    tag: string;
    name: string;
    type: ESpecialAbilityType;
    summary: string[];
    asce_page: number;
    rawTag?: string; // this is for display of the tag on the popup
}
