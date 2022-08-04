import React,{useState} from 'react'
import style from './style.module.css'

export default function Dropdown({data,setActive,active}) {
    const [drop,setDrop] = useState(false);
    const [search,setSearch] = useState('');
  return (
    <div>
        <div className='md:w-[380px] w-[350px] mx-auto text-sm md:text-base'>
            <button
            onClick={()=>{
                setDrop(!drop);
            }}
            className='flex items-center py-3 px-4 mx-auto  mt-8 font-poppins w-full justify-between bg-blue text-white rounded-lg'>
                <p>{active}</p>
                <img src='/assets/icons/arrdown.svg' width={20} className="mt-1"/>
            </button>

            <div className={`bg-blue p-3 rounded-lg mt-3 font-poppins ${drop ? ' ' : 'hidden'}`}>
                <div className='bg-white rounded-md px-2 py-1 flex'>
                    <img src="/assets/icons/fe_search.svg" />
                    <input type="text" placeholder='Cari fakultas' onChange={(e)=>{
                        setSearch(e.target.value);
                    }} className=' ml-2 focus-visible:outline-none w-full' />
                </div>
                <div className={`h-[150px] text-white py-5 overflow-y-scroll ${style.scroll}`}>
                    {data.filter((e)=>{
                        if(search != ''){
                            return e.fakultas.toLowerCase().match(search.toLowerCase());
                        }else{
                            return e;
                        }
                    }).map((e)=>{
                        return (
                            <button key={e.id} onClick={()=>{
                                setActive(e.id);
                            }} className='w-full text-start my-2'>{e.fakultas}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
