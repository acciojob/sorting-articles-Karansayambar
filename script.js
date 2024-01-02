//your JS code here. If required.

const bands = ['The Plot in You', 
			   'The Devil Wears Prada', 
			   'Pierce the Veil', 'Norma Jean', 
			   'The Bled', 'Say Anything', 
			   'The Midway State', 
			   'We Came as Romans', 
			   'Counterparts', 
			   'Oh, Sleeper', 
			   'A Skylit Drive', 
			   'Anywhere But Here', 
			   'An Old Dog'
			  ];


document.addEventListener("DOMContentLoaded" , function () {
	const list = document.CreateElement('ul');

	bands.forEach((item) =>{
		const li = document.CreateElement('li');
		li.textContent = item;
		list.appendChild(li);
	});
	document.body.appendChild(list);
});
