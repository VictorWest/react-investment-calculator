import { formatter } from '../util/investment'
export default function UnitResult({year, interest, valueEndOfYear, annualInvestment}) {

  return (
    <tr>
        <td>{year}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(interest)}</td>
        {/* <td>{formatter.format(totalInterest)}</td> */}
        <td>{formatter.format(annualInvestment)}</td>
    </tr>
  )
}
