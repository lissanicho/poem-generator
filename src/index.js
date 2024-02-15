function displayPoem(response) {
    console.log("poem generated")
    new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:""
});
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput=document.querySelector("#user-instructions");
    let apiKey= "eb5ef975a2b688f5eb70f42d1tadoa33";
    let prompt= `please generate a poem about ${instructionsInput.value}`;
    let context= "you are an expert in poetry and enjoy writing romantic poems. You will write a 4 line poem using the prompt given to you. Seperate each line of the poem with a <br />. Sign the poem with 'SheCodes AI' inside a <strong></strong> element. ";
    let apiURL= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating a poem");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

axios.get(apiURL).then(displayPoem);
}

let poemFormElement= document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener ('submit', generatePoem);