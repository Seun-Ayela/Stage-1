const express = require('express');
const app = express();
// const port = 8030;
const port = process.env.PORT || 8000;
const datetime = require('date-and-time');

app.use(express.json());

app.get('/api', (req, res) => {
    // const { slack_name, track } = req.query;
    // // const current_day = datetime.format(new Date(), 'dddd');
    // const current_day = new Date();
    // const utc_time = now.toISOString().slice(0, 19) + 'Z';

    const { slack_name, track } = req.query;
    const current_day = new Date().toISOString().slice(0, 19) + 'Z';


    // const current_utc_time = datetime.parse(utc_time, 'YYYY-MM-DDTHH:mm:ss[Z]');
    // const two_hours_ago = datetime.addHours(new Date(), -2);
    // const two_hours_later = datetime.addHours(new Date(), 2);

    const current_utc_time = new Date();
    const two_hours_ago = datetime.addHours(new Date(), -2);
    const two_hours_later = datetime.addHours(new Date(), 2);


    const status_code = (current_utc_time >= two_hours_ago && current_utc_time <= two_hours_later) ? 200 : 400;

    const github_file_url = "https://github.com/Seun-Ayela/Stage-1/blob/main/app.js";
    const github_repo_url = "https://github.com/Seun-Ayela/Stage-1.git";

    const response = {
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
