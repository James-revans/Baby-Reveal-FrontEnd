# Baby Reveal Voting App

## How it was used

I displayed this url on a large monitor to view the live results:
https://babyreveal.netlify.com/#/

As guests arrived, they scanned the QR code to visit this url on their phone:
https://babyreveal.netlify.com/#/vote

Once the gender reveal happened, I went to this url to change the display to "It's a boy!" or "It's a girl! depending on which it was.
https://babyreveal.netlify.com/#/controller


## Project setup
```
npm install
```
## Starting Development Servers
Run ```npm run serve``` to start the Vue app on localhost:8080;

In another CLI tab, run ```npm run lambda``` to start the API on localhost:9000.

See **./src/global/constant.js** for referene on how vue app determines the API endpoint. 


<br/>
<br/>


## To Build
### Compiles and minifies vue app for production and builds Lambda functions
```
npm run build
```
### Builds just the Vue app
```
npm run build:vue
```
### Builds just the Lambda functions
```
npm run build:vue
```


<br/>
<br/>

## Endpoints
**Note:** lambda functions don't require you to specify request type. Also, all request bodies need to be a string. So stringyfy your objects before sending them and parse them when you receive them.  


### Get Votes

**Type**: `GET`

**URL**: ```/get-votes```

**Example Response**
```
{
    "settings": {
        "_id": "5d72a0a025136007740d0f8b",
        "winner": "girl",
        "created": "1567793312213",
        "__v": 0
    },
    "votes": {
        "boy": 0.8,
        "girl": 0.2
    }
}
```

<br/>
<br/>

### Submit Vote

**Type**: `POST`

**URL**: ```/submit-vote```

**Example Body**:
```
  {
    // 'boy' or 'girl'
    'vote': 'boy'
  }
```

<br/>
<br/>

### Update Settings

**Type**: `POST`

**URL**: ```/update-settings```

**Example Body**:
```
  {
    // null, 'boy', 'girl'
    'winner': 'boy'
  }
```

<br/>
<br/>

## Other Scripts
### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
