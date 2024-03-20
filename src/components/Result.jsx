import UnitResult from './UnitResult';
export default function Result({results}) {
  return (
    <table id='result' className='center'>
        <thead>
            <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            {/* <th>Total Interest</th> */}
            <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {results.map(({year, interest, valueEndOfYear, annualInvestment}) => {
                // const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment
                return <UnitResult key={year} year={year} interest={interest} valueEndOfYear={valueEndOfYear} annualInvestment={annualInvestment}/>
            })}
        </tbody>
  </table>
  )
}
