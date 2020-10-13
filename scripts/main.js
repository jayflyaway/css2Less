$( document ).ready(function() {
    $("#convert").click(function(){
        //var cssString = 'a {color:green; text-decoration:none; } a:hover {color:lime; } a:active {text-decoration:underline; }'
        let cssString = $("#cssInput").val();
        let option_updateColors = $('#option_updateColors').is(':checked');
        let option_vendorMixins = $('#option_vendorMixins').is(':checked');
        let option_indentSize = parseInt($('#option_indentSize').val());
        let option_vendorPrefixesList = $('#option_vendorPrefixesList').val().split(",");
        let option_blockFromNewLine = $('#option_blockFromNewLine').is(':checked');
        let options = {
            "updateColors": option_updateColors,
            "vendorMixins": option_vendorMixins,
            "indentSize": option_indentSize,
            "vendorPrefixesList": option_vendorPrefixesList,
            "blockFromNewLine": option_blockFromNewLine};

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