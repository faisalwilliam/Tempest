const ctx = document.getElementById('myChart');
fetch('https://raw.githubusercontent.com/SkillWebDemo/ServerSide/refs/heads/master/data/demodata.json')
  .then(response => response.json())
  .then(data => {
    let labels = [];
    let electronics = [];
    let groceries = [];
    let clothing = [];

    for (let month in data) {
      labels.push(month);
      electronics.push(data[month]['Electronics']);
      groceries.push(data[month]['Groceries']);
      clothing.push(data[month]['Clothing']);
    }

    console.log(groceries);
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Electronics',
            data: electronics,
          },
          {
            label: 'Groceries',
            data: groceries,
          },
          {
            label: 'Clothing',
            data: clothing,
          },
        ]
      },
      options: {}
    });
  });