import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
 const mathmarksData = [
  {"id": 1, "name": "Student A", "math": 78, "physics": 85, "chemistry": 82},
  {"id": 2, "name": "Student B", "math": 85, "physics": 78, "chemistry": 89},
  {"id": 3, "name": "Student C", "math": 92, "physics": 91, "chemistry": 88},
  {"id": 4, "name": "Student D", "math": 66, "physics": 72, "chemistry": 70},
  {"id": 5, "name": "Student E", "math": 74, "physics": 76, "chemistry": 79},
  {"id": 6, "name": "Student F", "math": 88, "physics": 85, "chemistry": 84},
  {"id": 7, "name": "Student G", "math": 95, "physics": 94, "chemistry": 92},
  {"id": 8, "name": "Student H", "math": 79, "physics": 81, "chemistry": 77},
  {"id": 9, "name": "Student I", "math": 82, "physics": 80, "chemistry": 83},
  {"id": 10, "name": "Student J", "math": 90, "physics": 89, "chemistry": 91}
]

  
  
  return (
    <div>
      <LChart width={800} height={400} data={mathmarksData}>
      <XAxis dataKey={"name"}/>
      <YAxis></YAxis>
      <Line dataKey={'math'} stroke="red"></Line>
      <Line dataKey={"physics"} stroke="yellow"></Line>
      </LChart>
     
    </div>
  );
};

export default LineChart;