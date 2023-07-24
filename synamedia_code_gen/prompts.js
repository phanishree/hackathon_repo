const ut_prompt = "Write a unit test code for the below node js server.js. with mock request and run with mocha. in a proper runnable format. and give me only code\n"

const doc_prompt = "Generate a proper yaml file for the below API documentation\n"

const direct_promtpt = "Give me a nodejs code using express library for the following data. There are two APIs 1)The method is a GET method which takes a query param of user_id and username and consoles it and send the same result back as response. 2)The method is POST method which takes a json body.The json body include a)username b)age c)user_id which is a mandatory field.The POST API will print the JSON body provided and sends the result as response.Do not connect to any database."

const final_prompt = "write a node js server code to handle the below api document and write everything in a single file //server.js give me only. comment all the strings\n include express.json() and module.exports=app and write the code to listen on port 3000\n "

const intermediate_logic_prompt= "  Give me a nodejs code using express library for the following data. There are 2 methods 1)The method is a GET method which gets all the posts from this endpoint https://jsonplaceholder.typicode.com/posts and send the same result back as response. 2) The method is a POST method which posts data to this endpoint https://jsonplaceholder.typicode.com/posts . This method takes body in a json format. title, body, userId are the keys in the body and userId is a mandatory key. POST method will send the rresult as a response. Use axios method to call the endpoints. Do not connect to any database.";

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


module.exports = { yaml_prompt_1, ut_prompt, doc_prompt, direct_promtpt, final_prompt, intermediate_logic_prompt };