import NewJoinyHeader from '../../Share/NewJoiny/NewJoinyHeader'
import NewJoinyTable from '../../Share/NewJoiny/NewJoinyTable'

const NewJoiny = () => {
  return (
   <>
      <div className='min-h-screen bg-[#f5f7f4] 
       p-4 sm:p-6 lg:absolute lg:left-65 lg:top-20 lg:w-315'>

        <NewJoinyHeader/>
        <NewJoinyTable/>

   </div>
   </>
  )
}

export default NewJoiny