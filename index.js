const ctx = document.getElementById('myChart').getContext('2d');
        const ctx2 = document.getElementById('myChart2').getContext('2d');

        const data1 = {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Value(%)',
                data: [10, 20, 35, 45, 52, 63],
                borderColor: '#7571f9',
                backgroundColor: 'rgba(117, 113, 249, 0.2)',
                borderWidth: 2,
                tension: 0.4, // smooth curves
                fill: true
            }]
        };

        const config1 = {
            type: 'line',
            data: data1,
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Yearly Values (%)'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Value (%)'
                        },
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10
                        }
                    }
                }
            }
        };

        const myChart = new Chart(ctx, config1);

        const data2 = {
            labels: ['2016', '2018', '2020', '2022'],
            datasets: [{
                label: 'Dataset 1',
                data: [100, 75, 50, 40],
                backgroundColor: 'rgb(252, 108, 142)',
                borderColor: 'rgb(252, 108, 142)',
                borderWidth: 1
            }, {
                label: 'Dataset 2',
                data: [80, 60, 50, 70],
                backgroundColor: '#7571f9',
                borderColor: '#7571f9',
                borderWidth: 1
            }]
        };

        const config2 = {
            type: 'bar',
            data: data2,
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Comparison of Datasets'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Value'
                        },
                        beginAtZero: true,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        };

        const myChart2 = new Chart(ctx2, config2);