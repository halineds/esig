/* globals Chart:false, feather:false */

(function () {
    'use strict'

    // feather.replace()

    // Graphs
    var ctx = document.getElementById('myChart')
    var ctx2 = document.getElementById('myChart2')

    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                'ponto 1',
                'ponto 2',
                'ponto 3',
                'ponto 4',
                'ponto 5',
            ],
            datasets: [{
                label: "Laptops",
                data: [
                    0,
                    1,
                    2,
                    1,
                    0
                ],
                lineTension: 0,
                backgroundColor: 'gray',
                pointRadius: 0
            },
            {
                label: "Headsets",
                data: [
                    4,
                    5,
                    4,
                    5,
                    4
                ],
                lineTension: 0,
                backgroundColor: 'rgb(255, 99, 132)',
                pointRadius: 0
            },
            {
                label: "Monitores",
                data: [
                    6,
                    8,
                    6,
                    9,
                    4
                ],
                lineTension: 0,
                backgroundColor: 'rgb(54, 162, 235)',
                pointRadius: 0
            },
            {
                label: "Photos",
                data: [
                    10,
                    15,
                    12,
                    18,
                    10
                ],
                lineTension: 0,
                backgroundColor: 'rgb(255, 205, 86)',
                pointRadius: 0
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            },
            legend: {
                display: true
            }
        }
    })

    var myChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: [
                'Eletronics',
                'Furniture',
                'Toys'
            ],
            datasets: [{
                data: [10, 6, 4],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        }
    })

})()
