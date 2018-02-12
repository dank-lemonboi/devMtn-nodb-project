let messages = [];
let id = 0;


module.exports = {
    Create: (request, response) => {
        request.body.id = id;
        messages.push(request.body);
        id++;
        response.status(200).send(messages);
    },
    Read: (request, response) => {
        response.status(200).send(messages);
    },
    Update: (request, response) => {
        console.log('we made it!')
        for(let i = 0; i < messages.length; i++) {
            console.log(messages[i].id , +request.params.id)
            if(messages[i].id === +request.params.id) {
            messages[i].text = request.params.text || messages[i].text;
            }
        }
        response.status(200).send(messages)
    },
    Delete: (request, response) => {
        for(let i = 0; i < messages.length; i++) {
          if(messages[i].id === +request.params.id) {
              console.log(request.params.id)
            messages.splice(i, 1);
            response.status(200).send(messages)
            }
            
        }
        
  }
}
//   messages = messages.filter( message => {
//     return message.id !== +request.params.id