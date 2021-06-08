import React from "react";
import { intervals, data } from "../constant/data";

type Props = {
    filteredData?: any
};

const Table: React.FC<Props> = ({filteredData}) => {
    
const timeSince = (date:any)=>{
    const seconds = Math.floor((Date.now()-date.getTime())/1000);
    const interval = intervals.find(i=> i.seconds < seconds);
    const count = interval ? Math.floor(seconds/interval?.seconds) : undefined;
    return `${count ? count : 'a few'} ${interval?.label ?interval?.label : 'second' }${count !== 1 ? 's' : ''} ago`;
}
    return (
        <div>
        <section className="spacing">
            <table>
                <tr>
                    <th> City</th>
                    <th> AQI</th>
                    <th> Last Update</th>
                </tr>
                <tbody>
                    {filteredData.map((values: any) => {
                        return (<tr key={values.key}>
                            <td>{values.key}</td>
                            <td style={{ backgroundColor: values.fill }}>{values.value.toFixed(2)}</td>
                            <td>{timeSince(values.timestamp)}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </section>
        <section className="section">
        <table>
            <tr>
                <th> Air Quality Index</th>
                <th> Category</th>
            </tr>
            <tbody>
                {data.map((values: any) => {
                    return (<tr key={values.limit}>
                        <td style={{ backgroundColor: values.color }}>{values.limit}</td>
                        <td style={{ backgroundColor: values.color }}>{values.label}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </section>
    </div>
    );
};

export default Table;
