function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let validator = Client.validateURL(formText)


    console.log("::: Form Submitted :::")

    if(validator){
      fetch('http://localhost:8080/process-text', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ articleURL: formText })
      })
      .then(res => res.json())
      .then(function(res) {
          console.log("response from /process-text", res);
          document.getElementById('entry-wrapper').style.visibility = "visible";
          document.getElementById('irony').innerHTML = res.irony
          document.getElementById('agreement').innerHTML = res.agreement
          document.getElementById('subjectivity').innerHTML = res.subjectivity
          document.getElementById('confidence').innerHTML = res.confidence
          document.getElementById('status').innerHTML = res.status
      })

    } else {
      alert('Invalid URL: Please Use Valid URL Structure ');
    }
}

export { handleSubmit }
