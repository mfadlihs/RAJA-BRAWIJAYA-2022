import React from 'react'

export default function Pkdata({name,line,instagram,twitter,telegram,tiktok,youtube,spotify,description}) {

    return (
    <div className="container mx-auto">
        <div className='pt-10'>
            <div className="rounded-full h-32 w-32 bg-white mx-auto"></div>
        </div>
        <div>
            <h2 className='text-grey text-center text-xl font-agrandir font-semibold mt-8'>{name}</h2>
            <p className='text-white text-justify font-poppins mt-4'>{description}</p>
        </div>
        <div className='flex flex-wrap w-2/3 justify-center mx-auto mt-6'>
            {line != null && (
                <a href={line}>
                    <img className="w-10 m-1" src="/assets/icons/li.svg" alt="" srcset="" />
                </a>
            )}
            {instagram != null && (
                <a href={instagram}>
                    <img className="w-10 m-1" src="/assets/icons/ig.svg" alt="" srcset="" />
                </a>
            )}
            {twitter != null && (
                <a href={twitter}>
                    <img className="w-10 m-1" src="/assets/icons/tw.svg" alt="" srcset="" />
                </a>
            )}
            {telegram != null && (
                <a href={telegram}>
                    <img className="w-10 m-1" src="/assets/icons/tel.svg" alt="" srcset="" />
                </a>
            )}
            {tiktok != null && (
                <a href={tiktok}>
                    <img className="w-10 m-1" src="/assets/icons/tik.svg" alt="" srcset="" />
                </a>
            )}
            {youtube != null && (
                <a href={youtube}>
                    <img className="w-10 m-1" src="/assets/icons/yt.svg" alt="" srcset="" />
                </a>
            )}
            {spotify != null && (
                <a href={spotify}>
                    <img className="w-10 m-1" src="/assets/icons/spo.svg" alt="" srcset="" />
                </a>
            )}
        </div>
    </div>
  )
}
