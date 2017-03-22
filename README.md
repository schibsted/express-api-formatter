# express-api-formatter

Add `success` and `error` functions response object in express.

## Usage

```js
const express = require('express');
const formatter = require('@spt-identity/express-api-formatter');

const app = express();
app.use(formatter());
app.get('/', (req, res, next) => res.api.success(200, { status: 'ok'}));
```

## API

`api.success: (code = 200, data = {})`

Sample response
```json
{
    "data": {
        "id": 1,
        "title": "my object"
    }
}
```

`api.error: (code = 400, type = '', description = '')`

Sample response
```json
{
    "error": {
        "code": 400,
        "type": "something broken",
        "description": "you broke something"
    }
}
```
