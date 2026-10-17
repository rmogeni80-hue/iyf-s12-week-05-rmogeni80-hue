const check = (label, ok) => console.log(`${ok ? "✓" : "✗"} ${label}`);

const h1           = document.querySelector("h1");
const contentEls   = document.querySelectorAll(".content");
const contactForm  = document.getElementById("contact-form");
const emailInput   = contactForm.querySelector("input[type='email']");
const navItems     = document.querySelectorAll("nav li");
const firstNavLink = document.querySelector(".nav-link");
const lastPara     = document.querySelector("article p:last-of-type");
const submitBtn    = document.querySelector("#contact-form button");
const h2sInMain    = document.querySelectorAll("main h2");
const footer       = document.querySelector("footer");

const missing = document.querySelector(".does-not-exist");
console.log("Missing selector returns:", missing);

const navTexts = [...navItems].map(li => li.textContent.trim());
console.log("Nav texts:", navTexts);

const header         = document.querySelector("header");
const navInHeader    = header.querySelector("nav");
const parentLi       = firstNavLink.parentElement;
const article        = document.querySelector("article");
const nextSib        = article.nextElementSibling;
const ul             = document.querySelector("nav ul");
const ulChildren     = ul.children;
const bodyFromFooter = footer.parentElement;
const headerViaClosest = firstNavLink.closest("header");

h1.textContent = "DOM Practice - Element Selection";

firstNavLink.href   = "https://developer.mozilla.org";
firstNavLink.target = "_blank";
firstNavLink.rel    = "noopener";

console.log("Article data-id:", article.dataset.id);
console.log("Article data-category:", article.dataset.category);
article.dataset.status = "reviewed";

const firstContentPara  = contentEls[0];
const secondContentPara = contentEls[1];
firstContentPara.classList.add("highlight");
secondContentPara.classList.toggle("accent");

const userInput = `<img src="x" onerror="alert('hacked!')">`;
document.getElementById("unsafe").innerHTML  = userInput;
document.getElementById("safe").textContent  = userInput;

function addNavItem(text, href) {
	const li = document.createElement("li");
	const a  = document.createElement("a");
	a.className   = "nav-link";
	a.href        = href;
	a.textContent = text;
	li.appendChild(a);
	document.querySelector(".nav-list").appendChild(li);
	return li;
}
addNavItem("Blog", "#blog");
addNavItem("Portfolio", "#portfolio");

const firstArticlePara = article.querySelector("p");
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was inserted dynamically before the first one.";
firstArticlePara.before(newPara);

const navList = document.querySelector(".nav-list");
const firstLi = navList.querySelector("li");
const cloned  = firstLi.cloneNode(true);
cloned.querySelector("a").textContent = "Cloned";
navList.prepend(cloned);

footer.remove();

check("h1 changed", h1.textContent.includes("DOM Practice"));
check("article has data-status", article.dataset.status === "reviewed");
check("first content para highlighted", firstContentPara.classList.contains("highlight"));
check("footer removed", document.querySelector("footer") === null);
