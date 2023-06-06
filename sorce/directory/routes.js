let cards = [
    {
        id: "1",
        name: "Bobby",
        status: "Great",
        priority: 2
    },
    {
        id: "2",
        name: "Allis",
        status: "not Bad",
        priority: 5
    },
    {
        id: "3",
        name: "Steven",
        status: "OK",
        priority: 10
    },
]

function routes(app){

    app.get('/', (req, res) => {
        res.send("Home Page")
    });

    app.get('/cards', (req, res) => {
        res.status(200).json(cards)
    });

    app.delete('/cards/:cardId', (req, res) => {
        const cardId = req.params.cardId

        cards = cards.filter(el => el.id !== cardId);
        res.send('deleted')
    });

    app.post('/cards', (req, res) => {
        const newCard = req.body;

        cards.push({id: Math.random().toString(), ...newCard})
        res.send("Card created")
    });

    app.patch('/cards/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        const card = req.body;

        cards = cards.map(el => el.id === cardId ?
            ({...card, id: cardId}) : el)
        res.send("Card Updated")
    });
}

module.exports = routes;

