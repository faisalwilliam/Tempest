const ctx = document.getElementById('myChart');
fetch('data/csvjson.json')
  .then(response => response.json())
  .then(_data => {
    console.log(_data);
    let labels = ['1','2'];
    let countries = {};

    for (let entry of _data) {
      let key = entry.Country+'/'+entry.City;
      let country = countries[key];
      if (!country) {
        countries[key] = [entry.AverageTemperatureFahr];
      } else {
        country.push(entry.AverageTemperatureFahr);
      }
    }

    let dataset = [];
    for (let key in countries) {
      dataset.push({label: key, data: countries[key]});
    }

    console.log(dataset);
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: dataset,
      },
      options: {
        plugins: {
          legend: {
            position: 'right',
          }
        }
      }
    });
  });