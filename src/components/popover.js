import React from 'react';
import * as Popover from "@radix-ui/react-popover";

const MyPopover = ({trigger, title, content}) => (
    <Popover.Root>
      <Popover.Trigger className="py-1 px-2 hover:underline">{trigger}</Popover.Trigger>
      <Popover.Content alignOffset={2}>
        <div className="w-64 rounded-md bg-white shadow-l">
          <div className="p-4">
            <h5 className="text-sm text-red-500 font-bold tracking-widest mb-2 uppercase">
              {title}
            </h5>
            <p className="text-black">{content}</p>
          </div>
        </div>
      <Popover.Arrow width={15} height={7} style={{fill: 'white'}}/>
      </Popover.Content>
    </Popover.Root>
)

export default MyPopover;