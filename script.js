// //your JS code here. If required.

// const bands = ['The Plot in You', 
// 			   'The Devil Wears Prada', 
// 			   'Pierce the Veil',
// 			   'Norma Jean', 
// 			   'The Bled', 'Say Anything', 
// 			   'The Midway State', 
// 			   'We Came as Romans', 
// 			   'Counterparts', 
// 			   'Oh, Sleeper', 
// 			   'A Skylit Drive', 
// 			   'Anywhere But Here', 
// 			   'An Old Dog'
// 			  ];

// document.addEventListener("DOMContentLoaded", function () {
//   const list = document.getElementById('ul');

// 	const sortedBands = bands.sort((a, b) => {
//         return stripArticles(a) > stripArticles(b) ? 1 : -1;
//       });
	
//   bands.forEach((item) => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     list.appendChild(li);
//   });
// });

// function stripArticles(str) {
//       const articles = ['a', 'an', 'the'];
//       const words = str.split(' ');
//       if (articles.includes(words[0].toLowerCase())) {
//         words.shift();
//       }
//       return words.join(' ');
//     }

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function removeCommonWords(name) {
    const commonWords = ['a', 'an', 'the'];
    const words = name.split(' ');
    while (commonWords.includes(words[0].toLowerCase())) {
        words.shift();
    }
     return words.join(' ');
}
        const sortedBands = bands.sort((a, b) => removeCommonWords(a) > removeCommonWords(b) ? 1 : -1);
    
        const bandList = document.getElementById('bands');
        sortedBands.forEach(band => {
            const listItem = document.createElement('li');
            listItem.textContent = band;
            bandList.appendChild(listItem);
        });
