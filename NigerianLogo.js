const container1=document.querySelector(".container-1");
const anchors = document.querySelectorAll('a');




for(let i = 0; i<logoImages.length; i+=1){
	const title = logoImages[i].title;
	const fileName = logoImages[i].filename;
	const category = logoImages[i].category.join(' / ')
	const url = `https://nigerialogos.com/logos/${fileName}/${fileName}.png`;
	container1.innerHTML +=`
	  <div class='card'>
           <div class='image-container'>
                 <img src='${url}' class="image-style">
           </div> 
           <p class="first-title">${title}</p>
           <p class="second-title">${category}</p>
   	   </div>

	`
}

document.getElementById('Categories').addEventListener('change', function(e){

	const optionValue = e.target.value;
	console.log(optionValue);
	container1.innerHTML = '';

	for(let i = 0; i<logoImages.length; i+=1){
		if(logoImages[i].category.includes(optionValue)){
	const title = logoImages[i].title;
	const fileName = logoImages[i].filename;
	const category = logoImages[i].category.join(' / ')
	const url = `https://nigerialogos.com/logos/${fileName}/${fileName}.png`;
	container1.innerHTML +=`
	  <div class='card'>
           <div class='image-container'>
                 <img src='${url}' class="image-style">
           </div> 
           <p class="first-title">${title}</p>
           <p class="second-title">${category}</p>
   	   </div>

	`
		}
	}
})

for(let i = 0; i<anchors.length; i+=1){
	anchors[i].addEventListener('click', function(e){
		const letter = e.target.textContent;
		container1.innerHTML = '';

		for(let i = 0; i<logoImages.length; i+=1){
		if(logoImages[i].title.startsWith(letter)){
	const title = logoImages[i].title;
	const fileName = logoImages[i].filename;
	const category = logoImages[i].category.join(' / ')
	const url = `https://nigerialogos.com/logos/${fileName}/${fileName}.png`;
	container1.innerHTML +=`
	  <div class='card'>
           <div class='image-container'>
                 <img src='${url}' class="image-style">
           </div> 
           <p class="first-title">${title}</p>
           <p class="second-title">${category}</p>
   	   </div>

	`
		}
	}
	
	})
}







