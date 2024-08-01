import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { pricingPlan } from "@/utils/constants"

import React from 'react'

const DataTable = () => {
    const plans = pricingPlan;
    return (
        <Table className="text-center">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Service</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Price</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {plans.map((plan, index) => (
                    <TableRow key={index}>
                        <TableCell key={plan.service} className="text-nowrap">{plan.service}</TableCell>
                        <TableCell>{plan.duration}</TableCell>
                        <TableCell>{plan.price}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}

export default DataTable;