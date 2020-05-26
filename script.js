var DataFunction = function(file_path, chart_instance) {
  "use strict";

  var exports = {};
  var global = {};
  var events = {};
  /**
   * Component initializer
   * @param {string} file_path - JSON file path
   */
  exports.init = function() {
    if (file_path === undefined) {
      console.log("undefined");
      return false;
    }
    console.log(file_path, chart_instance);
    //events.chart(file_path)
    //console.log("undefined")
    events.loadData(file_path, function(data) {
      //console.log(file_path, data);
      if (data !== "error") {
        //global.data = data;
        //console.log(data);
        //d3.csv(file_path).then(d => events.chart(d));
        events.chart(data);
      }
    });
  };

  events.chart = function(data) {
    var chart = bb.generate({
      // title: {
      //   text: "Amazonas: 1.81"
      // },
      data: {
        x: "date",
        url: file_path,
        types: {
          Mínimo: "area-spline",
          Máximo: "area-spline"
        },
        colors: {
          Mínimo: "#f44336",
          Máximo: "#f44336",
          R: "#a7170c"
        }
      },
      line: { point: ["R"] },
      tooltip: {
        show: true
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%d-%m-%y",
            values: [
              "2020-04-01",
              "2020-04-08",
              "2020-04-13",
              "2020-04-18",
              "2020-04-23",
              "2020-04-28",
              "2020-05-03",
              "2020-05-08",
              "2020-05-13",
              "2020-05-18",
              "2020-05-23"
            ]
          }
        }
      },
      legend: {
        hide: true
      },
      onafterinit: function() {
        d3.selectAll(".bb-ygrid-line text").each(function() {
          var text = d3.select(this);
            console.log(text.attr("y"))
          text.attr("y", 260);        });
      },
      bindto: "#" + chart_instance
    });

    chart.ygrids.add([{ value: 1, text: "R esperado < 1" }]);
  };

  events.loadData = function(file_path, fn) {
    //console.log(file_path)
    $.ajax({
      method: "GET",
      dataType: "text",
      url: file_path
    })
      .done(function(data) {
        //console.log("funciono")
        fn(data);
      })
      .error(function(err) {
        console.log("error");
        fn("error");
      });
  };

  return exports;
};
