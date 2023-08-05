'use strict';

$(window).on('load', function () {

    var body = $('body');

    switch (body.attr('data-page')) {
        case "splash":
            setTimeout(function () {
                window.location.replace("landing.html");
            }, 4000)
            break;


        case "thankyou":
            setTimeout(function () {
                window.location.replace("index.html");
            }, 4000)
            break;

        case "signin":
            var passworderrorEl = document.getElementById('passworderror')
            var tooltip = new bootstrap.Tooltip(passworderrorEl, {
                boundary: document.body // or document.querySelector('#boundary')
            })
            break;

        case "signup":
            var passworderrorEl = document.getElementById('passworderror')
            var tooltip = new bootstrap.Tooltip(passworderrorEl, {
                boundary: document.body // or document.querySelector('#boundary')
            })
            break;
        case "verify":

            document.getElementById('timer').innerHTML = '03' + ':' + '00';
            startTimer();

            function startTimer() {
                var presentTime = document.getElementById('timer').innerHTML;
                var timeArray = presentTime.split(/[:]+/);
                var m = timeArray[0];
                var s = checkSecond((timeArray[1] - 1));
                if (s == 59) { m = m - 1 }
                if (m < 0) {
                    return
                }

                document.getElementById('timer').innerHTML =
                    m + ":" + s;
                setTimeout(startTimer, 1000);
            }

            function checkSecond(sec) {
                if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
                if (sec < 0) { sec = "59" };
                return sec;
            }

            break;

        case "landing":
            var toastElList = document.getElementById('toastinstall');
            var toastElinit = new bootstrap.Toast(toastElList, {
                //autohide: !1,
            });
            toastElinit.show();

            /* PWA add to phone Install ap button */
            var btnAdd = document.getElementById('addtohome')
            var defferedPrompt;
            window.addEventListener("beforeinstallprompt", function (event) {
                event.preventDefault();
                defferedPrompt = event;

                btnAdd.addEventListener("click", function (event) {
                    defferedPrompt.prompt();


                    defferedPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the A2HS prompt');
                        } else {
                            console.log('User dismissed the A2HS prompt');
                        }
                        defferedPrompt = null;
                    });
                });
            });

            var introswiper = new Swiper(".introswiper", {
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                },
            });
            introswiper.on('reachEnd', function () {
                introswiper.autoplay = false;
                setTimeout(function () {
                    window.location.replace("signin.html");
                }, 5000);
            });
            break;

        case "index":

            /* request money notification remove after time*/
            $('.hideonprogressbar').each(function () {
                var thisEl = $(this);
                var hidelment = "." + thisEl.attr('data-target')
                var widthprogress = 1;

                setInterval(function () {
                    widthprogress++;
                    if (widthprogress > 0 && widthprogress < 100) {
                        thisEl.find('.progress-bar').css('width', widthprogress + "%");

                    } else if (widthprogress === 100) {
                        $(hidelment).fadeOut();
                    }
                }, 75)

            })

            /* Progress circle */
            var progressCircles1 = new ProgressBar.Circle(circleprogressone, {
                color: '#7297F8',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#d8e0f9',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#7297F8', width: 10 },
                to: { color: '#7297F8', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        // circle.setText('');
                    } else {
                        //  circle.setText(value + "<small>%<small>");
                    }

                }
            });
            // progressCircles1.text.style.fontSize = '20px';
            progressCircles1.animate(0.65);  // Number from 0.0 to 1.0

            var progressCircles2 = new ProgressBar.Circle(circleprogresstwo, {
                color: '#3AC79B',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#d8f4eb',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#3AC79B', width: 10 },
                to: { color: '#3AC79B', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        //  circle.setText('');
                    } else {
                        // circle.setText(value + "<small>%<small>");
                    }

                }
            });
            // progressCircles2.text.style.fontSize = '20px';
            progressCircles2.animate(0.85);  // Number from 0.0 to 1.0



            /* swiper carousel cardwiper */
            var swiper1 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* app install toast message */
            var toastElList = document.getElementById('toastinstall');
            var toastElinit = new bootstrap.Toast(toastElList, {
                // autohide: "!1",
                autohide: true,
                delay: 5000,
            });
            toastElinit.show();

            /* PWA add to phone Install ap button */
            var btnAdd = document.getElementById('addtohome');
            var defferedPrompt;
            window.addEventListener("beforeinstallprompt", function (event) {
                event.preventDefault();
                defferedPrompt = event;

                btnAdd.addEventListener("click", function (event) {
                    defferedPrompt.prompt();


                    defferedPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the A2HS prompt');
                        } else {
                            console.log('User dismissed the A2HS prompt');
                        }
                        defferedPrompt = null;
                    });
                });
            });

            break;

        case 'stats':
            /* chart js areachart */
            window.randomScalingFactor = function () {
                return Math.round(Math.random() * 50);
            }
            var areachart = document.getElementById('areachart').getContext('2d');
            var gradient = areachart.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(247, 53, 99, 0.6)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            var myareachartCofig = {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        pointBackgroundColor: '#fff',
                        radius: 2,
                        backgroundColor: gradient,
                        borderColor: '#F73563',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.5,
                    }]
                },
                options: {

                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            fontColor: '#cccccc',
                        }
                    }
                }
            }
            var myAreaChart = new Chart(areachart, myareachartCofig);
            /* my area chart randomize */
            setInterval(function () {
                myareachartCofig.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart.update();
            }, 2000);

            /* chart js doughnut chart */
            var mydoughnutchart = document.getElementById('doughnutchart').getContext('2d');
            var mydoughnut = {
                type: 'doughnut',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                        label: '# of Votes',
                        data: [55, 25, 10, 10],
                        backgroundColor: ['#FFBD17', '#3AC79B', '#F73563', '#092C9F'],
                        borderWidth: 0,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: false,
                        title: false
                    }
                }
            }
            var mydoughnutchartexe = new Chart(mydoughnutchart, mydoughnut);


            /* date picker  */
            var start = moment().subtract(29, 'days');
            var end = moment();

            $('.daterange-btn').on('click', function () {
                $('#daterange').data('daterangepicker').toggle();
            });
            $('#daterange').daterangepicker({
                opens: 'left',
                locale: { direction: 'daterange-center shadow' }
            }, function (start, end, label) {
                console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
            });
            $('.textdate').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
            $('#daterange').on('apply.daterangepicker', function (ev, picker) {
                $('.textdate').text(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
            });

            /* Progress circle */
            var progressCircles1 = new ProgressBar.Circle(circleprogressone, {
                color: '#7297F8',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#d8e0f9',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#7297F8', width: 10 },
                to: { color: '#7297F8', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        // circle.setText('');
                    } else {
                        //  circle.setText(value + "<small>%<small>");
                    }

                }
            });
            // progressCircles1.text.style.fontSize = '20px';
            progressCircles1.animate(0.65);  // Number from 0.0 to 1.0

            var progressCircles2 = new ProgressBar.Circle(circleprogresstwo, {
                color: '#3AC79B',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#d8f4eb',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#3AC79B', width: 10 },
                to: { color: '#3AC79B', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        //  circle.setText('');
                    } else {
                        // circle.setText(value + "<small>%<small>");
                    }

                }
            });
            // progressCircles2.text.style.fontSize = '20px';
            progressCircles2.animate(0.85);  // Number from 0.0 to 1.0

            /* Progress circle */
            var progressCircles3 = new ProgressBar.Circle(circleprogressthree, {
                color: '#F73563',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#fdd7e0',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#F73563', width: 10 },
                to: { color: '#F73563', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        // circle.setText('');
                    } else {
                        //  circle.setText(value + "<small>%<small>");
                    }

                }
            });
            // progressCircles1.text.style.fontSize = '20px';
            progressCircles3.animate(0.65);  // Number from 0.0 to 1.0

            var progressCircles4 = new ProgressBar.Circle(circleprogressfour, {
                color: '#FFBD17',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#fff2d1',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#FFBD17', width: 10 },
                to: { color: '#FFBD17', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        //  circle.setText('');
                    } else {
                        // circle.setText(value + "<small>%<small>");
                    }

                }
            });
            // progressCircles2.text.style.fontSize = '20px';
            progressCircles4.animate(0.85);  // Number from 0.0 to 1.0


            /* chart js areachart */
            var areachart1 = document.getElementById('smallchart1').getContext('2d');
            var gradient1 = areachart.createLinearGradient(0, 0, 0, 66);
            gradient1.addColorStop(0, 'rgba(60, 99, 225, 0.6)');
            gradient1.addColorStop(1, 'rgba(60, 99, 225, 0)');
            var myareachartCofig1 = {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        radius: 0,
                        backgroundColor: gradient1,
                        borderColor: '#3c63e2',
                        borderWidth: 1,
                        fill: true,
                        tension: 0.5,
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        }
                    }
                }
            }
            var myAreaChart1 = new Chart(areachart1, myareachartCofig1);
            /* my area chart randomize */
            setInterval(function () {
                myareachartCofig1.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart1.update();
            }, 2000);


            /* chart js areachart */
            var areachart2 = document.getElementById('smallchart2').getContext('2d');
            var gradient2 = areachart.createLinearGradient(0, 0, 0, 66);
            gradient2.addColorStop(0, 'rgba(58, 199, 155, 0.6)');
            gradient2.addColorStop(1, 'rgba(58, 199, 155, 0)');
            var myareachartCofig2 = {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        radius: 0,
                        backgroundColor: gradient2,
                        borderColor: '#3ac79b',
                        borderWidth: 1,
                        fill: true,
                        tension: 0.5,
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        }
                    }
                }
            }
            var myAreaChart2 = new Chart(areachart2, myareachartCofig2);
            /* my area chart randomize */
            setInterval(function () {
                myareachartCofig2.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart2.update();
            }, 2000);


            /* chart js areachart */
            var areachart3 = document.getElementById('smallchart3').getContext('2d');
            var gradient3 = areachart.createLinearGradient(0, 0, 0, 66);
            gradient3.addColorStop(0, 'rgba(247, 53, 99, 0.6)');
            gradient3.addColorStop(1, 'rgba(247, 53, 99, 0)');
            var myareachartCofig3 = {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        radius: 0,
                        backgroundColor: gradient3,
                        borderColor: '#f73563',
                        borderWidth: 1,
                        fill: true,
                        tension: 0.5,
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        }
                    }
                }
            }
            var myAreaChart3 = new Chart(areachart3, myareachartCofig3);
            /* my area chart randomize */
            setInterval(function () {
                myareachartCofig3.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart3.update();
            }, 2000);

            /* chart js areachart */
            var areachart4 = document.getElementById('smallchart4').getContext('2d');
            var gradient4 = areachart.createLinearGradient(0, 0, 0, 66);
            gradient4.addColorStop(0, 'rgba(255, 189, 23, 0.6)');
            gradient4.addColorStop(1, 'rgba(255, 189, 23, 0)');
            var myareachartCofig4 = {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        radius: 0,
                        backgroundColor: gradient4,
                        borderColor: '#ffbd17',
                        borderWidth: 1,
                        fill: true,
                        tension: 0.5,
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        }
                    }
                }
            }
            var myAreaChart4 = new Chart(areachart4, myareachartCofig4);
            /* my area chart randomize */
            setInterval(function () {
                myareachartCofig4.data.datasets.forEach(function (dataset) {
                    dataset.data = dataset.data.map(function () {
                        return randomScalingFactor();
                    });
                });
                myAreaChart4.update();
            }, 2000);


            /* swiper carousel highlights */
            var swiper1 = new Swiper(".summayswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            break;
        case 'sendmoney':
            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            break;
        case 'sendmoney1':
            /* swiper carousel cardwiper */
            var swiper1 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });


            $('.cardswiper .swiper-slide .card').on('click', function () {
                $('.cardswiper .swiper-slide .card').removeClass('selected');
                $(this).addClass('selected').find('.form-check-input').prop('checked', true);
            });
            break;
        case 'bills':
            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* Progress circle */
            var progressCircles1 = new ProgressBar.Circle(circleprogressone, {
                color: '#7297F8',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#d8e0f9',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#7297F8', width: 10 },
                to: { color: '#7297F8', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        // circle.setText('');
                    } else {
                        //  circle.setText(value + "<small>%<small>");
                    }

                }
            });
            // progressCircles1.text.style.fontSize = '20px';
            progressCircles1.animate(0.65);  // Number from 0.0 to 1.0

            var progressCircles2 = new ProgressBar.Circle(circleprogresstwo, {
                color: '#3AC79B',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                trailColor: '#d8f4eb',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#3AC79B', width: 10 },
                to: { color: '#3AC79B', width: 10 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        //  circle.setText('');
                    } else {
                        // circle.setText(value + "<small>%<small>");
                    }

                }
            });
            // progressCircles2.text.style.fontSize = '20px';
            progressCircles2.animate(0.85);  // Number from 0.0 to 1.0


            break;

        case 'rewards':
            /* swiper carousel connectionwiper */
            var swiper1 = new Swiper(".summayswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* swiper carousel cardwiper */
            var swiper3 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            $('.cardswiper .swiper-slide .card').on('click', function () {
                $('.cardswiper .swiper-slide .card').removeClass('selected');
                $(this).addClass('selected').find('.form-check-input').prop('checked', true);
            });

            break;
        case 'wallet':
            /* swiper carousel cardwiper */
            var swiper3 = new Swiper(".cardswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            /* chart js doughnut chart */
            var mydoughnutchart = document.getElementById('doughnutchart').getContext('2d');
            var mydoughnut = {
                type: 'doughnut',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                        label: '# of Votes',
                        data: [55, 25, 10, 10],
                        backgroundColor: ['#FFBD17', '#3AC79B', '#f7931a', '#617dea'],
                        borderWidth: 0,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: false,
                        title: false
                    }
                }
            }
            var mydoughnutchartexe = new Chart(mydoughnutchart, mydoughnut);
            break;

        case 'profile':
            /* swiper carousel highlights */
            var swiper1 = new Swiper(".summayswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });
            break;

        case 'users':
            /* swiper carousel connectionwiper */
            var swiper2 = new Swiper(".connectionwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });

            break;


        case 'chatmessage':
            /* scroll to top  button  */
            window.scrollTo(0, document.body.scrollHeight);


            $('.videoplaybtn').on('click', function (e) {
                var videoPlayer = $(this).parent().next('video');
                // Auto play, half volume.
                videoPlayer[0].play();
                videoPlayer.volume = 0.5;
                $(this).parent().hide();
            })


            break;

        case 'blogs':
            $(".sparklinechart").sparkline([5, 6, -7, 2, 0, -4, -2, 4], {
                type: 'bar',
                zeroAxis: false,
                barColor: '#3ac79b ',
                height: '30',
            });
            $(".sparklinechart2").sparkline([-5, -6, 4, -2, 0, 4, 2, -4], {
                type: 'bar',
                zeroAxis: false,
                barColor: '#3ac79b ',
                height: '30',
            });

            /* swiper carousel projects */
            var swiper12 = new Swiper(".tagsswiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: false
            });
            break;

    }

});