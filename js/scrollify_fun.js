$(function() {
    $.scrollify({
        section: ".panel",
        scrollbars: false,
        before: function(i, panels) {
            $('.btn-down').attr('href', '#sec-' + (i + 2));
            var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active")
        },
        afterRender: function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function(i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"></a></li>";
            });
            pagination += "</ul>";
            $(".home").append(pagination);
            $(".btn-down").on("click",$.scrollify.move);
            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});