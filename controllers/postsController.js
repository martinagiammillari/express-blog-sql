import postsArray from "../postsArray.js"


// Index
function index(req, res) {
    const risposta = {
        count: postsArray.length,
        results: postsArray
    }
    res.json(risposta)
}


//  Show
function show(req, res) {
    const id = parseInt(req.params.id);
    const post = postsArray.find(post => post.id === id);
    if (post !== undefined) {
        res.json(post);
    } else {
        res.status(404);
        res.json({
            error: "Error 404",
            message: "Not found post"
        });
    }

}




//  Create
function create(req, res) {
    const dati = req.body;
    if (dati.titolo === undefined || dati.titolo.length === 0) {
        res.status(400);
        return res.json({
            error: "client error",
            message: "Il titolo è obbligatorio e non può essere vuoto"
        })
    }

    const newId = postsArray[postsArray.length - 1].id + 1;
    const newPost = {
        id: newId,
        titolo: dati.titolo,
        contenuto: dati.contenuto,
        immagine: dati.immagine,
        tags: dati.tags
    };
    postsArray.push(newPost);
    res.status(201);
    res.json(newPost);
}




//  Update
function update(req, res) {
    const id = parseInt(req.params.id);
    const post = postsArray.find((post) => post.id === id);
    if (post === undefined) {
        return res.status(404)
        res.json({
            error: "Error 404",
            message: "Not found post"
        });
    }
    const dati = req.body;
    if (dati.titolo === undefined || dati.titolo.length === 0) {
        res.status(400);
        return res.json({
            error: "client error",
            message: "Il titolo è obbligatorio e non può essere vuoto"
        })
    }

    post.titolo = dati.titolo,
        post.contenuto = dati.contenuto,
        post.immagine = dati.immagine,
        post.tags = dati.tags

        res.json(post);
}




//  Modify 
function modify(req, res) {
    const id = req.params.id;
    res.send("aggiorna parzialemte post n." + id)
}




//  Destroy
function destroy(req, res) {
    const id = parseInt(req.params.id);

    const index = postsArray.findIndex(post => post.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Error 404",
            message: "Not found post"
        });
    }
    postsArray.splice(index, 1);
    console.log(postsArray);

    res.status(204);
}







const controller = {
    index,
    show,
    create,
    update,
    modify,
    destroy
};

export default controller;