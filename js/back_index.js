$(document).ready(function() {

var html = '';
for (var i = 1; i <= 50; i ++) {
    html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
}
  
document.querySelector('.shape').innerHTML += html;

var $allShapes = $("[class*='shape-container--']");
$('.button').click(function (event) {
    $allShapes.toggleClass("stop-shape");
    var $this = $(this);
    $this.toggleClass('.button');
    if($this.hasClass('.button')){
        $this.text('Unfreeze shapes');         
    } else {
        $this.text('Freeze shapes');
    }
    event.preventDefault();
});

});