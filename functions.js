// MAP
// ---

jQuery(document).ready(function () {
    jQuery('#vmap').vectorMap({
        map: 'dz_fr',
        enableZoom: true,
        showTooltip: true,
        // showLabels: true,
        colors: {
            9: '#FF8000',   // Blida
            16: '#FFE5CC',  // Alger
            6: '#FFE5CC',
            21: '#FFE5CC',
            15: '#FFE5CC',
            39: '#FFE5CC',
            26: '#FFE5CC',
            1: '#FFE5CC',
            34: '#FFE5CC',
            10: '#FFE5CC',
            35: '#FFE5CC',
            41: '#FFE5CC'
        },
        backgroundColor: '#fff',
        onRegionClick: function (element, code, region) {
            if (!touch_detect()) {
                // we're not on a mobile device, handle the click
                var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
                alert(message);
            }
        },
    });
});

// Daily New Cases
// ---------------

var GoogleLineBasic = function() {

    // Line chart
    var _googleLineBasic = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawLineChart();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawLineChart);

                // Resize on window resize
                var resizeLineBasic;
                $(window).on('resize', function() {
                    clearTimeout(resizeLineBasic);
                    resizeLineBasic = setTimeout(function () {
                        drawLineChart();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        function drawLineChart() {
            var line_chart_element = document.getElementById('daily-graph');
            var data = google.visualization.arrayToDataTable([
                ['يوم', 'إصابات', 'وفيات'],
                ['02/03',  5,   0],
                ['05/03',  12,  0],
                ['07/03',  2,   0],
                ['06/03',  1,   0],
                ['12/03',  5,   1],
                ['13/03',  2,   0],
                ['14/03',  10,  2],
                ['15/03',  17,  1],
                ['16/03',  6,   0],
                ['17/03',  1,   1],
                ['18/03',  12,  1],
                ['19/03',  10,  2]
            ]);
            var options = {
                fontName: 'Roboto',
                height: 400,
                curveType: 'function',
                fontSize: 10,
                chartArea: {
                    left: '10%',
                    width: '94%',
                    height: 350
                },
                lineWidth: 2,
                pointSize: 4,
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 10
                    }
                },
                series: [{'color': '#1a5c79'}, {'color': '#d63a00'}],
                intervals: {'style': 'line'},
                vAxis: {
                    title: 'عدد الحالات',
                    titleTextStyle: {
                        fontSize: 10,
                        italic: false
                    },
                    gridlines:{
                        color: '#e5e5e5',
                        count: 10
                    },
                    minValue: 0
                },
                legend: {
                    position: 'top',
                    alignment: 'center',
                    textStyle: {
                        fontSize: 10
                    }
                }
            };

            var line_chart = new google.visualization.LineChart(line_chart_element);
            line_chart.draw(data, options);
        }
    };

    return {
        init: function() {
            _googleLineBasic();
        }
    }
    }();

    GoogleLineBasic.init();


// Total Cases
// -----------

var GoogleLineBasic = function() {

    // Line chart
    var _googleLineBasic = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawLineChart();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawLineChart);

                // Resize on window resize
                var resizeLineBasic;
                $(window).on('resize', function() {
                    clearTimeout(resizeLineBasic);
                    resizeLineBasic = setTimeout(function () {
                        drawLineChart();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        function drawLineChart() {
            var line_chart_element = document.getElementById('total-graph');
            var data = google.visualization.arrayToDataTable([
                ['يوم', 'إصابات', 'وفيات'],
                ['02/03',  5,   0],
                ['05/03',  17,  0],
                ['07/03',  19,  0],
                ['06/03',  20,  0],
                ['12/03',  25,  1],
                ['13/03',  27,  1],
                ['14/03',  37,  3],
                ['15/03',  54,  4],
                ['16/03',  60,  4],
                ['17/03',  61,  5],
                ['18/03',  73,  6],
                ['19/03',  82,  8]
            ]);
            var options = {
                fontName: 'Roboto',
                height: 400,
                curveType: 'function',
                fontSize: 10,
                chartArea: {
                    left: '10%',
                    width: '94%',
                    height: 350
                },
                lineWidth: 2,
                pointSize: 4,
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 10
                    }
                },
                series: [{'color': '#1a5c79'}, {'color': '#d63a00'}], // {'color': '#4cae4c'}, 
                intervals: {'style': 'line'},
                vAxis: {
                    title: 'عدد الحالات',
                    titleTextStyle: {
                        fontSize: 10,
                        italic: false
                    },
                    gridlines:{
                        color: '#e5e5e5',
                        count: 10
                    },
                    minValue: 0
                },
                legend: {
                    position: 'top',
                    alignment: 'center',
                    textStyle: {
                        fontSize: 10
                    }
                }
            };

            // Draw chart
            var line_chart = new google.visualization.LineChart(line_chart_element);
            line_chart.draw(data, options);
        }
    };

    return {
        init: function() {
            _googleLineBasic();
        }
    }
    }();

    GoogleLineBasic.init();
