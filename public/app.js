async function postData(url = '', data = {}) {
    // Default options are marked with *
    let response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy,
        dayMonth = "02/08/",
        birthday = dayMonth + yyyy;
    today = mm + "/" + dd + "/" + yyyy;
    console.log(today)
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }

    if(today  ==  "01/10/2022"){
        console.log("Weekly Reminder");

    postData("http://localhost:3000/MSG", {
        "DaysLeft": "28 Days Left Til Gay"
        })
}
    if(today  == "01/17/2022"){
        console.log("Weekly Reminder");
  
    postData("http://localhost:3000/MSG", {
        "DaysLeft": "21 Days Left Til Gay"
        })

}
    if(today  == "01/24/2022") {
        console.log("Weekly Reminder");

        postData("http://localhost:3000/MSG", {
            "DaysLeft": "14 Days Left Til Gay"
            })
}
    if(today  == "01/31/2022"){
        console.log("Weekly Reminder");

        postData("http://localhost:3000/MSG", {
            "DaysLeft": "7 Days Left Til Gay"
            })
}
    if(today  == "02/07/2022"){
        postData("http://localhost:3000/MSG", {
            "DaysLeft": "1 Day Left Til Gay"
            })
}
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)

        
    }());


