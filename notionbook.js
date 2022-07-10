let inputUrl = document.getElementById('input__url');
let inputButton = document.getElementById('btn__save');
let captButton = document.getElementById('btn__capt');
let checkButton = document.getElementById('btn__check');
let checkIcon = document.getElementById('checksvg');
let cancelButton = document.getElementById('btn__cancel');
let seeButton = document.getElementById('btn__see');
let mainView = document.getElementById('maincontainer');
let backButton = '';
const saveMain = mainView.innerHTML;

const myBookmarks = [];

//Add input value to myBookmarks
inputButton.addEventListener("click", function() {
    myBookmarks.push(inputUrl.value);
    console.log(myBookmarks);
    //turn check button green
    checkButton.style.color = 'green';
    checkIcon.style.color = 'green';
    //clear input field
    console.log(inputUrl.value);
    inputUrl.setAttribute('value', 'something');
    console.log(inputUrl.value);
});

//Add current url to myBookmarks
captButton.addEventListener("click", function() {
    inputUrl.setAttribute('value', window.location.href);
    //myBookmarks.push(window.location.href);
    // console.log(myBookmarks);
    // //turn check button green
    // checkButton.style.color = 'green';
    // checkIcon.style.color = 'green';
});

checkButton.addEventListener("click", function() {
    checkButton.style.color = 'var(--background)';
    checkIcon.style.color = 'var(--background)';
    // TO DO: close extension window

})

cancelButton.addEventListener("click", function() {
    // TO DO: close extension window
})

seeButton.addEventListener('click', function() {
    while (mainView.firstChild) {
        mainView.removeChild(mainView.firstChild);
      }
    let newUl = document.createElement('ul');
    mainView.appendChild(newUl).id = 'my__ul';
    let myUl = document.getElementById('my__ul');
    let urlLi = '';
    for ( i = 0; i < myBookmarks.length; i++) {
        let newLi = document.createElement('li');
        newLi.setAttribute('id', i);
        urlLi = myUl.appendChild(newLi);
        urlLi.innerHTML = "<a href='"+myBookmarks[i]+"' target='_blank'>"+myBookmarks[i]+"</a>";
    }
    //add back button
    backButton = mainView.appendChild(document.createElement('button'));
    backButton.setAttribute('id', 'btn__back');
    backButton.setAttribute('class', 'btn smallbtn');
    backButton.innerHTML = '← Go back';
    backButton.addEventListener("click", function() {
        console.log('listened');
        location.reload();
        // while (mainView.firstChild) {
        //     mainView.removeChild(mainView.firstChild);
        //   }
        // console.log('saveMain: '+saveMain);
        // mainView.innerHTML = saveMain;
    })
})