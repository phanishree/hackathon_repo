const ut_prompt = "Write a unit test code for the below node js code and give me only code\n"

const doc_prompt = "Generate a proper yaml file for the below API documentation\n"

const direct_promtpt = "Give me a nodejs code using express library for the following data. There are two APIs 1)The method is a GET method which takes a query param of user_id and username and consoles it and send the same result back as response. 2)The method is POST method which takes a json body.The json body include a)username b)age c)user_id which is a mandatory field.The POST API will print the JSON body provided and sends the result as response.Do not connect to any database."

const final_prompt = "write a node js server code to handle the below api document and write everything in a single file //server.js give me only. comment all the strings\n"

const yaml_prompt_1 = `write a node js server code to handle the below api yaml and write everything in a single file server.js and give me only code.
openapi: 3.0.0
info:
  title: Calculator API
  version: 1.0.0
paths:
  /add:
    post:
      summary: Add two numbers
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                num1:
                  type: number
                  description: First number
                num2:
                  type: number
                  description: Second number
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                type: object
                properties:
                  result:
                    type: number
                    description: Addition result
    get:
      summary: Get the sum of two numbers
      parameters:
        - name: num1
          in: query
          required: true
          schema:
            type: number
            description: First number
        - name: num2
          in: query
          required: true
          schema:
            type: number
            description: Second number
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                type: object
                properties:
                  result:
                    type: number
                    description: Addition result`


module.exports = { yaml_prompt_1, ut_prompt, doc_prompt, direct_promtpt, final_prompt };