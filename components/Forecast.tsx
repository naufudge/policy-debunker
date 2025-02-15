import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ForecastProps {
    message: string
}

const Forecast = ({message}: ForecastProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Forecast</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Forecast</DialogTitle>
        </DialogHeader>
        <div>
            {message}
        </div>
        <DialogFooter>
          <Button variant={"outline"} className='rounded'>Okay</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Forecast