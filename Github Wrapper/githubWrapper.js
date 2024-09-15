const userNameInput = $('#userName');
// console.log(userNameInput);
const showDetailsButton = $('#showDetails');

const profileInfoHtml = $('#profileInfo')
// let user = userNameInput.val();

function showReposInfo(user) {fetch(`https://api.github.com/users/${user}/repos`)

    .then(res => res.json())
    .then(projects => {
        console.log(projects);

        for(i=0;i<=projects.length;i++){
        $('#projectInfo').html(`
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                    ${projects[i].name}
                    </div>
                    <div class="card-subheading">
                    ${projects[i].language}
                    </div>
                    <div class="card-text">
                    <button>
                    <a href=${projects[i].html_url}>Do checkout Project               
                    </button>    
                    </div>
                </div>
            </div>
            `)}
    });}

showDetailsButton.click(() => {
    const user = userNameInput.val();
    // console.log(user);


    fetch(`https://api.github.com/users/${user}`)
    .then((res) => {
        return res.json()
        .then((data) => {
            // console.log(data);
            $('#profileInfo').html(`
                <div class="card">
                <div class="card-image">
                    <img src="${data.avatar_url}" height="100px" alt="${data.name}">
                </div>
                <div class="card-body">
                    <div class="card-title">
                    ${data.name}
                    </div>
                    <div class="card-subheading">
                    ${data.login}
                    </div>
                    <div class="card-text">
                    <p>${data.bio}</p>
                    <p>${data.followers} Followers ${data.following} Following</p>
                    <p></p>
                    </div>
                </div>
            </div>
                `) 
        });
    })
    // const p = new Promise((resolve,reject) => {
    //     const x = 1+1;
    //     if (x === 2) {
    //         resolve('success');
    //     } else {
    //         reject('error');
    //     }

    //  })
})



















// const userNameInput = document.getElementById('userName');

// const showDetailsButton = document.getElementById('showDetails');

// showDetailsButton.addEventListener('click',() => {
//     const user = userNameInput.value;
//     console.log(user);
// })