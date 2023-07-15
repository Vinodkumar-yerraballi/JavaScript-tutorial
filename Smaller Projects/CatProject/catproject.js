function switchOFF(){
document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
document.getElementById('catImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
document.getElementById('switchStatus').textContent="Switch OFF"
document.getElementById('offSwitch').style.backgroundColor='gray'
}
function switchON(){
document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
document.getElementById("switchStatus").textContent="Switch ON"
document.getElementById("onSwitch").style.backgroundColor='red'
}