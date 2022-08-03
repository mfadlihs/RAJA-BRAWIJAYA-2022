import React,{useState} from 'react'
import Dropdown from '../../component/button/Dropdown';
import Heading from '../../component/heading/Heading'
import Pkdata from '../../component/pkmaba/Pkdata'



export default function Pkmaba() {

    const dataPk = [
        {
            'id' : 'PK2MABA FILKOM_ID',
            'name' : 'PK2MABA FILKOM',
            'fakultas' : 'Fakultas Ilmu Komputer',
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
            'fakultas' : 'Fakultas Kedokteran',
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
            'fakultas' : 'Fakultas Perikanan dan Ilmu Kelautan',
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

    const [active,setActive] = useState('PK2MABA FPIK_ID')

    const getData = () => {
        return dataPk.filter((e)=>{
            return e.id == active
        })[0]
    }

    // console.log();

  return (
    <div className='-mt-10 md:-mt-32'>
        <img src="/assets/images/wavepk.svg" className='w-full' alt="" />
        <div className="bg-sea py-20">
            <Heading
            top="Ragam"
            bottom = "Brawijaya"
            direction="center"/>
            
            <Pkdata
                name = {getData().name}
                description = {getData().description}
                spotify = {getData().spotify}
                youtube = {getData().youtube}
                tiktok = {getData().tiktok}
                telegram = {getData().telegram}
                twitter = {getData().twitter}
                instagram = {getData().instagram}
                line = {getData().line}
            />

            <Dropdown
            setActive={(e)=>{
                setActive(e);
            }}
            data={dataPk}
            active={getData().fakultas}/>
        </div>
    </div>
  )
}
