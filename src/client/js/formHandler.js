function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/process-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test: "test" })
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        // document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
