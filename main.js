const token = "NwfanaYYfkPP7srZpJzMw4tB4ySrVSPCjEHjUcTscWVFrf9xPhf3nCNavw3HyGVR"
const server = "https://aceite-admin-production.up.railway.app/"

const socket = io(server, { auth: { token } });

socket.on("connect", () => {
    document.querySelector('#state').style.backgroundColor = 'green'
});

socket.on("disconnect", () => {
    document.querySelector('#state').style.backgroundColor = 'red'
});

socket.on("notifications", message => {
    document.querySelector('#value').value = message
});