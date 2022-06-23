
const textInput = document.querySelector(".input-lg");
const findBtn = document.querySelector(".find");
const cleanBtn = document.querySelector(".clean");
// const screen = document.querySelector(".vowels");
const Vowels= document.querySelector(".vowels");

textInput.focus();

const vowelList = "aeiouöüä";

console.log(vowelList);

findBtn.onclick = () => {
    let text1 = textInput.value;
    findVowel(text1);
    textInput.focus();    
};

cleanBtn.onclick = () => {
    textInput.value = "";
    textInput.focus();
    Vowels.textContent = 0;
}


const findVowel = (txt) => {
    let sum=0;
    for (let i in txt) {       
        if (vowelList.includes(txt[i])){
            sum += 1;
        }
    }
    Vowels.textContent = sum;
}
