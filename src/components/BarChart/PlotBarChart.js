export const PlotBarChart = ({ data, width, height }) => {
    const padding = 50;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
  
    const maxValue = Math.max(...data.map(d => d.value));
    const barWidth = chartWidth / data.length;
  
    return (
        <svg width={width} height={height}>
            <g transform={`translate(${padding}, ${padding})`}>
                {data.map((d, index) => (
                    <rect
                        key={index}
                        x={index * barWidth}
                        y={chartHeight - (d.value / maxValue) * chartHeight}
                        width={barWidth - 10}
                        height={(d.value / maxValue) * chartHeight}
                        fill="steelblue"
                    />
                ))}
                {data.map((d, index) => (
                    <text
                        key={index}
                        x={index * barWidth + (barWidth - 10) / 2}
                        y={chartHeight + 20}
                        textAnchor="middle"
                    >
                        {d.label}
                    </text>
                ))}
                <line
                    x1={0}
                    y1={chartHeight}
                    x2={chartWidth}
                    y2={chartHeight}
                    stroke="black"
                />
                <line
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={chartHeight}
                    stroke="black"
                />
            </g>
        </svg>
    );
  };