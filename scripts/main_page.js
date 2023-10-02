//
// Globals
//
let plt_major_card = null
let plt_row = null

let pl_major_container = null

let pl_cur_row = null
let pl_cur_row_step = 0

//
// Functions
//
function verifyTemplates() {
    const parser = new DOMParser()

    if (plt_major_card == null) {
        fetch("/pages/prefabs/plt_major_card.html")
            .then(response => response.text())
            .then(function(contents) {
                plt_major_card = parser.parseFromString(contents, "text/html")
            })
    }

    // TODO: Does this need to be hard coded?
    plt_row = parser.parseFromString('<div class="flex_row"></div>>', "text/html")
}

function createCards(response, major) {
    let base = response["get_base"]

    console.log("Base card path is '" + base + "'")

    response["schemas"].forEach(function(path) {
        let concat = base + path

        fetch(concat)
            .then(card => card.json())
            .then(function(card) {
                console.log(card)

                // Duplicate the document
                let root = plt_major_card.getElementById("prefab_root")

                let name = card["name"]

                if (card["name_is_link"] === "true") {
                    let elem_a = document.createElement("a")
                    elem_a.href = card["link"]
                    elem_a.innerText = name

                    plt_major_card.getElementById("card_title").innerHTML = elem_a.outerHTML
                } else {
                    plt_major_card.getElementById("card_title").innerHTML = name
                }

                plt_major_card.getElementById("card_desc").innerHTML = card["description"]

                plt_major_card.getElementById("card_date").innerHTML = card["date"]
                plt_major_card.getElementById("card_lang").innerHTML = card["lang"]
                plt_major_card.getElementById("card_state").innerHTML = card["state"]

                let dupe = root.cloneNode(true)

                // Have we stepped too far?
                if (major && pl_cur_row_step >= 2) {
                    pl_cur_row_step = 0;
                    pl_cur_row = null;
                }

                // Do we have a row yet (major only)?
                if (major && pl_cur_row == null) {
                    pl_cur_row = document.createElement("div")
                    pl_cur_row.classList.add("flex_row")

                    pl_major_container.append(pl_cur_row)
                }

                if (major) {
                    pl_cur_row.appendChild(dupe)
                    pl_cur_row_step += 1
                } else {
                    alert("Please report this, the minor PML should NOT have been loaded yet!")
                }

                console.log(dupe)
            })
    })
}

function main() {
    //
    // Insignia
    //
    insig_z_img = document.getElementById("insig_z")
    insig_z = document.getElementById("insig_z_3d")

    if (!(insig_z === null)) {
        insig_z_gl = insig_z.getContext("webgl")
        setupInsig3D()
    }

    //
    // Project cards
    //
    verifyTemplates()

    pl_major_container = document.getElementById("pl_major_container")

    // Load our Major and Minor PML files
    fetch("/cdn/data/pml_major.json")
        .then(response => response.json())
        .then(function(response) {
            createCards(response, true)
        })

    // Destroy HTML warnings
    document.getElementById("pl_major_warning").remove()
    console.log("Did the warning go away?")
}

window.onload = main