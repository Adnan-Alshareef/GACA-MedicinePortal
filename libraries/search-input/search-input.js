var $section = $(".CustomTable tbody tr");
var $noresults = $("#noresults");

$noresults.hide();

$("#input_search").bind("keyup", function () {
  var input = $(this).val();

  if (input) {
    $section.hide();

    $.extend($.expr[":"], {
      containsIN: function (elem, i, match, array) {
        console.log("test");
        return (
          (elem.textContent || elem.innerText || "")
            .toLowerCase()
            .indexOf((match[3] || "").toLowerCase()) >= 0
        );
      },
    });

    var result = $(
      ".CustomTable tbody tr:containsIN('" + input.toLowerCase() + "')"
    );

    if (result.length) {
      $noresults.hide();
      result.show();
    } else {
      $noresults.show();
      $(".CustomTable").hide();
      $(".dataTables_paginate").hide();
    }
  } else {
    $noresults.hide();
    $(".CustomTable").show();
    $(".dataTables_paginate").show();
    $section.show();
  }
});


$("#airport").bind("change", function () {
    var input = $(this).val();
  
    if (input) {
      $section.hide();
  
      $.extend($.expr[":"], {
        containsIN: function (elem, i, match, array) {
          console.log("test");
          return (
            (elem.textContent || elem.innerText || "")
              .toLowerCase()
              .indexOf((match[3] || "").toLowerCase()) >= 0
          );
        },
      });
  
      var result = $(
        ".CustomTable tbody tr:containsIN('" + input.toLowerCase() + "')"
      );
  
      if (result.length) {
        $noresults.hide();
        result.show();
      } else {
        $noresults.show();
        $(".CustomTable").hide();
        $(".dataTables_paginate").hide();
      }
    } else {
      $noresults.hide();
      $(".CustomTable").show();
      $(".dataTables_paginate").show();
      $section.show();
    }
  });

$("#category").bind("change", function () {
    var input = $(this).val();
  
    if (input) {
      $section.hide();
  
      $.extend($.expr[":"], {
        containsIN: function (elem, i, match, array) {
          console.log("test");
          return (
            (elem.textContent || elem.innerText || "")
              .toLowerCase()
              .indexOf((match[3] || "").toLowerCase()) >= 0
          );
        },
      });
  
      var result = $(
        ".CustomTable tbody tr:containsIN('" + input.toLowerCase() + "')"
      );
  
      if (result.length) {
        $noresults.hide();
        result.show();
      } else {
        $noresults.show();
        $(".CustomTable").hide();
        $(".dataTables_paginate").hide();
      }
    } else {
      $noresults.hide();
      $(".CustomTable").show();
      $(".dataTables_paginate").show();
      $section.show();
    }
  });

$("#status").bind("change", function () {
    var input = $(this).val();
  
    if (input) {
      $section.hide();
  
      $.extend($.expr[":"], {
        containsIN: function (elem, i, match, array) {
          console.log("test");
          return (
            (elem.textContent || elem.innerText || "")
              .toLowerCase()
              .indexOf((match[3] || "").toLowerCase()) >= 0
          );
        },
      });
  
      var result = $(
        ".CustomTable tbody tr:containsIN('" + input.toLowerCase() + "')"
      );
  
      if (result.length) {
        $noresults.hide();
        result.show();
      } else {
        $noresults.show();
        $(".CustomTable").hide();
        $(".dataTables_paginate").hide();
      }
    } else {
      $noresults.hide();
      $(".CustomTable").show();
      $(".dataTables_paginate").show();
      $section.show();
    }
  });

  $("#investor").bind("change", function () {
    var input = $(this).val();
  
    if (input) {
      $section.hide();
  
      $.extend($.expr[":"], {
        containsIN: function (elem, i, match, array) {
          console.log("test");
          return (
            (elem.textContent || elem.innerText || "")
              .toLowerCase()
              .indexOf((match[3] || "").toLowerCase()) >= 0
          );
        },
      });
  
      var result = $(
        ".CustomTable tbody tr:containsIN('" + input.toLowerCase() + "')"
      );
  
      if (result.length) {
        $noresults.hide();
        result.show();
      } else {
        $noresults.show();
        $(".CustomTable").hide();
        $(".dataTables_paginate").hide();
      }
    } else {
      $noresults.hide();
      $(".CustomTable").show();
      $(".dataTables_paginate").show();
      $section.show();
    }
  });

