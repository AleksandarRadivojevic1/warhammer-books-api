const app = require('express')()

 
app.get('/v1', (req, res) => {
  res.status(200).send({
    books: 'some example',
    authors: 'another example'
  })

})


app.listen(3001, () => {
  console.log("Listening on port 3001.");
});