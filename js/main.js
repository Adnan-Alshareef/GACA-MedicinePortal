$(document).ready(function () {

    $('#fileUploaded').bind("click", function () {
        var imgVal = $('#fileUploaded').val();
        if (imgVal != '') {
            $(".removehMedicalFile").css("display", 'none');
        }
        else {
            $(".removehMedicalFile").css("display", 'block');
        }
    });

    if ($('.applicantsTable tr').length == 1) {

        ($('.tableNr').css('display', 'block'))
    }


    $(".without-caption").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
        image: {
            verticalFit: true,
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
        },
    });
    /*
    var scroll_offset = 120;
    $(window).scroll(function () {
        var $this = $(window);
        if ($('.sticky-btn').length) {
            if ($this.scrollTop() > scroll_offset) {
                $('.sticky-btn').addClass('revealed');
            } else {
                $('.sticky-btn').removeClass('revealed');
            }
        }
    });
    */

    $(".with-caption").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return (
                    item.el.attr("title") +
                    ' &middot; <a class="image-source-link" href="' +
                    item.el.attr("data-source") +
                    '" target="_blank">image source</a>'
                );
            },
        },
        zoom: {
            enabled: true,
        },
    });

    $(".iframe-popup").magnificPopup({
        type: "iframe",
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    window.onload = function WindowLoad(event) {
        // If absolute URL from the remote server is provided, configure the CORS
        // header on that server.
        if ($('.iframe-popup').length > 0) {
            loop_length = $('.iframe-popup').length;
            for (let index = 0; index < loop_length; index++) {
                var url = $('.iframe-popup')[index].href;

                // Loaded via <script> tag, create shortcut to access PDF.js exports.
                var pdfjsLib = window['pdfjs-dist/build/pdf'];

                // The workerSrc property shall be specified.
                pdfjsLib.GlobalWorkerOptions.workerSrc = '/md/static/libraries/pdf.worker/pdf.worker.js';

                if ($('.iframe-popup')[index].href.split(".").pop().toLowerCase() == "pdf") {
                    // Asynchronous download of PDF
                    var loadingTask = pdfjsLib.getDocument(url);
                    loadingTask.promise.then(function (pdf) {
                        console.log('PDF loaded');

                        // Fetch the first page
                        var pageNumber = 1;
                        pdf.getPage(pageNumber).then(function (page) {
                            console.log('Page loaded');

                            var scale = 1.5;
                            var viewport = page.getViewport({ scale: scale });
                            id = $('.iframe-popup')[index].id.split("_")[2]
                            // Prepare canvas using PDF page dimensions
                            var canvas = document.getElementById('pdf_viewer_' + id);
                            var context = canvas.getContext('2d');
                            canvas.height = viewport.height;
                            canvas.width = viewport.width;

                            // Render PDF page into canvas context
                            var renderContext = {
                                canvasContext: context,
                                viewport: viewport
                            };
                            var renderTask = page.render(renderContext);
                            renderTask.promise.then(function () {
                                console.log('Page rendered');
                            });
                        });
                    }, function (reason) {
                        // PDF loading error
                        console.error(reason);
                    });
                } else {
                    console.log(
                        $('.iframe-popup')[index].classList.add('not-clickable-iframe'))
                    $('.iframe-popup')[index].insertAdjacentHTML(
                        "afterbegin",
                        `<img class="file-shape" src="./images/file-shape-blue-bg.png" alt="">`
                    );
                    console.log($('#pdf_viewer_' + [index + 1]))
                    $('#pdf_viewer_' + [index + 1]).remove()

                }


            }
        }
    }







    // $(".document-upload").on("change", function(e) {
    //     console.log(e)
    //     var file = e.target.files[0]
    //     index = e.target.classList[1].split("_")[1]
    //     if (file.type == "application/pdf") {
    //         var fileReader = new FileReader();
    //         fileReader.onload = function() {
    //             var pdfData = new Uint8Array(this.result);
    //             // Using DocumentInitParameters object to load binary data.
    //             var loadingTask = pdfjsLib.getDocument({
    //                 data: pdfData
    //             });
    //             loadingTask.promise.then(function(pdf) {
    //                 console.log('PDF loaded');
    //                 // Fetch the first page
    //                 var pageNumber = 1;
    //                 pdf.getPage(pageNumber).then(function(page) {
    //                     console.log('Page loaded');

    //                     var scale = 1.5;
    //                     var viewport = page.getViewport({
    //                         scale: scale
    //                     });

    //                     console.log(index + " pdf")
    //                         // Prepare canvas using PDF page dimensions
    //                     console.log($(page)[0])
    //                     var canvas = $("#pdf_upload_viewer_" + index)[0];
    //                     var context = canvas.getContext('2d');
    //                     canvas.height = viewport.height;
    //                     canvas.width = viewport.width;

    //                     // Render PDF page into canvas context
    //                     var renderContext = {
    //                         canvasContext: context,
    //                         viewport: viewport
    //                     };
    //                     var renderTask = page.render(renderContext);
    //                     renderTask.promise.then(function() {
    //                         console.log('Page rendered');
    //                     });
    //                 });
    //             }, function(reason) {
    //                 // PDF loading error
    //                 console.error(reason);
    //             });
    //         };
    //         fileReader.readAsArrayBuffer(file);
    //     }
    // });


    /* Loader */
    $(".divLoading").fadeIn();
    $(window).on("load", function () {
        $(".divLoading").fadeOut();
    });

    if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        if (document.getElementsByClassName("op")[0] != undefined) {
            document.getElementById(
                "op-mobile"
            ).innerHTML = document.getElementsByClassName("op")[0].innerHTML;
        }
        document.getElementsByClassName("tlc_last gacalogo")[0].style.display =
            "none";
        document.getElementsByClassName("t_op_header")[0].style.display = "none";
        document.getElementsByClassName("contact_us_op")[0].innerText = "";
        document
            .getElementsByClassName("contact_us_op")[0]
            .appendChild(document.getElementsByClassName("op_logo_image")[0]);
    }

    /* Scroll Floating Navbar */
    $(window).scroll(function () {
        if (window.pageYOffset >= 100) {
            $(".navbar").addClass("floatingNav");
            $("#container").addClass("floatingContainer");
        } else {
            $(".navbar").removeClass("floatingNav");
            $("#container").removeClass("floatingContainer");
        }
    });

    /* Slick Script */
    if ($(".drones_slider")[0] != undefined) {
        $(".drones_slider").slick({
            infinite: false,
            arrows: true,
            dots: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            rtl: false,
            swipe: true,
            swipeToSlide: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ],
        });
    }

    if ($(".drones_slider_ar")[0] != undefined) {
        $(".drones_slider_ar").slick({
            infinite: false,
            arrows: true,
            dots: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: -1,
            rtl: true,
            swipe: true,
            swipeToSlide: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    rtl: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: -1,
                    rtl: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: -1,
                    rtl: true,
                },
            },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ],
        });
    }

    /* Datatable Script */
    $(".CustomTable_1").DataTable({
        /* If less than one page hide pagination */
        fnDrawCallback: function () {
            if ($("#DataTables_Table_0_paginate span a.paginate_button").length <= 1) {
                $("#DataTables_Table_0_paginate")[0].style.display = "none";
            } else {
                $("#DataTables_Table_0_paginate")[0].style.display = "block";
            }
        },
        searching: false,
        pageLength: 15,
        lengthChange: false,
        paging: true,
        info: false,
        dom: "Bfrtip",
        ordering: false,
        pagingType: "full_numbers",
        responsive: true,
        language: {
            decimal: "",
            emptyTable: "No data available in table",
            info: "Showing _START_ to _END_ of _TOTAL_ entries",
            infoEmpty: "Showing 0 to 0 of 0 entries",
            infoFiltered: "(filtered from _MAX_ total entries)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Show _MENU_ entries",
            loadingRecords: "Loading...",
            processing: "Processing...",
            search: "Search:",
            zeroRecords: "No matching records found",
            paginate: {
                first: "First",
                last: "Last",
                next: "Next",
                previous: "Previous",
            },
            aria: {
                sortAscending: ": activate to sort column ascending",
                sortDescending: ": activate to sort column descending",
            },
        },
        data: null,
        render: function (data, type, row) {
            return '<a href="http://127.0.0.1:5502/02.home.my.drones.en.html" target="_blank">User Project Edit Page</a>';
        },
        buttons: [{
            extend: "print",
            text: "Print current page",
            exportOptions: {
                modifier: {
                    page: "current",
                },
            },
        },],
    });

    $(".Click_Table").on("click", "tbody tr", function () {
        window.location.href = $(this).data("href");
    });

    if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        if (document.getElementsByClassName("CustomTable_1")[0] != undefined) {
            $theaders = document.getElementsByClassName("CustomTable_1")[0]
                .children[0].children[0].children;
            headers_to_add = [];
            for (let index = 0; index < $theaders.length; index++) {
                console.log($theaders[index].innerText);
                if (index != 0 && index != $theaders.length - 1) {
                    headers_to_add.push($theaders[index].innerText);
                }
            }

            body_row = document.getElementsByClassName("CustomTable_1")[0].children[1]
                .children;

            for (let i = 0; i < body_row.length; i++) {
                for (let j = 0; j < body_row[i].childElementCount; j++) {
                    if (j != 0 && j != body_row[i].childElementCount - 1) {
                        body_row[i].children[j].insertAdjacentHTML(
                            "afterbegin",
                            '<span class="mobile_th">' + headers_to_add[j - 1] + "</span> : "
                        );
                    }
                }
            }
        }
    }

    //------------------------------------------------------------------------------------------------------------------------------------//
    /* Datatable Script */
    $(".CustomTable_3").DataTable({
        /* If less than one page hide pagination */
        fnDrawCallback: function () {
            if ($("#DataTables_Table_0_paginate span a.paginate_button").length <= 1) {
                $("#DataTables_Table_0_paginate")[0].style.display = "none";
            } else {
                $("#DataTables_Table_0_paginate")[0].style.display = "block";
            }
        },
        searching: false,
        pageLength: 15,
        lengthChange: false,
        paging: true,
        info: false,
        dom: "Bfrtip",
        ordering: false,
        pagingType: "full_numbers",
        responsive: true,
        language: {
            decimal: "",
            emptyTable: "No data available in table",
            info: "Showing _START_ to _END_ of _TOTAL_ entries",
            infoEmpty: "Showing 0 to 0 of 0 entries",
            infoFiltered: "(filtered from _MAX_ total entries)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Show _MENU_ entries",
            loadingRecords: "Loading...",
            processing: "Processing...",
            search: "Search:",
            zeroRecords: "No matching records found",
            paginate: {
                first: "First",
                last: "Last",
                next: "Next",
                previous: "Previous",
            },
            aria: {
                sortAscending: ": activate to sort column ascending",
                sortDescending: ": activate to sort column descending",
            },
        },
        data: null,
        render: function (data, type, row) {
            return '<h1>hello</h1>';
        },
        buttons: [{
            extend: "print",
            text: "Print current page",
            exportOptions: {
                modifier: {
                    page: "current",
                },
            },
        },],
    });

    $(".Click_Table").on("click", "tbody tr", function () {
        window.location.href = $(this).data("href");
    });

    if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        if (document.getElementsByClassName("CustomTable_3")[0] != undefined) {
            $theaders = document.getElementsByClassName("CustomTable_3")[0]
                .children[0].children[0].children;
            headers_to_add = [];
            for (let index = 0; index < $theaders.length; index++) {
                console.log($theaders[index].innerText);
                if (index != 0 && index != $theaders.length - 1) {
                    headers_to_add.push($theaders[index].innerText);
                }
            }

            body_row = document.getElementsByClassName("CustomTable_3")[0].children[1]
                .children;

            for (let i = 0; i < body_row.length; i++) {
                for (let j = 0; j < body_row[i].childElementCount; j++) {
                    if (j != 0 && j != body_row[i].childElementCount - 1) {
                        body_row[i].children[j].insertAdjacentHTML(
                            "afterbegin",
                            '<span class="mobile_th">' + headers_to_add[j - 1] + "</span> : "
                        );
                    }
                }
            }
        }
    }

    //------------------------------------------------------------------------------------------------------------------------------------//
    /* Datatable Script */
    $(".CustomTable_4").DataTable({
        searching: false,
        lengthChange: false,
        paging: false,
        info: false,
        dom: "Bfrtip",
        ordering: false,
        pagingType: "full_numbers",
        responsive: true,
        language: {
            decimal: "",
            emptyTable: "No data available in table",
            info: "Showing _START_ to _END_ of _TOTAL_ entries",
            infoEmpty: "Showing 0 to 0 of 0 entries",
            infoFiltered: "(filtered from _MAX_ total entries)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Show _MENU_ entries",
            loadingRecords: "Loading...",
            processing: "Processing...",
            search: "Search:",
            zeroRecords: "No matching records found",
            paginate: {
                first: "First",
                last: "Last",
                next: "Next",
                previous: "Previous",
            },
            aria: {
                sortAscending: ": activate to sort column ascending",
                sortDescending: ": activate to sort column descending",
            },
        },
        data: null,
        render: function (data, type, row) {
            return '<h1>hello</h1>';
        },
        buttons: [{
            extend: "print",
            text: "Print current page",
            exportOptions: {
                modifier: {
                    page: "current",
                },
            },
        },],
    });

    $(".Click_Table").on("click", "tbody tr", function () {
        window.location.href = $(this).data("href");
    });

    if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        if (document.getElementsByClassName("CustomTable_4")[0] != undefined) {
            $theaders = document.getElementsByClassName("CustomTable_4")[0]
                .children[0].children[0].children;
            headers_to_add = [];
            for (let index = 0; index < $theaders.length; index++) {
                console.log($theaders[index].innerText);
                if (index != 0 && index != $theaders.length - 1) {
                    headers_to_add.push($theaders[index].innerText);
                }
            }

            body_row = document.getElementsByClassName("CustomTable_4")[0].children[1]
                .children;

            for (let i = 0; i < body_row.length; i++) {
                for (let j = 0; j < body_row[i].childElementCount; j++) {
                    if (j != 0 && j != body_row[i].childElementCount - 1) {
                        body_row[i].children[j].insertAdjacentHTML(
                            "afterbegin",
                            '<span class="mobile_th">' + headers_to_add[j - 1] + "</span> : "
                        );
                    }
                }
            }
        }
    }

    //------------------------------------------------------------------------------------------------------------------------------------//


    /* Datatable Script */
    $(".CustomTable_2").DataTable({
        /* If less than one page hide pagination */
        fnDrawCallback: function () {
            if ($("#DataTables_Table_1_paginate span a.paginate_button").length <= 1) {
                $("#DataTables_Table_1_paginate")[0].style.display = "none";
            } else {
                $("#DataTables_Table_1_paginate")[0].style.display = "block";
            }
        },
        searching: false,
        pageLength: 15,
        lengthChange: false,
        paging: true,
        info: false,
        dom: "Bfrtip",
        ordering: false,
        pagingType: "full_numbers",
        responsive: true,
        language: {
            decimal: "",
            emptyTable: "No data available in table",
            info: "Showing _START_ to _END_ of _TOTAL_ entries",
            infoEmpty: "Showing 0 to 0 of 0 entries",
            infoFiltered: "(filtered from _MAX_ total entries)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Show _MENU_ entries",
            loadingRecords: "Loading...",
            processing: "Processing...",
            search: "Search:",
            zeroRecords: "No matching records found",
            paginate: {
                first: "First",
                last: "Last",
                next: "Next",
                previous: "Previous",
            },
            aria: {
                sortAscending: ": activate to sort column ascending",
                sortDescending: ": activate to sort column descending",
            },
        },
        data: null,
        render: function (data, type, row) {
            return '<a href="http://127.0.0.1:5502/02.home.my.drones.en.html" target="_blank">User Project Edit Page</a>';
        },
        buttons: [{
            extend: "print",
            text: "Print current page",
            exportOptions: {
                modifier: {
                    page: "current",
                },
            },
        },],
    });

    $(".Click_Table").on("click", "tbody tr", function () {
        window.location.href = $(this).data("href");
    });

    if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        if (document.getElementsByClassName("CustomTable_2")[0] != undefined) {
            $theaders = document.getElementsByClassName("CustomTable_2")[0]
                .children[0].children[0].children;
            headers_to_add = [];
            for (let index = 0; index < $theaders.length; index++) {
                console.log($theaders[index].innerText);
                if (index != 0 && index != $theaders.length - 1) {
                    headers_to_add.push($theaders[index].innerText);
                }
            }

            body_row = document.getElementsByClassName("CustomTable_2")[0].children[1]
                .children;

            for (let i = 0; i < body_row.length; i++) {
                for (let j = 0; j < body_row[i].childElementCount; j++) {
                    if (j != 0 && j != body_row[i].childElementCount - 1) {
                        body_row[i].children[j].insertAdjacentHTML(
                            "afterbegin",
                            '<span class="mobile_th">' + headers_to_add[j - 1] + "</span> : "
                        );
                    }
                }
            }
        }
    }

});
// var table = $('.CustomTable_1').DataTable();
// $('#search_input').on('keyup', function() {
//     table.search(this.value).draw();
// });
/* Upload file or image */
function addFile(props) {
    let index = props.split("_")[1];
    let file = document.getElementById(props).files[0];
    // let image_url
    if (file) {
        // Loaded via <script> tag, create shortcut to access PDF.js exports.
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        // The workerSrc property shall be specified.
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/md/static/libraries/pdf.worker/pdf.worker.js';
        document.getElementById("add-button_" + index).classList.add("vis-hidden");

        console.log('file.type = ' + file.type)
        if (file["type"].split("/")[0] === "image") {
            var image_url = URL.createObjectURL(file);
            $(".upload_file_" + index)[0].innerHTML =
                '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                '<img src="' +
                image_url +
                '">' +
                '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                0 +
                '">Remove</button>' +
                "</div>";
            $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
        } else if (file.type == "application/pdf") {
            var fileReader = new FileReader();
            fileReader.onload = function () {
                var pdfData = new Uint8Array(this.result);
                // Using DocumentInitParameters object to load binary data.
                var loadingTask = pdfjsLib.getDocument({
                    data: pdfData
                });
                loadingTask.promise.then(function (pdf) {
                    console.log('PDF loaded');
                    // Fetch the first page
                    var pageNumber = 1;
                    pdf.getPage(pageNumber).then(function (page) {
                        console.log('Page loaded');

                        var scale = 1.5;
                        var viewport = page.getViewport({
                            scale: scale
                        });

                        // Prepare canvas using PDF page dimensions
                        // var canvas = $("#pdf_upload_viewer_" + index)[0];
                        // delete_button_element = 
                        // canvas.insertAdjacentHTML('beforeBegin', '<div class="delete-img-wrapper"><button onclick="deleteFile(this)" type="button" class="btn btn-danger" tabindex="' + 0 + '"></button></div>');
                        // console.log("#pdf_upload_viewer_" + index)
                        // console.log($("#pdf_upload_viewer_" + index)[0])

                        canvas = `<canvas class="pdf_upload_viewer" id="pdf_upload_viewer_` + index + `"></canvas>`
                        $(".upload_file_" + index)[0].innerHTML =
                            '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                            canvas +
                            '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                            0 +
                            '">Remove</button>' +
                            "</div>";
                        $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
                        //Note to self, almost done, canvas picking after third try,  idk why thank you
                        canvas = $("#pdf_upload_viewer_" + index)[0];
                        imgBase64 = canvas.toDataURL("image/png");
                        var image_url = imgBase64;
                        console.log(imgBase64)

                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        // Render PDF page into canvas context
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        var renderTask = page.render(renderContext);
                        renderTask.promise.then(function () {
                            console.log('Page rendered');
                            // console.log(imgBase64)
                        });
                    });
                }, function (reason) {
                    // PDF loading error
                    console.error(reason);
                });
            };
            fileReader.readAsArrayBuffer(file);
        } else {
            var image_url = "../images/file-shape-blue-bg.png";
            $(".upload_file_" + index)[0].innerHTML =
                '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                '<img src="' +
                image_url +
                '">' +
                '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                0 +
                '">Remove</button>' +
                "</div>";
            $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
        }
    }


    file_name = $("#" + props)
        .val()
        .split("\\")
        .pop();
    file_name_element = document.createElement("p");
    text_node = document.createTextNode(file_name);
    file_name_element.appendChild(text_node);
    $(".label_file_name_" + index)[0].append(file_name_element);
}

/* Delete file or image */
function deleteFile(props) {
    uploaded_file_id = props.parentElement.parentElement.classList[1];
    let index = uploaded_file_id.split("_")[2];
    file_id = "file_" + index;

    file_element = document.getElementById(file_id);
    if (file_element.files[0].type == 'application/pdf') {
        let canvas = document.getElementById('pdf_upload_viewer_' + index);
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    $('#modalSavebtn').removeClass('sucf').addClass('nsucf')
    props.parentElement.remove();
    document.getElementById("add-button_" + index).classList.remove("d-none");
    $("#" + file_id).val(null);
    $(".label_file_name_" + file_id.split("_")[1])[0].innerHTML = "";
    document.getElementById("add-button_" + index).classList.remove("vis-hidden");

}

/* Checkbox to add custom model */
function other_model(checkbox) {
    if (checkbox.checked) {
        document.getElementById("custom_model").classList.remove("d-none");
        document.getElementById("def_manufacture").selectedIndex = 0;
        document.getElementById("def_manufacture").disabled = true;
        document.getElementById("def_model").selectedIndex = 0;
        document.getElementById("def_model").disabled = true;
    } else {
        document.getElementById("custom_model").classList.add("d-none");
        document.getElementById("def_manufacture").disabled = false;
        document.getElementById("def_model").disabled = false;
    }
}

function select_country(select) {
    if (select.value === "Saudi Arabia") {
        document.getElementById("hide_area").classList.remove("d-none");
        document.getElementById("show_area").classList.add("d-none");
        document.getElementById("hide_dist").classList.remove("d-none");
        document.getElementById("show_dist").classList.add("d-none");
        document.getElementById("hide_city").classList.remove("d-none");
        document.getElementById("show_city").classList.add("d-none");
        // document.getElementById("def_manufacture").selectedIndex = 0;
        // document.getElementById("def_manufacture").disabled = true;
        // document.getElementById("def_model").selectedIndex = 0;
        // document.getElementById("def_model").disabled = true;
    } else {
        document.getElementById("hide_area").classList.add("d-none");
        document.getElementById("show_area").classList.remove("d-none");
        document.getElementById("hide_dist").classList.add("d-none");
        document.getElementById("show_dist").classList.remove("d-none");
        document.getElementById("hide_city").classList.add("d-none");
        document.getElementById("show_city").classList.remove("d-none");
        // document.getElementById("def_manufacture").disabled = false;
        // document.getElementById("def_model").disabled = false;
    }
}
if (document.getElementById('nationality_select') != null) {
    document.getElementById('nationality_select').onchange = function (select) {
        if (select.target.value === "Saudi Arabia") {
            document.getElementById('sector_select').disabled = false;
        }
    }
}
if (document.getElementById('sector_select') != null) {
    document.getElementById('sector_select').onchange = function (select) {
        if (select.target.value === "Public") {
            select.target.parentElement.classList.remove('col-lg-3')
            select.target.parentElement.classList.add('col-lg-6')
            document.getElementById("com_rem").classList.add("d-none");
        } else {
            select.target.parentElement.classList.remove('col-lg-6')
            select.target.parentElement.classList.add('col-lg-3');
            document.getElementById("com_rem").classList.remove("d-none");
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------//
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
        textbox.addEventListener(event, function (e) {
            let heightinMeter = document.getElementById("HiM").value
            let weightinKilo = document.getElementById("WiK").value

            if (heightinMeter != '' && weightinKilo != '') {
                let BMI = weightinKilo / (Math.pow(heightinMeter, 2))

                document.getElementById("BMIcalc").value = BMI.toFixed(2)
            } else {
                document.getElementById("BMIcalc").value = ''
            }
            if (inputFilter(this.value)) {
                // Accepted value
                if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                    this.classList.remove("input-error");
                    this.setCustomValidity("");
                }
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;

            } else if (this.hasOwnProperty("oldValue")) {
                // Rejected value - restore the previous one
                this.classList.add("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                // Rejected value - nothing to restore
                this.value = "";
            }
        });
    });
}

function setHeightWeightFilter() {
    if (document.getElementById("HiM")) {
        setInputFilter(document.getElementById("HiM"), function (value) {
            return /^-?\d*[.,]?\d{0,2}$/.test(value) && (value === "" || parseInt(value) <= 2);
        }, "Please enter the right number");
    }
    if (document.getElementById("WiK")) {
        setInputFilter(document.getElementById("WiK"), function (value) {
            return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 300);
        }, "Must be between 0 and 300");
    }
};
setHeightWeightFilter();

function show_explaination(clicked_id) {

    console.log(clicked_id)

    if (document.getElementById(clicked_id).checked) {

        document.getElementById(clicked_id + '_explain').style.display = "block"

    } else {

        document.getElementById(clicked_id + '_explain').style.display = "none"

    }

}
function onSubmit(token) {
    document.getElementById("demo-form").submit();
}
function addFilee(props) {
    let index = props.split("_")[1];
    let file = document.getElementById(props).files[0];
    // let image_url
    if (file) {
        // Loaded via <script> tag, create shortcut to access PDF.js exports.
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        // The workerSrc property shall be specified.
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/md/static/libraries/pdf.worker/pdf.worker.js';
        document.getElementById("add-button_" + index).classList.add("vis-hidden");

        if (file["type"].split("/")[0] === "image") {
            var image_url = URL.createObjectURL(file);
            $(".upload_file_" + index)[0].innerHTML =
                '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                '<img src="' +
                image_url +
                '">' +
                '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                0 +
                '">Remove</button>' +
                "</div>";
            $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
        } else if (file.type == "application/pdf") {
            var fileReader = new FileReader();
            fileReader.onload = function () {
                var pdfData = new Uint8Array(this.result);
                // Using DocumentInitParameters object to load binary data.
                var loadingTask = pdfjsLib.getDocument({
                    data: pdfData
                });
                loadingTask.promise.then(function (pdf) {
                    // Fetch the first page
                    var pageNumber = 1;
                    pdf.getPage(pageNumber).then(function (page) {

                        var scale = 1.5;
                        var viewport = page.getViewport({
                            scale: scale
                        });

                        canvas = `<canvas class="pdf_upload_viewer" id="pdf_upload_viewer_` + index + `"></canvas>`
                        $(".upload_file_" + index)[0].innerHTML =
                            '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                            canvas +
                            '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                            0 +
                            '">Remove</button>' +
                            "</div>";
                        $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
                        //Note to self, almost done, canvas picking after third try,  idk why thank you
                        canvas = $("#pdf_upload_viewer_" + index)[0];
                        imgBase64 = canvas.toDataURL("image/png");
                        var image_url = imgBase64;

                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        // Render PDF page into canvas context
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        var renderTask = page.render(renderContext);
                        renderTask.promise.then(function () {
                        });
                    });
                }, function (reason) {
                    // PDF loading error
                    console.error(reason);
                });
            };
            fileReader.readAsArrayBuffer(file);
        } else {
            var image_url = "../images/file-shape-blue-bg.png";
            $(".upload_file_" + index)[0].innerHTML =
                '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                '<img src="' +
                image_url +
                '">' +
                '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud"  tabindex="' +
                0 +
                '">Remove</button>' +
                "</div>";
            $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
        }
    }


    file_name = $("#" + props)
        .val()
        .split("\\")
        .pop();
    file_name_element = document.createElement("p");
    text_node = document.createTextNode(file_name);
    file_name_element.appendChild(text_node);
    $(".label_file_name_" + index)[0].append(file_name_element);
}

$(document).ready(function () {


    //group add limit
    var maxGroup = 7;
    //add more fields group
    $(".addMore").click(function () {

        if ($('body').find('.fieldGroup').length < maxGroup) {
            var fieldHTML = '<div class="row fieldGroup">' + $(".fieldGroupCopy").html() + '</div>';
            $('body').find('.fieldGroup:last').after(fieldHTML);
        } else {
            alert('Maximum ' + maxGroup + ' groups are allowed.');
        }
    });

    //remove fields group
    $("body").on("click", ".remove", function () {
        $(this).parents(".fieldGroup").remove();
    });
});
//------------------------------------------------------------------//
function searchFilterChange() {
    let allCollection = document.querySelectorAll("[data-option='true']");
    for (let i = 0; i < allCollection.length; i++) {
        allCollection[i].style.display = 'none';
        allCollection[i].setAttribute("disabled", true)
    }
    let collection = document.querySelectorAll("[data-filter='" + document.getElementById('filterSelect').value + "']");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'block';
        collection[i].removeAttribute("disabled")
    }
    document.getElementById('valueSelect').value = '';
}

function uploadFile(id) {
    let exp = id.substr(10);
    document.getElementById('attachDiv_' + exp).style.display = 'none';
    document.getElementById('removeDiv_' + exp).style.display = 'block';
    document.getElementById("spanFile_" + exp).textContent = document.getElementById("inputFile_" + exp).files[0].name;
}
function removeFile(id) {
    let exp = id.substr(13);
    document.getElementById('attachDiv_' + exp).style.display = 'block';
    document.getElementById('removeDiv_' + exp).style.display = 'none';
    document.getElementById("spanFile_" + exp).textContent = '';
    document.getElementById("inputFile_" + exp).value = null;

}
function editFile(id) {
    let exp = id.substr(10);
    document.getElementById('allContainer_' + exp).removeAttribute('style');
    document.getElementById('editContainer_' + exp).style.display = 'none';
    document.getElementById("inputFile_" + exp).removeAttribute('disabled');
    document.getElementById("inputFile_" + exp).setAttribute("required", "");
}

function uploadAddFile(id) {
    let exp = id.substr(10);
    let expCounter = parseInt(exp);
    document.getElementById('attachDiv_' + exp).style.display = 'none';
    document.getElementById('removeDiv_' + exp).style.display = 'block';
    document.getElementById("spanFile_" + exp).textContent = document.getElementById("inputFile_" + exp).files[0].name;

    if (document.getElementById('rowDiv_' + (expCounter + 1)) !== null)
        document.getElementById('rowDiv_' + (expCounter + 1)).style.display = '';

}

function removeAddFile(id) {
    let exp = id.substr(13);
    document.getElementById('attachDiv_' + exp).style.display = 'block';
    document.getElementById('removeDiv_' + exp).style.display = 'none';
    document.getElementById("spanFile_" + exp).textContent = '';
    document.getElementById("inputFile_" + exp).value = null;
}

function editAddFile(id) {
    let exp = id.substr(13);
    document.getElementById('attachDiv_' + exp).style.display = 'block';
    document.getElementById('removeDiv_' + exp).style.display = 'none';
    document.getElementById("spanFile_" + exp).textContent = '';
    document.getElementById("inputFile_" + exp).value = null;
    document.getElementById("unremovedAttachments_" + exp).setAttribute("disabled", "");
}

function Questionnaire(id) {
    let exp = id.substr(3);
    let collection = document.getElementById("Explanation" + exp).children;
    if (id == 'yeQ' + exp) {
        document.getElementById('Explanation' + exp).style.display = 'block';
        document.getElementById('ExplanationDetails' + exp).setAttribute("required", "");
        document.getElementById('yeQ' + exp).style.color = 'white';
        document.getElementById('yeQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('noQ' + exp).style.color = '#2681cd';
        document.getElementById('noQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'YES';
    } else if (id == 'noQ' + exp) {
        document.getElementById('Explanation' + exp).style.display = 'none';
        document.getElementById('ExplanationDetails' + exp).removeAttribute("required");
        document.getElementById('ExplanationDetails' + exp).value = '';
        collection[0].value = '';
        document.getElementById('noQ' + exp).style.color = 'white';
        document.getElementById('noQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('yeQ' + exp).style.color = '#2681cd';
        document.getElementById('yeQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'NO';
    }
}

function QuestionnaireMedicalItem(id) {
    let exp = id.substr(3);
    let collection = document.getElementById("Observation" + exp).children;
    if (id == 'nrQ' + exp) {
        document.getElementById('Observation' + exp).style.display = 'none';
        collection[0].value = '';
        document.getElementById('nrQ' + exp).style.color = 'white';
        document.getElementById('nrQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('abQ' + exp).style.color = '#2681cd';
        document.getElementById('abQ' + exp).style.backgroundColor = 'white';
        document.getElementById('naQ' + exp).style.color = '#2681cd';
        document.getElementById('naQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'NORMAL';
        document.getElementById('obs' + exp).removeAttribute("required");
    } else if (id == 'abQ' + exp) {
        document.getElementById('Observation' + exp).style.display = 'block';
        collection[0].value = '';
        document.getElementById('abQ' + exp).style.color = 'white';
        document.getElementById('abQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('nrQ' + exp).style.color = '#2681cd';
        document.getElementById('nrQ' + exp).style.backgroundColor = 'white';
        document.getElementById('naQ' + exp).style.color = '#2681cd';
        document.getElementById('naQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'ABNORMAL';
        document.getElementById('obs' + exp).setAttribute("required", "");
    } else if (id == 'naQ' + exp) {
        document.getElementById('Observation' + exp).style.display = 'none';
        collection[0].value = '';
        document.getElementById('naQ' + exp).style.color = 'white';
        document.getElementById('naQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('nrQ' + exp).style.color = '#2681cd';
        document.getElementById('nrQ' + exp).style.backgroundColor = 'white';
        document.getElementById('abQ' + exp).style.color = '#2681cd';
        document.getElementById('abQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'NOT_APPLICABLE';
        document.getElementById('obs' + exp).removeAttribute("required");
    }
}

function QuestionnaireMcRequest(id) {
    let exp = id.substr(3);
    if (id == 'yeQ' + exp) {
        document.getElementById('yeQ' + exp).style.color = 'white';
        document.getElementById('yeQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('noQ' + exp).style.color = '#2681cd';
        document.getElementById('noQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'true';
    } else if (id == 'noQ' + exp) {
        document.getElementById('noQ' + exp).style.color = 'white';
        document.getElementById('noQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('yeQ' + exp).style.color = '#2681cd';
        document.getElementById('yeQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'false';
    }
}

function QuestionnaireUseMedication(id) {
    let exp = id.substr(3);
    if (id == 'yeQ' + exp) {
        document.getElementById('yeQ' + exp).style.color = 'white';
        document.getElementById('yeQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('noQ' + exp).style.color = '#2681cd';
        document.getElementById('noQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'true';
        document.getElementById('usingMedication_explain').style.display = "block";
        $('#medicationDosage').removeAttr('disabled');
        $('#medicationDosage').attr('required', true);
    } else if (id == 'noQ' + exp) {
        document.getElementById('noQ' + exp).style.color = 'white';
        document.getElementById('noQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('yeQ' + exp).style.color = '#2681cd';
        document.getElementById('yeQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'false';
        document.getElementById('usingMedication_explain').style.display = "none";
        $('#medicationDosage').attr('disabled', true);
        $('#medicationDosage').removeAttr('required');
        $('#medicationDosage').val('');
    }
}

function QuestionnaireRecentVisits(id) {
    let exp = id.substr(3);
    if (id == 'yeQ' + exp) {
        document.getElementById('yeQ' + exp).style.color = 'white';
        document.getElementById('yeQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('noQ' + exp).style.color = '#2681cd';
        document.getElementById('noQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'true';
        document.getElementById('visitStatusHistory').style.display = 'block';
        $('#prevdate').attr('required', true);
        $('#patientInfo').attr('required', true);
        $('#patientReason').attr('required', true);

    } else if (id == 'noQ' + exp) {
        document.getElementById('noQ' + exp).style.color = 'white';
        document.getElementById('noQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('yeQ' + exp).style.color = '#2681cd';
        document.getElementById('yeQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'false';
        document.getElementById('visitStatusHistory').style.display = 'none';
        document.getElementById('my-tablerow').style.display = 'none';
        for (let i = 0; i < recentVisitsCount; i++) {
            document.getElementById('patienVisittInfo' + i).remove();
        }
        recentVisitsCount = 0;
        $('#prevdate').removeAttr('required');
        $('#patientInfo').removeAttr('required');
        $('#patientReason').removeAttr('required');

    }
}

function QuestionnaireCourtConviction(id) {
    let exp = id.substr(3);
    if (id == 'yeQ' + exp) {
        document.getElementById('yeQ' + exp).style.color = 'white';
        document.getElementById('yeQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('noQ' + exp).style.color = '#2681cd';
        document.getElementById('noQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'true';
        document.getElementById('courtConviction_explain').style.display = 'block';
        $('#courtConvictionDescription').attr('required', true);

    } else if (id == 'noQ' + exp) {
        document.getElementById('noQ' + exp).style.color = 'white';
        document.getElementById('noQ' + exp).style.backgroundColor = '#2681cd';
        document.getElementById('yeQ' + exp).style.color = '#2681cd';
        document.getElementById('yeQ' + exp).style.backgroundColor = 'white';
        document.getElementById(exp).value = 'false';
        document.getElementById('courtConviction_explain').style.display = 'none';
        $('#courtConvictionDescription').removeAttr('required');

    }
}

function toggleStatusSelfEmployed() {
    if ($('#SelfemployedCheck').is(':checked')) {
        $('#Employer :input').attr('disabled', true);
        $('#Employer :input').removeAttr('required');
        $('#Employer :input').val('');

    } else {
        $('#Employer :input').removeAttr('disabled');
        $('#Employer :input').attr('required', true);
    }
};

function toggleAirmanCertificate() {

    if ($('#airmanCertificateType').find(":selected").val() == 'OTHER') {

        document.getElementById('otherAirmanCertificateSection').style.display = "block";
        $('#otherAirmanCertificate').attr('required', true);

    } else {

        document.getElementById('otherAirmanCertificateSection').style.display = "none";
        $('#otherAirmanCertificate').removeAttr('required');
        $('#otherAirmanCertificate').val('');

    }

}

function toggleStatusIsPilot() {

    if ($('#isPilot').is(':checked')) {

        $('#pilotTimeType').removeAttr('disabled');
        $('#pilotTimeType').attr('required', true);

        $('#dateOfPilot :input').removeAttr('disabled');
        $('#dateOfPilot :input').attr('required', true);

        $('#pilotPastTime :input').removeAttr('disabled');
        $('#pilotPastTime :input').attr('required', true);

        $('#pilotPastTimeType').removeAttr('disabled');
        $('#pilotPastTimeType').attr('required', true);

    } else {

        $('#pilotTimeType').attr('disabled', true);
        $('#pilotTimeType').removeAttr('required');
        $('#pilotTimeType').val('');

        $('#dateOfPilot :input').attr('disabled', true);
        $('#dateOfPilot :input').removeAttr('required');
        $('#dateOfPilot :input').val('');

        $('#pilotPastTime :input').attr('disabled', true);
        $('#pilotPastTime :input').removeAttr('required');
        $('#pilotPastTime :input').val('');

        $('#pilotPastTimeType').attr('disabled', true);
        $('#pilotPastTimeType').removeAttr('required');
        $('#pilotPastTimeType').val('');

    }
}

function toggleStatusPreviouslyDenied() {
    if ($('#previouslyDenied').is(':checked')) {
        $('#dateOfDenied').attr('disabled', false);
        $('#dateOfDenied').attr('required', true);
    } else {
        $('#dateOfDenied').attr('disabled', true);
        $('#dateOfDenied').removeAttr('required');
        $('#dateOfDenied').val('');

    }
}

function toggleStatusLastApplication() {
    if ($('#priorApplication').is(':checked')) {
        $('#lastApplicationDate').attr('disabled', true);
        $('#lastApplicationDate').removeAttr('required');
    } else {
        $('#lastApplicationDate').attr('disabled', false);
        $('#lastApplicationDate').attr('required', true);
        $('#lastApplicationDate').val('');

    }
};

function MdLimitations(idofc) {
    if ($(idofc).is(':checked')) {
        $(idofc).parent().parent().siblings('.links').children('.delete_link').removeClass('inactive');
    } else {
        $(idofc).parent().parent().siblings('.links').children('.delete_link').addClass('inactive');
    }

}
//-------------------------------------------------------------------------//
//filepickerTable


//-------------------------------------------------------------------------//
function addRecentVisit() {

    let datepic = document.getElementById('prevdate').value;
    let patientInfo = document.getElementById('patientInfo').value;
    let patientReason = document.getElementById('patientReason').value;
    //..................div parents............................//

    //......................Table..............................//

    //........................................................//

    //......................create<tr>........................//
    let tabalerow = document.createElement('tr');
    tabalerow.setAttribute('id', `patienVisittInfo${recentVisitsCount}`);

    //.........................................................//
    let DateTh = document.createElement('td');
    let DateThText = document.createTextNode(datepic);
    DateTh.appendChild(DateThText);
    let DateThInput = document.createElement('input');
    DateThInput.setAttribute('type', 'hidden');
    DateThInput.setAttribute('name', 'recentVisitsInformation[' + recentVisitsCount + '].visitDate');
    DateThInput.setAttribute('id', 'recentVisitsInformation[' + recentVisitsCount + '].visitDate');
    DateThInput.setAttribute('value', datepic);
    DateTh.appendChild(DateThInput);

    let infoTh = document.createElement('td');
    let infoThText = document.createTextNode(patientInfo);
    infoTh.appendChild(infoThText);
    let infoThInput = document.createElement('input');
    infoThInput.setAttribute('type', 'hidden');
    infoThInput.setAttribute('name', 'recentVisitsInformation[' + recentVisitsCount + '].professionalName');
    infoThInput.setAttribute('id', 'recentVisitsInformation[' + recentVisitsCount + '].professionalName');
    infoThInput.setAttribute('value', patientInfo);
    infoTh.appendChild(infoThInput);

    let reasonTh = document.createElement('td');
    let reasonThText = document.createTextNode(patientReason);
    reasonTh.appendChild(reasonThText);
    let reasonThInput = document.createElement('input');
    reasonThInput.setAttribute('type', 'hidden');
    reasonThInput.setAttribute('name', 'recentVisitsInformation[' + recentVisitsCount + '].reason');
    reasonThInput.setAttribute('id', 'recentVisitsInformation[' + recentVisitsCount + '].reason');
    reasonThInput.setAttribute('value', patientReason);
    reasonTh.appendChild(reasonThInput);

    let btntd = document.createElement('td');
    let tdbtn = document.createElement('input');
    tdbtn.setAttribute('type', 'button');
    tdbtn.setAttribute('class', 'delbtn');
    tdbtn.setAttribute('value', 'Delete');
    tdbtn.setAttribute('id', "deleteVisitInfo" + recentVisitsCount);
    tdbtn.setAttribute('onclick', "deleteRecentVisit(" + recentVisitsCount + ")");
    btntd.appendChild(tdbtn);
    tabalerow.appendChild(DateTh);
    tabalerow.appendChild(infoTh);
    tabalerow.appendChild(reasonTh);
    tabalerow.appendChild(btntd);
    document.getElementById('prevdate').value = '';
    document.getElementById('patientInfo').value = '';
    document.getElementById('patientReason').value = '';
    document.getElementById('tabler').appendChild(tabalerow);

    recentVisitsCount++;

    if (recentVisitsCount == 1) {
        $('#prevdate').removeAttr('required');
        $('#patientInfo').removeAttr('required');
        $('#patientReason').removeAttr('required');
        document.getElementById('my-tablerow').style.display = 'block';
    }
}
function deleteRecentVisit(numm) {

    if (recentVisitsCount == 1) {
        document.getElementById('my-tablerow').style.display = 'none';
        $('#prevdate').attr('required', true);
        $('#patientInfo').attr('required', true);
        $('#patientReason').attr('required', true);
    }

    document.getElementById(`patienVisittInfo${numm}`).remove();
    recentVisitsCount--;

    if (recentVisitsCount != numm) {
        for (let i = (parseInt(numm) + 1); i < (parseInt(recentVisitsCount) + 1); i++) {
            document.getElementById("patienVisittInfo" + i).id = "patienVisittInfo" + (i - 1);
            document.getElementById("recentVisitsInformation[" + i + "].visitDate").name = "recentVisitsInformation[" + (i - 1) + "].visitDate";
            document.getElementById("recentVisitsInformation[" + i + "].visitDate").id = "recentVisitsInformation[" + (i - 1) + "].visitDate";
            document.getElementById("recentVisitsInformation[" + i + "].professionalName").name = "recentVisitsInformation[" + (i - 1) + "].professionalName";
            document.getElementById("recentVisitsInformation[" + i + "].professionalName").id = "recentVisitsInformation[" + (i - 1) + "].professionalName";
            document.getElementById("recentVisitsInformation[" + i + "].reason").name = "recentVisitsInformation[" + (i - 1) + "].reason";
            document.getElementById("recentVisitsInformation[" + i + "].reason").id = "recentVisitsInformation[" + (i - 1) + "].reason";
            document.getElementById("deleteVisitInfo" + i).setAttribute('onclick', "deleteRecentVisit(" + (i - 1) + ")");
            document.getElementById("deleteVisitInfo" + i).id = "deleteVisitInfo" + (i - 1);
        }
    }
}

function showRequestDetails() {
    var element = document.getElementById("rebutton");
    element.classList.add("adminMonitoringActive");
    //-----------------------------------------------------//
    let removeelement = document.getElementById("rabutton");
    removeelement.classList.remove("adminMonitoringActive");
    //-----------------------------------------------------//
    //adminMonitoringActive
    document.getElementById('rd').style.display = 'block'
    document.getElementById('ra').style.display = 'none'

}

/*		=================================
**		==== Simple Table Controller ====
**		=================================
**
**
**			With Pure JavaScript ..
**
**
**		No Libraries or Frameworks needed!
**
**
**				fb.com/bastony
**
*/

/*

// get the table element
var $table = document.getElementById("myTable"),
    // number of rows per page
    $n = 10,
    // number of rows of the table
    $rowCount = $table.rows.length,
    // get the first cell's tag name (in the first row)
    $firstRow = $table.rows[0].firstElementChild.tagName,
    // boolean var to check if table has a head row
    $hasHead = ($firstRow === "TH"),
    // an array to hold each row
    $tr = [],
    // loop counters, to start count from rows[1] (2nd row) if the first row has a head tag
    $i, $ii, $j = ($hasHead) ? 1 : 0,
    // holds the first row if it has a (<TH>) & nothing if (<TD>)
    $th = ($hasHead ? $table.rows[(0)].outerHTML : "");
// count the number of pages
var $pageCount = Math.ceil($rowCount / $n);
// if we had one page only, then we have nothing to do ..
if ($pageCount > 1) {
    // assign each row outHTML (tag name & innerHTML) to the array
    for ($i = $j, $ii = 0; $i < $rowCount; $i++, $ii++)
        $tr[$ii] = $table.rows[$i].outerHTML;
    // create a div block to hold the buttons
    $table.insertAdjacentHTML("afterend", "<div class='mt-3 mb-5' id='buttons' style='text-align:center'></div");
    // the first sort, default page is the first one
    sort(1);
}

// ($p) is the selected page number. it will be generated when a user clicks a button
function sort($p) {
    /* create ($rows) a variable to hold the group of rows
    ** to be displayed on the selected page,
    ** ($s) the start point .. the first row in each page, Do The Math
    */
//  var $rows = $th, $s = (($n * $p) - $n);
//for ($i = $s; $i < ($s + $n) && $i < $tr.length; $i++)
//  $rows += $tr[$i];

// now the table has a processed group of rows ..
//$table.innerHTML = $rows;
// create the pagination buttons
// document.getElementById("buttons").innerHTML = pageButtons($pageCount, $p);
// CSS Stuff
// document.getElementById("id" + $p).setAttribute("class", "active");
//}


// ($pCount) : number of pages,($cur) : current page, the selected one ..
//function pageButtons($pCount, $cur) {
/* this variables will disable the "Prev" button on 1st page
   and "next" button on the last one */
// var $prevDis = ($cur == 1) ? "disabled" : "",
//    $nextDis = ($cur == $pCount) ? "disabled" : "",
/* this ($buttons) will hold every single button needed
** it will creates each button and sets the onclick attribute
** to the "sort" function with a special ($p) number..
*/
// $buttons = "<input style='width: 90px; margin-right:10px; background-color:#0075c9;border-radius: 10px; color:white;'type='button' value='&lt;&lt; Firist' onclick='sort(" + 1 + ")' " + $prevDis + ">";
//$buttons += "<input style='width: 90px; margin-right:20px; margin-left:10px; background-color:#0075c9;border-radius: 10px; color:white 'type='button' value='Prev' onclick='sort(" + ($cur - 1) + ")' " + $prevDis + ">";
//for ($i = 1; $i <= $pCount; $i++)
//  $buttons += "<input type='button' id='id" + $i + "'value='" + $i + "' onclick='sort(" + $i + ")'>";
//$buttons += "<input style=' width: 90px; margin-left:20px; background-color:#0075c9;border-radius: 10px; color:white; ' type='button' value='Next' onclick='sort(" + ($cur + 1) + ")' " + $nextDis + ">";
//------------------------------------//
//$buttons += "<input  style=' width: 90px; margin-left:10px;background-color:#0075c9;border-radius: 10px; color:white;' type='button' value='last &gt;&gt;' onclick='sort(" + ($pCount) + ")' " + $nextDis + ">";

// return $buttons;
//}

$("#DeleteTableOffilepiker").click(function () {
    $('#filepickerTable>tr').remove();
    $('#DeleteTableOffilepikerHolder').hide();
});
var PathologyCodesTableRowCount = $('#PathologyCodesTable tr').length;
$("#AddPathologyCodes").click(function () {
    PathologyCodesTableRowCount += 1;
    let CodeVar = $("#CodeofPathologyCodesSection").find('.codeofPathologyCodes').val();
    let NameVar = $("#NameofPathologyCodesSection").find('.nameofPathologyCodes').val();
    $("#CodeofPathologyCodesSection").find('.codeofPathologyCodes').val('');
    $("#NameofPathologyCodesSection").find('.nameofPathologyCodes').val('');
    //NameofPathologyCodesSection,nameofPathologyCodes
    ////let trTable = document.createElement('tr');
    //let trText = document.createTextNode(myVar);
    // / / trTable.appendChild(trText);
    // document.getElementById('PathologyCodesTable').appendChild(trTable);
    // $('#PathologyCodesTable').append(trTable)

    // $("#PathologyCodesTable > tbody").append("<tr><td>${}</td> <td>row content</td> <td></td> <td>row content</td></tr>");
    $("#PathologyCodesTable > tbody").append('<tr><td>' + CodeVar + '</td> <td>' + NameVar + '</td> <td> </td> <td> <input  id="DeleteTableOffilepiker" type="button" class="mx-auto delbtn" value="Delete" ></td ></tr > ');
    $('#PathologyCodesTable').show();
});
$('#PathologyCodesTable').on('click', 'input[type="button"]', function (e) {
    PathologyCodesTableRowCount -= 1;
    //var rowCount = $('#PathologyCodesTable tr').length;
    $(this).closest('tr').remove()
    if (PathologyCodesTableRowCount == 1) {
        $('#PathologyCodesTable').hide();
    }
})

$('#MedicalEvaluation').click(function () {
    $('#MedicalEvaluationSection').slideToggle();
    $('#MedicalEvaluation').addClass('RequestDetailsDashboarditemActive');
    $('#LimitationsSection').slideUp();
    $('#Limitations').removeClass('RequestDetailsDashboarditemActive');
    $('#MedicalDataSection').slideUp();
    $('#MedicalData').removeClass('RequestDetailsDashboarditemActive');
    $('#SubmittedFormSection').slideUp();
    $('#SubmittedForm').removeClass('RequestDetailsDashboarditemActive');
})
$('#MedicalData').click(function () {
    $('#MedicalDataSection').slideToggle();
    $('#MedicalData').addClass('RequestDetailsDashboarditemActive');
    $('#LimitationsSection').slideUp();
    $('#Limitations').removeClass('RequestDetailsDashboarditemActive');
    $('#MedicalEvaluationSection').slideUp();
    $('#MedicalEvaluation').removeClass('RequestDetailsDashboarditemActive');
    $('#SubmittedFormSection').slideUp();
    $('#SubmittedForm').removeClass('RequestDetailsDashboarditemActive');
})
$('#Limitations').click(function () {
    $('#MedicalDataSection').slideUp();
    $('#MedicalData').removeClass('RequestDetailsDashboarditemActive');
    $('#LimitationsSection').slideToggle();
    $('#Limitations').addClass('RequestDetailsDashboarditemActive');
    $('#MedicalEvaluationSection').slideUp();
    $('#MedicalEvaluation').removeClass('RequestDetailsDashboarditemActive');
    $('#SubmittedFormSection').slideUp();
    $('#SubmittedForm').removeClass('RequestDetailsDashboarditemActive');
})

$('#SubmittedForm').click(function () {
    $('#SubmittedFormSection').slideToggle();
    $('#SubmittedForm').addClass('RequestDetailsDashboarditemActive');
    $('#MedicalDataSection').slideUp();
    $('#MedicalData').removeClass('RequestDetailsDashboarditemActive');
    $('#LimitationsSection').slideUp();
    $('#Limitations').removeClass('RequestDetailsDashboarditemActive');
    $('#MedicalEvaluationSection').slideUp();
    $('#MedicalEvaluation').removeClass('RequestDetailsDashboarditemActive');
})

function SaveDraft(urlvar) {
    $("#FailureMessageHolder").show().delay(5000).fadeOut();

    var formTag = $("#evaluationForm")[0];
    var formData = new FormData(formTag);

    $.post({
        url: urlvar,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (res) {
            if (res.valid) {
                $("#SuccessMessageHolder").show().delay(5000).fadeOut();
            } else {
                $("#FailureMessageHolder").show().delay(5000).fadeOut();

            }
        }
    });
}




function RequestDetailsbtnToggle(btnToToggle) {
    $('#AdminRequestDetails').slideToggle();
    $('#RequestDetailsbtn').addClass('Active');
    //----------------------------------------//
    $('#AdminLimitations').slideUp();
    $('#Limitationsbtn').removeClass('Active');
    //---------------------------------------//
    $('#AdminMedicalEvaluation').slideUp();
    $('#MedicalEvaluationbtn').removeClass('Active');
    //----------------------------------------//
    $('#MedicalDatabtn').removeClass('Active');
    $('#AdminMedicalData').slideUp(200);
    //----------------------------------------//


}
function MedicalDatabtnToggle(btnToToggle) {
    $('#AdminMedicalData').slideToggle();
    $('#MedicalDatabtn').addClass('Active');
    //---------------------------------------//
    $('#AdminRequestDetails').slideUp();
    $('#RequestDetailsbtn').removeClass('Active');
    //----------------------------------------//
    $('#AdminLimitations').slideUp();
    $('#Limitationsbtn').removeClass('Active');
    //---------------------------------------//
    $('#AdminMedicalEvaluation').slideUp();
    $('#MedicalEvaluationbtn').removeClass('Active');
}

function LimitationsToogle(btnToToggle) {
    $('#AdminLimitations').slideToggle();
    $('#Limitationsbtn').addClass('Active');
    //------------------------------------------//
    $('#AdminRequestDetails').slideUp();
    $('#RequestDetailsbtn').removeClass('Active');
    //------------------------------------------//
    $('#AdminMedicalEvaluation').slideUp();
    $('#MedicalEvaluationbtn').removeClass('Active');
    //------------------------------------------//
    $('#AdminMedicalData').slideUp();
    $('#MedicalDatabtn').removeClass('Active');
}
//----------------------------------------------//

function MedicalEvaluationbtnToogle(btnToToggle) {
    $('#AdminMedicalEvaluation').slideToggle();
    $('#MedicalEvaluationbtn').addClass('Active');
    //------------------------------------------//
    $('#AdminRequestDetails').slideUp();
    $('#RequestDetailsbtn').removeClass('Active');
    //------------------------------------------//
    $('#AdminLimitations').slideUp();
    $('#Limitationsbtn').removeClass('Active');
    //------------------------------------------//
    $('#AdminMedicalData').slideUp();
    $('#MedicalDatabtn').removeClass('Active');
    //------------------------------------------//
}

function checkEmpty(fieldId, alertDeferComment) {
    var valueofId = document.getElementById(fieldId).value;
    if (!valueofId) {
        $("#" + alertDeferComment).show().delay(2000).fadeOut();
        return false;
    }
}

function checkEvaluationRequiredFields() {
    var field = $('#evaluationForm').find(":invalid").first();
    if (field) {
        var section = $('#evaluationForm').find(":invalid").first().parents('.SectionDetails ').attr('data-id');
        $('#evaluationForm').find(":invalid").first().focus();
        if (section != 'MedicalEvaluation') {
            $("#" + section).click();
        }
        return false;
    }

}

function abnormalNormalChangeStatus(currentField, params) {

    if (document.getElementById(currentField).value === "ABNORMAL") {
        for (i = 0; i < params.length; i++) {
            if (document.getElementById("Wrapper_" + params[i])) {
                document.getElementById("Wrapper_" + params[i]).classList.remove("optional_label");
            }
            document.getElementById(params[i]).setAttribute('required', '');
        }
    }
    else {
        for (i = 0; i < params.length; i++) {
            if (document.getElementById("Wrapper_" + params[i])) {
                document.getElementById("Wrapper_" + params[i]).classList.add("optional_label");
            }

            document.getElementById(params[i]).removeAttribute('required')
        }
    }
}

function hairColourChangeStatus() {

    if (document.getElementById("hairColour").value === "OTHER") {
        document.getElementById("otherHairColour").setAttribute('required', '');
        document.getElementById("otherHairColourDiv").style.display = 'block';
    }
    else {
        document.getElementById("otherHairColour").removeAttribute('required');
        document.getElementById("otherHairColourDiv").style.display = 'none';
        document.getElementById("otherHairColour").value = '';
    }
}

function eyesColourChangeStatus() {

    if (document.getElementById("eyesColour").value === "OTHER") {
        document.getElementById("otherEyesColour").setAttribute('required', '');
        document.getElementById("otherEyesColourDiv").style.display = 'block';
    }
    else {
        document.getElementById("otherEyesColour").removeAttribute('required');
        document.getElementById("otherEyesColourDiv").style.display = 'none';
        document.getElementById("otherEyesColour").value = '';
    }
}

function profileChangePassword() {
    if ($('#notChangePassword').is(':checked')) {
        $('#password').attr('disabled', true);
        $('#password').removeAttr('required');
        $('#password').val('');
        $('#confirmPassword').attr('disabled', true);
        $('#confirmPassword').removeAttr('required');
        $('#confirmPassword').val('');

    } else {
        $('#password').removeAttr('disabled');
        $('#password').attr('required', true);
        $('#confirmPassword').removeAttr('disabled');
        $('#confirmPassword').attr('required', true);
    }
};

/***********************************/
Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            // Get ctx from string
            var ctx = chart.chart.ctx;

            // Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var maxFontSize = centerConfig.maxFontSize || 75;
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            // Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
            var minFontSize = centerConfig.minFontSize;
            var lineHeight = centerConfig.lineHeight || 25;
            var wrapText = false;

            if (minFontSize === undefined) {
                minFontSize = 20;
            }

            if (minFontSize && fontSizeToUse < minFontSize) {
                fontSizeToUse = minFontSize;
                wrapText = true;
            }

            // Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            if (!wrapText) {
                ctx.fillText(txt, centerX, centerY);
                return;
            }

            var words = txt.split(' ');
            var line = '';
            var lines = [];

            // Break words up into multiple lines if necessary
            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = ctx.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > elementWidth && n > 0) {
                    lines.push(line);
                    line = words[n] + ' ';
                } else {
                    line = testLine;
                }
            }

            // Move the center up depending on line height and number of lines
            centerY -= (lines.length / 2) * lineHeight;

            for (var n = 0; n < lines.length; n++) {
                ctx.fillText(lines[n], centerX, centerY);
                centerY += lineHeight;
            }
            //Draw text in center
            ctx.fillText(line, centerX, centerY);
        }
    }
});

function doughnutChart(chartId, partial, total, color) {
    const stat1 = Math.round((partial / total) * 100);
    const stat2 = Math.round(((total - partial) / total) * 100);

    var config = {
        type: 'doughnut',
        holeSize: 23,
        data: {
            labels: [
                "",
                "",
            ],
            datasets: [{
                data: [stat1, stat2],
                pointRadius: 0,
                backgroundColor: [
                    color,
                    "#EDF0F5"
                ],
                hoverBackgroundColor: [
                    color,
                    "#EDF0F5"

                ]
            }]
        },
        options: {
            devicePixelRatio: 1.5,
            cutoutPercentage: 70,
            elements: {
                center: {
                    text: stat1 + '%',
                    color: color,
                    fontStyle: 'Arial',
                    sidePadding: 20,
                    minFontSize: 25,
                    lineHeight: 25,
                }
            },
            legend: {
                display: false
            }
        }

    };


    var ctx = document.getElementById(chartId).getContext("2d");
    var myChart = new Chart(ctx, config);

}

/**************************************************/

function pieChart(chartId, labels, data, backgroundColor) {
    var oilCanvas = document.getElementById(chartId);

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 16;

    var oilData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: backgroundColor
            }],

    };

    var pieChart = new Chart(oilCanvas, {
        type: 'pie',
        data: oilData
    });
}



/************************************************/

function barChart(chartId, title, labels, data, backgroundColor) {

    var ctx = document.getElementById(chartId).getContext("2d");

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: title,
                    backgroundColor: backgroundColor,
                    data: data,
                }],
        },
        options: {
            tooltips: {
                displayColors: true,
                callbacks: {
                    mode: 'x',
                },
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                    },
                    type: 'linear',
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: { position: 'bottom' },
        }
    });

}


