//main js file:
//Canva element
var ctx = document.getElementById('visitorsChart').getContext('2d');

//Chart with user infomation
var visitorsChart = new Chart(ctx, {
    type: 'line',
    
    //Information inside the chart:
    data: {

        //We set time info, that in this case take data to the lasts 6 months
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        
        
        datasets: [{

            //*Here we set the style information of the chart, like border width, border color and 
            borderColor: '#0b9412',
            fill: true,
            borderWidth: 2,
            backgroundColor:'rgb(21, 221, 14,0.3)',

            //Here we set the label for the data type, in this case the amount of visitors separated for every month:
            data: [20000, 40000, 80000, 120000, 160000, 160000],

        }]
    },

    //Here we make responsive our site:
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Here we abstract and show our current amount of visitors:
visitorsChart.data.datasets[0].label = `Current visitors: ${

visitorsChart.data.datasets[0].data[visitorsChart.data.datasets[0].data.length-1]

}`

// Chart.js code for Free Users pie chart
var ctxPie = document.getElementById('freeUsersPieChart').getContext('2d');
var freeUsersPieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Today', 'Last 7 Days', 'Last 30 Days', 'Last 6 Months', 'Last 1 Year'],
        datasets: [{
            data: [306, 2746, 15073, 46846, 46877],  // Data for the pie chart
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',  // Red
                'rgba(54, 162, 235, 0.6)',  // Blue
                'rgba(255, 206, 86, 0.6)',  // Yellow
                'rgba(75, 192, 192, 0.6)',  // Teal
                'rgb(204, 21, 195, 0.6)'  // Purple
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


// Chart.js code for Paid Users Stacked Bar and Line Chart
var ctxStacked = document.getElementById('paidUsersStackedChart').getContext('2d');
var paidUsersStackedChart = new Chart(ctxStacked, {
    type: 'bar',
    data: {
        labels: ['Today', 'Last 7 Days', 'Last 30 Days', 'Last 6 Months', 'Last 1 Year'],
        datasets: [{
            type: 'bar',
            label: 'Monthly Users',
            data: [2, 29, 121, 291, 291],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',  // Light blue for bars
            stack: 'Stack 0',
        }, {
            type: 'bar',
            label: 'Yearly Users',
            data: [2, 29, 121, 291, 291],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',  // Teal for bars
            stack: 'Stack 0',
        }, {
            type: 'line',
            label: 'Total Users',
            data: [2, 31, 152, 443, 443],
            borderColor: 'rgba(255, 159, 64, 1)',  // Orange for line
            fill: false,
            borderWidth: 2,
            yAxisID: 'y-axis-2'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                position: 'left',
            },
            'y-axis-2': {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false  // Don't draw grid for the second axis
                }
            }
        }
    }
});

// Chart.js code for Total Messages Bar Chart 
var ctxBar = document.getElementById('totalMessagesBarChart').getContext('2d');
var totalMessagesBarChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [

            {
                label: 'Total Messages',
                data: [150000, 160000, 170000, 175000, 180000, 200000],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },

            {
                label: 'Average Inputs Per User',
                data: [10, 11, 12, 13, 14, 12],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            
            {
                label: 'Unique Users that Chatted',
                data: [25000, 26000, 28000, 30000, 31000, 35000],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




