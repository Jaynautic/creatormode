const blockedList = ['https://www.pinterest.com/', 'https://x.com/', 'https://x.com/home']

const currentURL = window.location.href;

console.log(currentURL);

if (blockedList.includes(currentURL)) {

    document.body.innerHTML = '';
    // document.body.style.overflow = 'hidden';
    var elemDiv = document.createElement('div');
    elemDiv.style.cssText = 'position:absolute;margin:auto;padding-top:200px;width:100%;height:100%;z-index:100;background:#000;color:#fff;text-align:center;font-size:50px;font-weight:700;';
    elemDiv.innerHTML = "LOCK IN";
    elemDiv.innerHTML = `<h1 class="mainText" id="main-text">back to work</h1>`;
    // elemDiv.innerHTML = `<h1 class="mainText" id="main-text">back to work</h1>
    // <input type="text" id="creative-input" name="name" required minlength="4" maxlength="200" size="10" />
    // <button id="main-button">click here</button>`;
    document.body.appendChild(elemDiv);
    // document.body.insertBefore(elemDiv, document.body.firstChild);
};