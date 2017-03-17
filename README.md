# watson-viber-bot-example
Viber chat interface to interact with watson conservation APIs.

### Setup
> create `config` directory for storing the configurations.<br>
> add file `default.json` to `config/default.json`

##### config/default.json
```json
{
  "conv":{
    "username" : "<conservation_api_username>",
    "password" : "<password>",
    "workspace_id" : "<workspace_id>"
  },
  "viber":{
    "auth_token":"<auth_token>",
    "name":"<name_of_bot>"
  }
}
```


> For deploying, you need `config/production.json` file  for all the configurations.

##### config/production.json
```json
{
  "conv":{
    "username" : "<conservation_api_username>",
    "password" : "<password>",
    "workspace_id" : "<workspace_id>"
  },
  "viber":{
    "auth_token":"<auth_token>",
    "name":"<name_of_bot>"
  }
}
```


![screenshot_bot](https://github.com/akshaykale/watson-viber-bot-example/blob/master/viber-watson-conversation.png)
