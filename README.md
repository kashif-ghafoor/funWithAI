# FUN WITH AI

App can process plain text prompts and produce outputs that are hard to distinguish from human writing. It uses GPT-3 is a powerful AI model created by [openAI](https://beta.openai.com). Check out some [examples](https://beta.openai.com/examples/) of what it can do! GPT-3. I have implemented 
 It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/).
 I have used completion endpoint. The completions endpoint can be used for a wide variety of tasks. You input some text as a prompt, and the model will generate a text completion that attempts to match whatever context or pattern you gave it. For example, if you give the API the prompt, "As Descartes said, I think, therefore", it will return the completion " I am" with high probability.
 
## Demo
https://kashif-fun-with-ai.herokuapp.com/
## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd funWithAI
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5.create a .env file and put this in your file.

   ```bash
   OPENAI_API_KEY="your api key"

   ```

6. replace your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this app.
