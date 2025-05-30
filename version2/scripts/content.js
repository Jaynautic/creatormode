const blockedList = ['https://www.pinterest.com/', 'https://x.com/', 'https://x.com/home']

const currentURL = window.location.href;
let websiteBlocked = false;

const mainTextStyle = '<h1 style="padding:0px; margin:0px; font-size:84px;" id="main-text">blocked!</h1>';
const secondTextStyle = '<h2 style="font-size:48px;" id="second-text">write 100 charcters of a story to unblock</h2>';
const inputBoxStyle = '<textarea style="width: 750px; height: 200px; padding: 12px 20px; box-sizing: border-box; border: 2px solid #ccc; border-radius: 4px; background-color: #f8f8f8; resize: none; color:black; font-size:16px; text-align: left; vertical-align: top;" type="text" id="creative-input" name="name" required minlength="4" maxlength="200" size="10"></textarea>';
const buttonStyle = '<button style="width:200px; height:50px; margin:40px; font-size:36px" id="main-button">submit</button>';

console.log(currentURL);

function blockWebsite() {
  if (blockedList.includes(currentURL)) {

    websiteBlocked = true;

    document.body.innerHTML = '';
    var elemDiv = document.createElement('div');
    elemDiv.style.cssText = 'position:absolute;margin:auto;padding-top:200px;width:100%;height:100%;z-index:100;background:#000;color:#fff;text-align:center;font-size:50px;font-weight:700;display:flex;flex-direction:column;align-items:center;';
    elemDiv.innerHTML = `${mainTextStyle} ${secondTextStyle} ${inputBoxStyle} ${buttonStyle}`;
    document.body.appendChild(elemDiv);
};
}

blockWebsite();

if (websiteBlocked) {
  const inputBox = document.getElementById("creative-input");
  const mainText = document.getElementById("main-text");
  const secondText = document.getElementById("second-text");
  const mainButton = document.getElementById("main-button");

  console.log(inputBox);
  console.log(mainButton);

  mainButton.addEventListener('click', function() {
    console.log('Button Clicked');
    if (inputBox.value.length > 100) {
        secondText.innerHTML = inputBox.value;
    } else {
        secondText.innerHTML = `Not long enough. ${100 - inputBox.value.length} characters to go.`;
    };
  });
}
