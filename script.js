const API = "/users";

// READ
async function getUsers() {
    const res = await fetch(API);
    const users = await res.json();

    document.getElementById("users").innerHTML = users.map(user => `
        <div class="user">
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <p>${user.age}</p>

            <button onclick="updateUser('${user._id}')">Update</button>
            <button onclick="deleteUser('${user._id}')">Delete</button>
        </div>
    `).join("");
}

// CREATE
async function addUser() {
    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            age: document.getElementById("age").value
        })
    });

    getUsers();
}

// UPDATE
async function updateUser(id) {
    const newAge = prompt("Enter new age:");

    if (!newAge) return;

    await fetch(API + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            age: newAge
        })
    });

    getUsers();
}

// DELETE
async function deleteUser(id) {
    await fetch(API + "/" + id, {
        method: "DELETE"
    });

    getUsers();
}

getUsers();