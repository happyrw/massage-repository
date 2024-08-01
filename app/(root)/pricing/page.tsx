import React from 'react'
import DataTable from '../_components/data-table'
import { membershipPlans } from '@/utils/constants'

const PricingPage = () => {

    const member_shipPlans = membershipPlans;

    return (
        <main className='pb-2'>
            <h2 className='text-muted-foreground text-xl my-2'>A list Individual Services plan</h2>
            <div className='min-w-[500px] max-w-[700px] mx-auto overflow-auto'>
                <DataTable />
            </div>
            <h2 className='text-muted-foreground text-xl my-5'>Membership Plans</h2>

            <div className='grid grid-cols-3 gap-4 min-w-[700px] overflow-x-auto'>
                {member_shipPlans.map((shipPlan) => (
                    <div className='hover:bg-orange-100 dark:bg-card bg-white-2 p-2 shadow-lg'>
                        <h1 className='text-center p-4 uppercase underline'>{shipPlan.name}</h1>
                        <div className='flex gap-5'>
                            <p className="">Monthly Fee:</p>
                            <p>{shipPlan.monthlyFee}</p>
                        </div>
                        <p className='my-2 '>Benefits:</p>
                        <div className='pl-5 text-muted-foreground'>
                            {shipPlan.benefits.map((benefit) => (
                                <p>{benefit}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default PricingPage