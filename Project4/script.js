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
