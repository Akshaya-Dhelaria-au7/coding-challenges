$.validator.setDefaults({
  submitHandler: function () {
    let form_data = new FormData($('#signupForm')[0]);
    let http_req = new XMLHttpRequest();
      http_req.onloadstart = (e) => {
        console.log('started');
        let responsediv = document.createElement( "div" );
        responsediv.id = 'response';
        $("#newDialog").append(responsediv);
        let button = document.createElement('button');
        button.id = 'closeDialog';
        button.innerText = 'Close';
        button.addEventListener('click', closeDialogBox());
        $("#newDialog").append(button);
        $("#newDialog")[0].showModal();
      };
      http_req.open('POST', '/');
      http_req.upload.onprogress = function(e) {
        showProgress(e);
      };
      http_req.send(form_data);
      http_req.onloadend = (e) => {
        console.log(http_req.responseText);
        $('#signupForm')[0].reset();
        $('#response')[0].innerHTML += `<h4>${http_req.responseText}</h4>`;
      }
  }
});

$.validator.addMethod('filesize', function(value, element, param) {
  // param = size (in bytes) 
  // element = element to validate (<input>)
  // value = value of the element (file name)
  return this.optional(element) || (element.files[0].size <= param) 
});


function closeDialogBox() {
  return () => {
    console.log('button clicked');
    $('#response').remove();
    $('#closeDialog').remove();
    $('#newDialog')[0].close();
  }
};

function showProgress(e) {
  console.log(`${e.type}: ${e.loaded} bytes transferred`);
  $('#response')[0].innerHTML += `<p>${e.type}: ${e.loaded} bytes transferred</p>`;
};