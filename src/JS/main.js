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


