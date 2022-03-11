var monthlyCows = new Array();
var monthlyMoney = new Array();
var monthlyCalves = new Array();
var monthlyPreg = new Array();
var monthlyCullCows = new Array();
var monthlySilageFees = new Array();
var monthlyHaulageFees = new Array();
var monthlyBaleFees = new Array();
var monthlyFertFees = new Array();


var myChart = new Chart(document.getElementById("myChart2"), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{ 
          data: [0,0,0,0,0,0,0,0,0,0,0,0],
          label: "Total Cows Culled This Year",
          borderColor: "rgba(54, 162, 235, 1)",
          fill: false
        }, { 
          data: [0,0,0,0,0,0,0,0,0,0,0,0],
          label: "Cows Alive",
          borderColor: "rgba(255, 206, 86, 1)",
          fill: false
        }, { 
          data: [0,0,0,0,0,0,0,0,0,0,0,0],
          label: "Total Calves",
          borderColor: "rgba(75, 192, 192, 1)",
          fill: false
        }, { 
          data: [0,0,0,0,0,0,0,0,0,0,0,0],
          label: "Cows In Calf",
          borderColor: "rgba(153, 102, 255, 1)",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Statistics by Month'
      }
    }
  });

var myChart1 = new Chart(document.getElementById("myChart1"), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Fertiliser',
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'c',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
          label:'Straw',
          data:[0,0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'c',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

  $(document).ready(function () {
    $(".data-table").each(function (_, table) {
      $(table).DataTable();
    });
  });