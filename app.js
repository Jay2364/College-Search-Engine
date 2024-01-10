let btn = document.querySelector('button');
let img = document.querySelector('img');
let p = document.querySelector('p');

// btn.addEventListener('click', async () => {
//     let link = await getLink();
//     img.setAttribute('src',link);
// });

// let url = "https://dog.ceo/api/breeds/image/random";

// async function getLink(){
//     try{
//         let res = await axios.get(url);
//         return res.data.message;
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// let url = "https://icanhazdadjoke.com/";

// btn.addEventListener('click',async () =>{
//     await getLink();
// });

// async function getLink(){
//     try{
//         let config = {headers:{Accept: "application/json"}};
//         let res = await axios.get(url,config);
//         // console.log(res.data);
//         p.innerText = res.data.joke;
//     }
//     catch(err){
//         console.log(err);
//     }

// }


let url = "http://universities.hipolabs.com/search?name=";

btn.addEventListener('click', async () => {
    let country = document.querySelector('#search').value;
    console.log(country);

    let colgArr = await getLink(country);
    show(colgArr);
});

function show(clgArr){
    let div = document.querySelector('.display');
    div.innerHTML = '';

    for(i of clgArr){
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('list');
        div.appendChild(innerDiv);

        // para1
        let para1 = document.createElement('p');
        para1.classList.add('para1');
        innerDiv.appendChild(para1);
        // para2
        let para2 = document.createElement('p');
        para2.classList.add('para2');
        innerDiv.appendChild(para2);

        if (i['state-province'] == null){
            para1.innerText = "----";
        }
        else{
            para1.innerText = i['state-province'];
        }
        para2.innerText = i.name;
    }
}

async function getLink(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
        // p.innerText = res.data.name;
    }
    catch(err){
        console.log(err);
    }
}


