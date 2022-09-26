module.exports = (app)=>{
    app.use('/cep', require('./routes/cep'))
    app.use('/media', require('./routes/media')) 
}