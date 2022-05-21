import Head from "next/head";
import styles from "./index.module.css";
import React from "react";
// import { Component } from "react/cjs/react.development";

class Home extends React.Component {
  state = {
    promptInput: "",
    responses: [],
  };
  onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ promptInput: this.state.promptInput }),
    });
    const data = await response.json();
    this.updateResponses(data.result[0].text);
  };
  updateResponses = (result) => {
    const response = {
      prompt: this.state.promptInput,
      response: result,
    };
    const { responses } = { ...this.state };
    responses.unshift(response);
    this.setState({ responses });
  };
  handleChange = ({ currentTarget: input }) => {
    this.setState({ promptInput: input.value });
  };
  render() {
    return (
      <div>
        <Head>
          <title>Fun With AI</title>
        </Head>

        <main className={styles.main}>
          <h1>Fun With AI</h1>
          <form onSubmit={this.onSubmit}>
            <textarea
              type="textarea"
              name="prompt"
              placeholder="Enter Prompt"
              onChange={this.handleChange}
            />
            <input type="submit" value="Generate response" />
            <h2>Responses</h2>
            {this.state.responses.map((response) => (
              <div className={styles.result}>
                <div className={styles.heading}>prompt:</div>
                <div>{response.prompt}</div>
                <div className={styles.heading}>response:</div>
                <div>{response.response}</div>
              </div>
            ))}
          </form>
        </main>
      </div>
    );
  }
}

export default Home;
