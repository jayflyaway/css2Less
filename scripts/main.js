$( document ).ready(function() {
    $("#convert").click(function(){
        //var cssString = 'a {color:green; text-decoration:none; } a:hover {color:lime; } a:active {text-decoration:underline; }'
        let cssString = $("#cssInput").val();
        let options = {"updateColors": true};

        var lessInst = new css2less(cssString, options || {});

        lessInst.processLess();

        // console.log(lessInst.less);
        if(lessInst.less == "" || lessInst.less == undefined) {
            alert("no valid css");
        }
        $('#lessOutput').val(lessInst.less);

    });
    $('#panda-img').mouseenter(function(){
        
    })
});