window.onload = function (event) {

    var wrapIcon = document.querySelector("#wrapicon");

    var page = 1;
    var limit = 3;
    var url = "https://jsonplaceholder.typicode.com/posts";


    var serverUrl = url + '?_page=' + page + '&_limit=' + limit;

    fetch(serverUrl)
        .then(
            function (resp) {
                return resp.json();
            }
        )
        .then(
            function (data) {

                //console.log(data);
                data.forEach(function (val, index) {
                    //console.log(val);
                    var div = document.createElement('div');
                    div.className = "icon-item";
                    var blogTitle = document.createElement('h3');
                    var detail = document.createElement('a');
                    detail.href = 'detail.html';
                    detail.innerHTML = 'Detail';
                    var blogBody = document.createElement('p');
                    blogTitle.name = "title";
                    blogTitle.innerHTML = val.title;
                    blogTitle.style.height = "100px";
                    blogBody.innerText = val.body;

                    div.appendChild(blogTitle);
                    div.appendChild(blogBody);
                    wrapIcon.appendChild(div);

                });


            });


    function getBlogs(url, page = 1, limit = 3) {
        console.log('ambil data...')

        var serverUrl = url + '?_page=' + page + '&_limit=' + limit;

        fetch(serverUrl)
            .then(
                function (resp) {
                    return resp.json();
                }
            )
            .then(
                function (data) {

                    //console.log(data);
                    data.forEach(function (val, index) {
                        //console.log(val);
                        var blogTitle = document.createElement('h3');
                        var detail = document.createElement('a');
                        detail.href = 'detail.html';
                        detail.innerHTML = 'Detail';
                        var blogBody = document.createElement('p');
                        blogTitle.name = "title";
                        blogTitle.innerHTML = '<a href="detail.html?id=' + val.id + '">' + val.title + '</a>';
                        blogBody.innerText = val.body;

                        wrapper.appendChild(blogTitle);
                        wrapper.appendChild(blogBody);

                    });

                    //display load more
                    loadmore.style.display = 'block';

                });

        //display load more
        loadmore.style.display = 'block';
    }

    function getDetail() {

    }


    var contactForm = document.querySelector('#contactform')
    contactForm.addEventListener("submit", function (event) {
        console.log('form submitted');

        event.preventDefault();

        var formName = document.querySelector('#form-name');
        var formEmail = document.querySelector('#form-email');
        var formMessage = document.querySelector('#form-message');

        var formData = {
            name: formName.value,
            email: formEmail.value,
            message: formMessage.value,
        }

        //console.log(formName.value);

        fetch('http://localhost:3000/contacts', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                //succesfully submitted
                console.log(data);

            })
            .catch(function (error) {
                //something error happened
                console.error(error);
            });

    });










    console.log('selesai');
}