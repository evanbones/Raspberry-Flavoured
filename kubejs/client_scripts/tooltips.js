// priority: 0
// translatable parts of script by QinomeD

ItemEvents.tooltip(tooltip => {
	tooltip.add([
	'farmersdelight:melon_popsicle',
	'atmospheric:aloe_gel_bottle',
	'abnormals_delight:dune_platter',
	'kubejs:prismatic_ice_cream',
	'kubejs:neapolitan_ice_cream_sandwich',
	'kubejs:respiteful_ice_cream_sandwich',
	'kubejs:prismatic_ice_cream_sandwich',
	'neapolitan:vanilla_ice_cream',
	'neapolitan:vanilla_milkshake',
	'neapolitan:banana_ice_cream',
	'neapolitan:banana_milkshake',
	'neapolitan:mint_ice_cream',
	'neapolitan:mint_milkshake',
	'neapolitan:adzuki_ice_cream',
	'neapolitan:adzuki_milkshake',
	'neapolitan:strawberry_ice_cream',
	'neapolitan:strawberry_milkshake',
	'neapolitan:chocolate_ice_cream',
	'neapolitan:chocolate_milkshake',
	'respiteful:green_tea_ice_cream',
	'respiteful:yellow_tea_ice_cream',
	'respiteful:black_tea_ice_cream',
	'respiteful:coffee_ice_cream',
	'respiteful:snow_top_green_tea',
	'respiteful:snow_top_yellow_tea',
	'respiteful:snow_top_black_tea',
	'respiteful:snow_top_coffee',
	'kubejs:snow_top_green_tea',
	'kubejs:snow_top_yellow_tea',
	'kubejs:snow_top_black_tea',
	'kubejs:snow_top_coffee'
	], Text.translate("rf.tooltip.extinguishes_fire"))
	
    tooltip.add(['minecraft:glistering_melon_slice'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['abnormals_delight:yucca_gateau_slice'], Text.translate("rf.tooltip.yucca_gateau_slice"))
    tooltip.add(['abnormals_delight:strawberry_cake_slice'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:strawberries'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:white_strawberries'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:strawberry_scones'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:strawberry_ice_cream'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:chocolate_strawberries'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:strawberry_banana_smoothie'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:strawberry_bean_bonbons'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:strawberry_milkshake'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:neapolitan_ice_cream'], Text.translate("rf.tooltip.minor_instant_health"))
    tooltip.add(['neapolitan:neapolitan_ice_cream'], Text.translate("rf.tooltip.neapolitan_ice_cream_1"))
    tooltip.add(['neapolitan:neapolitan_ice_cream'], Text.translate("rf.tooltip.neapolitan_ice_cream_2"))
    tooltip.add(['neapolitan:neapolitan_ice_cream'], Text.translate("rf.tooltip.neapolitan_ice_cream_3"))
    tooltip.add(['neapolitan:vanilla_ice_cream'], Text.translate("rf.tooltip.vanilla_ice_cream_1"))
    tooltip.add(['neapolitan:vanilla_ice_cream'], Text.translate("rf.tooltip.vanilla_ice_cream_2"))
    tooltip.add(['respiteful:black_tea_ice_cream'], Text.translate("rf.tooltip.black_tea_ice_cream_1"))
    tooltip.add(['respiteful:black_tea_ice_cream'], Text.translate("rf.tooltip.black_tea_ice_cream_2"))
    tooltip.add(['respiteful:respiteful_ice_cream'], Text.translate("rf.tooltip.respiteful_ice_cream_1"))
    tooltip.add(['respiteful:respiteful_ice_cream'], Text.translate("rf.tooltip.respiteful_ice_cream_2"))
    tooltip.add(['respiteful:respiteful_ice_cream'], Text.translate("rf.tooltip.respiteful_ice_cream_3"))
    tooltip.add(['respiteful:respiteful_ice_cream'], Text.translate("rf.tooltip.respiteful_ice_cream_4"))
    tooltip.add(['buzzier_bees:honey_apple'], Text.translate("rf.tooltip.honey_apple"))
    tooltip.add(['buzzier_bees:honey_bread'], Text.translate("rf.tooltip.honey_bread"))
    tooltip.add(['buzzier_bees:glazed_porkchop'], Text.translate("rf.tooltip.glazed_porkchop"))
    tooltip.add(['minecraft:honey_bottle'], Text.translate("rf.tooltip.honey_bottle"))
    tooltip.add(['minecraft:golden_carrot'], Text.translate("rf.tooltip.golden_carrot"))
    tooltip.add(['minecraft:milk_bucket'], Text.translate("rf.tooltip.clears_all_effects"))
    tooltip.add(['caverns_and_chasms:golden_milk_bucket'], Text.translate("rf.tooltip.clears_all_effects"))
    tooltip.add(['neapolitan:milk_bottle'], Text.translate("rf.tooltip.clears_1_effect"))
    tooltip.add(['ecologics:coconut_slice'], Text.translate("rf.tooltip.clears_1_effect"))
    tooltip.add(['ecologics:tropical_stew'], Text.translate("rf.tooltip.clears_all_effects"))
    tooltip.add(['kubejs:golden_strawberries'], Text.translate("rf.tooltip.instant_health"))
    tooltip.add(['kubejs:sporedough'], Text.translate("rf.tooltip.sporedough"))
    tooltip.add(['caverns_and_chasms:bejeweled_apple'], Text.translate("rf.tooltip.bejeweled_apple"))

// snowball
  tooltip.addAdvanced('minecraft:snowball', (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.projectile_effect").gray()])
      text.add(2, [Text.translate("rf.tooltip.projectile_effect_snowball").red()])
  })
  
// ashball
  tooltip.addAdvanced('raspberry:ashball', (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.projectile_effect").gray()])
      text.add(2, [Text.translate("rf.tooltip.projectile_effect_ashball").red()])
  })
  
// tipped arrow
  tooltip.addAdvanced('minecraft:tipped_arrow', (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.projectile_effect").gray()])
  })
  
// dog food
  tooltip.addAdvanced('farmersdelight:dog_food', (item, advanced, text) => {
      text.add(5, [Text.translate("rf.tooltip.when_consumed").gray()])
  })
  
// hot cream cone
  tooltip.addAdvanced('mynethersdelight:hot_cream_cone', (item, advanced, text) => {
    text.add(1, [Text.translate("rf.tooltip.hot_cream_cone_1").blue()])
    text.add(2, [Text.translate("rf.tooltip.hot_cream_cone_2").blue()])
    text.add(3, [Text.translate("rf.tooltip.hot_cream_cone_3").gray()])
    text.add(4, [Text.translate("rf.tooltip.hot_cream_cone_4").blue()])
    text.add(5, [Text.translate("rf.tooltip.hot_cream_cone_5").gray()])
    text.add(6, [Text.translate("rf.tooltip.hot_cream_cone_6").blue()])
  })
  
// pickerelweed
  tooltip.addAdvanced('upgrade_aquatic:boiled_purple_pickerelweed', (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.pickerelweed").blue()])
  })
  
// dim tears
  tooltip.addAdvanced('spelunkery:portal_fluid_bottle', (item, advanced, text) => {
    text.add(1, [Text.translate("rf.tooltip.when_consumed").gray()])
    text.add(2, [Text.translate("rf.tooltip.portal_fluid_bottle_1").blue()])
    text.add(3, [Text.translate("rf.tooltip.portal_fluid_bottle_2").gray()])
    text.add(4, [Text.translate("rf.tooltip.portal_fluid_bottle_3").gray()])
    text.add(5, [Text.translate("rf.tooltip.portal_fluid_bottle_4").blue()])
  })
  
// soulstice sake
  tooltip.addAdvanced('kubejs:soulstice_sake', (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.soulstice_sake_1").red()])
      text.add(2, [Text.translate("rf.tooltip.soulstice_sake_2").blue()])
      text.add(3, [Text.translate("rf.tooltip.soulstice_sake_3").blue()])
  })
  
// buzzing bourbon
  tooltip.addAdvanced('kubejs:buzzing_bourbon', (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.buzzing_bourbon_1").red()])
      text.add(2, [Text.translate("rf.tooltip.buzzing_bourbon_2").blue()])
      text.add(3, [Text.translate("rf.tooltip.buzzing_bourbon_3").blue()])
  })
  
// prickly gin
  tooltip.addAdvanced('kubejs:prickly_gin', (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.prickly_gin_1").red()])
      text.add(2, [Text.translate("rf.tooltip.prickly_gin_2").blue()])
  })
  
// foul fernet
  tooltip.addAdvanced('kubejs:foul_fernet', (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.foul_fernet_1").red()])
      text.add(2, [Text.translate("rf.tooltip.foul_fernet_2").blue()])
      text.add(3, [Text.translate("rf.tooltip.foul_fernet_3").blue()])
      text.add(4, [Text.translate("rf.tooltip.extinguishes_fire").blue()])
  })
  
// gambler's tea
  tooltip.addAdvanced('farmersrespite:gamblers_tea', (item, advanced, text) => {
      text.add(2, [Text.translate("rf.tooltip.gamblers_tea_1").blue()])
      text.add(3, [Text.translate("rf.tooltip.gamblers_tea_2").red()])
  })
  
// misc
  tooltip.addAdvanced([
  '#raspberry_flavoured:work_in_progress'
  ], (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.work_in_progress").lightPurple().bold()])
  })
  tooltip.addAdvanced([
  '#raspberry:disabled'
  ], (item, advanced, text) => {
      text.add(1, [Text.translate("rf.tooltip.deprecated_1").lightPurple().bold()])
      text.add(2, [Text.translate("rf.tooltip.deprecated_2").lightPurple()])
      text.add(3, [Text.translate("rf.tooltip.deprecated_3").lightPurple()])
      text.add(4, [Text.translate("rf.tooltip.deprecated_4").lightPurple()])
  })
  tooltip.add(['kubejs:yoyleberry'], Text.translate("rf.tooltip.yoyleberry"))
  tooltip.add([
  'minecraft:enchanting_table',
  'woodworks:sawmill'
  ], Text.translate("rf.tooltip.legacy_item"))
  
  // remove 1 line
  tooltip.addAdvanced([
  'minecraft:disc_fragment_5',
  'abnormals_delight:passion_aloe_nectar',
  'etched:boombox',
  'oreganized:silver_mirror',
  'kubejs:rose_gold_rapier',
  'minecraft:golden_sword',
  'minecraft:golden_pickaxe',
  'minecraft:golden_hoe',
  'minecraft:golden_shovel',
  'minecraft:golden_helmet',
  'minecraft:golden_chestplate',
  'minecraft:golden_leggings',
  'minecraft:golden_boots',
  'minecraft:leather_helmet', 
  'minecraft:leather_chestplate', 
  'minecraft:leather_leggings', 
  'minecraft:leather_boots', 
  'minecraft:turtle_helmet',
  'minecraft:chainmail_helmet', 
  'minecraft:chainmail_chestplate', 
  'minecraft:chainmail_leggings', 
  'minecraft:chainmail_boots', 
  'minecraft:diamond_helmet', 
  'minecraft:diamond_chestplate', 
  'minecraft:diamond_leggings', 
  'minecraft:diamond_boots', 
  'additionaladditions:rose_gold_sword', 
  'additionaladditions:rose_gold_shovel', 
  'additionaladditions:rose_gold_pickaxe', 
  'additionaladditions:rose_gold_axe', 
  'additionaladditions:rose_gold_hoe', 
  'kubejs:rose_gold_knife', 
  'minecraft:netherite_helmet', 
  'minecraft:netherite_chestplate', 
  'minecraft:netherite_leggings', 
  'minecraft:netherite_boots',
  'create:copper_diving_helmet',
  'kubejs:netherite_horse_armor',
  'kubejs:necromium_horse_armor',
  'kubejs:electrum_horse_armor',
  'mynethersdelight:plate_of_striderloaf',
  'mynethersdelight:magma_cake_slice',
  'storagedrawers:oak_full_drawers_1',
  'mace_backport:mace'
  ], (item, advanced, text) => {
	text.remove(1)
  })
  
  // remove 2 lines
  tooltip.addAdvanced([
  'farmersdelight:golden_knife',
  'minecraft:golden_axe',
  'minecraft:trident',
  'farmersdelight:fruit_salad',
  'mynethersdelight:plate_of_ghasta_with_cream',
  'mynethersdelight:hot_wings_bucket',
  'mynethersdelight:spicy_noodle_soup',
  'minecraft:netherite_pickaxe',
  'minecraft:netherite_shovel',
  'minecraft:netherite_hoe',
  'minecraft:netherite_axe',
  'minecraft:netherite_sword',
  'farmersdelight:netherite_knife'
  ], (item, advanced, text) => {
	text.remove(1)
	text.remove(1)
  })
  
  // remove 3 lines
  tooltip.addAdvanced([
  'clash:greatblade',
  'clash:spear',
  'mynethersdelight:plate_of_cold_striderloaf'
  ], (item, advanced, text) => {
	text.remove(1)
	text.remove(1)
	text.remove(1)
  })
  
  // remove 4 lines
  tooltip.addAdvanced([
  'clash:swept_axe'
  ], (item, advanced, text) => {
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
  })
  
  // remove 5 lines
  tooltip.addAdvanced([
  'mynethersdelight:ghast_salad'
  ], (item, advanced, text) => {
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
  })
  
  // misc remove
  tooltip.addAdvanced('lucky:raspberry_lucky_block', (item, advanced, text) => {
	text.remove(1)
  })
  
  tooltip.addAdvanced([
  'brewinandchewin:beer',
  'brewinandchewin:vodka'
  ], (item, advanced, text) => {
	text.remove(3)
	text.remove(3)
	text.remove(3)
  })
  
  tooltip.addAdvanced([
  'farmersrespite:tea_curry',
  'farmersdelight:pasta_with_mutton_chop',
  'farmersrespite:blazing_chili',
  'farmersrespite:yellow_tea',
  'farmersrespite:coffee',
  'respiteful:mint_green_tea',
  'respiteful:vanilla_milk_tea'
  ], (item, advanced, text) => {
	text.remove(3)
	text.remove(3)
	text.remove(3)
	text.remove(3)
  })
  
  tooltip.addAdvanced([
  'respiteful:mocha_coffee'
  ], (item, advanced, text) => {
	text.remove(3)
	text.remove(3)
	text.remove(3)
	text.remove(3)
	text.remove(3)
  })
  
  tooltip.addAdvanced([
  'brewinandchewin:mead',
  'brewinandchewin:strongroot_ale',
  'brewinandchewin:salty_folly',
  'brewinandchewin:bloody_mary',
  'brewinandchewin:red_rum'
  ], (item, advanced, text) => {
	text.remove(4)
	text.remove(4)
	text.remove(4)
  })
  
  tooltip.addAdvanced([
  'brewinandchewin:steel_toe_stout'
  ], (item, advanced, text) => {
	text.remove(5)
	text.remove(5)
	text.remove(5)
	text.remove(5)
  })
  
  tooltip.addAdvanced('brewinandchewin:saccharine_rum', (item, advanced, text) => {
	text.remove(2)
	text.remove(2)
	text.remove(2)
	text.remove(2)
	text.remove(2)
	text.remove(2)
  })
  
  tooltip.addAdvanced('brewinandchewin:withering_dross', (item, advanced, text) => {
	text.remove(6)
	text.remove(6)
	text.remove(6)
	text.remove(6)
  })
  
  tooltip.addAdvanced('brewinandchewin:pale_jane', (item, advanced, text) => {
	text.remove(3)
  })
  
  tooltip.addAdvanced('mynethersdelight:hot_cream_cone', (item, advanced, text) => {
	text.remove(7)
	text.remove(7)
  })
  
  tooltip.addAdvanced('toms_storage:ts.inventory_connector', (item, advanced, text) => {
    if (tooltip.shift) {
	  text.remove(1)
	  text.remove(1)
	  text.remove(1)
    }
  })
  tooltip.addAdvanced('toms_storage:ts.storage_terminal', (item, advanced, text) => {
    if (tooltip.shift) {
	  text.remove(1)
	  text.remove(1)
    }
  })
})

// durability tooltip for items that don't have it
ItemEvents.tooltip(event => {
    event.addAdvanced(['supplementaries:slingshot', 'supplementaries:wrench', 'supplementaries:flute', 'aquaculture:iron_fishing_rod'], (item, advanced, text) => {
          const maxDurability = item.getMaxDamage();
          const currentDurability = item.getMaxDamage() - item.getDamageValue();
          const durabilityText = currentDurability === maxDurability 
            ? `${maxDurability}` 
            : `${currentDurability}/${maxDurability}`;
		  let mediumDurability = (maxDurability / 2) 
		  let lowDurability = (maxDurability / 5)
            if (currentDurability == maxDurability) {
                text.add(Text.gray(`Durability: ${maxDurability}`));
			} else if (currentDurability < maxDurability && currentDurability > mediumDurability && !text.toString().includes("durability")) {
                text.add(Text.gray(`Durability: §a${currentDurability} §7/ ${maxDurability}`));
			} else if (currentDurability < maxDurability && currentDurability > lowDurability && !text.toString().includes("durability")) {
                text.add(Text.gray(`Durability: §6${currentDurability} §7/ ${maxDurability}`));
			} else if (currentDurability < maxDurability && currentDurability < lowDurability && !text.toString().includes("durability")) {
                text.add(Text.gray(`Durability: §c${currentDurability} §7/ ${maxDurability}`));
			}
	})
})

// selective tooltip removal
ItemEvents.tooltip(tooltip => {
	function filter(textList,substring) {
		textList.removeIf(comp => comp.toFlatList().stream().anyMatch(flatComp => flatComp.string.includes(substring)))
	}
    tooltip.addAdvanced(['minecraft:crossbow'], (item, advanced, text) => {
		filter(text, "Power")
    })
    tooltip.addAdvanced('echochest:echo_chest', (item, advanced, text) => {
		filter(text, "Collects")
    })
    tooltip.addAdvanced('vc_gliders:paraglider_wood', (item, advanced, text) => {
		filter(text, "Installed")
		filter(text, "Nether")
    })
    tooltip.addAdvanced('upgrade_aquatic:jellyfish_bucket', (item, advanced, text) => {
		filter(text, "Yields")
    })
})