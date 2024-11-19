/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { FaFaceSmile } from 'react-icons/fa6';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
type Props = {
  handleChangeComment: (nativeIcons: string) => void;
};

const Emoji = (props: Props) => {
  const { handleChangeComment } = props;
  return (
    <Popover>
      <PopoverTrigger>
        <FaFaceSmile color='#1E90FF' size={24} />
      </PopoverTrigger>
      <PopoverContent className='bg-transparent border-none shadow-none'>
        <Picker data={data} onEmojiSelect={(emoji: any) => handleChangeComment(emoji.native)} />
      </PopoverContent>
    </Popover>
  );
};

export default Emoji;
