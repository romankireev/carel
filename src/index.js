const $ = require('jquery')
window.jQuery = $
if($) {
    console.log($("body"))
    require('bootstrap')
    require("../node_modules/owl-carousel/owl-carousel/owl.carousel")
    require ('./styles/required.scss')
    require('./content.js')
    require("@fancyapps/fancybox")  
}






