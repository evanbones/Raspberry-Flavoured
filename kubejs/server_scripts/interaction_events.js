// priority: 0

// setting brushable mobs
const featherBrushables = ['minecraft:chicken', 'environmental:duck', 'autumnity:turkey', 'ecologics:penguin']
const stringBrushables = ['minecraft:sheep', 'minecraft:goat']
const friendBrushables = ['minecraft:wolf', 'minecraft:cat']

ItemEvents.entityInteracted('kubejs:copper_brush', function (event) {
// brushing featheries
    if (featherBrushables.includes(event.target.type)) {
		event.player.swing(event.hand, true)
  
		const now = new Date().getTime()
		const last = event.target.persistentData.lastBrushed ?? 0
		
		if (event.target.isBaby()) return
		if ((now - last) < 18e4) return
  
		event.target.persistentData.lastBrushed = now
		
		if (!event.player.isCreative()) {
			event.player.damageHeldItem(event.hand, 1)
        }
		
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
        event.level.spawnParticles('supplementaries:feather', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
        event.level.spawnParticles('minecraft:poof', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
		let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:feather')
			itemEntity.y = event.target.y + 0.5
			itemEntity.x = event.target.x
			itemEntity.z = event.target.z
			itemEntity.motionY = 0.3
			itemEntity.spawn()
	}
	
// brushing stringies
    if (stringBrushables.includes(event.target.type)) {
		event.player.swing(event.hand, true)
  
		const now = new Date().getTime()
		const last = event.target.persistentData.lastBrushed ?? 0
		
		if (event.target.nbt.Sheared == 1 || event.target.isBaby()) return
		if ((now - last) < 18e4) return
  
		event.target.persistentData.lastBrushed = now
		
		if (!event.player.isCreative()) {
			event.player.damageHeldItem(event.hand, 1)
        }
		
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
        event.level.spawnParticles('minecraft:poof', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
		let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:string')
			itemEntity.y = event.target.y + 0.5
			itemEntity.x = event.target.x
			itemEntity.z = event.target.z
			itemEntity.motionY = 0.3
			itemEntity.spawn()
	}
	
// brushing yaks
    if (event.target.type === 'environmental:yak') {
		event.player.swing(event.hand, true)
  
		const now = new Date().getTime()
		const last = event.target.persistentData.lastBrushed ?? 0
		
		if (event.target.nbt.Sheared == 1 || event.target.isBaby()) return
		if ((now - last) < 18e4) return
  
		event.target.persistentData.lastBrushed = now
		
		if (!event.player.isCreative()) {
			event.player.damageHeldItem(event.hand, 1)
        }
		
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
        event.level.spawnParticles('minecraft:poof', true, event.target.x, event.target.y+0.75, event.target.z, 0.25, 0, 0.25, 3, 0.05)
		let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('environmental:yak_hair')
			itemEntity.y = event.target.y + 0.65
			itemEntity.x = event.target.x
			itemEntity.z = event.target.z
			itemEntity.motionY = 0.3
			itemEntity.spawn()
	}
	
    // brushing friends
        if (friendBrushables.includes(event.target.type)) {
            event.player.swing(event.hand, true)
      
            const now = new Date().getTime()
            const last = event.target.persistentData.lastBrushed ?? 0
            
            let playerUUID = event.player.getStringUuid()
            if (!event.target.nbt.Owner === playerUUID) return
            if ((now - last) < 18e4) return
      
            event.target.persistentData.lastBrushed = now
            
            if (!event.player.isCreative()) {
                event.player.damageHeldItem(event.hand, 1)
            }
            
            event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
            event.level.spawnParticles('minecraft:poof', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
            event.level.spawnParticles('minecraft:heart', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
            event.target.mergeNbt({CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ActiveEffects: [{ShowParticles: 1, Id: 10, Duration: 200, Ambient: 0, "forge:id": "minecraft:regeneration", Amplifier: 0}]})
        }
})

// shearing bears
ItemEvents.entityInteracted(event => {
    if (event.item.hasTag('raspberry_flavoured:shears') && event.target.type == "naturalist:bear") {
        event.player.swing(event.hand, true)
        if (event.target.nbt.Sheared == 0 && !event.target.isBaby()) {
            // damage item, shear sound, set bear to sheared and make it angry
            event.player.damageHeldItem(event.hand, 1)
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.sheep.shear', 'players', 1, 1)
			event.target.mergeNbt({Sheared:1})
            if (!event.player.isCreative()) {
				event.target.mergeNbt({AngerTime:600})
				event.target.setTarget(event.player)
			}
			
			// minimum and maximum amount of fur drops
			let furMax = 3
			let furMin = 1
			
			// spawn fur
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('naturalist:bear_fur')
			itemEntity.y = event.target.y + 0.5
			itemEntity.x = event.target.x
			itemEntity.z = event.target.z
			itemEntity.item.count = Math.floor(Math.random() * (furMax - furMin + 1) + furMin)
			itemEntity.motionY = 0.36
			itemEntity.spawn()
        }
    }
})

// taming ocelots
ItemEvents.entityInteracted(event => {
    if (event.item.id === 'kubejs:cat_food' && event.target.type === 'minecraft:ocelot') {
		event.player.swing(event.hand, true)

        if (event.target.nbt.Trusting == 1) {
		    if (!event.player.isCreative()) {
                event.item.count --
                event.player.giveInHand('minecraft:bowl')
            }

            const catVars = [
                "minecraft:white",
                "minecraft:black",
                "minecraft:red",
                "minecraft:siamese",
                "minecraft:british_shorthair",
                "minecraft:calico",
                "minecraft:persian",
                "minecraft:ragdoll",
                "minecraft:tabby",
                "minecraft:all_black",
                "minecraft:jellie",
                "moremobvariants:doug",
                "moremobvariants:gray_tabby",
                "moremobvariants:tortoiseshell"
            ]
            const random = Math.floor(Math.random() * catVars.length)

            let ocelotData = event.target.nbt
            delete ocelotData.UUID

            event.server.runCommandSilent(`particle minecraft:heart ${event.target.x} ${event.target.y} ${event.target.z} 0.5 0.25 0.5 0.125 5 force`)

            let cat = event.player.level.getBlock(event.target.x, event.target.y, event.target.z).createEntity("cat")
            cat.mergeNbt(ocelotData)
            cat.mergeNbt({Owner: event.player.stringUuid})
            cat.mergeNbt({VariantID: catVars[random]})
            cat.mergeNbt({ActiveEffects: [{"forge:id": "minecraft:speed", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 1, Amplifier: 0}, {"forge:id": "minecraft:regeneration", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 10, Amplifier: 0}, {"forge:id": "minecraft:resistance", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 11, Amplifier: 0}]})
            cat.spawn()
            event.target.discard()
        }
    }
})

// feeding cat food
ItemEvents.entityInteracted(event => {
    if (event.item.id === 'kubejs:cat_food') {
        if (event.target.type === 'minecraft:cat') {
		event.player.swing(event.hand, true)
        if (!event.player.isCreative()) {
            event.item.count --
            event.player.giveInHand('minecraft:bowl')
        }
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.generic.eat', 'players', 1, 1)
        event.server.runCommandSilent(`particle farmersdelight:star ${event.target.x} ${event.target.y+0.5} ${event.target.z} 0.2 0 0.2 0.05 4 force`)
        event.target.mergeNbt({ActiveEffects: [{"forge:id": "minecraft:speed", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 1, Amplifier: 0}, {"forge:id": "minecraft:regeneration", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 10, Amplifier: 0}, {"forge:id": "minecraft:resistance", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 11, Amplifier: 0}]})
        }
    }
})

// oxidizing copper golems
ItemEvents.entityInteracted(event => {
    if (event.item.id === "additionaladditions:copper_patina" && event.target.type == "caverns_and_chasms:copper_golem") {
        event.player.swing(event.hand, true)
        if (event.target.nbt.Oxidation == 0 && event.target.nbt.Waxed == 0) {
            if (!event.player.isCreative()) {
				event.item.count --
			}
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_patina.apply', 'players', 1, 1)
			event.target.mergeNbt({Oxidation:1,OxidationTime:350000})
        } else if (event.target.nbt.Oxidation == 1 && event.target.nbt.Waxed == 0) {
            if (!event.player.isCreative()) {
				event.item.count --
			}
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_patina.apply', 'players', 1, 1)
			event.target.mergeNbt({Oxidation:2,OxidationTime:350000})
        } else if (event.target.nbt.Oxidation == 2 && event.target.nbt.Waxed == 0) {
            if (!event.player.isCreative()) {
				event.item.count --
			}
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_patina.apply', 'players', 1, 1)
            let golemData = event.target.nbt
            delete golemData.UUID

            let golem = event.player.level.getBlock(event.target.x, event.target.y, event.target.z).createEntity("caverns_and_chasms:oxidized_copper_golem")
            golem.mergeNbt(golemData)
            golem.spawn()
            event.target.discard()
        }
    }
})

// reattach snow golem pumpkin
ItemEvents.entityInteracted(event => {
    if (event.target.type === 'minecraft:snow_golem') {
        if (event.item.id === "minecraft:carved_pumpkin") {
            event.player.swing(event.hand, true)
            if (event.target.nbt.Pumpkin == 0) {
                event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'auditory:block.gourd.hit', 'players', 1, 1)
                event.target.mergeNbt({Pumpkin:1})
                if (!event.player.isCreative()) {
                    event.item.count --
                }
            }
        }
    }
})

// feeding magma to frogs
ItemEvents.entityInteracted(event => {
    if (event.item.id === "mynethersdelight:hot_cream_cone" && event.target.type === "minecraft:frog") {
        event.player.swing(event.hand, true)
        event.server.schedule(0.0001, callback => {
            event.player.stopUsingItem()
        })
        event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.frog.tongue', 'players', 1, 1)
        event.level.spawnParticles('minecraft:heart', true, event.target.x, event.target.y, event.target.z, 0.2, 0, 0.2, 3, 0.05)
        event.level.spawnParticles('minecraft:item mynethersdelight:hot_cream_cone', true, event.target.x, event.target.y, event.target.z, 0.25, 0.25, 0.25, 15, 0.05)
        if (!event.player.isCreative()) {
            event.item.count --
        }
		let itemEntity = event.level.createEntity("item")
        if (event.target.nbt.variant === "minecraft:temperate") {
			itemEntity.item = ('minecraft:ochre_froglight')
        }
        if (event.target.nbt.variant === "minecraft:warm") {
			itemEntity.item = ('minecraft:pearlescent_froglight')
        }
        if (event.target.nbt.variant === "minecraft:cold") {
			itemEntity.item = ('minecraft:verdant_froglight')
        }
		itemEntity.y = event.target.y + 0.25
		itemEntity.x = event.target.x
		itemEntity.z = event.target.z
		itemEntity.motionY = 0.25
		itemEntity.spawn()
    }
})

// loot bag item interaction
ItemEvents.rightClicked(event => {
    if (event.item.id === 'kubejs:loot_bag') {
	// remove one loot bag if the player isnt in creative
		if (!event.player.isCreative()) {
		event.item.count --
		}
		// swing arm, play the bundle sound and spawn loot
		event.player.swing(event.hand, true)
		event.level.playSound(null, event.player.x, event.player.y, event.player.z, 'item.bundle.drop_contents', 'players', 1, 1)
		event.server.runCommandSilent(`execute as ${event.entity.username} run loot spawn ${event.player.x} ${event.player.y+0.2} ${event.player.z} loot additionaladditions:mysterious_bundle`)
    }
})

// recovery compass item interaction
ItemEvents.rightClicked(event => {
    if (event.item.id === 'minecraft:recovery_compass') {
		event.player.swing(event.hand, true)
        // "event.player.x.toFixed(3)" and "event.player.z.toFixed(3)" are the player's X and Z coords cut off at 3 decimals, like how caverns and chasms does it
		event.player.displayClientMessage('Latitude: ' + event.player.x.toFixed(3) + ', Longitude: ' + event.player.z.toFixed(3), true)
    }
})

// soap & brush interactions
BlockEvents.rightClicked(event => {
    // set which block turns into what
    global.soapingMap = {
        'quark:dirty_glass': 'minecraft:glass',
        'quark:dirty_glass_pane': 'minecraft:glass_pane'
    }
    global.brushingMap = {
        'quark:dirty_glass': 'minecraft:glass',
        'quark:dirty_glass_pane': 'minecraft:glass_pane'
    }
    Object.keys(global.soapingMap).forEach((value) => {
        if (event.item.id === 'supplementaries:soap') {
            if (event.block.id === value) {
                event.server.schedule(2, callback => {
                    event.player.stopUsingItem()
                })
                // remove the soap from the player's hand
                if (!event.player.isCreative()) {
                event.item.count --
                }
                // swing hand, damage item, play sounds and transform block
                event.player.swing(event.hand, true)
				event.server.runCommandSilent(`particle supplementaries:suds ${event.block.x} ${event.block.y+0.5} ${event.block.z} 0.5 0.25 0.5 0.01 15 force`)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'item.honeycomb.wax_on', 'players', 1, 1)
                event.block.set(global.soapingMap[event.block.id])
            }  
        }
    })
    Object.keys(global.brushingMap).forEach((value) => {
        if (event.item.id === 'kubejs:copper_brush') {
            if (event.block.id === value) {
                // damage brush
                if (!event.player.isCreative()) {
                event.player.damageHeldItem(event.hand, 1)
                }
                // swing hand, damage item, play sounds and transform block
                event.player.swing(event.hand, true)
				event.server.runCommandSilent(`particle wax_off ${event.block.x} ${event.block.y+0.5} ${event.block.z} 0.5 0.25 0.5 0.01 15 force`)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
                event.block.set(global.brushingMap[event.block.id])
            }  
        }
    })
})

// custom right click on block with water bottle interactions
BlockEvents.rightClicked(event => {
    // set which block turns into what
    global.wateringMap = {
        'minecraft:sand': 'minecraft:clay',
        'minecraft:red_sand': 'minecraft:clay',
        'atmospheric:arid_sand': 'minecraft:clay',
        'atmospheric:red_arid_sand': 'minecraft:clay'
    }
    Object.keys(global.wateringMap).forEach((value) => {
        if (event.item.id === 'minecraft:potion' && event.item.nbt.Potion == 'minecraft:water') {
            if (event.block.id === value) {
                event.server.schedule(2, callback => {
                    event.player.stopUsingItem()
                })
                // remove the water from the player's hand and give back an empty bottle if theyre not in creative
                if (!event.player.isCreative()) {
                event.item.count --
                event.player.giveInHand('minecraft:glass_bottle')
                }
                // swing hand, damage item, play sounds and transform block
                event.player.swing(event.hand, true)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'item.bottle.empty', 'players', 1, 1)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'entity.generic.splash', 'players', 1, 1)
                event.block.set(global.wateringMap[event.block.id])
            }  
        }
    })
    if (event.item.id === 'minecraft:potion' && event.item.nbt.Potion == 'minecraft:water') {
        if (event.block.hasTag('raspberry_flavoured:all_wood_logs') && !event.block.hasTag('raspberry_flavoured:driftwood')) {
            let props = event.block.getProperties()
            event.server.schedule(2, callback => {
                event.player.stopUsingItem()
            })
            if (!event.player.isCreative()) {
            event.item.count --
            event.player.giveInHand('minecraft:glass_bottle')
            }
            event.player.swing(event.hand, true)
            event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'item.bottle.empty', 'players', 1, 1)
            event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'entity.generic.splash', 'players', 1, 1)
            if (event.block.hasTag('raspberry_flavoured:logs')) {
                event.block.set('upgrade_aquatic:driftwood_log', props)
            }
            if (event.block.hasTag('raspberry_flavoured:wood')) {
                event.block.set('upgrade_aquatic:driftwood', props)
            }
            if (event.block.hasTag('raspberry_flavoured:stripped_logs')) {
                event.block.set('upgrade_aquatic:stripped_driftwood_log', props)
            }
            if (event.block.hasTag('raspberry_flavoured:stripped_wood')) {
                event.block.set('upgrade_aquatic:stripped_driftwood', props)
            }
        } 
    }
})

// latex wood stripping
BlockEvents.rightClicked([
    'minecraft:jungle_log',
    'minecraft:jungle_wood',
    'atmospheric:rosewood_log',
    'atmospheric:rosewood'
], event => {
    if (event.item.hasTag('forge:tools/axes')) {
        let props = event.block.getProperties()
        let latexChance = Math.floor(Math.random() * (4 - 1 + 1) + 1)
        if (latexChance === 4) {
            event.server.schedule(1, callback => {
                if (event.block.id === 'minecraft:jungle_log') {
                    event.block.set('kubejs:latex_jungle_log', props)
                }
                if (event.block.id === 'minecraft:jungle_wood') {
                    event.block.set('kubejs:latex_jungle_wood', props)
                }
                if (event.block.id === 'atmospheric:rosewood_log') {
                    event.block.set('kubejs:latex_rosewood_log', props)
                }
                if (event.block.id === 'atmospheric:rosewood') {
                    event.block.set('kubejs:latex_rosewood', props)
                }
            })
        }
    }
})

// latex wood bottling
BlockEvents.rightClicked([
    'kubejs:latex_jungle_log',
    'kubejs:latex_jungle_wood',
    'kubejs:latex_rosewood_log',
    'kubejs:latex_rosewood'
], event => {
    if (event.item.id === 'minecraft:glass_bottle') {
        let props = event.block.getProperties()
        if (!event.player.isCreative()) {
            event.item.count --
        }
        event.player.swing(event.hand, true)
        event.player.giveInHand('kubejs:latex_bottle')
        event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'item.bottle.fill', 'players', 1, 1)
        if (event.block.id === 'kubejs:latex_jungle_log') {
            event.block.set('minecraft:stripped_jungle_log', props)
        }
        if (event.block.id === 'kubejs:latex_jungle_wood') {
            event.block.set('minecraft:stripped_jungle_wood', props)
        }
        if (event.block.id === 'kubejs:latex_rosewood_log') {
            event.block.set('atmospheric:stripped_rosewood_log', props)
        }
        if (event.block.id === 'kubejs:latex_rosewood') {
            event.block.set('atmospheric:stripped_rosewood', props)
        }
    }
})

// shearing blocks only regular shears can
BlockEvents.rightClicked([
    'minecraft:flowering_azalea',
    'minecraft:flowering_azalea_leaves',
    'atmospheric:flowering_morado_leaves'
], event => {
    if (event.item.hasTag('raspberry_flavoured:shears')) {
        event.player.swing(event.hand, true)
        if (!event.player.isCreative()) {
			event.player.damageHeldItem(event.hand, 1)
        }
		
		let itemEntity = event.level.createEntity("item")
		itemEntity.y = event.block.y + 0.5
		itemEntity.x = event.block.x
		itemEntity.z = event.block.z
		itemEntity.motionY = 0.25
		
        let props = event.block.getProperties()
        event.server.schedule(1, callback => {
			if (event.block.id === 'minecraft:flowering_azalea') {
				event.block.set('minecraft:azalea', props)
				event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'block.flowering_azalea.break', 'players', 1, 1)
				itemEntity.item = ('ecologics:azalea_flower')
				itemEntity.spawn()
            }
            if (event.block.id === 'minecraft:flowering_azalea_leaves') {
                event.block.set('minecraft:azalea_leaves', props)
				event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'block.flowering_azalea.break', 'players', 1, 1)
				itemEntity.item = ('ecologics:azalea_flower')
				itemEntity.spawn()
            }
            if (event.block.id === 'atmospheric:flowering_morado_leaves') {
                event.block.set('atmospheric:morado_leaves', props)
				event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'entity.sheep.shear', 'players', 1, 1)
				itemEntity.item = ('atmospheric:yellow_blossoms')
				itemEntity.spawn()
            }
        })
    }
})

// bee disc interaction
BlockEvents.rightClicked(event => {
    if (event.block.hasTag('minecraft:beehives')) {
        if (event.item.hasTag('forge:shears')) {
            let honeyLevel = event.level.getBlock(event.block.x, event.block.y, event.block.z).properties.get("honey_level")
            if (honeyLevel == 5) {
                let discChanceFirst = Math.floor(Math.random() * (200 - 1 + 1) + 1)
                let discChanceSecond = Math.floor(Math.random() * (200 - 1 + 1) + 1)
                if (discChanceFirst == discChanceSecond) {
                    let itemEntity = event.level.createEntity("item")
                    itemEntity.item = ('windswept:music_disc_bumblebee')
                    itemEntity.y = event.block.y + 1
                    itemEntity.x = event.block.x
                    itemEntity.z = event.block.z
                    itemEntity.item.count = 1
                    itemEntity.motionY = 0.36
                    itemEntity.spawn()
                }
            }
        }
    }
})

// right click on water interaction (WIP)
ItemEvents.rightClicked(event => {
    // check held item
    if (event.item.id === 'minecraft:barrier') {
        // check player looking at water
        if (event.player.rayTrace().block.id === 'minecraft:water') {
            // subtract held item if not in creative, play bottle fill sound, give result item
            if (!event.player.isCreative()) {
                event.item.count --
            }
            event.player.swing(event.hand, true)
            event.server.runCommandSilent(`playsound minecraft:item.bottle.fill block @p ${event.player.rayTrace().block.x} ${event.player.rayTrace().block.y} ${event.player.rayTrace().block.z}`)
            event.player.giveInHand('minecraft:structure_void')
        } 
    }
})

// cancel interactions
BlockEvents.rightClicked(event => {
    if (event.item.id === 'spelunkery:portal_fluid_bottle') {
        if (event.block.id === 'minecraft:cauldron' || event.block.id === 'spelunkery:portal_cauldron') {
            event.cancel()
        }  
    }
    if (event.item.id === 'minecraft:music_disc_11') {
        if (event.block.id === 'oreganized:molten_lead_cauldron') {
            event.cancel()
        }  
    }
})

// cancel custom exopearl throwing if structure isnt found
const $Registry = Java.loadClass('net.minecraft.core.Registry')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')        
ItemEvents.rightClicked("kubejs:spirited_exopearl", event => {
    const {level,player} = event
    let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'raspberry_flavoured:spirited_exopearl_located')
    let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
    if (foundPos == null) {
        event.cancel()
    }
})

// creeper spores advancement
ItemEvents.rightClicked('savage_and_ravage:creeper_spores', event => {
    event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberry_flavoured:exploration/creeper_spores`)
})

// message in a bottle
ItemEvents.rightClicked('aquaculture:message_in_a_bottle', event => {
    event.player.swing(event.hand, true)
    event.server.runCommandSilent(`particle minecraft:item glass_bottle ${event.player.x} ${event.player.y+1} ${event.player.z} 0.1 0.1 0.1 0.1 20 force`)
    if (!event.player.isCreative()) {
        event.server.schedule(1, callback => {
            event.player.giveInHand('quark:clear_shard')
        })
    }
})

// net effects
ItemEvents.entityInteracted(event => {
	const netInteractables = ['naturalist:firefly', 'naturalist:caterpillar', 'naturalist:butterfly']
    if (event.item.id === "naturalist:bug_net" && netInteractables.includes(event.target.type)) {
        event.player.sweepAttack()
        event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:sound.swing', 'players', 0.5, 1)
        event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.item.pickup', 'players', 1, 1)
    }
})

// catching fish with net (script by Baisylia <3)
ItemEvents.entityInteracted(event => { 
	const fishMap = { 
	'minecraft:cod': 'minecraft:cod',
	'minecraft:salmon': 'minecraft:salmon',
	'minecraft:pufferfish': 'minecraft:pufferfish',
	'minecraft:tropical_fish': 'minecraft:tropical_fish',
	'minecraft:squid': 'miners_delight:squid',
	'minecraft:glow_squid': 'miners_delight:glow_squid',
	'upgrade_aquatic:perch': 'upgrade_aquatic:perch',
	'upgrade_aquatic:pike': 'upgrade_aquatic:pike',
	'upgrade_aquatic:lionfish': 'upgrade_aquatic:lionfish',
	'aquaculture:blackfish': 'aquaculture:blackfish',
	'aquaculture:atlantic_herring': 'aquaculture:atlantic_herring',
	'aquaculture:pollock': 'aquaculture:pollock',
	'aquaculture:bayad': 'aquaculture:bayad',
	'aquaculture:boulti': 'aquaculture:boulti',
	'aquaculture:capitaine': 'aquaculture:capitaine',
	'aquaculture:synodontis': 'aquaculture:synodontis',
	'aquaculture:bluegill': 'aquaculture:bluegill',
	'aquaculture:brown_trout': 'aquaculture:brown_trout',
	'aquaculture:carp': 'aquaculture:carp',
	'aquaculture:gar': 'aquaculture:gar',
	'aquaculture:tambaqui': 'aquaculture:tambaqui',
	'aquaculture:red_grouper': 'aquaculture:red_grouper',
	'aquaculture:tuna': 'aquaculture:tuna',
	'naturalist:bass': 'naturalist:bass',
	'environmental:koi': 'environmental:koi',
	'sullysmod:lanternfish': 'sullysmod:lanternfish'
	};
	if (event.item.id === "naturalist:bug_net") {
		if (fishMap.hasOwnProperty(event.target.type)) {
			event.player.swing(event.hand, true);
			event.player.sweepAttack()
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:sound.swing', 'players', 0.5, 1)
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.item.pickup', 'players', 1, 1)
			event.target.discard();
			if (!event.player.isCreative()) {
				event.player.damageHeldItem(event.hand, 1);
			}
			event.server.schedule(1, () => {
				event.player.giveInHand(fishMap[event.target.type]);
			});
		}
	}
});

// cooldowns
ItemEvents.rightClicked('minecraft:splash_potion', event => {
    event.player.addItemCooldown('minecraft:splash_potion', 200)
})
ItemEvents.rightClicked('minecraft:lingering_potion', event => {
    event.player.addItemCooldown('minecraft:lingering_potion', 200)
})
ItemEvents.rightClicked('minecraft:snowball', event => {
    event.player.addItemCooldown('minecraft:snowball', 5)
})
ItemEvents.rightClicked('raspberry:ashball', event => {
    event.player.addItemCooldown('raspberry:ashball', 5)
})
ItemEvents.rightClicked('raspberry:rose_gold_bomb', event => {
    event.player.addItemCooldown('raspberry:rose_gold_bomb', 10)
})