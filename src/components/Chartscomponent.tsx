import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import Chart from 'chart.js/auto';

export const ChartComponent = component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();
  const chartInstance = useSignal<Chart | null>(null);

  useVisibleTask$(({ cleanup }) => {
    try {
      if (!canvasRef.value) return;
      const ctx = canvasRef.value.getContext('2d');
      if (!ctx) return;

      // Destroy existing chart instance
      if (chartInstance.value) {
        chartInstance.value.destroy();
      }

      // Create new chart with corrected data
      chartInstance.value = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['GPT-4', 'DeepSeek R1', 'Qwen Max', 'Grok-3', 'OpenAI-o3 mini', 'Claude Sonnet 3.7'],
          datasets: [
            {
              label: 'Usage Rate (%)',
              data: [42, 28, 15, 100, 45, 33], // Fixed data length
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
            title: { 
              display: true, 
              text: 'Usage Rate of Top AI Models',
              color: '#ffffff'
            },
          },
          scales: {
            x: {
              ticks: { color: '#ffffff' },
              grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            y: {
              ticks: { color: '#ffffff' },
              grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
          }
        },
      });
    } catch (error) {
      console.error('Chart initialization error:', error);
    }

    cleanup(() => {
      chartInstance.value?.destroy();
      chartInstance.value = null;
    });
  });

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#121212', 
      borderRadius: '15px',
      height: '400px',
      position: 'relative'
    }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
});