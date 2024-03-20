import UserInput from './UserInput'

export default function InputGroup({handleChange}) {
  
  return (
    <div id='user-input'>
      <div className='input-group'>
        <UserInput handleChange={handleChange} classTitle='initial' label='INITIAL INVESTMENT'/>
        <UserInput handleChange={handleChange} classTitle='annual' label='ANNUAL INVESTMENT'/>
      </div>
      <div className='input-group'>
      <UserInput handleChange={handleChange} classTitle='expected' label='EXPECTED RETURN'/>
      <UserInput handleChange={handleChange} classTitle='duration' label='DURATION'/>
      </div>
    </div>
  )
}