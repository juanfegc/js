/* js godzillaParams.js */

function createGodzilla({color, material = 'metal', weight = 200, sound, powers}){
	console.log('...Godzilla create')
}

createGodzilla({
	color: 'blue',
	material: 'plastic',
	sound: 'GROARRR',
	powers: ['lighting', 'nuclear bomb']
})


const godzillaParams = {
	color: 'blue',
	material: 'plastic',
	sound: 'GROARRR',
	powers: ['lighting', 'nuclear bomb']
}

createGodzilla(godzillaParams)