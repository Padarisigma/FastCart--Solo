"use client"
import { useDeleteAllProductMutation } from '@/entities/cart/model/api'
import { Button } from "@/shared/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/shared/ui/dialog"
import Link from 'next/link'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { useState } from 'react'

export function DialogCheckout({firstName, lastName, phone,address, apartment, city, email, cupon , totalPrice, priceCupon} : any) {
	const [open, setOpen]=useState(false)
	const [deleteAllProduct]=useDeleteAllProductMutation()  
	const { enqueueSnackbar } = useSnackbar();
	const openFunction=()=>{
		if (firstName !== '' && lastName !== '' && email !== '' && phone !== '') {
			setOpen(true)
		} else {
			enqueueSnackbar('Fill all inputs!', {
				variant: 'error', // Можно задать тип уведомления: 'success', 'error', 'info', 'warning'
			 });
		}
	}

	const closeBtn=()=>{
		setOpen(false)
		deleteAllProduct('')
	}

  return <>
   <SnackbarProvider
      maxSnack={3}
		autoHideDuration={2000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
		<button className='w-full bg-red-500 text-white py-3 rounded' onClick={openFunction}>
							Place Order
						</button>

    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-[30px]">
          <div className='flex flex-col gap-[20px]'>
            <p>Name : {firstName == '' ? 'Go back and fill gaysaki ma' : firstName + " " + lastName}</p>
            <p>Address : {address == '' ? 'Go back and fill gaysaki ma' : address}</p>
            <p>Apartment : { apartment == '' ? 'Go back and fill gaysaki ma' : apartment}</p>
            <p>City : {city == '' ? 'Go back and fill gaysaki ma': city}</p>
            <p>Phone : {phone == '' ? 'Go back and fill gaysaki ma' : phone}</p>
            <p>Email : {email == '' ? 'Go back and fill gaysaki ma': email}</p>
          </div>
			 <div className='flex justify-between font-bold text-lg'>
								<span>Total:</span>
								<div className='flex gap-[10px]'>
								<span className={` ${cupon == 'sigmaboy' ? 'block' : 'hidden'} line-through text-gray-500`}>$ {totalPrice}</span>
								<span>$ { cupon == 'sigmaboy' ?  priceCupon  : totalPrice}</span>
								</div>
								
							</div>
        </div>
        <DialogFooter>
			<Link href={'/'}>
			<Button type="submit" onClick={closeBtn}>Save changes</Button>
			</Link>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
	 </SnackbarProvider>
  
  </>
	
  
}
