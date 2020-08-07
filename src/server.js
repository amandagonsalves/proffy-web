const proffys = [
    {
        name: 'Diego Fernandes', 
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" alt="Diego Fernandes', 
        whatsapp: '92837673', 
        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
        subject: 'Química', 
        cost: '20', 
        weekday: [0], 
        time_from: [1200], 
        time_to: [1800]
    },
    {
        name: 'Daniele Fernandes', 
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" alt="Diego Fernandes', 
        whatsapp: '92837673', 
        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
        subject: 'Química', 
        cost: '20', 
        weekday: [0], 
        time_from: [1200], 
        time_to: [1800]
    }
];
function pageLanding(res,res) {
    return res.sendFile(__dirname + '/views/index.html');
}
function pageStudy(res,res) {
    return res.sendFile(__dirname + '/views/study.html');
}
function pageGiveClasses(res,res) {
    return res.sendFile(__dirname + '/views/give-classes.html');
}
const express = require('express');
const server = express();
server.use(express.static('public'));
server.get('/', pageLanding);
server.get('/study', pageStudy)
server.get('/give-classes', pageGiveClasses)
server.listen(5500);