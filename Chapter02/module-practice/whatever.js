module.exports = {
    returnWhatever: function() {
        returnSomething();
    }
}

let returnSomething = () => {
    console.log('whatever');
}