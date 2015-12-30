//Import dependencies
var path = require('path');

//Get the ext name sync
function Get(url)
{
  //Initialize the output
  var out = {"path": "", "file": "", "ext": "", "query": {}, "hashtag": ""};

  //Save the file path
  out.path = url;

  //Find if exists a ? or #
  var p1 = out.path.indexOf('?');
  var p2 = out.path.indexOf('#');

  //Check for hashtag
  if(p2 != -1)
  {
    //Get the hashtag value
    out.hashtag = out.path.substring(p2 + 1);

    //Reset the file path
    out.path = out.path.substring(0, p2);
  }

  //Check for query
  if(p1 != -1)
  {
    //Get the query value
    var query = out.path.substring(p1 + 1);

    //Split the query value
    query = query.split('&');

    //Insert into the output
    for(var i = 0; i < query.length; i++)
    {
      //Get the item
      var item = query[i].split('=');

      //Save to the output
      out.query[item[0]] = item[1];
    }

    //Reset the file path
    out.path = out.path.substring(0, p1);
  }

  //Get the file name
  out.file = out.path.substring(out.path.lastIndexOf('/') + 1);

  //Get the extension
  out.ext = path.extname(out.file).replace('.', '');

  //Return
  return out;
}

//Exports to node
module.exports = Get;
