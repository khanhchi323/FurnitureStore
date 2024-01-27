import React from "react";
import { Badge, IconButton, Avatar } from "@material-tailwind/react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
export default function Navbar() {
    return (
        <div className="mx-auto max-w-screen-3xl p-2 lg:rounded-xl lg:pl-6 flex justify-between ">
            <div>
                <b>CCHLB</b>
            </div>

            <div className="flex items-center gap-8">
                <Badge content="3">
                    <IconButton>
                        <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4" />
                    </IconButton>
                </Badge>
            </div>
        </div>
    );
}
