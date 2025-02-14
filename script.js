let scalefact = 1.1;  // Scaling factor for font size
let click_count = 1;  // Initial click count
const iObj = document.getElementById("img");  
const iLObj = document.getElementById("img-link"); 
const hObj = document.getElementById("ht");
const bObj = document.getElementById("btn-out");
// When the "NO" button is clicked, change the font size of both buttons
document.getElementById("no").addEventListener("click", () => {
    click_count++;  // Increment click count on each click
    let newSize = scalefact * click_count;  // Scale font size based on scalefact and click count
    document.getElementById("yes").style.fontSize = `${newSize}rem`;  // Apply new font size to YES button

    let newsize2 = scalefact / click_count;  // Adjust font size of NO button
    document.getElementById("no").style.fontSize = `${newsize2}rem`;  // Apply new font size to NO button
});

// When the "YES" button is clicked, replace it with an image
document.getElementById("yes").addEventListener("click", () => {
    iObj.src = `frog2.jpeg`; 
    iLObj.href="https://www.youtube.com/watch?v=jZ4uSpoQ7LE&autoplay=1";
    iLObj.target="_blank";
    hObj.innerHTML=`<h1>I love you so much <3</h1>`;
    bObj.innerHTML=`<h1>This is us btw</h1>`;

});
