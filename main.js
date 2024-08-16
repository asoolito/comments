const ota = document.querySelector(".ota");

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            const wrapper = document.createElement("div");
            wrapper.className = "cards"
            const userName = document.createElement("h2");
            const userEmail = document.createElement("h3");
            const userBody = document.createElement("p");

            userName.textContent = `name:${element.name}`;
            userEmail.textContent = `email:${element.email}`;
            userBody.textContent = element.body;

            wrapper.append(userName,userEmail, userBody);
            ota.append(wrapper);
        });
    });