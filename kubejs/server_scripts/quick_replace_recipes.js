// priority: 0
// script by asof

ServerEvents.recipes(event => {
	// add redstone to buttons
	event.forEachRecipe({
		type: "minecraft:crafting_shapeless",
		output: "#minecraft:buttons",
		not: {input: "#minecraft:buttons"}
	}, recipe => {
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(8)
		event.shapeless(output,[ingredients[0],"minecraft:redstone"])
	})
	event.shapeless('8x quark:iron_button', ['#forge:ingots/iron', 'redstone']).id('quark:automation/crafting/iron_button')
	event.shapeless('8x quark:gold_button', ['#forge:ingots/gold', 'redstone']).id('quark:automation/crafting/gold_button')
	event.shapeless('8x caverns_and_chasms:silver_button', ['#forge:ingots/silver', 'redstone']).id('caverns_and_chasms:silver_button')
	event.shapeless('8x caverns_and_chasms:copper_button', ['#forge:ingots/copper', 'redstone']).id('caverns_and_chasms:copper_button')
	
	// add redstone to pressure plates
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#minecraft:pressure_plates",
		not: {input: "#minecraft:pressure_plates"}
	}, recipe => {
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(8)
		event.shaped(output, ['AAB'], {A: ingredients[0], B: 'redstone'})
	})
	
	// add redstone to misc
	event.shaped('4x tripwire_hook', ['A', 'B', 'C'], {A: '#forge:ingots/copper', B: '#minecraft:planks', C: 'redstone'}).id('minecraft:tripwire_hook')
	event.shaped('4x lever', ['A', 'B', 'C'], {A: 'stick', B: '#minecraft:stone_tool_materials', C: 'redstone'}).id('minecraft:lever')
	event.shaped('4x supplementaries:crank', [' A ', 'BBB', ' C '], {A: 'stick', B: '#minecraft:stone_tool_materials', C: 'redstone'}).id('supplementaries:crank')
})