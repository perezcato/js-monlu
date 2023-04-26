import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    Iphone: 4000
  },
  {
    name: "March",
    Iphone: 1000,
  },
  {
    name: "May",
    Iphone: 4000,
  },
  {
    name: "July",
    Iphone: 800,
  },
  {
    name: "October",
    Iphone: 1500,
  },
];

function App() {
  return (
    <div className='border rounded-lg shadow-lg p-8'>
      <div className='flex justify-left items-center'>
        <p className='text-xs font-bold text-gray-400'>PROJECT BUDGET:</p><h2 className='text-lg font-medium px-3'>$150,000.00 USD</h2>
      </div>
      <ResponsiveContainer width="90%" aspect={3}>
        <LineChart
          height={300}
          data={data}
          margin={{
            top: 15,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/> */}
          <XAxis dataKey="name" tick={{fill:"gray"}} label={{ value: 'Months', position: 'insideBottom', offset: -10, fill:"black"}}/>
          <YAxis tick={{fill:"gray"}} label={{ value: 'Budget', angle: -90, position: 'insideLeft', fill:"black"}}/>
          <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
          <Line type="monotone" dataKey="Iphone" stroke="#2e4355" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;

