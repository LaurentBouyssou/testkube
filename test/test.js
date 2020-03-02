//const EventEmitter = require('events')
//const axios= require('axios')

const axios = require('axios');

//.get(`https://api.github.com/users/${username}`)


//console.log("test");

function ReturnHttpres(http_response)
{

  //console.log(http_response);
  //console.log(http_response.status);
  switch (http_response.status)
  {
    case 200: 
        console.log("OK")
        break;
    default:
      console.log("Error:"+http_response.status)
      break;

  }

}


function get_http(thisurl)
{
      let toreturn=axios.get(thisurl)
      .then((response) => 
       {
         
            //console.log(response.data);
            //console.log(response.status);
            //console.log(response.statusText);
            //console.log(response.headers);
            //console.log(response.config);
    //        data=response.data ;
  //          status=response.status;
            ReturnHttpres(response);
            return response.status;

        })
      .catch(error => 
        {
          console.log("Error:"+error.errno)
          //console.log(error)
        });

      return toreturn;

}
  
  var data=get_http(`http://localhost:8085`);

  

