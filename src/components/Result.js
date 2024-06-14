
import React from 'react'

const Result = ({id,stats}) => {
    const { malicious, suspicious, undetected, harmless, timeout}=stats;
    const total=malicious+suspicious+undetected+harmless+timeout
    const negative=malicious+suspicious
  return (
    <div>
        <table className='border border-black'>
            <tbody className=''>
                <tr className='h-9'>
                <td className='border border-black black w-40'>{id}</td>
                <td className='border border-black w-40'>{malicious}</td>
                <td className='border border-black w-40'>{suspicious}</td>
                <td className='border border-black w-40'>{undetected}</td>
                <td className='border border-black w-40'>{harmless}</td>
                <td className='border border-black w-40'>{timeout}</td>
                <td className='border border-black w-40'>{negative}/{total}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Result