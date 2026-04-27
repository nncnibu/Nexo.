function hidePages(){
document.querySelectorAll(".page").forEach(page=>{
page.classList.add("hidden");
});
}

function openLogin(){
hidePages();
document.getElementById("loginPage").classList.remove("hidden");
window.scrollTo(0,0);
}

function fakeLogin(){
alert("Google Login Connected Soon");
openProfile();
}

function openProfile(){
hidePages();
document.getElementById("profilePage").classList.remove("hidden");
window.scrollTo(0,0);
}

function showUpload(){
hidePages();
document.getElementById("uploadPage").classList.remove("hidden");
window.scrollTo(0,0);
}

function goHome(){
hidePages();
window.scrollTo({
top:0,
behavior:"smooth"
});
}

function scrollTrending(){
hidePages();
document.getElementById("trending").scrollIntoView({
behavior:"smooth"
});
}

function uploadDone(){
alert("Upload Success!");
goHome();
}

function likePost(btn){
btn.innerText="Liked ❤️";
btn.disabled=true;
}

console.log("NEXO GOD MODE LOADED");