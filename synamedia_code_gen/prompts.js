const ut_prompt = "Write a unit test code for the below node js server.js. with mock request and run with mocha. in a proper runnable format. and give me only code\n"

const package_json_prompt = "write package.json for both files combined and project name is syna_api and remove all strings, return only json, remove comments"

const doc_prompt = "Generate a proper yaml file for the below API documentation\n"

const direct_promtpt = "Give me a nodejs code using express library for the following data. There are two APIs 1)The method is a GET method which takes a query param of user_id and username and consoles it and send the same result back as response. 2)The method is POST method which takes a json body.The json body include a)username b)age c)user_id which is a mandatory field.The POST API will print the JSON body provided and sends the result as response.Do not connect to any database."

const common_prompt = "write a node js server code to handle the below api document and write everything in a single file //server.js give me only. comment all the strings\n include express.json() and module.exports=app and write the code to listen on port 3000\n Please give the proper code without any compilation or runtime errors "

const intermediate_logic_prompt= "  Give me a nodejs code using express library for the following data. There are 2 methods 1)The method is a GET method which gets all the posts from this endpoint https://jsonplaceholder.typicode.com/posts and send the same result back as response. 2) The method is a POST method which posts data to this endpoint https://jsonplaceholder.typicode.com/posts . This method takes body in a json format. title, body, userId are the keys in the body and userId is a mandatory key. POST method will send the rresult as a response. Use axios method to call the endpoints. Do not connect to any database.";

const complex_logic_prompt_1 = "  Give me a nodejs code using express library for the following data. There are 2 methods 1)The method is a GET method which gets all the posts from the database and send the same result back as response. 2) The method is a POST method which posts data to the database . This method takes body in a json format. title, body, userId are the keys in the body and userId is a mandatory key. POST method will send the rresult as a response. Connect o MomgoDB using these credential - username: straw_hats - password: 3auocFlNE5ys9zGh. Create a schema using mongoose, with the following properties 1. userId of type String 2. title of type String 3. body is of type String. Please provide the code according to the latest mongoose version 7.4.0.  Make the body parsable. Don't provide any depricated code."

const rach_prompt= `Give me a nodejs code using express library for the following data. Get all advertisers

 

GET http://hostname:port/inventory/companies/advertisers

Get a list of advertisers

 

QUERY PARAMS

offset

integer

Starting point to return date from to allow a paginated display.

 

limit

integer

Maximum number of entries to return in the response list.

 

HEADERS

flow_context

string

 

 

RESPONSES

200

The request succeeded. The response body contains a list of advertisers

401

The request is not authorized - the token may have expired. Get a new token and try the request again.

403

The caller is forbidden from accessing the requested resource.

500

An internal server error occurred and the request was not successful.`

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


module.exports = { yaml_prompt_1, ut_prompt, doc_prompt, direct_promtpt,  common_prompt, intermediate_logic_prompt, complex_logic_prompt_1, rach_prompt, package_json_prompt};
