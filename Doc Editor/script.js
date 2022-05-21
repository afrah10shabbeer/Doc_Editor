
//Bold, Underline and Italic Button
const boldBtn = document.querySelector('#bold-btn');
const underlineBtn = document.querySelector('#underline-btn');
const italicBtn = document.querySelector('#italic-btn');

//Text Alignment buttons
const leftAlignBtn = document.querySelector('#left-align-btn');
const justifyAlignBtn = document.querySelector('#justify-align-btn');
const centerAlignBtn = document.querySelector('#center-align-btn');
const rightAlignBtn = document.querySelector('#right-align-btn');

//Text Styling buttons
const colorBtn = document.querySelector('#color-btn');
const fontTypeBtn = document.querySelector('#input-font-btn');
const fontSizeBtn = document.querySelector('#font-size-btn');

//Type of file buttons
const newBtn = document.querySelector('#new-btn');
const txtBtn = document.querySelector('#txt-btn');
const pdfBtn = document.querySelector('#pdf-btn');

const content = document.querySelector('#content'); 
const fileName = document.querySelector('#filename-input'); 

boldBtn.addEventListener("click",() =>{
	document.execCommand("bold");
})

underlineBtn.addEventListener("click",() =>{
	document.execCommand("underline");
})

italicBtn.addEventListener("click",() =>{
	document.execCommand("italic");
})

leftAlignBtn.addEventListener("click",() =>{
	document.execCommand("justifyLeft");
})

justifyAlignBtn.addEventListener("click",() =>{
	document.execCommand("justifyFull");
})

centerAlignBtn.addEventListener("click",() =>{
	document.execCommand("justifyCenter");
})

rightAlignBtn.addEventListener("click",() =>{
	document.execCommand("justifyRight");
})

colorBtn.addEventListener("input",() =>{
	document.execCommand("forecolor",false,colorBtn.value);
})

fontTypeBtn.addEventListener("input",() =>{
	document.execCommand("fontName",false,fontTypeBtn.value);
})

fontSizeBtn.addEventListener("input",() =>{
	document.execCommand("fontSize",false,fontSizeBtn.value);
})

newBtn.addEventListener("click",() =>{
	content.innerHTML = "";
})

txtBtn.addEventListener("click",() =>{
	const a = document.createElement("a");
	const blob = new Blob ([content.innerText]);
	const dataUrl = URL.createObjectURL(blob);
	a.href = dataUrl;
	a.download = fileName.value + ".txt";
	a.click();
})

//html to pdf converter code link
pdfBtn.addEventListener('click',()=>{
	html2pdf().from(content).save(fileName.value);
})
