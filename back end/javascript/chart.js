// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [{
      label: 'Pengajuan',
      data: [80, 130, 190, 50, 100, 60],
      borderColor: '#2e7d32',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: '#2e7d32'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Donut Chart
const donutCtx = document.getElementById('donutChart').getContext('2d');
new Chart(donutCtx, {
  type: 'doughnut',
  data: {
    labels: ['2025', '2026', '2027'],
    datasets: [{
      label: 'Prediksi',
      data: [100, 150, 200],
      backgroundColor: ['#00796B', '#880E4F', '#388E3C']
    }]
  },
  options: {
    responsive: true,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'right'
      }
    }
  }
});