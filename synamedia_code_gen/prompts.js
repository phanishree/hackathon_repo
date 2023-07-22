const ut_prompt = "Write a unit test code for the below node js code and give me only code\n"

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


module.exports = { yaml_prompt_1, ut_prompt };