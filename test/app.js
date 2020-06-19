import _rtc from "../index";

function init(){
    // _test.checkMediaCapture({audio:true,video: true},true)
    //     .then(_test.checkPeerConnection({},true))
    //     .then(result=>console.log("All tests passed"))
    //     .catch(err=>console.log("err",err))
    // _test.countDevies(true).then(list=>console.log(list));
    _rtc.getUserMediaSilent({video: true})
        .then(stream=>{
            if(!stream) return console.log("No stream could be retrieved");
            _rtc.utils.av.addStreamToDOM(document.querySelector(".vid"),stream).play();
        });
}

document.querySelector(".start").addEventListener("click",init);


