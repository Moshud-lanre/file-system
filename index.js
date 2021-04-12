const https = require('https');
const fs = require('fs');

const url = "https://jsonplaceholder.typicode.com/posts";

https.get(url, (response) => {
    const body = [];
    response.on('data', (chunk) => {
        body.push(chunk);
    });

    response.on('end', () => {

     // Joinning of the buffer datas into a single Buffer object
        const data = Buffer.concat(body);

        // conversion of the Buffer Object into JSON 
        const result = JSON.parse(data);

        //conversion of json object into string 
        const dataString = JSON.stringify(result);

        //storing of the data in a file
        fs.writeFileSync('result/posts.json', dataString);

        console.log("Data successfully written!");
    });
}).on('error', (e) => {
    console.log(e);
});