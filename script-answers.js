$(function() {
	$.getJSON('petfinder_date.json')
		.then((res) => {
			const pets = res.petfinder.pets.pet;
			console.log(pets);
			//Exercise #1 
			//Create an array of objects like 
			/*
			{
				name: 'Animal Name',
				age: 'Animal Age',
				size: 'Animal Size',
				type: 'Animal Type'
			}
			*/
			const animalArray = pets.map((animal) => {
				return {
					name: animal.name.$t,
					age: animal.age.$t,
					size: animal.size.$t,
					type: animal.animal.$t
				}
			});
			console.log(animalArray);
			//Exercise #2
			//Filter out the Dogs and map an array of just their names
			const dogNames = pets
				.filter( animal => animal.animal.$t === 'Dog' )
				.map( animal => animal.name.$t );
			
			console.log(dogNames);
			
			//Exercise #3
			//Filter out only animals that are a dog and are a mix
			//And output an object that looks like 
			/*
			{
				name: 'Dog Name'
				breed: 'Dog Breed'
			}
			*/
			const mixedDogs = pets
				.filter(dog => dog.animal.$t === 'Dog')
				.filter(dog => dog.mix.$t === 'yes')
				.map(dog => {
					return {
						name: dog.name.$t,
						breed: dog.breeds.breed.$t
					}
				});

			console.log(mixedDogs);
		});
});