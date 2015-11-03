module.exports = (function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax( );
    var options = [
      {selector:'#experience-section',offset:100,callback:'console.log("hit");Materialize.showStaggeredList("#experience-section ul")'},
      {selector:'#contact .section',offset:100,callback:'Materialize.fadeInImage("#contact .section .container")'}
    ]
    Materialize.scrollFire(options);
  }); // end of document ready
})(jQuery); // end of jQuery name space
