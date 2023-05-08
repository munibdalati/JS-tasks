const txt = document.getElementById("random_paragraph");
let myP= txt.innerText
function highlightWords(){
    let output = "";
    let words = myP.split(" ");
    let replacementword = ""; 
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length >= 8) { 
            replacementword = "<span class='lightext'>" + word + "</span>";  
        } 
        else {
            replacementword = word;  
        }
        output = output + " " + replacementword + " ";  
    }
    return output;
}
myP = highlightWords();

// Add a link back to the source of the text after the paragraph tag
let text = document.getElementById("random_paragraph")
let link = document.createElement("a")
link.href = "https://google.com/"
link.textContent = "Source"
text.after(link)


// Split each new sentence on to a separate line in the paragraph text.
// A sentence can be assumed to be a string of text terminated with a period (.)

let arr = myP.split('. ')
for (let i = 0; i < arr.length; i++) {
    arr[i]= `${arr[i]}<br>` 
}

txt.innerHTML= arr.join('');
console.log(arr);

//word count

let array = myP.split(" ")
let wordLength = array.length

let headline = document.querySelector("h1")
let p = document.createElement("p");
p.textContent=wordLength
headline.after(p);



