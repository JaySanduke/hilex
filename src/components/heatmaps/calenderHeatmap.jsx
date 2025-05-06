import CalHeatmap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
import Legend from 'cal-heatmap/plugins/Legend';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import { useEffect } from 'react';

export default function CalenderHeatmap() {

    const cal = new CalHeatmap();

    const data = [


        { "date": "2023-10-01", value: 4 },
        { "date": "2023-10-02", value: 2 },
        { "date": "2023-10-03", value: 3 },
        { "date": "2023-10-04", value: 9 },
        { "date": "2023-10-05", value: 7 },
        { "date": "2023-10-06", value: 5 },
        { "date": "2023-10-07", value: 6 },
        { "date": "2023-10-08", value: 10 },
        { "date": "2023-10-09", value: 7 },
        { "date": "2023-10-10", value: 3 },
        { "date": "2023-10-11", value: 1 },
        // { "date": "2023-10-12", value: 0 },
        // { "date": "2023-10-13", value: 0 },
        // { "date": "2023-10-14", value: 0 },
        // { "date": "2023-10-15", value: 0 },
        { "date": "2023-10-16", value: 3 },
        { "date": "2023-10-17", value: 1 },
        { "date": "2023-10-18", value: 1 },
        { "date": "2023-10-19", value: 4 },
        { "date": "2023-10-20", value: 4 },
        { "date": "2023-10-21", value: 6 },
        { "date": "2023-10-22", value: 7 },
        { "date": "2023-10-23", value: 4 },
        { "date": "2023-10-24", value: 3 },
        { "date": "2023-10-25", value: 6 },
        { "date": "2023-10-26", value: 7 },
        { "date": "2023-10-27", value: 1 },
        { "date": "2023-10-28", value: 2 },
        { "date": "2023-10-29", value: 5 },
        { "date": "2023-10-30", value: 2 },
        { date: "2023-10-31", value: 4 },


        { date: '2023-11-01', value: 1 },
        { date: '2023-11-02', value: 2 },
        { date: '2023-11-03', value: 5 },
        { date: '2023-11-04', value: 9 },

        { date: '2023-11-05', value: 1 },
        { date: '2023-11-06', value: 2 },
        { date: '2023-11-07', value: 5 },
        { date: '2023-11-08', value: 3 },
        { date: '2023-11-09', value: 2 },
        { date: '2023-11-10', value: 2 },
        { date: '2023-11-11', value: 4 },
        { date: '2023-11-12', value: 9 },
    ];

    useEffect(() => {
        cal.paint(
            {
                theme: 'dark',
                data: {
                    source: data,
                    type: 'json',
                    x: 'date',
                    y: 'value'
                },
                date: { start: new Date('2023-01-01'), },
                range: 12,
                scale: {
                    color: {
                        type: 'quantize',
                        scheme: 'Greens',
                        domain: [0, 1, 2, 3, 4, 5, 6],
                    },
                },
                domain: {
                    type: 'month',
                    dynamicDimension: true,
                    label: {
                        position: 'bottom',
                    },
                    gutter: 6,
                    padding: [10, 10, 10, 10],
                },
                subDomain: {
                    type: 'day',
                    color: '#000',
                    radius: 2,
                    width: 15,
                    height: 15,
                    gutter: 3,

                },
                legend: [1, 2],

            },
        );

        return () => null;
    }, []);

    return (
        <div id='cal-heatmap' className='flex items-center justify-center w-full h-full'></div>
    )
}
