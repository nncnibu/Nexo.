// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm6GQYI2Yyj-AFOya0LecAoC-zQ_wAC5Q",
  authDomain: "nexo-web-8f9b4.firebaseapp.com",
  projectId: "nexo-web-8f9b4",
  storageBucket: "nexo-web-8f9b4.firebasestorage.app",
  messagingSenderId: "1099155534916",
  appId: "1:1099155534916:web:e8dd171b88f7edc359f811",
  measurementId: "G-1PP4GELRFT"
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
