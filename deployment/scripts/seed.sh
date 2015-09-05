#!/bin/bash

# Create user
curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d '{"username" : "et_user", "email": "et_user@email.com", "password":"et_pass"}'  http://localhost:4242/users

# Login with user
TOKEN=$(curl --silent -H "Accept: application/json" -H "Content-Type: applications/json" -X POST -d '{"username": "et_user", "password":"et_pass"}' http://localhost:4242/users/login | jq .access_token | sed -e 's/\"//g')

find ../fixtures/languages -name '*.json' -exec curl --header "Authorization: Bearer ${TOKEN}" --header "Content-type: application/json" -d @{} http://localhost:4242/languages \;
