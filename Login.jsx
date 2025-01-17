import React, { useState, useEffect } from "react";
import myImage from "../../assets/HomeScreen.png"; // Import the image
import yourImage from "../../assets/Edit.png"; // Import the image

const Home = () => {
  const quotes = [
    "Even the smallest step forward is still a step in the right direction.",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The journey of a thousand miles begins with one step.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don't watch the clock; do what it does. Keep going.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Dream big and dare to fail.",
    "Opportunities don't happen, you create them.",
    "Your time is limited, so don’t waste it living someone else’s life.",
  ];

  const [quote, setQuote] = useState("");
  const [username] = useState("Username"); // Replace with dynamic user data if needed

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []); // Get a random quote on initial render

  return (
    <>
      <div className="home-container">
        <h1>Hi, {username}</h1>
        <img
          src={myImage}
          alt="A descriptive text about the image"
          className="home-image"
        />
        <h2>Quote of the Day</h2>
        <p>{quote}</p>
        <a className="cta_red">Add Today's Mindly</a>
      </div>
      <div className="latest-mindly-section">
        <h3>Latest Mindly</h3>

        {/* Ny boks under Latest Mindly */}
        <div className="mindly-box">
          <div className="small-box">
            <div className="small-box-content">
              <p className="small-box-header">OCT</p>
              <p className="small-box-number">10</p>
            </div>
          </div>{" "}
          {/* Small box */}
          <div className="mindly-text">
            <h4>Today I Laughed</h4>
            <h3>
              Today was very funny because Andreas told me that I should start
              coming in a little bit earlier than usual.
            </h3>
            <img
              src={yourImage}
              alt="Description of the image"
              className="small-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
