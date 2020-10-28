#!/usr/bin/env node
//The first line that begins with #! is usually called a “shebang.” This is normally only used on Linux or UNIX operating systems to inform the system what type of script is included in the rest of the text file. However, this first line is also required for Node.js scripts to be installed and run properly on macOS and Windows.


//https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs



//to start, type npm init - this will initialize the prject and create the package.json
    //package.json is like the brains of the application

//Next, open the package.json file in the root of the project in your text editor. Change the main value to bin/index.js. Add a new key for bin with the following text.
    //must be done 2x, once for main: and once for     
//add new key for bin
        // "bin": {
        //     "hello": "./bin/index.js"
        //   }

//can now run by typing node .

//enter <npm install -g .> to install this script globally
//to uninstall <npm uninstall -g hello-cli>
// Tip: You can list all globally installed Node.js modules using npm ls -g --depth=0.


console.log('Hello!')

//must install node-fetch
    //npm install node-fetch;

//examnple for pokemon thing
// const fetch = require ("node-fetch");
// const fs = require ('fs');
// let poke_input = fs.readFileSync('bin/input.txt', 'utf8')

// poke_input = poke_input.replace(/(\r)/gm,'')
// let poke_input_arr = poke_input.split('\n')
// poke_input_arr = poke_input_arr.map(entry => entry.toLocaleLowerCase())
// async function read_pokemon_data(name) {
//     await fetch('https://pokeapi.co/api/v2/pokemon/${name}')
//     .then(data => data.json())
//     .then(data => {
//         console.log(name[0].toUpperCase) + name.subsring(1) + ":" + data.types.map(element => element.type.name)
//     })
//     .catch(err => console.log(err))
// }
// poke_input_arr.forEach(entry => read_pokemon_data(entry))




