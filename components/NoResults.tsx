import React from 'react'
import { MdOutlineVideocamOff } from 'react-icons/md'
import { FaCommentSlash } from 'react-icons/fa';

interface IProps {
    text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-6xl">
        {text ==="It's quiet, be the first one to add a comment"
          ? <FaCommentSlash />
          : <MdOutlineVideocamOff />
        }
        </p>
      <p className="text-md text-center">{text}</p>
    </div>
  )
}

export default NoResults
