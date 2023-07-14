import { Checkbox } from '@material-tailwind/react'
import React from 'react'

interface Props {
    label: string;
    checked: boolean;
    type?: string;
   ripple ?:boolean;
   id?:string;


    className?: string;
    onChange: (e: any) => void; // for function type
    containerProps?: any;
    
}

export default function BBCheckbox(props: Props) {
  return (
    <div>
     <Checkbox 
     id={props.id}
      label={props.label}
     checked={props.checked}
      ripple={props?.ripple||true} 
    
       
      
      className="hover:before:opacity-0"
      onChange={props.onChange}
      containerProps={
        props.containerProps
          ? props.containerProps
          : {
              className: "p-0 ",
            }
      }
      />
        
    
        
        
</div>
  )
}
