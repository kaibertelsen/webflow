const data = JSON.stringify({
  fields: {
    slug: 'API-2020',
    name: 'api-name',
    _archived: false,
    _draft: false
  }
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  console.log(this.readyState,this.DONE,this.responseText);
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open('PATCH', 'https://api.webflow.com/collections/6396d327f6b0c7cc0138815c/items/6396d327f6b0c73ec7388197?live=true');
xhr.setRequestHeader('accept', 'application/json');
xhr.setRequestHeader('Accept-Version', '1.0.0');
xhr.setRequestHeader('content-type', 'application/json');
xhr.setRequestHeader('authorization', 'Bearer 15873333fd99cfed332cfead4e28bdd1a84a66629c43c45fec3dafde93f2310b');

xhr.send(data);
