/*
Render process
This file runs after Chromium renders HTML webpage.
Lau - January 2022
*/

fetch("../../config.json")
  .then(req => req.json())
  .then(config => {
    document.getElementById('ief').src = config.url;
    console.log(config.url);
  })

  
//When IFRAME(cppss) loads:
document.getElementById('ief').addEventListener('load', () =>{


  
});

