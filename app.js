const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require('dotenv').config();

app.get('/api', (req, res) => {
  // Get the query parameters from the request
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = new Date().toLocaleString('en-US',{weekday:'long'});
  const now = new Date();
 
  // Get the current UTC time
  const currentDate = now.toISOString().slice(0,19) + 'Z';

  // Get the URL of the file being run
  const githubFileUrl = 'https://github.com/Seun-Ayela/Stage-1/blob/main/app.js'; 

  // Get the GitHub repository URL
  const githubRepoUrl = 'https://github.com/Seun-Ayela/Stage-1'; 

  // Prepare the JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentDate,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200
  };

  // Send the JSON response
  res.json(jsonResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


