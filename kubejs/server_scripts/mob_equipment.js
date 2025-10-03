// priority: 0

// make mobs not drop equipment
EntityEvents.spawned((event) => {
    const { entity } = event;
    const blacklistEntities = ['create:carriage_contraption', 'create:contraption', 'create:crafting_blueprint', 'create:gantry_contraption', 'create:seat', 'create:stationary_contraption', 'minecraft:pig', 'minecraft:strider', 'minecraft:horse', 'minecraft:wolf', 'minecraft:cat', 'minecraft:axolotl', 'minecraft:fox', 'minecraft:rabbit', 'minecraft:frog', 'environmental:slabfish']
    if (!entity.alive || blacklistEntities.includes(entity.type)) return;
  
    entity.mergeNbt({
      ArmorDropChances: [NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)],
      HandDropChances: [NBT.f(0), NBT.f(0)],
    })
});
EntityEvents.spawned((event) => {
    const { entity, entity: { nbt } } = event;
    const blacklistEntities = ['create:carriage_contraption', 'create:contraption', 'create:crafting_blueprint', 'create:gantry_contraption', 'create:seat', 'create:stationary_contraption', 'minecraft:pig', 'minecraft:strider', 'minecraft:horse', 'minecraft:wolf', 'minecraft:cat', 'minecraft:axolotl', 'minecraft:fox', 'minecraft:rabbit', 'minecraft:frog', 'environmental:slabfish']
    if (!entity.alive || blacklistEntities.includes(entity.type)) return;
  
    nbt.put('ArmorDropChances', NBT.listTag([NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)]));
    nbt.put('HandDropChances', NBT.listTag([NBT.f(0), NBT.f(0)]));
    entity.mergeNbt(nbt);
});

// tiered mob equipment
EntityEvents.spawned(event => {
    const entity = event.entity
	// give skeletons weapons
    if (entity.type === 'minecraft:skeleton') {
        if (Math.floor(Math.random() * (3 - 1 + 1) + 1) === 1) {
			if (Math.floor(Math.random() * (2 - 1 + 1) + 1) === 1) {
				entity.setItemSlot("mainhand", Item.of('wooden_sword'))
			} else {
				entity.setItemSlot("mainhand", Item.of('stone_sword'))
			}
        } else {
            entity.setItemSlot("mainhand", Item.of('bow'))
		}
    }
	// give skeletons armour
    if (entity.type === 'minecraft:skeleton') {
        if (Math.floor(Math.random() * (8 - 1 + 1) + 1) === 1) {
            entity.setItemSlot("head", Item.of('leather_helmet'))
        }
        if (Math.floor(Math.random() * (14 - 1 + 1) + 1) === 1) {
            entity.setItemSlot("chest", Item.of('leather_chestplate'))
        }
        if (Math.floor(Math.random() * (12 - 1 + 1) + 1) === 1) {
            entity.setItemSlot("legs", Item.of('leather_leggings'))
        }
        if (Math.floor(Math.random() * (10 - 1 + 1) + 1) === 1) {
            entity.setItemSlot("feet", Item.of('leather_boots'))
        }
    }
	
	// give withered weapons
    if (entity.type === 'minecraft:wither_skeleton') {
        if (Math.floor(Math.random() * (6 - 1 + 1) + 1) === 1) {
            entity.setItemSlot("mainhand", Item.of('bow'))
        } else {
            entity.setItemSlot("mainhand", Item.of('iron_sword'))
		}
    }
	// give withered armour
    if (entity.type === 'minecraft:wither_skeleton') {
        if (Math.floor(Math.random() * (10 - 1 + 1) + 1) === 1) {
            entity.setItemSlot("head", Item.of('alloyed:steel_helmet'))
        }
        if (Math.floor(Math.random() * (16 - 1 + 1) + 1) === 1) {
            entity.setItemSlot("chest", Item.of('alloyed:steel_chestplate'))
        }
        if (Math.floor(Math.random() * (13 - 1 + 1) + 1) === 1) {
            entity.setItemSlot("legs", Item.of('alloyed:steel_leggings'))
        }
        if (Math.floor(Math.random() * (8 - 1 + 1) + 1) === 1) {
            entity.setItemSlot("feet", Item.of('alloyed:steel_boots'))
        }
    }
})

// misc. mob equipment
EntityEvents.spawned(event => {
	// give skeletons quivers
    const entity = event.entity
	const quiverWearers = ['minecraft:skeleton', 'minecraft:stray', 'dungeons_mobs:mossy_skeleton', 'dungeons_mobs:sunken_skeleton']
	
    if (quiverWearers.includes(entity.type)) {
        if (Math.floor(Math.random() * (5 - 1 + 1) + 1) === 1) {
            event.server.schedule(1, callback => {
            if (entity.mainHandItem === 'minecraft:bow') {
                entity.mergeNbt({Quiver: {ForgeCaps: {Parent: {Size: 6, Items: [{Slot: 0, id: "minecraft:arrow", Count: 1}], SelectedSlot: 0}}, id: "supplementaries:quiver", Count: 1}})
                }
            })
        }
    }
	
	// replace drowned's tridents with prismarine shard
    if (entity.type === 'minecraft:drowned') {
        if (entity.mainHandItem === 'minecraft:trident') {
            entity.setItemSlot("mainhand", Item.of('minecraft:prismarine_shard'))
        }
    }
	// replace drowned's nautilus shells with ammonite
    if (entity.type === 'minecraft:drowned') {
        if (entity.offHandItem === 'minecraft:nautilus_shell') {
            entity.setItemSlot("offhand", Item.of('kubejs:raw_ammonite'))
        }
    }

	// frostbitten snowballs
    if (entity.type == 'dungeons_mobs:frozen_zombie') {
        if (entity.mainHandItem === 'minecraft:snowball') {
            entity.setItemSlot("mainhand", Item.of('minecraft:air'))
        }
        if (entity.offHandItem === 'minecraft:snowball') {
            entity.setItemSlot("offhand", Item.of('minecraft:air'))
        }
        let snowballChance = Math.floor(Math.random() * (4 - 0 + 1) + 0)
		event.server.schedule(1, callback => {
			if (snowballChance === 4) {
				entity.setItemSlot("mainhand", Item.of('minecraft:snowball'))
			}
		})
    }
	
	// remove vex swords
    if (entity.type === 'minecraft:vex') {
        entity.setItemSlot("mainhand", Item.of('minecraft:air'))
    }
})

// tiered equipment dependent mob drops
EntityEvents.death(event => {
    const entity = event.entity
	if (entity.type !== 'minecraft:player') {
		if (entity.headArmorItem === 'minecraft:leather_helmet' || entity.chestArmorItem === 'minecraft:leather_chestplate' || entity.legsArmorItem === 'minecraft:leather_leggings' || entity.feetArmorItem === 'minecraft:leather_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:rabbit_hide')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			itemEntity.item.count = 1
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'minecraft:chainmail_helmet' || entity.chestArmorItem === 'minecraft:chainmail_chestplate' || entity.legsArmorItem === 'minecraft:chainmail_leggings' || entity.feetArmorItem === 'minecraft:chainmail_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:chain')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			itemEntity.item.count = 1
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'minecraft:iron_helmet' || entity.chestArmorItem === 'minecraft:iron_chestplate' || entity.legsArmorItem === 'minecraft:iron_leggings' || entity.feetArmorItem === 'minecraft:iron_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:iron_nugget')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 1
			itemEntity.item.count = Math.floor(Math.random() * (3 - 1 + 1) + 1)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'minecraft:golden_helmet' || entity.chestArmorItem === 'minecraft:golden_chestplate' || entity.legsArmorItem === 'minecraft:golden_leggings' || entity.feetArmorItem === 'minecraft:golden_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:gold_nugget')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 1
			itemEntity.item.count = Math.floor(Math.random() * (3 - 1 + 1) + 1)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'copperized:copper_helmet' || entity.chestArmorItem === 'copperized:copper_chestplate' || entity.legsArmorItem === 'copperized:copper_leggings' || entity.feetArmorItem === 'copperized:copper_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('create:copper_nugget')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 1
			itemEntity.item.count = Math.floor(Math.random() * (3 - 1 + 1) + 1)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'alloyed:steel_helmet' || entity.chestArmorItem === 'alloyed:steel_chestplate' || entity.legsArmorItem === 'alloyed:steel_leggings' || entity.feetArmorItem === 'alloyed:steel_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('alloyed:steel_nugget')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 1
			itemEntity.item.count = Math.floor(Math.random() * (2 - 0 + 1) + 0)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
	}
})

// misc. equipment dependent mob drops
EntityEvents.death(event => {
    const entity = event.entity
	// make skeletons holding bows drop arrows
    if (entity.type === 'minecraft:skeleton') {
        if (entity.mainHandItem === 'minecraft:bow') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:arrow')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 2, min number is 0
			itemEntity.item.count = Math.floor(Math.random() * (2 - 0 + 1) + 0)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
        }
	}
	// make drowned holding prismarine drop them
    if (entity.type === 'minecraft:drowned') {
        if (entity.mainHandItem === 'minecraft:prismarine_shard') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:prismarine_shard')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			itemEntity.item.count = 1
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
        }
	}
	// make drowned holding fishing rods drop worms
    if (entity.type === 'minecraft:drowned') {
        if (entity.mainHandItem === 'minecraft:fishing_rod') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('aquaculture:worm')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 2
			itemEntity.item.count = Math.floor(Math.random() * (3 - 2 + 1) + 2)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
        }
	}
	// make drowned holding ammonite drop them
    if (entity.type === 'minecraft:drowned') {
        if (entity.offHandItem === 'kubejs:raw_ammonite') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('kubejs:raw_ammonite')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			itemEntity.item.count = 1
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
        }
	}
})