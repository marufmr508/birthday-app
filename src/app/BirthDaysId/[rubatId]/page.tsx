import { Birthday } from '@/app/components/herosection/birthdsycard/BirthDayCard';
import React from 'react';
 const getData = async (): Promise<Birthday[]> => {
   const res = await fetch("http://localhost:3001/data.json");
 
   if (!res.ok) {
     throw new Error("Failed to load data");
   }
 
   const birthdays: Birthday[] = await res.json();
 
   return birthdays;
 };
const BirthdayDetailsPage =async ({params}:{params:Promise<{rubatId:number}>}) => {
   const {rubatId}=await params;
    const birthdays = await getData();
    const birthday=birthdays.find((birthday)=>(birthday.id)===Number(rubatId));
    if(!birthday){
return <p>data is not found</p>
    }
    return (
        <div>
            {

            }
        </div>
    );
};

export default  BirthdayDetailsPage;