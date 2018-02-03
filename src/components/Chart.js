import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

Exporting(Highcharts);

export function chart(app, chartId, series){

    let chartcontainer = document.createElement('div');
    chartcontainer.setAttribute('id', chartId);

    app.appendChild(chartcontainer);

    let Chart = Highcharts.chart(chartId, {
        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },

        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },

        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        // plotOptions: {
        //     series: {
        //         label: {
        //             connectorAllowed: false
        //         },
        //         pointStart: 2010
        //     }
        // },

        series,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
    return Chart
}
