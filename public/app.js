
 function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

const params = getHashParams();

console.log(params)

const access_token = params.access_token,
      token_type = params.token_type
      refresh_token = params.refresh_token,
      error = params.error;


fetch("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10", {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json"
  }
})
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong')
    
        return res.json();
      })
      .then((data) => {
        console.log(data.items[0].name)
        const topOne = document.querySelector("#top-1");
        const topTwo = document.querySelector("#top-2");
        const topThree = document.querySelector("#top-3");
        const topFour = document.querySelector("#top-4");
        const topFive = document.querySelector("#top-5");
        const topSix = document.querySelector("#top-6");
        const topSeven = document.querySelector("#top-7");
        const topEight = document.querySelector("#top-8");
        const topNine = document.querySelector("#top-9");
        const topTen = document.querySelector("#top-10");
        
        topOne.innerHTML = data.items[0].name
        topTwo.innerHTML = data.items[1].name
        topThree.innerHTML = data.items[2].name
        topFour.innerHTML = data.items[3].name
        topFive.innerHTML = data.items[4].name
        topSix.innerHTML = data.items[5].name
        topSeven.innerHTML = data.items[6].name
        topEight.innerHTML = data.items[7].name
        topNine.innerHTML = data.items[8].name
        topTen.innerHTML = data.items[9].name


      

      })
      .catch(function(error){
        console.log(error);
      });