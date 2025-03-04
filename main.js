
console.log("JS is Working") //used during testing to confirm that this is being loaded (had some issues)
let savedCount = localStorage.length;


//ShowHide
$(document).ready(function(){
  $("#hide").click(function(){
    $("#contactForm").hide();
  });

  $("#show").click(function(){
    $("#contactForm").show();
  });
});

//Animation + chained effect
$(document).ready(function(){
  $("#moveRedSquare").click(function(){
    $("#redSquare").animate({opacity: '0.5'}).animate({left: '200px'}).animate({width: '20px'}).animate({opacity: '1'}).animate({right: '150px'}).animate({width: '200px'}).animate({height: '45px'})
  });
});


//Dropdown
$(document).ready(function(){
  $("#references").slideUp("slow");
  $("#referencesTitle").click(function(){
    $("#references").slideToggle("slow");
  });
});

// For Clear Local Storage Button
function clearLocalStorage() {
  localStorage.clear()
  savedCount = 0
  alert("Cleared localStorage. All Saved Pages have been deleted.")
}

//Adds item to the list of saved items 
function addSavedItem (itemID, pageName) {
  localStorage.setItem(`savedItem${savedCount}`,`<li><a href="${pageName}.html#${itemID}">${itemID}</a></li>`); 
  //due to the use of sessionStorage, the save for later html file needs to be opened in the same tab.
  //using localStorage would solve this issue, however it could introduce security issues.

  savedCount += 1;
  alert(`You have ${savedCount} Items currently saved.`);
};

//Creates the list when the Saved Pages page is loaded.
function listCreator() { 
  for (let count = 0; count < localStorage.length; count++) {
    $("#savedItems").append(localStorage.getItem(`savedItem${count}`));
  };
};



/* Sources used to write this code:
Jump Links Syntax - https://marcom.wwu.edu/how-create-anchor-jump-link
Onload Synatx - https://www.tutorialspoint.com/How-do-I-call-a-JavaScript-function-on-page-load#:~:text=The%20first%20approach%20for%20calling,the%20function%20from%20the%20JavaScript.
Localstorage - https://www.w3schools.com/jsref/prop_win_localstorage.asp
Localstorage potential issues - https://stackoverflow.com/questions/5523140/are-there-any-benefits-to-session-storage-over-local-storage
Storage length - https://www.w3schools.com/jsref/prop_storage_length.asp#:~:text=The%20length%20property%20returns%20the,object%20or%20a%20sessionStorrage%20object.
Session storage syntax - https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
*/