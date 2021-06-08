// getData();

function india() {
    getData("india");
}

function japan() {
    getData("japan");
}

function china() {
    getData("china");
}




function getData(input) {
    //fetching data from api
    fetch("https://api.covid19api.com/country/" + input)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            var output = "";
            data = data.reverse();
            data = data.slice(0, 10);

            data.forEach(day => {
                output += `
                <tr>
                        <td>${day.Date.substring(0,10)}</td>
                        <td>${day.Confirmed}</td>
                        <td>${day.Recovered}</td>
                        <td>${day.Deaths}</td>
                    </tr>
                `
            });
            document.querySelector("#results").innerHTML = output;
        })
}