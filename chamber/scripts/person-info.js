// const getString = window.location.search;
// console.log(getString);


const personInfo = new URLSearchParams(window.location.search);
const personalInfo = document.querySelector(".information");

personalInfo.innerHTML = `<p>Name: ${personInfo.get("first")}</p>
<p>Lastname: ${personInfo.get("last")}</p>
<p>E-mail: ${personInfo.get("email")}</p>
<p>Phone Number: ${personInfo.get("phone")}</p>
<p>Company: ${personInfo.get("company")}</p>
<p>Registered on: ${personInfo.get("time-stamp")}</p>`;