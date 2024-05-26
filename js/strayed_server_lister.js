//
// This script will ask the Crustacean API for the public server listing for Strayed and output it
//

const GET_SERVER_URL = "https://api.crustaceaninteractive.com/crustacean/v2/public/get-servers"
//const GET_SERVER_URL = "http://127.0.0.1:5000/crustacean/v2/public/get-servers"

let holder = undefined
let template = undefined

function create_server(server_obj) {
    let clone = template.content.cloneNode(true)

    clone.querySelector("#server_name").textContent = server_obj["name"]
    clone.querySelector("#server_pop").textContent = server_obj["playerCount"] + "/" + server_obj["maxPlayerCount"]

    // Convert from epoch to now
    let date = new Date(0)
    date.setUTCSeconds(server_obj["wipeEpoch"])

    clone.querySelector("#server_epoch").textContent = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    console.log("Found server " + server_obj["name"])

    holder.appendChild(clone)
}

function refresh_listing() {
    if (holder === undefined) {
        holder = document.querySelector("#server_holder")
    }

    if (template === undefined) {
        template = document.querySelector("#server_entry_template")
    }

    fetch(GET_SERVER_URL, {
        method: "GET",
        cache: "no-cache"
    })
    .then(response => response.json())
    .then(function(response) {
        // TODO: Catch errors
        holder.innerHTML = ""

        if (response["apiCode"] === 0) {
            console.log("Successful fetch of server list! Spawning entries...")

            response["data"]["servers"].forEach(function(obj) {
                create_server(obj)
            })
        }
    })
}

function main() {
    // Ask the REST API about the server lists
    refresh_listing()
}

window.onload = main;