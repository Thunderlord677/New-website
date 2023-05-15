let data = {id: "hi", type: "text", data: "Cool text here!"}

        setTimeout(function() {
            document.getElementById("start").showModal();
        }, 100);

        setTimeout(function() {
            document.getElementById("start").close();
            document.getElementById("load").showModal();
            
            setTimeout(function() {
                load();
        }, 1000);
        }, 5000);

        function load() {
            if (data.type == "iframe") {
                document.write(`<iframe src="${data.data}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
    Your browser doesn't support iframes
</iframe>`);
noload();
            } else if (data.type == "html") {
                document.write(`${data.data}`);
                noload()
            } else if (data.type == "text") {
                document.write(`
                <style>
                @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');

                h1 {
                  text-align: center;
                  font-family: 'Bowlby One SC', cursive;
                  font-size: 25.5vw;
                }
                </style>
                
                <h1>${data.data}</h1>
                `);
                noload();
            } else if (data.type == "video") {
                document.write(`<video autoplay loop id="myVideo">
  <source src="${data.data}">
  Your browser does not support HTML5 video.
</video>
<style>
            * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
  font-size: 17px;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}
        </style>`);
        noload();
            } else if (data.type == "image") {
                document.write(`
                <style>
                    * {
    background-image: url('${data.data}');
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-size: 100% 100%;
                    }

</style>`);
noload();
            } else {
                document.getElementById("error").innerHTML = "Error getting data"
            }
        }

        function noload() {
            setTimeout(function() {
                document.getElementById("load").close();
        }, 1000);
        }

        setTimeout(function() {
            alert('Here');
    }, 15000);