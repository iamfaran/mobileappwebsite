$(document).ready(function(){
    
    $('.js-wp-2').waypoint(function(direction){
        
        
        $('.js-wp-2').addClass('animated slideInUp')
    }, {
        offset:'70%'
    
        
    });
    
    $('.js-wp-3').addClass('animated fadeIn')
    
    
    
    $('.iphone-btn').delay(2300).animate( {bottom:'+=-3'} , 300)
    $('.iphone-btn').delay(1000).animate( {top:'+=-3'} , 100)
});