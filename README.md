# stattic-parseurl

[![npm](https://img.shields.io/npm/v/stattic-parseurl.svg?style=flat-square)](https://www.npmjs.com/package/stattic-parseurl)
[![npm](https://img.shields.io/npm/dt/stattic-parseurl.svg?style=flat-square)](https://www.npmjs.com/package/stattic-parseurl)


Parse an url. Made for stattic tool.

Example of use:

```javascript
//Import
var ParseUrl = require('stattic-parseurl');

//Check
var url = ParseUrl('this/is/a/link.php?id=2&value=Hello#GO');

/* Returns:
{ path: 'this/is/a/link.php',
  file: 'link.php',
  ext: 'php',
  query: { id: '2', value: 'Hello' },
  hashtag: 'GO' }
*/
```
