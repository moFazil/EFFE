"use client"

import { StorageContent } from '@/Storage/Index';
import { observer } from 'mobx-react';
import React, { useState } from 'react'
import { MenuLeft } from './Menu/Menu';
import { Topbar } from './Menu/Topbar';
import ResourcesLeft from './Resources';
import { Elements } from './Elements';
import { Timeline } from './Timeline';

export const ReelsMakerWithStorage = () => {
    const [storage] = useState(new Storage());
  return (
    <StorageContent.Provider value={storage}>
        <ReelsMaker></ReelsMaker>
    </StorageContent.Provider>
  );
}

export const ReelsMaker = observer(() => {
    // const storage = React.useContext(StorageContent);
    return(
        <div className=' grid grid-rows-[5%_60%_30%_1fr] grid-cols-[3%_40px_15%_1fr] h-[100vh]'>
            <div className=' row-start-1 row-span-1 col-span-12'>
                <Topbar/>
            </div>
            <div className='row-start-2 col-span-1 row-span-3'>
                <MenuLeft/>
            </div>
            <div className=' col-start-2 col-span-2'>
                <ResourcesLeft/>
            </div>
            <div className=' bg-gray-300 flex justify-center'>
                <canvas id='canvas' className=' bg-black '/>
            </div>
            <div className=' col-start-2 col-span-2 row-span-2'>
                <Elements/>
            </div>
            <div  className=' col-start-4 row-span-2'>
                <Timeline/>
            </div>
        </div>
    );
})
