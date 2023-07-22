axios.get('http://localhost:3000/codenicely-assignment/movies')
 .then(result => {
    console.log(result.data.result);
    let arr = result.data.result;

    const fragment = document.createDocumentFragment();

    arr.forEach(element => {
        let id = element.id;
        let movieName = element.movieName;
        let showTimeArr = element.showTimes;
        
        let h1 = document.createElement('h1');
        h1.innerText = `${id}`;
        h1.style.color = '#FFBD00'
        fragment.appendChild(h1);

        let h2 = document.createElement('h2');
        h2.innerText = `${movieName}`;
        fragment.appendChild(h2);

        showTimeArr.forEach(new_element => {
            let p = document.createElement('p');
            p.innerText = new_element.showTime;
            
            fragment.appendChild(p);
        });

        fragment.appendChild(document.createElement('hr'));
    })

    document.body.append(fragment);
 })
 .catch(err => {
    console.error(err);
    alert('Error! Something went wrong while making an API call.');
 })