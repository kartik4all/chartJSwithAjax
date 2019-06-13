window.addEventListener("load", init);

function init() {
  //callAjax();             here data is used directly without ajax
  // server has to be made to make the data live , so used directly as an object
  // whole function is made as a reference to ajax
  printButtons();
}

function callAjax() {
  var url = " ";

  var promise = fetch(url);
  promise
    .then(response => {
      response
        .json()
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.log("invalid json format", e);
        });
    })
    .catch(err => {
      console.log("server error", err);
    });
}

function printButtons() {
  for (let key in json) {
    json[key].forEach(b => {
      console.log(b.index);
      var button = document.createElement("button");
      button.innerHTML = b.index;
      document.querySelector("#buttons").appendChild(button);
      button.addEventListener("click", () => {
        printChart(b);
      });
    });
  }
}
function printChart(b) {
  console.log("inside ", b);
  var ctx = document.getElementById("myChart").getContext("2d");
  var labels = [];
  var data = [];
  for (let key in b) {
    if (key == "index" || key == "created_at") {
      continue;
    } else {
      data.push(b[key]);
      labels.push(key);
      console.log(labels, data);
    }
  }
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: labels,
      datasets: [
        {
          label: b.index,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: data
        }
      ]
    },

    // Configuration options go here
    options: {}
  });
}

var json = {
  data: [
    {
      index: "F",
      vry: 0,
      vyb: 426.64,
      vbr: 425.54,
      vrn: 248.34,
      vbn: 243.49,
      ir: 0.5,
      iy: 0.32,
      ib: 0.46,
      electricity_consumption: 32.574470000000005,
      currentbilling: 260.59576000000004,
      created_at: "2019-01-28"
    },
    {
      index: "S",
      vry: 0,
      vyb: 424.37,
      vbr: 421.89,
      vrn: 249.1,
      vbn: 240.88,
      ir: 1.26,
      iy: 0.16,
      ib: 1.71,
      electricity_consumption: 66.96526,
      currentbilling: 535.72208,
      created_at: "2019-02-01"
    },
    {
      index: 1,
      vry: 0,
      vyb: 0,
      vbr: 0,
      vrn: 0,
      vbn: 0,
      ir: 0,
      iy: 0,
      ib: 0,
      electricity_consumption: 124.28181000000001,
      currentbilling: 994.2544800000001,
      created_at: "2019-02-10"
    },
    {
      index: 2,
      vry: 0,
      vyb: 432.85,
      vbr: 431.45,
      vrn: 251.51,
      vbn: 248.14,
      ir: 0.56,
      iy: 0,
      ib: 0.01,
      electricity_consumption: 192.85011000000003,
      currentbilling: 1542.8008800000002,
      created_at: "2019-02-17"
    },
    {
      index: 3,
      vry: 0,
      vyb: 431.18,
      vbr: 429.28,
      vrn: 250.75,
      vbn: 247.16,
      ir: 1.27,
      iy: 0,
      ib: 2.24,
      electricity_consumption: 265.54902000000004,
      currentbilling: 2124.3921600000003,
      created_at: "2019-02-24"
    },
    {
      index: "SL",
      vry: 0,
      vyb: 428.48,
      vbr: 428,
      vrn: 249.14,
      vbn: 245.65,
      ir: 1.37,
      iy: 0,
      ib: 1.82,
      electricity_consumption: 321.4517,
      currentbilling: 2571.6136,
      created_at: "2019-02-28"
    },
    {
      index: "L",
      vry: 0,
      vyb: 432.58,
      vbr: 431.32,
      vrn: 250.89,
      vbn: 248.65,
      ir: 0.13,
      iy: 0.25,
      ib: 0.03,
      electricity_consumption: 347.87072000000006,
      currentbilling: 2782.9657600000005,
      created_at: "2019-03-03"
    }
  ]
};
