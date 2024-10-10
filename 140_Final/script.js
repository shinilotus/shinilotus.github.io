const image_elements = ["images/creature_1.jpg","images/creature_2.jpg","images/creature_3.jpg"]
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    document.querySelector("#left_button").addEventListener("click", evt => {
        let firstLink = image_elements.shift();
        image_elements.push(firstLink);
        for (let i = 0; i < images.length; i++) {
            images[i].src = image_elements[i];
        }
    });
    document.querySelector("#right_button").addEventListener("click", evt => {
        let lastLink = image_elements.pop();
        image_elements.unshift(lastLink);
        for (let i = 0; i < images.length; i++) {
            images[i].src = image_elements[i];
        }
    });
})
const getElement = selector => document.querySelector(selector); 
const displayErrorMsgs = msgs => {
    const ul = document.createElement("ul");
    ul.classList.add("messages");
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }
    const node = getElement("ul");
    if (node == null) {
        const form = getElement("form");
        form.parentNode.insertBefore(ul, form);
    } else {
        node.parentNode.replaceChild(ul, node);
    }  
}
const processEntries = () => {
    const email = getElement("#email_address");
    const head = getElement("#head");
    const body = getElement("#body");
const msgs = [];
if (email.value === "") {
    msgs.push("Please enter an email address.");
} else if (!email.value.includes("@")) {
    msgs.push("Email address must include @.");
} else if (!email.value.includes(".")) {
    msgs.push("Email address must include a dot (.).");
}
if (head.value === "") {
    msgs.push("Please select a head type."); 
}if (body.value === "") {
    msgs.push("Please select a body type."); 
}
if (msgs.length === 0) {
    getElement("form").submit();  
} else {
    displayErrorMsgs(msgs);
}
}
const resetForm = () => {
    getElement("form").reset();
    const ul = getElement("ul");
    if (ul !== null) ul.remove();
    getElement("#email_address").focus();
};
document.addEventListener("DOMContentLoaded", () => {
    getElement("#register").addEventListener("click", processEntries);
    getElement("#reset_form").addEventListener("click", resetForm);  
    getElement("#email_address").focus();
});
