//
// Globals
//
let plt_major_card = null
let plt_row = null

let pl_major_container = null

let pl_cur_row = null
let pl_cur_row_step = 0

let insig_z_img = null
let insig_z = null
let insig_z_gl = null

//
// Shader sources
//
let vs_test = `
    attribute vec4 position;
    attribute vec3 col;

    varying vec3 v_col;

    void main() {
        gl_Position = position;
        v_col = col;
    }
`;

let fs_test = `
    precision highp float;

    varying vec3 v_col;

    void main() {
        gl_FragColor = vec4(v_col, 1.0);
    }
`;

//
// Test geometry
//
let test_verts = new Float32Array([
    -1.0, -1.0, 0.0,
    1.0, 0.0, 0.0,

    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,

    1.0, -1.0, 0.0,
    0.0, 0.0, 1.0,
]);

let test_tris = new Uint16Array([
    0, 1, 2
]);

//
// Helpers
//
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader
function createShader(gl, source, type) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const info = gl.getShaderInfoLog(shader);
        throw `Could not compile WebGL program. \n\n${info}`;
    }

    return shader;
}

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

function setupInsig3D() {
    // Clear the background to transparency
    insig_z_gl.clearColor(0.0, 0.0, 0.0, 0.0);
    insig_z_gl.clear(insig_z_gl.COLOR_BUFFER_BIT);

    // TESTING
    let vertices = test_verts;
    let triangles = test_tris

    // Setup our shader
    let vert = createShader(insig_z_gl, vs_test, insig_z_gl.VERTEX_SHADER);
    let frag = createShader(insig_z_gl, fs_test, insig_z_gl.FRAGMENT_SHADER);

    let prog = insig_z_gl.createProgram();
    insig_z_gl.attachShader(prog, vert);
    insig_z_gl.attachShader(prog, frag);

    insig_z_gl.linkProgram(prog);
    insig_z_gl.useProgram(prog);

    // Setup our geometry
    let vbo = insig_z_gl.createBuffer();
    insig_z_gl.bindBuffer(insig_z_gl.ARRAY_BUFFER, vbo);
    insig_z_gl.bufferData(insig_z_gl.ARRAY_BUFFER, vertices, insig_z_gl.STATIC_DRAW);

    let a_position = insig_z_gl.getAttribLocation(prog, 'position');
    if (a_position < 0) {
        console.log('Failed to get the storage location of position');
        return -1;
    }

    let a_col = insig_z_gl.getAttribLocation(prog, 'col');
    if (a_col < 0) {
        console.log('Failed to get the storage location of uv0');
        return -1;
    }

    let byte = 4; // IEEE Float32

    insig_z_gl.vertexAttribPointer(a_position, 3, insig_z_gl.FLOAT, false, byte * 6, 0);
    insig_z_gl.vertexAttribPointer(a_col, 3, insig_z_gl.FLOAT, false, byte * 6, byte * 3);

    insig_z_gl.enableVertexAttribArray(a_position);
    insig_z_gl.enableVertexAttribArray(a_col);

    let ibo = insig_z_gl.createBuffer();
    insig_z_gl.bindBuffer(insig_z_gl.ELEMENT_ARRAY_BUFFER, ibo);
    insig_z_gl.bufferData(insig_z_gl.ELEMENT_ARRAY_BUFFER, triangles, insig_z_gl.STATIC_DRAW);

    // Then draw a frame
    insig_z_gl.drawElements(insig_z_gl.TRIANGLES, triangles.length, insig_z_gl.UNSIGNED_SHORT, 0);
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
    fetch("/website-content/data/pml_major.json")
        .then(response => response.json())
        .then(function(response) {
            createCards(response, true)
        })

    // Destroy HTML warnings
    document.getElementById("pl_major_warning").remove()
    console.log("Did the warning go away?")
}

window.onload = main