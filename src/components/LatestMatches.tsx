import { useEffect, useState } from "react";

const LatestMatches = ({ limit }: { limit: number }) => {
  const [LatestMatchesData, setLatestMatchesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/LatestMatches?limit=${limit}`);
      const data = await result.json();
      setLatestMatchesData(data);
    }
    fetchData();
  }, [limit]);

  return (
    <table className="w-full">
      <tbody>
        <tr>
          <th>
            <div className="text-left">
              <p className="text-xl font-medium">United Ultras</p>
              <p className="text-sm font-normal text-base-500">
                Frederik H, Frederik H
              </p>
            </div>
          </th>
          <td className="font-mono text-2xl">43</td>
          <td className="font-mono">4</td>
          <td className="font-mono">0</td>
          <td className="font-mono">1</td>
          <td className="font-mono">41/32</td>
          <td className="font-mono text-green-bright">+9</td>
        </tr>
      </tbody>
    </table>
  );
};

export default LatestMatches;
