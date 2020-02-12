"use strict"; // pour etre sur de la declaration des variable
//
const EventEmitter = require('events');
let url=require('url');
let http=require('http');


const PORT_EXT=8085;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


let App={
    start: function (port) 
    {
        let Obj_eventemitter = new EventEmitter()
        let random_number=getRandomInt(100);

        let server = http.createServer((request,response)=>
        {
            let url_appel=url.parse(request.url,true);
            // console.log(url_appel.pathname)
            switch (url_appel.pathname)
            {
                case '/':
                default:            
                response.write('Test OK : page par defaut')
                response.end()
                break;
            }
        }).listen(port)
        return Obj_eventemitter
    }
}

let exApp= App.start(PORT_EXT);

