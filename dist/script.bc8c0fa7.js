parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JVpL":[function(require,module,exports) {
"use strict";var e=document.querySelector("html"),t=document.querySelector(".orange"),n=document.querySelector(".pink"),r=document.querySelector(".violet"),o=document.querySelector(".red"),c=document.querySelector(".store_close"),i=document.querySelector(".app_rightBar-cart");i.addEventListener("click",function(){document.querySelector(".store").style.display="grid"}),c.addEventListener("click",function(){document.querySelector(".store").style.display="none"}),t.addEventListener("click",function(){e.setAttribute("data-attribute","orange"),document.querySelector(".store").style.display="none"}),o.addEventListener("click",function(){e.setAttribute("data-attribute","red"),document.querySelector(".store").style.display="none"}),r.addEventListener("click",function(){e.setAttribute("data-attribute","violet"),document.querySelector(".store").style.display="none"}),n.addEventListener("click",function(){e.setAttribute("data-attribute","pink"),document.querySelector(".store").style.display="none"});var s,a,u=localStorage.getItem("RPSuser");document.querySelector(".app_rightBar-info").addEventListener("click",function(){document.querySelector(".info").style.display="grid"}),document.querySelector(".info_close").addEventListener("click",function(){document.querySelector(".info").style.display="none"}),u&&(b(u),document.querySelector(".nav_user-link").href="#profile",document.querySelector("#review").style.display="block",document.querySelector(".menu-login").textContent="see profile",document.querySelector(".menu-login").href="#profile");var l=document.querySelector(".slider_right-button"),d=document.querySelector(".nav_user"),m=document.querySelector(".wrapper"),y=document.querySelector(".text-link"),p=!1,f=!1,S=!1,h=!1,g=window.matchMedia("(max-width: 900px)");function v(e){e.matches||(p?(document.querySelector(".slider").style.animation="",document.querySelector(".nav").style.animation="",document.querySelector(".slider").style.animation="sliderOut 0.4s ease-in-out forwards",document.querySelector(".nav").style.width="32vw",document.querySelector(".seemore").innerHTML="see more",p=!1):(document.querySelector(".slider").style.animation="",document.querySelector(".nav").style.animation="",document.querySelector(".slider").style.animation="sliderFullIn 0.4s ease-in-out forwards",document.querySelector(".nav").style.width="100vw",document.querySelector(".seemore").innerHTML="see less",p=!0))}function q(){f?(document.querySelector(".menu").style.visibility="hidden",f=!1):(document.querySelector(".menu").style.visibility="visible",f=!0)}function _(){S?(document.querySelector(".profile").style.visibility="hidden",document.querySelector(".login").style.visibility="hidden",S=!1):(S=!0,u?document.querySelector(".profile").style.visibility="visible":document.querySelector(".login").style.visibility="visible")}function b(e){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers/".concat(e),{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){k(s=e)})}function k(e){Be(),document.querySelector(".profile_user-name").textContent=e.username,document.querySelector("#friends > div > div.profile_user > h2").textContent=e.username,document.querySelector(".profile_user-points").textContent="$ "+e.coins,document.querySelector("#friends > div > div.profile_user > p").textContent="$ "+e.coins,document.querySelector(".app_player-name").textContent=e.username,document.querySelector(".app_player-coins span").textContent=e.coins,document.querySelector("div.app_player").style.display="block",document.querySelector(".modal_start_body-logged-input").setAttribute("max",e.coins),document.querySelector("div.highscore_sorting").style.display="block","admin"==e.username?(document.querySelector("#admin_list").style.display="inline-block",document.querySelector(".admin_panel").style.display="inline-block"):(document.querySelector("#admin_list").style.display="none",document.querySelector(".admin_panel").style.display="none")}l.addEventListener("click",function(e){v(g)}),document.querySelector("#allUsers").addEventListener("click",C),document.querySelector("#userCountry").addEventListener("click",E),document.querySelector("#userAge").addEventListener("click",z);var w=document.querySelector(".wrapper");w.addEventListener("click",function(){w.classList.toggle("open")});var x=document.querySelectorAll(".u-close");function C(){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){L(a=e.sort(function(e,t){return e.coins<t.coins?1:-1}))})}function L(e){var t=document.querySelector(".highscoreParent");t.innerHTML=" ";for(var n=0;n<=9&&!(e.length<9&&n==e.length);n++){var r=document.querySelector("#scoreBoard").content.cloneNode(!0);r.querySelector("tr").id=e[n]._id,r.querySelector(".place").textContent=n+1,r.querySelector(".name").textContent=e[n].username,r.querySelector(".score").textContent=e[n].coins,r.querySelector(".country").textContent=e[n].country,r.querySelector(".age").textContent=e[n].age,t.appendChild(r)}if(u)for(var o=0;o<e.length;o++)if(u==e[o]._id)if(o<10){document.querySelectorAll("tr").forEach(function(e){e.id==u&&e.classList.add("you")})}else{var c=document.querySelector("#scoreBoard").content.cloneNode(!0);c.querySelector("tr").classList.add("you"),c.querySelector(".place").textContent=o+1,c.querySelector(".name").textContent=e[o].username,c.querySelector(".score").textContent=e[o].coins,c.querySelector(".country").textContent=e[o].country,c.querySelector(".age").textContent=e[o].age,t.appendChild(c)}}function E(){var e;document.querySelector(".highscoreParent").innerHTML=" ",fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(t){for(var n=0;n<t.length;n++)u==t[n]._id&&(e=t[n].country);var r=t.filter(function(t){return t.country==e});L(r=r.sort(function(e,t){return e.coins<t.coins?1:-1}))})}function z(){var e;document.querySelector(".highscoreParent").innerHTML=" ",fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(t){for(var n=0;n<t.length;n++)u==t[n]._id&&(e=t[n].age);var r=t.filter(function(t){return t.age==e});L(r=r.sort(function(e,t){return e.coins<t.coins?1:-1}))})}x.forEach(function(e){e.addEventListener("click",function(){w.classList.toggle("open")})}),document.querySelector(".link-loginSignup").addEventListener("click",function(){w.classList.toggle("open"),document.querySelector("#person").classList.add("hidden"),document.querySelector("#person1").classList.remove("hidden")}),document.querySelector(".modal_winner_body_notlogged_buttons-login").addEventListener("click",function(){document.querySelector("#person").classList.add("hidden"),document.querySelector("#person1").classList.remove("hidden")}),document.querySelector(".modal_winner_body_notlogged_buttons-signup").addEventListener("click",function(){document.querySelector("#person").classList.add("hidden"),document.querySelector("#person1").classList.remove("hidden")}),document.querySelector(".link-highscore > a").addEventListener("click",function(e){C()}),document.querySelector(".nav_user-link").addEventListener("click",function(){document.querySelector("#person").classList.add("hidden"),document.querySelector("#personclose").classList.remove("hidden")}),document.querySelectorAll(".u-close-right").forEach(function(e){e.addEventListener("click",function(){document.querySelector("#person").classList.remove("hidden"),document.querySelector("#personclose").classList.add("hidden")})});var P=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;document.getElementById("logoOut").style.top=P>e?"0":"-50px",P=e};var j=document.querySelector("button.login_form-button.button");function N(){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){W(e)})}function W(e){for(var t=document.querySelector("#login_username").value,n=document.querySelector("#login_password").value,r=0;r<e.length;r++)t==e[r].username&&n==e[r].password&&(s=e[r],localStorage.setItem("RPSuser",e[r]._id),u=localStorage.getItem("RPSuser"),document.querySelector("#login_password").value="",document.querySelector("#login_username").value="",window.location.hash="#profile",document.querySelector(".link-loginSignup").style.display="none",document.querySelector(".modal_winner_body_notlogged").style.display="none",document.querySelector(".modal_winner_body_logged").style.display="block",k(e[r]),document.querySelector(".modal_start_body-trial").style.display="none",document.querySelector(".modal_start_body-logged").style.display="block",document.querySelector(".nav_user-link").href="#profile",document.querySelector("#review").style.display="block",document.querySelector("div.highscore_sorting").style.display="block",Ce())}function A(){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){e.forEach(function(e){""!=e.review&&null!=e.review&&R(e)})})}function R(e){var t=document.querySelector(".reviews_see"),n=document.querySelector(".review-template").content.cloneNode(!0);n.querySelector(".avatarUser").textContent=e.imageName,n.querySelector(".usernameUser").textContent="~ "+e.username;for(var r="",o=0;o<e.starRate;o++)r+='<img src="/images/star_full.png" alt="Star Rate"/>';for(var c=0;c<5-e.starRate;c++)r+='<img src="/images/star_empty.png" alt="Star Rate"/>';n.querySelector(".starUser").innerHTML=r,n.querySelector(".reviewUser").textContent=e.review,t.prepend(n)}j.addEventListener("click",function(e){e.preventDefault(),N()}),document.querySelector(".logOut").addEventListener("click",function(e){localStorage.removeItem("RPSuser"),u=void 0,s=void 0,window.location.hash="#login",document.querySelector(".link-loginSignup").style.display="list-item",document.querySelector(".highscore_sorting").style.display="none",Ce(),document.querySelector("div.app_player").style.display="none",document.querySelector(".modal_start_body-trial").style.display="block",document.querySelector(".modal_start_body-logged").style.display="none",document.querySelector(".app-bet").style.visibility="hidden",document.querySelector(".nav_user-link").href="#login",document.querySelector("#review").style.display="none"}),document.querySelector(".login_form-signup").addEventListener("click",function(e){e.preventDefault,window.location.hash="#signup",document.querySelector("div.highscore_sorting").style.display="none"}),A();var T=document.querySelector(".stars").children,U=!0,B=!1,G=void 0;try{for(var M,I=T[Symbol.iterator]();!(U=(M=I.next()).done);U=!0){var O=M.value;O.addEventListener("click",function(e){var t=!0,n=!1,r=void 0;try{for(var o,c=T[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){o.value.classList.remove("full")}}catch(i){n=!0,r=i}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}D(Number(e.target.classList[1]))})}}catch(Ze){B=!0,G=Ze}finally{try{U||null==I.return||I.return()}finally{if(B)throw G}}function D(e){for(var t=0;t<e;t++)T[t].classList.add("full");var n=!0,r=!1,o=void 0;try{for(var c,i=T[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value;"full"==s.classList[2]?s.src="/images/star_full.png":s.src="/images/star_empty.png"}}catch(Ze){r=!0,o=Ze}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}}function J(){var e=document.querySelectorAll(".full").length;s.starRate=e,s.review=document.querySelector(".reviews_add-input").value,H(s)}function H(e){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers/"+e._id,{method:"put",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){R(e)})}document.querySelector(".reviews_add-post").addEventListener("click",function(e){e.preventDefault(),J(),e.target.textContent="posted",e.target.style.color="#7186f5",document.querySelector("#review > textarea").value=" ";var t=!0,n=!1,r=void 0;try{for(var o,c=T[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var i=o.value;i.classList.remove("full"),i.src="/images/star_empty.png"}}catch(Ze){n=!0,r=Ze}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}document.querySelector("textarea").style.color="rgba(255, 255, 255, 0.4)"});var V="https://restcountries.eu/rest/v2/all",$=[];function Y(){fetch(V).then(function(e){return e.json()}).then(function(e){e.forEach(function(e){var t={countryName:"",countryAlpha2Code:""};t.countryName=e.name,t.countryAlpha2Code=e.alpha2Code,$.push(t)})})}function Z(){for(var e=document.querySelector(".select_form-country select"),t=document.querySelector(".option_form-country").value,n=0;n<$.length;n++){var r=document.createElement("option");$[n].countryName!=t&&(r.setAttribute("value",$[n].countryName),r.textContent=$[n].countryName,r.classList.add("fluidCountry"),e.appendChild(r))}}function F(){var e=document.querySelectorAll(".select_form-country option");document.querySelector(".option_form-country").classList.remove("option_form-country"),e[event.target.selectedIndex].classList.remove("fluidCountry"),e[event.target.selectedIndex].classList.add("option_form-country")}function K(){document.querySelectorAll(".fluidCountry").forEach(function(e){return e.remove()})}function Q(){document.querySelector(".editUser").style.display="none",document.querySelector("#editUser_username").value="",document.querySelector("#editUser_email").value="",document.querySelector("#editUser_age").value="",window.location.hash="#profile",K(),document.querySelector(".editUser_paragraph-alertNoModifs").style.display="none"}function X(){document.querySelector(".confirmModifications").style.display="none"}function ee(){document.querySelector(".modifyPassword").style.display="none",document.querySelector(".modifyPassword_paragraph-alert").style.display="none"}function te(){var e=document.querySelector(".editUser");e.style.display="block",e.querySelector(".editUser_form-username input").setAttribute("placeholder",s.username),e.querySelector(".editUser_form-email input").setAttribute("placeholder",s.email),e.querySelector(".option_form-country").setAttribute("value",s.country),e.querySelector(".option_form-country").textContent=s.country,e.querySelector(".editUser_form-age input").setAttribute("placeholder",s.age),Z()}Y(),document.querySelector(".select_form-country select").addEventListener("change",F),document.querySelector(".edit-profile").addEventListener("click",te),document.querySelector(".editUser_form-login_back").addEventListener("click",Q),document.querySelector(".confirmModifications_form-login_back").addEventListener("click",X),document.querySelector(".modifyPassword_form-login_back").addEventListener("click",ee),document.querySelector(".editUser_form-login").addEventListener("click",function(e){e.preventDefault();var t=0;[".editUser_form-username input",".editUser_form-email input",".option_form-country",".editUser_form-age input"].forEach(function(e){""==document.querySelector(e).value&&t++}),3==t?document.querySelector(".editUser_form").reportValidity():re()});var ne=!1;function re(){for(var e=[".editUser_form-username input",".editUser_form-email input",".option_form-country",".editUser_form-age input"],t=["username","email","country","age"],n=0;n<4;n++)""!=document.querySelector(e[n]).value&&document.querySelector(e[n]).value!=s[t[n]]?(s[t[n]]=document.querySelector(e[n]).value,ne=!0):document.querySelector(e[n]).value==s[t[n]]&&(document.querySelector(e[n]).input=document.querySelector(e[n]).value);0==ne?document.querySelector(".editUser_paragraph-alertNoModifs").style.display="block":ie()}function oe(){document.querySelector(".modifyPassword").style.display="block"}function ce(e){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers/"+e._id,{method:"put",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){document.querySelector(".modal-confirm").style.display="none"})}function ie(){document.querySelector(".editUser").style.display="none",document.querySelector(".confirmModifications").style.display="block"}function se(){var e=document.querySelector(".confirmModifications_form-password input").value;s.password==e?(k(s),ce(s),document.querySelector(".modal-confirm").style.display="block",X()):document.querySelector(".confirmModifications_paragraph-alertWrongPass").style.display="block"}function ae(){document.querySelector(".modifyPassword_form-password input").value==s.password?ue():(document.querySelector(".modifyPassword_paragraph-alert").style.display="block",document.querySelector(".modifyPassword_paragraph-alert").textContent="Wrong old password")}function ue(){""!=document.querySelector(".modifyPassword_form-password_new input").value||""!=document.querySelector(".modifyPassword_form-password_new-retype input").value||""!=document.querySelector(".modifyPassword_form-password_new-retype input").value&&""!=document.querySelector(".modifyPassword_form-password_new input").value?document.querySelector(".modifyPassword_form-password_new input").value==document.querySelector(".modifyPassword_form-password_new-retype input").value?le():(document.querySelector(".modifyPassword_paragraph-alert").style.display="block",document.querySelector(".modifyPassword_paragraph-alert").textContent="No match between passwords :("):(document.querySelector(".modifyPassword_paragraph-alert").style.display="block",document.querySelector(".modifyPassword_paragraph-alert").textContent="Please type in the new passwords :) ")}function le(){s.password=document.querySelector(".modifyPassword_form-password_new input").value,ce(s),ee(),document.querySelector(".modal-confirm").style.display="block"}document.querySelector(".editUser_paragraph-modifyPassword").addEventListener("click",oe),document.querySelector(".confirmModifications_form-login").addEventListener("click",function(e){e.preventDefault(),se()}),document.querySelector(".modifyPassword_form-login").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".modifyPassword_form").checkValidity()?ae():document.querySelector(".modifyPassword_form").reportValidity()}),u?(document.querySelector("div.app_player").style.display="block",document.querySelector(".modal_start_body-logged").style.display="block"):document.querySelector(".modal_start_body-trial").style.display="block";var de={userWin:0,pcWin:0},me=["Rock","Paper","Scissors","Lizard","Spock","Spider-man","Batman","Wizard","Glock"],ye=document.querySelector("div.userhimg > img"),pe=document.querySelector("div.pchimg > img"),fe=document.querySelectorAll(".app_options button"),Se=document.querySelectorAll(".handsimg img"),he=document.querySelector(".modal_winner"),ge=document.querySelector(".modal_start"),ve=document.querySelector(".modal_winner_body_logged-restart"),qe=document.querySelector(".modal_start_body-buton"),_e=document.querySelector(".modal_start_body-logged-input"),be=document.querySelector(".app-bet");function ke(e,t){var n=document.querySelector(".app_result");if(document.querySelector(".userh span").textContent=e,document.querySelector(".pch span").textContent=t,n.style.visibility="visible",e!==t){if("Rock"===e){if("Paper"===t)return n.textContent="Paper covers rock.","loss";if("Scissors"===t)return n.textContent="Rock crushes scissors.","win";if("Lizard"===t)return n.textContent="Rock crushes lizard","win";if("Spock"===t)return n.textContent="Spock vaporizes rock.","loss";if("Spider-man"===t)return n.textContent="Rock knocks out spider-man.","win";if("Batman"===t)return n.textContent="Batman explodes rock.","loss";if("Wizard"===t)return n.textContent="Rock interrupts wizard.","win";if("Glock"===t)return n.textContent="Glock breaks rock.","loss"}else if("Paper"===e){if("Rock"===t)return n.textContent="Paper covers rock.","win";if("Scissors"===t)return n.textContent="Scissors cut paper.","loss";if("Lizard"===t)return n.textContent="Lizard eats paper.","loss";if("Spock"===t)return n.textContent="Paper disproves spock.","win";if("Spider-man"===t)return n.textContent="Spider-man rips paper.","loss";if("Batman"===t)return n.textContent="Paper delays batman.","win";if("Wizard"===t)return n.textContent="Wizard burns paper","loss";if("Glock"===t)return n.textContent="Paper jams glock.","win"}else if("Scissors"===e){if("Rock"===t)return n.textContent="Rock crushes scissors.","loss";if("Paper"===t)return n.textContent="Scissors cut paper.","win";if("Lizard"===t)return n.textContent="Scissors decapitates lizard.","win";if("Spock"===t)return n.textContent="Spock smashes scissors.","loss";if("Spider-man"===t)return n.textContent="Scissors cut spider-man.","win";if("Batman"===t)return n.textContent="Batman dismantles scissors.","loss";if("Wizard"===t)return n.textContent="Scissors stabs wizard.","win";if("Glock"===t)return n.textContent="Glock dents scissors.","loss"}else if("Lizard"===e){if("Rock"===t)return n.textContent="Rock crushes lizard","loss";if("Paper"===t)return n.textContent="Lizard eats paper.","win";if("Scissors"===t)return n.textContent="Scissors decapitates lizard.","loss";if("Spock"===t)return n.textContent="Lizard poisons spock.","win";if("Spider-man"===t)return n.textContent="Spider-man defeats lizard.","loss";if("Batman"===t)return n.textContent="Lizard confuses batman.","win";if("Wizard"===t)return n.textContent="Wizard transforms lizard.","loss";if("Glock"===t)return n.textContent="Lizard is too small for glock","win"}else if("Spock"===e){if("Rock"===t)return n.textContent="Spock vaporizes rock.","win";if("Paper"===t)return n.textContent="Paper disproves spock.","loss";if("Scissors"===t)return n.textContent="Spock smashes scissors.","win";if("Lizard"===t)return n.textContent="Lizard poisons spock.","loss";if("Spider-man"===t)return n.textContent="Spock befuddles spider-man","win";if("Batman"===t)return n.textContent="Batman hangs Spock","loss";if("Wizard"===t)return n.textContent="Spock zaps wizard","win";if("Glock"===t)return n.textContent="Glock shoots spock.","loss"}else if("Spider-man"===e){if("Rock"===t)return n.textContent="Rock knocks out spider-man.","loss";if("Paper"===t)return n.textContent="Spider-man rips paper.","win";if("Scissors"===t)return n.textContent="Scissors cut spider-man.","loss";if("Lizard"===t)return n.textContent="Spider-man defeats lizard.","win";if("Spock"===t)return n.textContent="Spock befuddles spider-man","loss";if("Batman"===t)return n.textContent="Batman scares spider-man","loss";if("Wizard"===t)return n.textContent="Spider-man annoys wizard.","win";if("Glock"===t)return n.textContent="Spider-man disarms glock.","win"}else if("Batman"===e){if("Rock"===t)return n.textContent="Batman explodes rock.","win";if("Paper"===t)return n.textContent="Paper delays batman.","loss";if("Scissors"===t)return n.textContent="Batman dismantles scissors.","win";if("Lizard"===t)return n.textContent="Lizard confuses batman.","loss";if("Spock"===t)return n.textContent="Batman hangs Spock","win";if("Spider-man"===t)return n.textContent="Batman scares spider-man","win";if("Wizard"===t)return n.textContent="Wizard stuns batman.","loss";if("Glock"===t)return n.textContent="Glock shoots batman's mom","loss"}else if("Wizard"===e){if("Rock"===t)return n.textContent="Rock interrupts wizard.","loss";if("Paper"===t)return n.textContent="Wizard burns paper","win";if("Scissors"===t)return n.textContent="Scissors stabs wizard.","loss";if("Lizard"===t)return n.textContent="Wizard transforms lizard.","win";if("Spock"===t)return n.textContent="Spock zaps wizard","loss";if("Spider-man"===t)return n.textContent="Spider-man annoys wizard.","loss";if("Batman"===t)return n.textContent="Wizard stuns batman.","win";if("Glock"===t)return n.textContent="Wizard melts glock.","win"}else if("Glock"===e){if("Rock"===t)return n.textContent="Glock breaks rock.","win";if("Paper"===t)return n.textContent="Paper jams glock.","loss";if("Scissors"===t)return n.textContent="Glock dents scissors.","win";if("Lizard"===t)return n.textContent="Lizard is too small for glock","loss";if("Spock"===t)return n.textContent="Glock shoots spock.","win";if("Spider-man"===t)return n.textContent="Spider-man disarms glock.","loss";if("Batman"===t)return n.textContent="Glock shoots batman's mom","win";if("Wizard"===t)return n.textContent="Wizard melts glock.","loss"}}else n.textContent="It is a tie!"}function we(){document.querySelector(".app_wins-userw span").textContent="- "+de.userWin+" -",document.querySelector(".app_wins-pcw span").textContent="- "+de.pcWin+" -"}function xe(){if(2==de.userWin||2==de.pcWin){if(fe.forEach(function(e){e.disabled=!0}),he.style.display="grid",document.querySelector(".modal_winner_body_logged-restart").textContent="Play Again",fe.forEach(function(e){e.disabled=!0}),2==de.userWin){if(document.querySelector(".modal_winner_body-message").textContent="winner",u){s.coins=s.coins+Number(be.textContent),k(s);var e=JSON.stringify(s);fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers/".concat(u),{method:"put",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"},body:e})}}else 2==de.pcWin&&(document.querySelector(".modal_winner_body-message").textContent="loser");if(u){if(document.querySelector(".modal_winner_body_logged").style.display="block",document.querySelector(".modal_winner_body_notlogged").style.display="none",0==s.coins){document.querySelector(".modal_winner_body-message").textContent="out of coins",document.querySelector(".modal_winner_body_logged-restart").textContent="Get 100",s.coins=100,k(s);var t=JSON.stringify(s);fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers/".concat(u),{method:"put",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"},body:t})}}else document.querySelector(".modal_winner_body_notlogged").style.display="block",document.querySelector(".modal_winner_body_logged").style.display="none"}}function Ce(){de.userWin=0,de.pcWin=0,we(),he.style.display="none",document.querySelector(".app_result").style.visibility="hidden",ye.src="/hands/hand_Default.svg",pe.src="/hands/hand_Default.svg",document.querySelector(".userh span").textContent="",document.querySelector(".pch span").textContent="",be.style.visibility="hidden",ge.style.display="grid",_e.value=10}function Le(){if(fe.forEach(function(e){e.disabled=!1}),ge.style.display="none",u){var e=2*Number(_e.value);be.textContent=0,function t(){setTimeout(function(){be.textContent++,be.textContent<e?t():fe.forEach(function(e){e.disabled=!1})},4)}(),be.style.visibility="visible",s.coins=s.coins-Number(_e.value),k(s);var t=JSON.stringify(s);fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers/".concat(u),{method:"put",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"},body:t})}}ve.addEventListener("click",Ce),qe.addEventListener("click",function(e){u?s.coins>0&&Le():Le()}),document.querySelector(".modal_winner_body_notlogged_buttons-login").addEventListener("click",function(e){window.location.hash="#login"}),document.querySelector(".modal_start_body-logged-up").addEventListener("click",function(){Number(_e.value)==_e.max||(_e.value=Number(_e.value)+10)}),document.querySelector(".modal_start_body-logged-down").addEventListener("click",function(){10==Number(_e.value)||(_e.value=Number(_e.value)-10)}),Se.forEach(function(e){e.addEventListener("animationend",function(){this.style.animation=""})}),fe.forEach(function(e){e.disabled=!0,e.addEventListener("click",function(){fe.forEach(function(e){e.disabled=!0});var t=me[Math.floor(8*Math.random())],n=null;setTimeout(function(){ye.src="/hands/hand_".concat(e.querySelector("svg").dataset.name,".svg"),pe.src="/hands/hand_".concat(t,".svg"),"win"===(n=ke(e.querySelector("svg").dataset.name,t))?(de.userWin++,we()):"loss"===n&&(de.pcWin++,we()),fe.forEach(function(e){e.disabled=!1}),setTimeout(function(){xe()},200)},2e3),ye.style.animation="shakePlayer 2s ease",pe.style.animation="shakeComputer 2s ease"})}),document.querySelector(".modal_winner_body_notlogged_buttons-signup").addEventListener("click",function(e){window.location.hash="#signup"});var Ee,ze={age:0,bonus_collected:null,coins:300,country:"Antarctica",email:"email@com",friends:"",imageName:"avatar-3",password:"mypassword",previous_bonus:null,review:"",starRate:0,streak:7,suspended:!1,username:"newUser"};function Pe(e,t){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(n){n.forEach(function(n){n[t]==e&&alert("Pick another "+t+"!")})})}function je(){Pe(document.querySelector(".signup_form-username input").value,"username")}function Ne(){Pe(document.querySelector(".signup_form-email input").value,"email")}function We(){var e=document.querySelector(".signup_form-username input").value,t=document.querySelector(".signup_form-email input").value,n=document.querySelector(".signup_form-password input").value,r=document.querySelector(".signup_option_form-country").textContent,o=document.querySelector(".signup_form-age input").value;ze.username=e,ze.email=t,ze.password=n,ze.country=r,ze.age=o,Ae(ze)}function Ae(e){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers",{method:"post",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){window.location.hash="#profile",localStorage.setItem("RPSuser",e._id),u=localStorage.getItem("RPSuser"),document.querySelector(".modal_winner_body_notlogged").style.display="none",document.querySelector(".modal_winner_body_logged").style.display="block",document.querySelector(".modal_start_body-trial").style.display="none",document.querySelector(".modal_start_body-logged").style.display="block",document.querySelector(".nav_user-link").href="#profile",document.querySelector("#review").style.display="block",document.querySelector("div.highscore_sorting").style.display="block",Ce(),b(e._id)})}function Re(){for(var e=document.querySelector(".signup_select_form-country select"),t=document.querySelector(".signup_option_form-country").value,n=0;n<$.length;n++){var r=document.createElement("option");$[n].countryName!=t&&(r.setAttribute("value",$[n].countryName),r.textContent=$[n].countryName,r.classList.add("fluidCountry"),e.appendChild(r))}}function Te(){var e=document.querySelectorAll(".signup_select_form-country option");document.querySelector(".signup_option_form-country").classList.remove("signup_option_form-country"),e[event.target.selectedIndex].classList.remove("fluidCountry"),e[event.target.selectedIndex].classList.add("signup_option_form-country")}function Ue(){document.querySelectorAll(".fluidCountry").forEach(function(e){return e.remove()})}function Be(){if(u)if(""==s.friends){document.querySelector(".friends_current").style.display="none";De([],5,["none"])}else{var e=s.friends.split(",");if(Ge(e),e.length>=3){De([],1,e)}else{De([],3,e)}}}function Ge(e){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(t){t.forEach(function(t){e.forEach(function(e){t.username==e&&Oe(t)})})})}function Me(){document.querySelectorAll(".friends_container button").forEach(function(e){e.style.color="grey",e.style.border="2px solid grey",e.disabled=!0})}function Ie(){document.querySelectorAll(".friends_container button").forEach(function(e){e.style.color="#5dfdcb",e.style.border="2px solid #7186f5",e.disabled=!1,location.reload()})}function Oe(e){var t=document.querySelector("#friends-current").content,n=document.querySelector(".friends_current-parent"),r=t.cloneNode(!0);r.querySelector(".paragraph").textContent=e.username,r.querySelector(".button").dataset.uuid=e._id,r.querySelector("button").addEventListener("click",Ve),n.appendChild(r),Ee={}}function De(e,t,n){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(r){for(var o=0,c=r.length-1,i=function(){var t=0;n.forEach(function(e){r[c].username==e&&t++}),0==t?(e.push(r[c]),c--,o++):c--};o<t&&0!=c;)i();Je(e,t,n)})}function Je(e,t,n){for(var r=document.querySelector("#friends-suggestion").content,o=document.querySelector(".friends_suggestion-parent"),c=0;c<t;c++){var i=r.cloneNode(!0);i.querySelector(".paragraph").textContent=e[c].username,i.querySelector(".button").dataset.uuid=e[c]._id,i.querySelector(".button").addEventListener("click",He),o.appendChild(i)}}function He(){var e=event.target.parentElement.querySelector(".paragraph").textContent;s.friends+=","+e,event.target.parentElement.remove(),$e(event.target.dataset.uuid),Me(),setTimeout(function(){Ee.friends+=","+s.username,Ye(s),Ye(Ee),Oe(Ee)},2e3)}function Ve(){var e=event.target.parentElement.querySelector(".paragraph").textContent;e=","+e,s.friends=s.friends.replace(e,""),event.target.parentElement.remove(),$e(event.target.dataset.uuid),Me(),setTimeout(function(){var e=s.username;e=","+e;var t=Ee.friends;t=t.replace(e,""),Ee.friends=t,Ye(s),Ye(Ee)},2e3)}function $e(e){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers/"+e,{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"}}).then(function(e){return e.json()}).then(function(e){Ee=e})}function Ye(e){fetch("https://rpsexam-61a3.restdb.io/rest/registeredusers/"+e._id,{method:"put",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5ddfb3cc4658275ac9dc201e","cache-control":"no-cache"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){Ie()})}document.querySelector(".signup_form-button").addEventListener("click",function(e){e.preventDefault(),/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.querySelector(".signup_form-email input").value)?document.querySelector(".signup_form").checkValidity()?We():document.querySelector(".signup_form").reportValidity():alert("wrong email input")}),document.querySelector(".signup_form-username").addEventListener("change",je),document.querySelector(".signup_form-email").addEventListener("change",Ne),setTimeout(function(){return Re()},500),document.querySelector(".signup_select_form-country select").addEventListener("change",Te);
},{}]},{},["JVpL"], null)
//# sourceMappingURL=script.bc8c0fa7.js.map