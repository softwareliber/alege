// La finișarea încărcării paginii
$(document).ready(function(){
    // Funcția caută și înlocuiește diacriticele „greșite”
    $.fn.escapeDia = function() {
        this.each(function() {
            $(this).html(
                $(this).html()
                    .replace(/ș/g,"ş")
                    .replace(/ț/g,"ţ")
                    .replace(/Ș/g,"Ş")
                    .replace(/Ț/g,"Ţ")
                );
            });
        return $(this);
    }
    // Trece tot „body”-ul prin funcția de diacriticizare!
    if(navigator.platform == "Win32" || navigator.platform == "Win64") {
        $('body').escapeDia();
    }
    // Încarcă navigarea fancy
    $.localScroll({
        target: '#corp',
        queue:true,
        hash:true,
        duration:700
    });
    // Încarcă lightbox pentru poze
    $(".polaroid a").fancybox({
        imageScale:true,
        hideOnContentClick:true,
        centerOnScroll:false,
        zoomSpeedIn: 300,
        zoomSpeedOut: 300,
        overlayShow:false
    });
});
