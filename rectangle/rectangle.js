$(function(){
    var $width = $('#width');
    var $height = $('#height');
    var $calcul = $('#calcul');
    var $perimeter = $('#perimeter');
    var $area = $('#area');
    $calcul.click(function(){
        const w = $width.val(),
            h = $height.val();

        $perimeter.val(w*2+h*2);
        $area.val(w*h)
    })
})