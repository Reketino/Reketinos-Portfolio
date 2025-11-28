"use client";
import React from 'react'
import Fullskjerm from '../fullskjerm'
import BearCode from './bearcode';

export default function BearCodeWindow({ onBack, onMinimize }) {
  return (
    <Fullskjerm
    title="BearCode"
    onBack={onBack}
    onMinimize={onMinimize}
    fullContent={true}
    >
        <BearCode />
        </Fullskjerm>
  );
}
