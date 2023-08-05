(function () {
    'use strict';

    // ============
    // Area Chart 1
    // ============

    var areaChart1 = {
        chart: {
            height: 240,
            type: 'area',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 1000
            },
            dropShadow: {
                enabled: true,
                opacity: 0.1,
                blur: 1,
                left: -5,
                top: 18
            },
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        colors: ['#0134d4', '#ea4c62'],
        dataLabels: {
            enabled: false
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: true,
                opacityFrom: 0.15,
                opacityTo: 0.02,
                stops: [40, 100],
            }
        },
        grid: {
            borderColor: '#dbeaea',
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            offsetY: 4,
            fontSize: '14px',
            markers: {
                width: 9,
                height: 9,
                strokeWidth: 0,
                radius: 20
            },
            itemMargin: {
                horizontal: 5,
                vertical: 0
            }
        },
        title: {
            text: '$5,394',
            align: 'left',
            margin: 0,
            offsetX: 0,
            offsetY: 20,
            floating: false,
            style: {
                fontSize: '16px',
                color: '#8480ae'
            },
        },
        tooltip: {
            theme: 'dark',
            marker: {
                show: true,
            },
            x: {
                show: false,
            }
        },
        subtitle: {
            text: 'This week sales',
            align: 'left',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                color: '#8480ae'
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            width: 3
        },
        labels: ['S', 'S', 'M', 'T', 'W', 'T', 'F'],
        series: [{
            name: 'Affan',
            data: [320, 420, 395, 350, 410, 355, 360]
        }, {
            name: 'Suha',
            data: [400, 395, 350, 395, 430, 385, 374]
        }],
        xaxis: {
            crosshairs: {
                show: true
            },
            labels: {
                offsetX: 0,
                offsetY: 0,
                style: {
                    colors: '#8480ae',
                    fontSize: '12px',
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            labels: {
                offsetX: -10,
                offsetY: 0,
                style: {
                    colors: '#8480ae',
                    fontSize: '12px',
                },
            }
        },
    }

    var areaChart_01 = new ApexCharts(document.querySelector("#areaChart1"), areaChart1);
    areaChart_01.render();


    // ============
    // Area Chart 2
    // ============

    var areaChart2 = {
        chart: {
            height: 240,
            type: 'area',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 1000
            },
            dropShadow: {
                enabled: true,
                opacity: 0.1,
                blur: 1,
                left: -5,
                top: 5
            },
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        colors: ['#0134d4'],
        dataLabels: {
            enabled: false
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: true,
                opacityFrom: 0.15,
                opacityTo: 0.05,
                stops: [40, 100],
            }
        },
        grid: {
            borderColor: '#dbeaea',
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: -60,
            fontSize: '14px',
            markers: {
                width: 9,
                height: 9,
                strokeWidth: 0,
                radius: 20
            },
            itemMargin: {
                horizontal: 5,
                vertical: 0
            }
        },
        title: {
            text: '$270',
            align: 'left',
            margin: 0,
            offsetX: 0,
            offsetY: 20,
            floating: false,
            style: {
                fontSize: '16px',
                color: '#8480ae'
            },
        },
        tooltip: {
            theme: 'dark',
            marker: {
                show: true,
            },
            x: {
                show: false,
            }
        },
        subtitle: {
            text: 'Today\'s earnings',
            align: 'left',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                color: '#8480ae'
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            width: 3
        },
        labels: ['00', '03', '06', '09', '12', '15', '18', '21'],
        series: [{
            name: 'Affan',
            data: [31, 38, 28, 36, 42, 36, 46, 34]
        }],
        xaxis: {
            crosshairs: {
                show: true
            },
            labels: {
                offsetX: 0,
                offsetY: 0,
                style: {
                    colors: '#8480ae',
                    fontSize: '12px',
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            labels: {
                offsetX: -10,
                offsetY: 0,
                style: {
                    colors: '#8480ae',
                    fontSize: '12px',
                },
            }
        },
    }

    var areaChart_02 = new ApexCharts(document.querySelector("#areaChart2"), areaChart2);
    areaChart_02.render();


    // ==============
    // Column Chart 1
    // ==============

    var columnChart1 = {
        chart: {
            height: 240,
            type: 'bar',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 1000
            },
            dropShadow: {
                enabled: true,
                opacity: 0.1,
                blur: 2,
                left: -1,
                top: 5
            },
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        subtitle: {
            text: 'This week earnings',
            align: 'left',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                color: '#8480ae'
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',
                endingShape: 'rounded'
            },
        },
        colors: ['#0134d4', '#f1b10f'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#dbeaea',
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            offsetY: 6,
            fontSize: '12px',
            markers: {
                width: 10,
                height: 10,
                strokeWidth: 0,
                radius: 2
            },
            itemMargin: {
                horizontal: 5,
                vertical: 0
            }
        },
        tooltip: {
            theme: 'light',
            marker: {
                show: true,
            },
            x: {
                show: false,
            }
        },
        stroke: {
            show: true,
            colors: ['transparent'],
            width: 3
        },
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [{
            name: 'Affan',
            data: [320, 420, 395, 350, 410, 355, 360]
        }, {
            name: 'Suha',
            data: [400, 395, 280, 520, 430, 385, 374]
        }],
        xaxis: {
            crosshairs: {
                show: true
            },
            labels: {
                offsetX: 0,
                offsetY: 0,
                style: {
                    colors: '#8380ae',
                    fontSize: '12px'
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (value, index) {
                    return (value / 1000) + 'k'
                },
                offsetX: -10,
                offsetY: 0,
                style: {
                    colors: '#8380ae',
                    fontSize: '12px'
                },
            }
        },
    }

    var columnChart_01 = new ApexCharts(document.querySelector("#columnChart1"), columnChart1);
    columnChart_01.render();


    // ==============
    // Column Chart 2
    // ==============

    var columnChart2 = {
        chart: {
            height: 240,
            type: 'bar',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 1000
            },
            dropShadow: {
                enabled: true,
                opacity: 0.1,
                blur: 2,
                left: -1,
                top: 5
            },
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        subtitle: {
            text: 'Today\'s earnings',
            align: 'left',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                color: '#8480ae'
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
                endingShape: 'rounded'
            },
        },
        colors: ['#0134d4'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#dbeaea',
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        tooltip: {
            theme: 'light',
            marker: {
                show: true,
            },
            x: {
                show: false,
            }
        },
        stroke: {
            show: true,
            colors: ['transparent'],
            width: 3
        },
        labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '16:00', '19:00'],
        series: [{
            name: 'Affan',
            data: [320, 420, 395, 350, 410, 355, 360, 420]
        }],
        xaxis: {
            crosshairs: {
                show: true
            },
            labels: {
                offsetX: 0,
                offsetY: 0,
                style: {
                    colors: '#8380ae',
                    fontSize: '12px'
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            labels: {
                offsetX: -10,
                offsetY: 0,
                style: {
                    colors: '#8380ae',
                    fontSize: '12px'
                },
            }
        },
    }

    var columnChart_02 = new ApexCharts(document.querySelector("#columnChart2"), columnChart2);
    columnChart_02.render();


    // ============
    // Line Chart 1
    // ============

    var lineChart1 = {
        chart: {
            height: 220,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        colors: ['#0134d4'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        subtitle: {
            text: 'Last 6 month sales',
            align: 'left',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                color: '#8480ae',
            }
        },
        tooltip: {
            theme: 'light',
            marker: {
                show: true,
            },
            x: {
                show: false,
            }
        },
        grid: {
            borderColor: '#dbeaea',
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        series: [{
            name: "Designing World",
            data: [100, 401, 305, 501, 409, 602]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        }
    };

    var lineChart_1 = new ApexCharts(document.querySelector("#lineChart1"), lineChart1);
    lineChart_1.render();


    // ============
    // Line Chart 2
    // ============

    var lineChart2 = {
        chart: {
            height: 220,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        colors: ['#2ecc4a'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        subtitle: {
            text: 'Last 7 days sales',
            align: 'left',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                color: '#8480ae',
            }
        },
        tooltip: {
            theme: 'dark',
            marker: {
                show: true,
            },
            x: {
                show: false,
            }
        },
        grid: {
            borderColor: '#dbeaea',
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        series: [{
            name: "Designing World",
            data: [15, 18, 16, 17, 14, 13, 19]
        }],
        xaxis: {
            categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        }
    };

    var lineChart_2 = new ApexCharts(document.querySelector("#lineChart2"), lineChart2);
    lineChart_2.render();


    // =========
    // Pie Chart
    // =========

    var pieChart = {
        chart: {
            width: 280,
            type: 'pie',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: false,
            },
        },
        colors: ['#0134d4', '#2ecc4a', '#ea4c62', '#1787b8'],
        series: [100, 55, 63, 77],
        labels: ['Business', 'Marketing', 'Admin', 'Ecommerce'],
    };

    var pie_Chart = new ApexCharts(document.querySelector("#pieChart"), pieChart);
    pie_Chart.render();


    // ===========
    // Donut Chart
    // ===========

    var donutChart = {
        chart: {
            width: 280,
            type: 'donut',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: false,
            },
        },
        colors: ['#0134d4', '#2ecc4a', '#ea4c62', '#1787b8'],
        series: [100, 55, 63, 77],
        labels: ['Business', 'Marketing', 'Admin', 'Ecommerce'],
    };

    var donut_Chart = new ApexCharts(document.querySelector("#donutChart"), donutChart);
    donut_Chart.render();

})();