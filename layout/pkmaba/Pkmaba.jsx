import React,{useState} from 'react'
import Heading from '../../component/heading/Heading'
import Pkdata from '../../component/pkmaba/Pkdata'

const dataPk = [
    {
        'id' : 'PK2MABA FILKOM_ID',
        'name' : 'PK2MABA FILKOM',
        'description' : 'PK2MABA FILKOM Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam inventore excepturi repudiandae dolores voluptates illo quas hic accusantium amet.',
        'spotify' : 'spotify/pk2mabafilkom',
        'youtube' : 'youtube/pk2mabafilkom',
        'tiktok' : 'tiktok/pk2mabafilkom',
        'telegram' : 'telegram/pk2mabafilkom',
        'twitter' : 'twitter/pk2mabafilkom',
        'instagram' : 'instagram/pk2mabafilkom',
        'line' : 'line/pk2mabafilkom',
    },
    {
        'id' : 'PK2MABA FK_ID',
        'name' : 'PK2MABA FK',
        'description' : 'PK2MABA FK Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam inventore excepturi repudiandae dolores voluptates illo quas hic accusantium amet.',
        'spotify' : 'spotify/pk2mabaFK',
        'youtube' : 'youtube/pk2mabaFK',
        'tiktok' : 'tiktok/pk2mabaFK',
        'telegram' : 'telegram/pk2mabaFK',
        'twitter' : 'twitter/pk2mabaFK',
        'instagram' : 'instagram/pk2mabaFK',
        'line' : 'line/pk2mabaFK',
    },
    {
        'id' : 'PK2MABA FPIK_ID',
        'name' : 'PK2MABA FPIK',
        'description' : 'PK2MABA FPIK Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam inventore excepturi repudiandae dolores voluptates illo quas hic accusantium amet.',
        'spotify' : 'spotify/pk2mabaFPIK',
        'youtube' : 'youtube/pk2mabaFPIK',
        'tiktok' : 'tiktok/pk2mabaFPIK',
        'telegram' : 'telegram/pk2mabaFPIK',
        'twitter' : 'twitter/pk2mabaFPIK',
        'instagram' : 'instagram/pk2mabaFPIK',
        'line' : 'line/pk2mabaFPIK',
    },
];

export default function Pkmaba() {

    const [active,setActive] = useState('PK2MABA FPIK_ID')

    const getData = (idPk) => {
        return dataPk.filter((e)=>{
            return e.id == idPk
        })[0]
    }

    // console.log();

  return (
    <div className='-mt-10'>
        <img src="/assets/images/wavepk.svg" className='w-full' alt="" />
        <div className="bg-sea py-20">
            <Heading
            top="Ragam"
            bottom = "Brawijaya"
            direction="center"/>
            
            <Pkdata
                name = {getData('PK2MABA FPIK_ID').name}
                description = {getData('PK2MABA FPIK_ID').description}
                spotify = {getData('PK2MABA FPIK_ID').spotify}
                youtube = {getData('PK2MABA FPIK_ID').youtube}
                tiktok = {getData('PK2MABA FPIK_ID').tiktok}
                telegram = {getData('PK2MABA FPIK_ID').telegram}
                twitter = {getData('PK2MABA FPIK_ID').twitter}
                instagram = {getData('PK2MABA FPIK_ID').instagram}
                line = {getData('PK2MABA FPIK_ID').line}
            />
        </div>
    </div>
  )
}
