// MAP
// ---
jQuery(document).ready(function () {
    jQuery('#vmap').vectorMap({
        map: 'dz_fr',
        enableZoom: true,
        showTooltip: true,
        // showLabels: true,
        colors: {
            9:  '#CC0000',   // Blida
            16: '#CC0000',  // Alger
            
            15: '#FFB266',  // Tizi Ouzou
            31: '#FFB266',  //Oran
            6:  '#FFB266',   // Béjaïa
            42: '#FFB266',   // TiPassa
            19: '#FFB266',  // Sétif
            26: '#FFB266',  // Médéa
            27: '#FFB266',   // mostghanam
            44: '#FFB266',   // ain dafla
            13: '#FFB266',   // Telemcen
            39: '#FFB266',  // El Oued
            21: '#FFB266',  // Skikda
            34: '#FFB266',  // Bordj Bou Arreridj
            05: '#FFB266',  // Batna
            35: '#FFB266',  // Boumerdès
            25: '#FFB266',   // konstantine
            18: '#FFB266',   // Jijel
             29: '#FFB266',  // Mascara
             2: '#FFB266',  // Mascara
            
            10: '#FFE5CC',  // Bouira
            22: '#FFE5CC',   // sba
            23: '#FFE5CC',  // Annaba
            17: '#FFE5CC',  // Djalfa
            48: '#FFE5CC',  // Gilizan
            41: '#FFE5CC',   // Souk Ahras
            4: '#FFE5CC',   // ome bwaki
            46: '#FFE5CC',   // AIn timochant
            36: '#FFE5CC',   // taraf
            1:  '#FFE5CC',   // Adrar
             24:  '#FFE5CC',   // galma
             7:  '#FFE5CC',   // Biskra
             30:  '#FFE5CC',   // ouaragla
             40: '#FFE5CC',   // khanshla
            38: '#FFE5CC',   // Tissemsilt
            47: '#FFE5CC',   // Ghardaya
            28: '#FFE5CC',   // Msila
            33: '#FFE5CC',   // ilizi
            3: '#FFE5CC',   // aghwat
            14: '#FFE5CC',   // Tiart
            43: '#FFE5CC'   // mila
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
                ['06/03',  1,   0],
                ['07/03',  2,   0],
                ['12/03',  5,   1],
                ['13/03',  2,   0],
                ['14/03',  10,  2],
                ['15/03',  17,  1],
                ['16/03',  6,   0],
                ['17/03',  1,   1],
                ['18/03',  12,  1],
                ['19/03',  10,  2],
                ['21/03',  13,  3],
                ['22/03',  106,  7],
                ['23/03',  28,  0],
                ['24/03',  34,  2],
                ['25/03',  38,  2],
                ['26/03',  58,  4],
                ['27/03',  42,  1],
                ['28/03',  45,  3],
                ['29/03',  57,  2],
                ['30/03',  73,  4],
                ['31/03',  132,  9],
                ['03/04',  185,  22],
                 ['04/04',  80,  25],
                ['05/04',  69,  22],
                ['06/04',  103,  21]
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
                ['06/03',  20,  0],
                ['07/03',  19,  0],
                ['12/03',  25,  1],
                ['13/03',  27,  1],
                ['14/03',  37,  3],
                ['15/03',  54,  4],
                ['16/03',  60,  4],
                ['17/03',  61,  5],
                ['18/03',  73,  6],
                ['19/03',  82,  8],
                ['21/03',  95,  10],
                 ['22/03', 139,  15],
                ['23/03', 230,  17],
                 ['24/03', 264,  19],
                 ['25/03', 302,  21],
                ['26/03', 367,  25],
                ['27/03', 409,  26],
                 ['28/03', 454,  29],
                 ['29/03', 511,  31],
                ['30/03',  584,  35],
                ['31/03',  716,  44],
                ['03/04',  1171,  105],
                 ['04/04',  1251,  130],
                 ['05/04',  1320,  152],
                ['06/04',  1423,  173]
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
