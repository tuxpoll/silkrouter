(function (w, $) {
    var demo = w.demo = w.demo || {},
        _cache = {};
    demo = {
        updateCache: function () {
            _cache.$links = $(".js-nav-item");
            _cache.$all = $(".js-demos");
            _cache.$home = $(".js-home-section");
            _cache.$homeLink = $(".js-home-link");
            _cache.$demo1 = $(".js-demo-1");
            _cache.$demoLink1 = $(".js-demo-link-1");
            _cache.$demo2 = $(".js-demo-2");
            _cache.$demoLink2 = $(".js-demo-link-2");
            _cache.$demo3 = $(".js-demo-3");
            _cache.$demoLink3 = $(".js-demo-link-3");
            _cache.$accordionLinks = $(".js-card-reader a");
        },
        bindEvents: function () {
            _cache.$home.route("/", function () {
                _cache.$all.addClass("d-none");
                $(this).removeClass("d-none");
                _cache.$links.removeClass("active");
                _cache.$homeLink.addClass("active");
            });
            _cache.$demo1.route("/demos/demo1", function () {
                _cache.$all.addClass("d-none");
                $(this).removeClass("d-none");
                _cache.$links.removeClass("active");
                _cache.$demoLink1.addClass("active");
            });
            _cache.$demo2.route("/demos/demo2", function () {
                _cache.$all.addClass("d-none");
                $(this).removeClass("d-none");
                _cache.$links.removeClass("active");
                _cache.$demoLink2.addClass("active");
            });
            _cache.$demo3.route("/demos/demo3", function () {
                _cache.$all.addClass("d-none");
                $(this).removeClass("d-none");
                _cache.$links.removeClass("active");
                _cache.$demoLink3.addClass("active");
            });
            $.route("/tab1", function () {
                _cache.$accordionLinks.filter("[data-route='/tab1']").trigger("click");
            });
            $.route("/tab2", function () {
                _cache.$accordionLinks.filter("[data-route='/tab2']").trigger("click");
            });
            $.route("/tab3", function () {
                _cache.$accordionLinks.filter("[data-route='/tab3']").trigger("click");
            });
            _cache.$links.on("click", function () {
                $.router.set($(this).data("route"));
            });
            _cache.$accordionLinks.on("click", function (e) {
                if ($(this).attr("aria-expanded") === "true") {
                    e.preventDefault();
                    e.stopPropagation();
                }
                $.router.set(("#" + $(this).data("route")), true, true);
                console.log("Tab activated");
            });
        },
        init: function () {
            this.updateCache();
            this.bindEvents();
            console.log("Demo initialized");
            $.router.init();
        }
    };
    demo.init();
})(
    window,
    window.jQuery
    );