var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Client Service"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Coding"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Mentoring"
    }
];

var $canvas = $("#myChart");
if ($canvas.length > 0) {
  var ctx = $canvas.get(0).getContext("2d");
  var myDoughnutChart = new Chart(ctx).Doughnut(data, {responsive: true});

  var legend = myDoughnutChart.generateLegend();
  var legendHolder = document.createElement("div");
  legendHolder.innerHTML = legend;
  $canvas.get(0).parentNode.parentNode.appendChild(legendHolder.firstChild);
}
