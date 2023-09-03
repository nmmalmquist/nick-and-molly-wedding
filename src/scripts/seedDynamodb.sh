#!/usr/bin/env bash

# Create User table wit email index
aws --endpoint-url 'http://localhost:8000' dynamodb create-table --table-name 'nick-and-molly-wedding-users' \
 --attribute-definitions AttributeName=id,AttributeType=S AttributeName=email,AttributeType=S --key-schema AttributeName='id',KeyType='HASH' \
 --billing-mode PAY_PER_REQUEST \
 --global-secondary-indexes \
        "[
            {
                \"IndexName\": \"email-index\",
                \"KeySchema\": [
                    {\"AttributeName\":\"email\",\"KeyType\":\"HASH\"}
                ],
                \"Projection\": {
                    \"ProjectionType\":\"ALL\"
                }
            }
        ]"
